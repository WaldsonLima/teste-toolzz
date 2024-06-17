import BannerLogin from '../components/BannerLogin';
import FormLogin from '../components/FormLogin';
import styles from './Login.module.css';

function Login({theme, setTheme}) {
    return (
        <section className={styles.login_main}>
            <BannerLogin theme={theme} setTheme={setTheme} className={styles.banner_login} />
            <FormLogin theme={theme} />
        </section>
    )
}

export default Login;
