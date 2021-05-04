import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { getSession } from 'next-auth/client';
import guestData from './guest_data';
import { ObjectID } from 'mongodb';

const handler = nextConnect();
handler.use(middleware);

const findOneObject = async (req, collection, params) => {
  const returnObj = await req.db.collection(collection).findOne(params);
  return returnObj;
};

const insertOneObject = async (req, collection, params) => {
  const returnObj = await req.db.collection(collection).insertOne(params);
  return returnObj;
};

const getUserData = async (req) => {
  const sessionData = await getSession({ req });
  let userData = { success: false, message: 'Could not find user data' };
  if (req.query.type == 'self') {
    if (sessionData) {
      userData = await findOneObject(req, 'users', { email: sessionData.user.email });
      if (!userData) {
        await insertOneObject(req, 'users', { email: sessionData.user.email, is_admin: false, is_designer: false, total_downloads: 0, liked_templates: [], used_templates: [], data: guestData.data });
        userData = await findOneObject(req, 'users', { email: sessionData.user.email });
      }
    }
  } else if (req.query.type == 'other') {
    userData = guestData;
    const otherUserData = await findOneObject(req, 'users', { username: req.query.username });
    userData.data = otherUserData.data;
  } else {
    userData = guestData;
  }

  userData.placeholderInfo = guestData.data;
  return userData;
};

const getTemplateData = async (req) => {
  let templateData = { success: false, message: 'Could not find template' };
  const amount = req.query.amount;
  if (amount == '1') {
    const templateId = req.query.template_id;
    templateData = await findOneObject(req, 'templates', { _id: ObjectID(templateId) });
    templateData = templateData ? { ...templateData, success: true, message: 'success' } : { success: false, message: 'Could not find template' };
  } else if (amount == 'all') {
    templateData = { success: true, message: 'success' };
    templateData.templates = await req.db.collection('templates').find().toArray();
    if (!templateData.templates) templateData = { success: false, message: 'Could not find any templates' };
  } else {
    // implement if there's a custom amount of templates requested
  }
  return templateData;
};

handler.get(async (req, res) => {
  let responseData = { success: false, message: 'Invalid GET Request' };
  const collection = req.query.collection;

  if (collection == 'users') {
    responseData = await getUserData(req);
  } else if (collection == 'templates') {
    responseData = await getTemplateData(req);
  }

  res.json(responseData);
});

handler.post(async (req, res) => {
  let responseData = { success: false, message: 'Invalid POST Request' };
  const collection = req.body.collection;
  res.json(responseData);
});

handler.put(async (req, res) => {
  let responseData = {};
  res.json(responseData);
});

handler.delete(async (req, res) => {
  let responseData = {};
  res.json(responseData);
});

export default handler;
