import React from 'react';
import Layout from './shared/layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <Layout>
      <p style={style}>Unfortunately we are not able to find that page.</p>
    </Layout>
  );
};

export default NotFound;
