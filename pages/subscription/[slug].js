import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function SubscriptionScreen() {
  const { query } = useRouter();
  const { slug } = query;

  const subscription = data.subscriptions.find((x) => x.slug === slug);
  if (!subscription) {
    return <div>Subscription Not Found</div>;
  }
  return (
    <Layout title={subscription.name}>
      <div className="py-2">
        <Link href="/">Back to Home</Link>
      </div>
      <h1>{subscription.name}</h1>
    </Layout>
  );
}
