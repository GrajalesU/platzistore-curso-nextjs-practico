import OrderItem from '@components/OrderItem';
import styles from '@styles/Orders.module.scss';
import Head from 'next/head';

const Orders = () => {
  return (
    <>
      <Head>
        <title>Platzi Store | Orders</title>
      </Head>
      <div className={styles['Orders']}>
        <div className={styles['Orders-container']}>
          <h1 className={styles['title']}>My orders</h1>
          <div className={styles['Orders-content']}>
            <OrderItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
