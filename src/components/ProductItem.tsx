import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import { TProduct } from '../..';

const ProductItem = ({ product }: { product?: TProduct }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item: TProduct) => {
    addToCart(item);
  };

  return (
    <div className={styles['ProductItem']}>
      <img src={product.images[0]} alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']}>
          <button
            onClick={() => handleClick(product)}
            style={{
              backgroundColor: 'inherit',
              border: '0',
            }}
          >
            {state.cart.includes(product) ? (
              <Image className={`${styles['disabled']} ${styles['add-to-cart-btn']}`} src={addedToCartImage} alt="added to cart" />
            ) : (
              <Image className={styles['add-to-cart-btn pointer']} src={addToCartImage} alt="add to cart" />
            )}
          </button>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
