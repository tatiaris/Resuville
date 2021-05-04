import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';
import { ObjectID } from 'mongodb';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const uids = req.query.ids.split(',');
  let responseData = [];
  for (let i = 0; i < uids.length; i++) {
    const res = await req.db.collection('templates').findOne({ _id: ObjectID(uids[i]) });
    responseData.push(res);
  }
  res.json(responseData);
});

export default handler;
