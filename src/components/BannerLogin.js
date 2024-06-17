import styles from './BannerLogin.module.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import CarouselLogin from './CarouselLogin';

function BannerLogin() {
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
                    <div className={styles.circle_icon}>
                        <FaRegMoon
                            size={20}
                            className={styles.icon}
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <CarouselLogin />
                </div>
            </div>
        </section>
    )
}

export default BannerLogin;
