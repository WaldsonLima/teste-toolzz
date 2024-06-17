import styles from './FormLogin.module.css';
import toolz from '../img/Toolz.svg';
import logoToolzOutlined from '../img/logoToolzOutlined.svg';
import { FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import InputsLogin from './InputsLogin';

function FormLogin() {
    return (
        <section className={styles.formLogin_main}>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <img src={toolz} />
                    <a className={styles.btn_create_account}>
                        Criar conta
                    </a>
                </div>
                <div className={styles.welcome}>
                    <p className={styles.welcome_title}>
                        Boas-vindas!
                    </p>
                    <p className={styles.welcome_description}>
                        Entre utilizando uma das opções abaixo
                    </p>
                </div>
                <div className={styles.login_icons}>
                    <div className={styles.icon_container}>
                        <img
                            sizes='18px'
                            src={logoToolzOutlined}
                        />
                    </div>
                    <div className={styles.icon_container}>
                        <FaFacebook size={18} />
                    </div>
                    <div className={styles.icon_container}>
                        <FaApple size={18} />
                    </div>
                    <div className={styles.icon_container}>
                        <FaTwitter size={18} />
                    </div>
                </div>
                <div className={styles.diviver_container}>
                    <div className={styles.divider} />
                    <span className={styles.text_divider}>
                        ou
                    </span>
                    <div className={styles.divider} />
                </div>
                <InputsLogin />
                <div className={styles.forget_password_container}>
                    <p className={styles.forget_password_text}>
                        Esqueceu sua senha?
                        <a className={styles.forget_password_link}>
                            Recuperar senha
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FormLogin;
