import styles from './FormLogin.module.css';
import toolz from '../img/Toolz.svg';
import toolsDark from '../img/ToolzDark.svg';
import logoToolzOutlined from '../img/logoToolzOutlined.svg';
import logoToolzOutlinedDark from  '../img/logoToolzOutlinedDark.svg';
import { FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import InputsLogin from './InputsLogin';
import { SectionFormLogin, TextPrimary, TextSecond, LoginIconContainer, Divider, IconToolz, CircleiconPrev, TextCreateAccount, HeaderMobile } from '../styles'

function FormLogin({theme}) {
    return (
        <SectionFormLogin className={styles.formLogin_main}>
            <HeaderMobile className={styles.header_mobile}>
                <CircleiconPrev className={styles.circle_icon_prev}>
                    <MdKeyboardArrowLeft size={32}/>
                </CircleiconPrev>
                <TextCreateAccount className={styles.text_create_account}>
                    Criar conta
                </TextCreateAccount>
            </HeaderMobile>
            <Divider className={styles.divider_header} />
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <img src={(theme === 'light' ? toolz : toolsDark)} />
                    <a className={styles.btn_create_account}>
                        Criar conta
                    </a>
                </div>
                <div className={styles.welcome}>
                    <TextPrimary className={styles.welcome_title}>
                        Boas-vindas!
                    </TextPrimary>
                    <TextSecond className={styles.welcome_description}>
                        Entre utilizando uma das opções abaixo
                    </TextSecond>
                </div>
                <div className={styles.login_icons}>
                    <LoginIconContainer className={styles.icon_container}>
                        <IconToolz
                            sizes='18px'
                            src={(theme === 'light' ? logoToolzOutlined : logoToolzOutlinedDark)}
                        />
                    </LoginIconContainer>
                    <LoginIconContainer className={styles.icon_container}>
                        <FaFacebook size={18} />
                    </LoginIconContainer>
                    <LoginIconContainer className={styles.icon_container}>
                        <FaApple size={18} />
                    </LoginIconContainer>
                    <LoginIconContainer className={styles.icon_container}>
                        <FaTwitter size={18} />
                    </LoginIconContainer>
                </div>
                <div className={styles.diviver_container}>
                    <Divider className={styles.divider} />
                    <TextSecond className={styles.text_divider}>
                        ou
                    </TextSecond>
                    <Divider className={styles.divider} />
                </div>
                <InputsLogin />
                <div className={styles.forget_password_container}>
                    <TextSecond className={styles.forget_password_text}>
                        Esqueceu sua senha?
                        <a className={styles.forget_password_link}>
                            Recuperar senha
                        </a>
                    </TextSecond>
                </div>
            </div>
        </SectionFormLogin>
    )
}

export default FormLogin;
