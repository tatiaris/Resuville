import { ObjectID } from 'mongodb';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { findOneObject, updateOneObject } from './helper';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const templateData = await findOneObject(req, 'template_data', { [req.query.filter]: req.query[req.query.filter] });
  res.json(templateData);
});

handler.put(async (req, res) => {
  let updatedTemplate = req.body.updatedObject;
  try {
    const uid = updatedTemplate._id;
    delete updatedTemplate._id;
    await updateOneObject(req, 'template_data', { _id: ObjectID(uid) }, updatedTemplate);
    res.json({ success: true, message: 'Thank you for using Resubae! :)' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'failure' });
  }
});

export default handler;
