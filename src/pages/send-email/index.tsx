import email from '@icons/email.svg';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/SendEmail.module.scss';
import Head from 'next/head';
import Image from 'next/image';

const SendEmail = () => {
  return (
    <>
      <Head>
        <title>Platzi Store</title>
      </Head>
      <div className={styles['SendEmail']}>
        <div className={styles['form-container']}>
          <Image src={logo} alt="logo" className={styles['logo']} />
          <h1 className={styles['title']}>Email has been sent!</h1>
          <p className={styles['subtitle']}>Please check your inbox for instructions on how to reset the password</p>
          <div className={styles['email-image']}>
            <Image src={email} alt="email" />
          </div>
          <button className={[styles['primary-button'], styles['login-button']].join(' ')}>Login</button>
          <p className={styles['resend']}>
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SendEmail;
