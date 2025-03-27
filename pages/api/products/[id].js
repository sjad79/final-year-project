import Product from '../../../models/Product';
import db from '../../../utils/db';

//connect to db get product
const handler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};

export default handler;
