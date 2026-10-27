import { Router } from 'express';
import { query } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const DOC_TYPES = ['DNI', 'CE', 'PASAPORTE', 'RUC'];
const ITEM_TYPES = ['producto', 'servicio'];
const CLAIM_TYPES = ['reclamo', 'queja'];
const STATUSES = ['pendiente', 'en_proceso', 'atendido'];

const clean = (value, max = 5000) => String(value ?? '').trim().slice(0, max);

const mapRow = (row) =>
  row
    ? {
        id: row.id,
        code: row.code || '',
        consumerName: row.consumer_name,
        docType: row.doc_type,
        docNumber: row.doc_number,
        address: row.address,
        phone: row.phone,
        email: row.email,
        itemType: row.item_type,
        itemDescription: row.item_description,
        itemAmount: row.item_amount,
        claimType: row.claim_type,
        claimDetail: row.claim_detail,
        claimRequest: row.claim_request,
        observations: row.observations || '',
        status: row.status,
        response: row.response || '',
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      }
    : null;

const getById = async (id) => {
  const rows = await query('SELECT * FROM complaints WHERE id = ? LIMIT 1', [id]);
  return mapRow(rows[0]);
};

router.post('/', async (req, res, next) => {
  try {
    const body = req.body || {};

    const consumerName = clean(body.consumerName, 150);
    const docType = DOC_TYPES.includes(body.docType) ? body.docType : 'DNI';
    const docNumber = clean(body.docNumber, 30);
    const address = clean(body.address, 255);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 190);
    const itemType = ITEM_TYPES.includes(body.itemType) ? body.itemType : 'servicio';
    const itemDescription = clean(body.itemDescription, 500);
    const itemAmount = clean(body.itemAmount, 60);
    const claimType = CLAIM_TYPES.includes(body.claimType) ? body.claimType : 'reclamo';
    const claimDetail = clean(body.claimDetail);
    const claimRequest = clean(body.claimRequest);
    const observations = clean(body.observations);

    if (!consumerName || !docNumber || !itemDescription || !claimDetail || !claimRequest) {
      return res.status(400).json({ message: 'Completa los campos obligatorios del reclamo' });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'El correo electrónico no es válido' });
    }

    const result = await query(
      `INSERT INTO complaints
        (consumer_name, doc_type, doc_number, address, phone, email,
         item_type, item_description, item_amount, claim_type, claim_detail, claim_request,
         observations, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pendiente')`,
      [
        consumerName,
        docType,
        docNumber,
        address,
        phone,
        email,
        itemType,
        itemDescription,
        itemAmount,
        claimType,
        claimDetail,
        claimRequest,
        observations,
      ],
    );

    const id = result.insertId;
    const year = new Date().getFullYear();
    const code = `RV-${year}-${String(id).padStart(5, '0')}`;
    await query('UPDATE complaints SET code = ? WHERE id = ?', [code, id]);

    return res.status(201).json({ complaint: await getById(id) });
  } catch (error) {
    return next(error);
  }
});

router.get('/', requireAuth, async (req, res, next) => {
  try {
    const status = STATUSES.includes(req.query.status) ? req.query.status : null;
    const rows = await query(
      `SELECT * FROM complaints ${status ? 'WHERE status = ?' : ''} ORDER BY created_at DESC, id DESC`,
      status ? [status] : [],
    );
    return res.json({ complaints: rows.map(mapRow) });
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', requireAuth, async (req, res, next) => {
  try {
    const complaint = await getById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Reclamo no encontrado' });
    return res.json({ complaint });
  } catch (error) {
    return next(error);
  }
});

router.patch('/:id', requireAuth, async (req, res, next) => {
  try {
    const existing = await getById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Reclamo no encontrado' });

    const { status, response, observations } = req.body || {};
    const fields = [];
    const params = [];

    if (status !== undefined) {
      if (!STATUSES.includes(status)) {
        return res.status(400).json({ message: 'Estado inválido' });
      }
      fields.push('status = ?');
      params.push(status);
    }
    if (response !== undefined) {
      fields.push('response = ?');
      params.push(clean(response));
    }
    if (observations !== undefined) {
      fields.push('observations = ?');
      params.push(clean(observations));
    }

    if (!fields.length) {
      return res.status(400).json({ message: 'No hay cambios para guardar' });
    }

    fields.push('updated_by = ?');
    params.push(req.user.sub);
    params.push(req.params.id);

    await query(`UPDATE complaints SET ${fields.join(', ')} WHERE id = ?`, params);
    return res.json({ complaint: await getById(req.params.id) });
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const existing = await getById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Reclamo no encontrado' });
    await query('DELETE FROM complaints WHERE id = ?', [req.params.id]);
    return res.json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

export default router;
