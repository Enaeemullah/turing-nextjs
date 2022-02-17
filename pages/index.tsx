import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css';
import SignIn from '../../my-app/component/Signin';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SignIn />
      </div>
    </>
  );
}
