import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/orders" className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
