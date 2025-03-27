import axios from 'axios';
import { useContext } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';
import { Store } from '../utils/Store';
import { toast } from 'react-hot-toast';
import SubscriptionItem from '../components/SubscriptionItem';
import IndexCard from '../components/IndexCard';

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  //Add to Cart btn
  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock.');
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  return (
    //for small screen then item will shows less
    <Layout title="Home Page">
      <IndexCard />
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Subscription Plan</h1>
        <h4 className="text-gray-600">Your plant oasis awaits</h4>
      </div>
      <div>
        <div className="flex flex-col md:flex-row px-2 md:px-0">
          {products
            .filter((product) => product.category === 'subscription')
            .map((product) => (
              <SubscriptionItem
                product={product}
                key={product.slug}
                addToCartHandler={addToCartHandler}
              ></SubscriptionItem>
            ))}
        </div>
      </div>
      <br />
      <br />
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Product</h1>
        <h4 className="text-gray-600">Free Shipping on Order Over $400</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products
          .filter((product) => product.category !== 'subscription')
          .map((product) => (
            <ProductItem
              product={product}
              key={product.slug}
              addToCartHandler={addToCartHandler}
            ></ProductItem>
          ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
