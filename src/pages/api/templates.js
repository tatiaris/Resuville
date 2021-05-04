import { ObjectID } from 'mongodb';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { getSession } from 'next-auth/client';
import cheerio from 'cheerio';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const templates = await req.db.collection('templates').find({ valid: true }).toArray();
  for (let i = 0; i < templates.length; i++) {
    const $ = cheerio.load(templates[i].code);
    let requiredFields = [];
    $('*').each((i, elm) => {
      if ($(elm).attr('id')) {
        requiredFields.push($(elm).attr('id'));
      }
    });
    requiredFields.splice(requiredFields.indexOf('resume-container'), 1);
    templates[i].requiredFields = requiredFields;
  }
  let doc = { templates: templates };
  res.json(doc);
});

handler.post(async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    const user = await req.db.collection('users').findOne({ email: session.user.email });
    if (!user.is_designer) {
      res.json({ success: false, message: 'You are not currently a designer. Please send an e-mail at tatiaris2001@gmail.com with your username for the priviledge. Thank you!' });
    } else {
      const newTemplateCode = decodeURIComponent(req.body.templateCode);
      await req.db.collection('templates').insertOne({
        designer: session.user.name,
        downloads: 0,
        code: newTemplateCode,
        thumbnail: '',
        valid: false
      });
      res.json({ success: true, message: 'Thank you for submitting your template!' });
    }
  } else {
    res.json({ success: false, message: 'please sign-in to add a template' });
  }
});

handler.put(async (req, res) => {
  // functionality to update other fields than just number of downloads
  // you can get the 'type' of update through the request
  const session = await getSession({ req });
  let updatedTemplate = req.body.template;
  updatedTemplate.downloads += 1;
  try {
    const uid = updatedTemplate._id;
    delete updatedTemplate._id;
    await req.db.collection('templates').updateOne({ _id: ObjectID(uid) }, { $set: updatedTemplate });
    if (session) {
      const user = await req.db.collection('users').findOne({ email: session.user.email });
    }
    res.json({ success: true, message: 'Thank you for using Resubae! :)' });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: 'failure'
    });
  }
});

export default handler;
