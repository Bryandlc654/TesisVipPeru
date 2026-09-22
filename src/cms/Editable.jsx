import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from './ContentContext';
import { uploadImage } from './api';
import { ICONS, hasIcon } from './icons';

export const Icon = ({ name, size = 16, className, ...rest }) => {
  const icon = hasIcon(name) ? ICONS[name] : ICONS.checkCircle;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox={icon.viewBox}
      className={className}
      {...rest}
    >
      {icon.paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
};

const useField = (path) => {
  const { get, set, editable } = useCMS();
  return { value: get(path), set: (next) => set(path, next), editMode: editable(path) };
};

export const Text = ({ path, as: Tag = 'span', className, multiline = false, ...rest }) => {
  const { value, set, editMode } = useField(path);
  const text = value == null ? '' : String(value);

  if (!editMode) {
    if (!multiline) {
      return (
        <Tag className={className} {...rest}>
          {text}
        </Tag>
      );
    }
    return (
      <Tag className={className} {...rest}>
        {text.split('\n').map((line, index) => (
          <Fragment key={index}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      className={`cms-editable ${className || ''}`}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      title={path}
      onClick={(event) => event.stopPropagation()}
      onBlur={(event) => {
        const next = event.currentTarget.innerText.replace(/\n$/, '').replace(/\r/g, '');
        if (next !== text) set(next);
      }}
      {...rest}
    >
      {multiline
        ? text.split('\n').map((line, index) => (
            <Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))
        : text}
    </Tag>
  );
};

export const ImageField = ({ path, className, alt, ...rest }) => {
  const { value, set, editMode } = useField(path);
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      const result = await uploadImage(file);
      set(result.url);
    } catch (error) {
      console.error(error);
      window.alert('No se pudo subir la imagen.');
    } finally {
      setBusy(false);
    }
  };

  const img = <img className={className} src={value} alt={alt} {...rest} />;

  if (!editMode) return img;

  return (
    <span className="cms-image">
      {img}
      <span className="cms-image__tools">
        <button
          type="button"
          className="cms-chip"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            inputRef.current?.click();
          }}
        >
          {busy ? 'Subiendo…' : 'Subir'}
        </button>
        <button
          type="button"
          className="cms-chip"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const url = window.prompt('URL de la imagen', value || '');
            if (url !== null) set(url);
          }}
        >
          URL
        </button>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFile} />
      </span>
    </span>
  );
};

export const VideoField = ({ path, className, innerRef, title, poster, ...rest }) => {
  const { value, set, editMode } = useField(path);

  const video = (
    <video
      ref={innerRef}
      className={className}
      src={value}
      title={title}
      controls
      poster={poster}
      {...rest}
    />
  );

  if (!editMode) return video;

  return (
    <span className="cms-image">
      {video}
      <span className="cms-image__tools">
        <button
          type="button"
          className="cms-chip"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            const url = window.prompt('URL del video', value || '');
            if (url !== null) set(url);
          }}
        >
          Cambiar video
        </button>
      </span>
    </span>
  );
};

export const LinkField = ({ path, className, children, title, rel, ...rest }) => {
  const { get, set, editable } = useCMS();
  const editMode = editable(path);
  const href = get(`${path}.href`) ?? '#';
  const target = get(`${path}.target`);
  const linkRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);

  const editHref = () => {
    const next = window.prompt('Enlace (URL o ruta)', href);
    if (next !== null) set(`${path}.href`, next);
    const nextTarget = window.prompt('Abrir en nueva pestaña? escribe _blank, o deja vacío', target || '');
    if (nextTarget !== null) set(`${path}.target`, nextTarget);
  };

  if (!editMode) {
    const isInternal = typeof href === 'string' && href.startsWith('/') && !target;
    if (isInternal) {
      return (
        <Link className={className} to={href} title={title} {...rest}>
          {children ?? get(`${path}.label`)}
        </Link>
      );
    }
    return (
      <a className={className} href={href} target={target || undefined} rel={linkRel} title={title} {...rest}>
        {children ?? get(`${path}.label`)}
      </a>
    );
  }

  return (
    <span className="cms-link">
      <a
        className={className}
        href={href}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        {...rest}
      >
        {children ?? <Text path={`${path}.label`} as="span" />}
      </a>
      <button type="button" className="cms-chip cms-chip--inline" title={href} onClick={editHref}>
        enlace
      </button>
    </span>
  );
};

export const IconField = ({ path, size = 16, className }) => {
  const { value, set, editMode } = useField(path);

  if (!editMode) return <Icon name={value} size={size} className={className} />;

  return (
    <span className="cms-icon">
      <Icon name={value} size={size} className={className} />
      <select value={value} onChange={(event) => set(event.target.value)} onClick={(event) => event.stopPropagation()} title={path}>
        {Object.keys(ICONS).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </span>
  );
};

export const Counter = ({ path, prefix = '', suffix = '', className, duration = 2000 }) => {
  const { get, set, editable } = useCMS();
  const editMode = editable(path);
  const target = Number(get(path)) || 0;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (editMode) {
      setValue(target);
      return undefined;
    }
    let start = null;
    let frame;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const ratio = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(ratio * target));
      if (ratio < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, editMode, duration]);

  if (editMode) {
    return (
      <input
        className="cms-counter"
        type="number"
        value={target}
        title={path}
        onClick={(event) => event.stopPropagation()}
        onChange={(event) => set(path, Number(event.target.value))}
      />
    );
  }

  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export const ResultCircle = ({ valuePath, labelPath, textPath }) => {
  const { get, set, editable } = useCMS();
  const editMode = editable(valuePath);
  const target = Number(get(valuePath)) || 0;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (editMode) {
      setValue(target);
      return undefined;
    }
    let start = null;
    let frame;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const ratio = Math.min((timestamp - start) / 5000, 1);
      setValue(Math.floor(ratio * target));
      if (ratio < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, editMode]);

  const display = editMode ? target : value;

  return (
    <article className="result">
      <svg
        width="120"
        height="100"
        viewBox="0 0 250 250"
        className="circular-progress"
        style={{ '--progress': display, animation: 'none' }}
      >
        <circle className="bg" />
        <circle className="fg" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="number">
          {display}%
        </text>
      </svg>
      <div className="result__texts">
        <p className="result__title">
          <strong>
            <Text path={labelPath} as="span" />
          </strong>
        </p>
        <p className="result__paragraph paragraph">
          <Text path={textPath} as="span" />
        </p>
      </div>
      {editMode && (
        <button
          type="button"
          className="cms-chip cms-chip--corner"
          onClick={() => {
            const next = window.prompt('Porcentaje mostrado', String(target));
            if (next !== null && next !== '') set(valuePath, Number(next));
          }}
        >
          {target}%
        </button>
      )}
    </article>
  );
};

export const EditableList = ({ path, children }) => {
  const { get } = useCMS();
  const items = get(path) || [];
  return children(items);
};
