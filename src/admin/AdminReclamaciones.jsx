import { useCallback, useEffect, useState } from 'react';
import { deleteComplaint, fetchComplaint, fetchComplaints, updateComplaint } from '../cms/api';
import './admin.css';

const STATUS_LABELS = {
  pendiente: 'Pendiente',
  en_proceso: 'En proceso',
  atendido: 'Atendido',
};

const CLAIM_LABELS = { reclamo: 'Reclamo', queja: 'Queja' };

const formatDate = (value) => (value ? String(value).replace('T', ' ').slice(0, 16) : '—');

const ComplaintDetail = ({ complaint, onBack, onSaved }) => {
  const [status, setStatus] = useState(complaint.status);
  const [response, setResponse] = useState(complaint.response || '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const save = async () => {
    setBusy(true);
    setError('');
    try {
      const { complaint: updated } = await updateComplaint(complaint.id, { status, response });
      onSaved(updated);
    } catch (err) {
      setError(err?.response?.data?.message || 'No se pudo guardar la respuesta.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (!window.confirm(`¿Eliminar el reclamo ${complaint.code}? Esta acción no se puede deshacer.`)) {
      return;
    }
    try {
      await deleteComplaint(complaint.id);
      onBack();
    } catch {
      window.alert('No se pudo eliminar el reclamo.');
    }
  };

  const rows = [
    ['Código', complaint.code],
    ['Fecha', formatDate(complaint.createdAt)],
    ['Tipo', CLAIM_LABELS[complaint.claimType] || complaint.claimType],
    ['Consumidor', complaint.consumerName],
    ['Documento', `${complaint.docType} ${complaint.docNumber}`],
    ['Teléfono', complaint.phone || '—'],
    ['Correo', complaint.email || '—'],
    ['Dirección', complaint.address || '—'],
    ['Bien o servicio', `${complaint.itemType === 'producto' ? 'Producto' : 'Servicio'} — ${complaint.itemDescription}`],
    ['Monto', complaint.itemAmount || '—'],
  ];

  return (
    <div className="admin-page">
      <div className="admin-page__head">
        <div>
          <h1>Reclamo {complaint.code}</h1>
          <p>Registrado el {formatDate(complaint.createdAt)}</p>
        </div>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={onBack}>
          Volver a la lista
        </button>
      </div>

      <div className="admin-detail">
        {rows.map(([label, value]) => (
          <div className="admin-detail__row" key={label}>
            <span>{label}</span>
            <p>{value}</p>
          </div>
        ))}
      </div>

      <div className="admin-detail__block">
        <h2 className="admin-h2">Detalle del reclamo o queja</h2>
        <p>{complaint.claimDetail}</p>
      </div>
      <div className="admin-detail__block">
        <h2 className="admin-h2">Pedido</h2>
        <p>{complaint.claimRequest}</p>
      </div>
      {complaint.observations ? (
        <div className="admin-detail__block">
          <h2 className="admin-h2">Observaciones</h2>
          <p>{complaint.observations}</p>
        </div>
      ) : null}

      <div className="admin-form">
        <div className="admin-form__grid">
          <label className="admin-field">
            <span>Estado</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              {Object.entries(STATUS_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="admin-field admin-field--wide">
          <span>Respuesta al consumidor</span>
          <textarea rows={5} value={response} onChange={(event) => setResponse(event.target.value)} />
        </label>
        {error ? <p className="admin-error">{error}</p> : null}
        <div className="admin-detail__actions">
          <button type="button" className="admin-btn admin-btn--danger" onClick={remove}>
            Eliminar
          </button>
          <button type="button" className="admin-btn admin-btn--primary" onClick={save} disabled={busy}>
            {busy ? 'Guardando…' : 'Guardar'}
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminReclamaciones = () => {
  const [complaints, setComplaints] = useState(null);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('');

  const load = useCallback(() => {
    fetchComplaints(filter ? { status: filter } : {})
      .then(({ complaints: list }) => setComplaints(list))
      .catch(() => setComplaints([]));
  }, [filter]);

  useEffect(() => {
    load();
  }, [load]);

  const open = async (row) => {
    try {
      const { complaint } = await fetchComplaint(row.id);
      setSelected(complaint);
    } catch {
      window.alert('No se pudo cargar el reclamo.');
    }
  };

  if (selected) {
    return (
      <ComplaintDetail
        complaint={selected}
        onBack={() => {
          setSelected(null);
          load();
        }}
        onSaved={(updated) => {
          setSelected(updated);
          load();
        }}
      />
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page__head">
        <div>
          <h1>Libro de Reclamaciones</h1>
          <p>Reclamos y quejas registrados desde el sitio público.</p>
        </div>
        <label className="admin-field">
          <span>Filtrar por estado</span>
          <select value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En proceso</option>
            <option value="atendido">Atendido</option>
          </select>
        </label>
      </div>

      {!complaints ? (
        <p className="admin-muted">Cargando reclamos…</p>
      ) : complaints.length === 0 ? (
        <p className="admin-muted">No hay reclamos registrados.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Consumidor</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((row) => (
              <tr key={row.id}>
                <td>
                  <strong>{row.code}</strong>
                </td>
                <td>
                  {row.consumerName}
                  <small>
                    {row.docType} {row.docNumber}
                  </small>
                </td>
                <td>{CLAIM_LABELS[row.claimType] || row.claimType}</td>
                <td>{formatDate(row.createdAt)}</td>
                <td>{STATUS_LABELS[row.status] || row.status}</td>
                <td className="admin-table__actions">
                  <button type="button" className="admin-btn admin-btn--ghost" onClick={() => open(row)}>
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminReclamaciones;
