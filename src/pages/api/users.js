import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { getSession } from 'next-auth/client';
import guestData from './guest_data';
import { findOneObject, insertOneObject, updateOneObject } from './helper';

const handler = nextConnect();
handler.use(middleware);

const getUserData = async (req) => {
  const sessionData = await getSession({ req });
  let userData = { success: false, message: 'Could not find user data' };
  if (req.query.type == 'self') {
    if (sessionData) {
      userData = await findOneObject(req, 'users', { email: sessionData.user.email });
      if (!userData) {
        // write some code to come up with a unique username using the email, temporarily fixed
        await insertOneObject(req, 'users', {
          email: sessionData.user.email,
          username: sessionData.user.email.split('@')[0],
          is_admin: false,
          total_downloads: 0,
          liked_templates: {},
          used_templatees: {},
          data: guestData.data
        });
        userData = await findOneObject(req, 'users', { email: sessionData.user.email });
      }
    } else {
      userData = guestData;
    }
  } else if (req.query.type == 'other') {
    userData = guestData;
    const otherUserData = await findOneObject(req, 'users', { username: req.query.username });
    userData.data = otherUserData.data;
  } else if (req.query.type == 'multiple') {
    // implement get request for when multiple users data is requested
  } else {
    userData = guestData;
  }

  return userData;
};

handler.get(async (req, res) => {
  let responseData = { success: false, message: 'Invalid GET Request' };
  responseData = await getUserData(req);
  res.json(responseData);
});

handler.put(async (req, res) => {
  let responseData = { success: false, message: 'Invalid PUT Request' };
  const session = await getSession({ req });
  let updatedUserInfo = req.body.updatedObject;
  delete updatedUserInfo['_id'];

  if (session && typeof updatedUserInfo.data !== "undefined" && Object.keys(updatedUserInfo.data).length > 0) {
    try {
      await req.db.collection('users').updateOne({ email: session.user.email }, { $set: updatedUserInfo }, { upsert: true });
      responseData = {
        success: true,
        message: 'Your data has been updated!'
      };
    } catch (error) {
      console.log('update failed', error);
      responseData = {
        success: false,
        message: 'Sorry! We encountered an unexpected error trying to update your data.'
      };
    }
  }

  res.json(responseData);
});

handler.delete(async (req, res) => {
  let responseData = {};
  res.json(responseData);
});

export default handler;
