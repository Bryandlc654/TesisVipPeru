import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { fetchContent, saveContent } from './api';

const CMSContext = createContext(null);

const clone = (value) => JSON.parse(JSON.stringify(value));

const isPlainObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

export const getAtPath = (source, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), source);

const setAtPath = (source, path, value) => {
  const next = clone(source);
  const keys = path.split('.');
  let cursor = next;

  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (cursor[key] == null) {
      cursor[key] = /^\d+$/.test(keys[i + 1]) ? [] : {};
    }
    cursor = cursor[key];
  }

  cursor[keys[keys.length - 1]] = value;
  return next;
};

export const deepMerge = (base, override) => {
  if (Array.isArray(override)) {
    return clone(override);
  }

  if (!isPlainObject(override)) {
    return override === undefined ? clone(base) : override;
  }

  const output = isPlainObject(base) ? clone(base) : {};

  Object.keys(override).forEach((key) => {
    const baseValue = base?.[key];
    const overrideValue = override[key];

    if (Array.isArray(overrideValue)) {
      output[key] = clone(overrideValue);
    } else if (isPlainObject(overrideValue)) {
      output[key] = deepMerge(isPlainObject(baseValue) ? baseValue : {}, overrideValue);
    } else {
      output[key] = overrideValue;
    }
  });

  return output;
};

export function ContentProvider({ page = 'home', defaults, editMode = false, scope = null, children }) {
  const parent = useContext(CMSContext);
  const [content, setContent] = useState(() => clone(defaults));
  const [status, setStatus] = useState('idle');
  const [dirty, setDirty] = useState(false);
  const defaultsRef = useRef(defaults);
  const scopeRef = useRef(scope);

  useEffect(() => {
    let active = true;

    const load = async () => {
      setStatus('loading');
      try {
        const response = await fetchContent(page);
        if (!active) return;
        const merged = response.data ? deepMerge(defaultsRef.current, response.data) : clone(defaultsRef.current);
        setContent(merged);
        setStatus('ready');
      } catch (error) {
        if (!active) return;
        console.error('No se pudo cargar el contenido remoto:', error);
        setContent(clone(defaultsRef.current));
        setStatus('error');
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [page]);

  const owns = useCallback(
    (path) => !scopeRef.current || scopeRef.current.includes(path.split('.')[0]),
    [],
  );

  const get = useCallback(
    (path) => {
      const own = getAtPath(content, path);
      if (own !== undefined) return own;
      return parent ? parent.get(path) : undefined;
    },
    [content, parent],
  );

  const editable = useCallback((path) => editMode && owns(path), [editMode, owns]);

  const set = useCallback(
    (path, value) => {
      if (!owns(path) && parent) {
        parent.set(path, value);
        return;
      }
      setContent((prev) => setAtPath(prev, path, value));
      setDirty(true);
    },
    [owns, parent],
  );

  const replace = useCallback((next) => {
    setContent(next);
    setDirty(true);
  }, []);

  const reset = useCallback(() => {
    setContent(clone(defaultsRef.current));
    setDirty(true);
  }, []);

  const save = useCallback(async () => {
    setStatus('saving');
    try {
      await saveContent(page, content);
      setDirty(false);
      setStatus('saved');
      return true;
    } catch (error) {
      console.error('No se pudo guardar el contenido:', error);
      setStatus('error');
      return false;
    }
  }, [content, page]);

  const value = useMemo(
    () => ({ content, get, set, editable, replace, reset, save, dirty, status, editMode, page }),
    [content, get, set, editable, replace, reset, save, dirty, status, editMode, page],
  );

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
}

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS debe usarse dentro de un ContentProvider');
  }
  return context;
};
