import styles from '../styles/Home.module.css';
import SignIn from '../components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
}
