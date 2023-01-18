import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const NewPassword = () => {
  return (
    <>
      <Head>
        <title>Platzi Store</title>
      </Head>
      <div className={styles['NewPassword']}>
        <div className={styles['NewPassword-container']}>
          <Image src={logo} alt="logo" className={styles['logo']} />
          <h1 className={styles['title']}>Create a new password</h1>
          <p className={styles['subtitle']}>Enter a new password for yue account</p>
          <form action="/" className={styles['form']}>
            <label htmlFor="password" className={styles['label']}>
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={[styles['input'], styles['input-password']].join(' ')} />
            <label htmlFor="new-password" className={styles['label']}>
              Password
            </label>
            <input type="password" id="new-password" placeholder="*********" className={[styles['input'], styles['input-password']].join(' ')} />
            <input type="submit" value="Confirm" className={[styles['primary-button'], styles['login-button']].join(' ')} />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
