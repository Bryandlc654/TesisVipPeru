import { useState } from 'react';
import { createComplaint } from '../../cms/api';

const DOC_TYPES = [
  { value: 'DNI', label: 'DNI' },
  { value: 'CE', label: 'Carné de extranjería' },
  { value: 'PASAPORTE', label: 'Pasaporte' },
  { value: 'RUC', label: 'RUC' },
];

const EMPTY_FORM = {
  consumerName: '',
  docType: 'DNI',
  docNumber: '',
  address: '',
  phone: '',
  email: '',
  itemType: 'servicio',
  itemDescription: '',
  itemAmount: '',
  claimType: 'reclamo',
  claimDetail: '',
  claimRequest: '',
  observations: '',
  accept: false,
};

const Main = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const set = (key) => (event) => {
    const { type, checked, value } = event.target;
    setForm((prev) => ({ ...prev, [key]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.accept) {
      setError('Debes aceptar la declaración para registrar tu reclamo.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { complaint } = await createComplaint({
        consumerName: form.consumerName,
        docType: form.docType,
        docNumber: form.docNumber,
        address: form.address,
        phone: form.phone,
        email: form.email,
        itemType: form.itemType,
        itemDescription: form.itemDescription,
        itemAmount: form.itemAmount,
        claimType: form.claimType,
        claimDetail: form.claimDetail,
        claimRequest: form.claimRequest,
        observations: form.observations,
      });
      setResult(complaint);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err?.response?.data?.message || 'No se pudo registrar el reclamo. Inténtalo nuevamente.');
    } finally {
      setBusy(false);
    }
  };

  if (result) {
    return (
      <main className="main">
        <section className="book">
          <div className="book__content container">
            <div className="book__success">
              <h2 className="title">
                <span className="one">Reclamo registrado</span>
              </h2>
              <p className="paragraph">
                Hemos recibido tu {result.claimType === 'queja' ? 'queja' : 'reclamo'} correctamente.
                Guarda el siguiente código de registro:
              </p>
              <p className="book__code">{result.code}</p>
              <p className="paragraph">
                Recibirás nuestra respuesta en un plazo máximo de treinta (30) días calendario, conforme
                al D.S. N° 011-2011-PCM.
              </p>
              <button
                type="button"
                className="btn-white"
                onClick={() => {
                  setResult(null);
                  setForm(EMPTY_FORM);
                }}
              >
                Registrar otro reclamo
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="book">
        <div className="book__content container">
          <div className="book__intro">
            <span className="info-contact__guide guide">Atención al consumidor</span>
            <h2 className="info-contact__title title">
              <span className="one">Registra tu </span>
              <span className="three">reclamo o queja</span>
            </h2>
            <p className="paragraph">
              Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571) y el Reglamento
              del Libro de Reclamaciones (D.S. N° 011-2011-PCM), ponemos a tu disposición este Libro de
              Reclamaciones virtual. Recibirás una respuesta en un plazo máximo de treinta (30) días
              calendario.
            </p>
            <ul className="book__legend-list">
              <li>
                <strong>Reclamo:</strong> disconformidad relacionada con los productos o servicios.
              </li>
              <li>
                <strong>Queja:</strong> disconformidad no relacionada con los productos o servicios, o
                malestar respecto a la atención al público.
              </li>
            </ul>
          </div>

          <form className="book__form" onSubmit={handleSubmit}>
            <fieldset className="book__fieldset">
              <legend className="book__legend">1. Datos del consumidor</legend>
              <div className="book__row">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Nombres y apellidos completos *"
                  required
                  value={form.consumerName}
                  onChange={set('consumerName')}
                />
                <select
                  className="form__input form__input--select"
                  aria-label="Tipo de documento"
                  value={form.docType}
                  onChange={set('docType')}
                >
                  {DOC_TYPES.map((doc) => (
                    <option key={doc.value} value={doc.value}>
                      {doc.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="book__row">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Número de documento *"
                  required
                  value={form.docNumber}
                  onChange={set('docNumber')}
                />
                <input
                  className="form__input"
                  type="tel"
                  placeholder="Teléfono / celular"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>
              <div className="book__row">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={set('email')}
                />
                <input
                  className="form__input"
                  type="text"
                  placeholder="Dirección"
                  value={form.address}
                  onChange={set('address')}
                />
              </div>
            </fieldset>

            <fieldset className="book__fieldset">
              <legend className="book__legend">2. Identificación del bien o servicio</legend>
              <div className="book__row">
                <select
                  className="form__input form__input--select"
                  aria-label="Tipo"
                  value={form.itemType}
                  onChange={set('itemType')}
                >
                  <option value="servicio">Servicio</option>
                  <option value="producto">Producto</option>
                </select>
                <input
                  className="form__input"
                  type="text"
                  placeholder="Monto (S/)"
                  value={form.itemAmount}
                  onChange={set('itemAmount')}
                />
              </div>
              <textarea
                className="form__input form__input--textarea"
                placeholder="Descripción del bien o servicio *"
                required
                value={form.itemDescription}
                onChange={set('itemDescription')}
              />
            </fieldset>

            <fieldset className="book__fieldset">
              <legend className="book__legend">3. Detalle del reclamo o queja</legend>
              <select
                className="form__input form__input--select"
                aria-label="Tipo de reclamo"
                value={form.claimType}
                onChange={set('claimType')}
              >
                <option value="reclamo">Reclamo</option>
                <option value="queja">Queja</option>
              </select>
              <textarea
                className="form__input form__input--textarea form__input--tall"
                placeholder="Detalle del reclamo o queja *"
                required
                value={form.claimDetail}
                onChange={set('claimDetail')}
              />
              <textarea
                className="form__input form__input--textarea form__input--tall"
                placeholder="Pedido (¿qué solicitas?) *"
                required
                value={form.claimRequest}
                onChange={set('claimRequest')}
              />
              <textarea
                className="form__input form__input--textarea"
                placeholder="Observaciones (opcional)"
                value={form.observations}
                onChange={set('observations')}
              />
            </fieldset>

            <label className="book__check">
              <input type="checkbox" checked={form.accept} onChange={set('accept')} />
              <span>
                Declaro que la información brindada es veraz y acepto que Tesis VIP Professionals
                Corporation trate mis datos para atender este reclamo, conforme a la Ley N° 29733 de
                Protección de Datos Personales.
              </span>
            </label>

            {error ? <p className="book__error">{error}</p> : null}

            <input
              className="form__input form__input--submit"
              type="submit"
              value={busy ? 'Enviando…' : 'Registrar reclamo'}
              disabled={busy}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
