import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import Menu from './Menu';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} />

        <div className={styles['navbar-left']}>
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={`${styles['more-clickable-area']}${styles['navbar-email']} ${styles['pointer']}`}>
              <button
                onClick={() => toggleMenu()}
                style={{
                  backgroundColor: 'inherit',
                  border: '0',
                }}
              >
                platzi@example.com
              </button>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <button
                onClick={() => toggleOrder()}
                style={{
                  backgroundColor: 'inherit',
                  border: '0',
                }}
              >
                <Image className={styles['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </button>
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
