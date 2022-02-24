import styles from '../styles/Home.module.css';
import SignIn from '../components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head> */}
      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
}
