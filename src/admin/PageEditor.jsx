import { ContentProvider, useCMS } from '../cms/ContentContext';
import './admin.css';

const EditorToolbar = ({ title }) => {
  const { save, reset, dirty, status, content } = useCMS();

  const label =
    status === 'loading'
      ? 'Cargando contenido…'
      : status === 'saving'
        ? 'Guardando…'
        : status === 'error'
          ? 'Error al guardar'
          : dirty
            ? 'Cambios sin guardar'
            : status === 'saved'
              ? 'Todo guardado'
              : 'Sin cambios';

  const sections = Object.keys(content || {}).length;

  return (
    <header className="admin-toolbar">
      <div className="admin-toolbar__info">
        <h1>{title}</h1>
        <p>
          Haz clic en cualquier texto para editarlo, usa los botones sobre las imágenes para
          cambiarlas y el botón “enlace” para actualizar URLs. {sections} secciones cargadas.
        </p>
      </div>
      <div className="admin-toolbar__actions">
        <span className={`admin-status admin-status--${dirty ? 'dirty' : status}`}>{label}</span>
        <button
          type="button"
          className="admin-btn admin-btn--ghost"
          onClick={() => {
            if (window.confirm('¿Descartar los cambios no guardados del borrador actual?')) {
              reset();
            }
          }}
          disabled={!dirty}
        >
          Descartar
        </button>
        <button
          type="button"
          className="admin-btn admin-btn--primary"
          onClick={save}
          disabled={!dirty || status === 'saving'}
        >
          Guardar cambios
        </button>
      </div>
    </header>
  );
};

const blockNavigation = (event) => {
  const target = event.target;
  if (!target || !target.closest) return;

  if (target.closest('.cms-link')) return;
  if (target.closest('button, input, select, textarea, [contenteditable="true"]')) return;

  const anchor = target.closest('a');
  if (anchor) {
    event.preventDefault();
    event.stopPropagation();
  }
};

const PageEditor = ({ page, defaults, scope = null, title, preview: Preview }) => (
  <ContentProvider page={page} defaults={defaults} editMode scope={scope}>
    <EditorToolbar title={title} />
    <div className="admin-canvas" onClickCapture={blockNavigation}>
      <Preview />
    </div>
  </ContentProvider>
);

export default PageEditor;
