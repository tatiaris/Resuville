import nextConnect from 'next-connect';
import middleware from '../../../../middleware/database';
import { getSession } from 'next-auth/client';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const session = await getSession({ req });
  const type = req.query.type;
  let responseData;

  if (session) {
    responseData = await req.db.collection('users').findOne({ email: session.user.email });
  } else {
    responseData = {};
  }
  res.json(responseData);
});

export default handler;
