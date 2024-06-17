import styles from './InputsLogin.module.css';
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { TextPrimary, InputTextSecond } from '../styles'

function InputsLogin() {
    return (
        <section className={styles.main}>
            <form className={styles.form} action="">
                <div className={styles.input_container}>
                    <TextPrimary
                        htmlFor="user"
                        className={styles.label}
                    >
                        Usuário
                    </TextPrimary>
                    <div className={styles.wrapper}>
                        <div className={styles.input_icon}>
                            <FaRegUser />
                        </div>
                        <InputTextSecond
                            id='user'
                            name='user'
                            className={styles.input}
                            type="text"
                            placeholder='Insira o seu usuário'
                        />
                    </div>
                </div>
                <div className={styles.input_container}>
                    <TextPrimary
                        htmlFor='password'
                        className={styles.label}
                    >
                        Senha
                    </TextPrimary>
                    <div className={styles.wrapper}>
                        <div className={styles.input_icon}>
                            <GoLock />
                        </div>
                        <InputTextSecond
                            id='password'
                            name='password'
                            className={styles.input}
                            type="password"
                            placeholder='Insira a sua senha'
                        />
                    </div>
                </div>
                <div className={styles.checkbox_container}>
                    <InputTextSecond
                        type="checkbox"
                        id="stayConnected"
                        name="stayConnected"
                        value="stayConnected"
                        className={styles.checkbox_input}
                    />
                    <TextPrimary
                        htmlFor="stayConnected"
                        className={styles.checkbox_label}
                    >
                        Manter conectado
                    </TextPrimary>
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
