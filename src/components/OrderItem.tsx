import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { TProduct } from '../..';

const OrderItem = ({ product }: { product?: TProduct }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product: TProduct) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={`${styles['pointer']} ${styles['more-clickable-area']}`} src={close} alt="close" onClick={() => product && handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
