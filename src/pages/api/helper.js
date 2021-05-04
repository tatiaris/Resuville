export const findOneObject = async (req, collection, params) => {
  const returnObj = await req.db.collection(collection).findOne(params);
  return returnObj;
};

export const insertOneObject = async (req, collection, params) => {
  const returnObj = await req.db.collection(collection).insertOne(params);
  return returnObj;
};

export const updateOneObject = async (req, collection, query, updatedObj, upsert = true) => {
  const returnObj = await req.db.collection(collection).update(query, { $set: updatedObj }, { upsert: upsert });
  return returnObj;
};

export const getAllObjects = async (req, collection) => {
  const returnObj = await req.db.collection(collection).find().toArray();
  return returnObj;
}