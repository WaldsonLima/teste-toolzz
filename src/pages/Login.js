import BannerLogin from '../components/BannerLogin';
import FormLogin from '../components/FormLogin';
import styles from './Login.module.css';

function Login() {
    return (
        <section className={styles.login_main}>
            <BannerLogin />
            <FormLogin />
        </section>
    )
}

export default Login;
