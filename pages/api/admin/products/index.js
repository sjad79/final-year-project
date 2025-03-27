import { getSession } from 'next-auth/react';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

//edit button
const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('Admin signin required');
  }
  //post => create product
  //const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } else if (req.method === 'POST') {
    return postHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const postHandler = async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'sample name',
    slug: 'sample-name-' + Math.random(),
    image: '/images/blue.jpg',
    price: 0,
    category: 'sample category',
    countInStock: 0,
    description: 'sample description',
    rating: 0,
    numReviews: 0,
  });
  //after post save it
  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Product created successfully', product });
};

const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
};
export default handler;
