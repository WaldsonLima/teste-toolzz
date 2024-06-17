import styles from './BannerLogin.module.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import CarouselLogin from './CarouselLogin';

function BannerLogin({theme, setTheme}) {
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <section className={styles.bannerLogin_main}>
            <div className={styles.main_background_container}>
                <div className={styles.header}>
                    <div className={styles.circle_icon}>
                        <MdKeyboardArrowLeft
                            size={32}
                            className={styles.icon}
                        />
                    </div>
                    <div
                        className={(theme === 'light' ? styles.circle_icon : styles.circle_icon__darkMode)}
                        onClick={themeToggler}
                    >
                        <ThemeIcon theme={theme} />
                    </div>
                </div>
                <div className={styles.footer}>
                    <CarouselLogin />
                </div>
            </div>
        </section>
    )
}

function ThemeIcon({theme}) {
    if(theme === 'light') {
        return(
            <FaRegMoon
                size={20}
                className={styles.icon}
            />
        );
    } else return(
        <FaMoon
            size={20}
            className={styles.icon__darkMode}
        />
    );
}

export default BannerLogin;
