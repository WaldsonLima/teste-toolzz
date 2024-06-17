import styles from './InputsLogin.module.css';
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { FaArrowRightToBracket } from "react-icons/fa6";

function InputsLogin() {
    return (
        <section className={styles.main}>
            <form className={styles.form} action="">
                <div className={styles.input_container}>
                    <label
                        htmlFor="user"
                        className={styles.label}
                    >
                        Usuário
                    </label>
                    <div className={styles.wrapper}>
                        <div className={styles.input_icon}>
                            <FaRegUser />
                        </div>
                        <input
                            id='user'
                            name='user'
                            className={styles.input}
                            type="text"
                            placeholder='Insira o seu usuário'
                        />
                    </div>
                </div>
                <div className={styles.input_container}>
                    <label
                        htmlFor='password'
                        className={styles.label}
                    >
                        Senha
                    </label>
                    <div className={styles.wrapper}>
                        <div className={styles.input_icon}>
                            <GoLock />
                        </div>
                        <input
                            id='password'
                            name='password'
                            className={styles.input}
                            type="password"
                            placeholder='Insira a sua senha'
                        />
                    </div>
                </div>
                <div className={styles.checkbox_container}>
                    <input
                        type="checkbox"
                        id="stayConnected"
                        name="stayConnected"
                        value="stayConnected"
                        className={styles.checkbox_input}
                    />
                    <label
                        htmlFor="stayConnected"
                        className={styles.checkbox_label}
                    >
                        Manter conectado
                    </label>
                </div>
                <button
                    type="submit"
                    className={styles.btn_submit}
                >
                    <FaArrowRightToBracket size={18} color='#FFFFFF' />
                    <span className={styles.text_btn_submit}>
                        Entrar
                    </span>
                </button>
            </form>
        </section>
    )
}

export default InputsLogin;
