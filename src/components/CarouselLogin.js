import CarouselItem from './CarouselItem';
import styles from './CarouselLogin.module.css';
import { useCallback, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function CarouselLogin() {
    const slides = [
        {
            type: "Cursos",
            title: "Plataforma de cursos completa",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum."
        },
        {
            //Como não foram disponibilizadas informações sobre os slides 2 e 3 no protótipo do Figma, coloquei algumas informações de teste.
            type: "Videos",
            title: "Canal com videos diversos",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum libero nostra aliquam vestibulum."
        },
        {
            //Como não foram disponibilizadas informações sobre os slides 2 e 3 no protótipo do Figma, coloquei algumas informações de teste.
            type: "Livros",
            title: "Biblioteca inteira de cursos",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum vestibulum vestibulum."
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const len = slides.length;
    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? currentSlide - 0 : currentSlide - 1);
    };

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide + 1 >= len ? currentSlide + 0 : currentSlide + 1);
    }, [currentSlide, len]);
    return (
        <section>
            {slides.map((slide, index) => {
                if(currentSlide === index) {
                    return (
                        <div className={styles.carousel_main}>
                            <div
                                key={index}
                                className={styles.chip_container}
                            >
                                { currentSlide === index && <CarouselItem slide={ slide.type } /> }
                            </div>
                            <div key={index}>
                                {
                                    currentSlide === index &&
                                    <>
                                        <p className={styles.carousel_title}>
                                            { slide.title }
                                        </p>
                                        <p className={styles.carousel_description}>
                                            { slide.description }
                                        </p>
                                        <div className={styles.footer}>
                                            <div>
                                                <span>Meh</span>
                                            </div>
                                            <div className={styles.btn_container}>
                                                <MdKeyboardArrowLeft
                                                    size={32}
                                                    className={(currentSlide === 0 ? styles.icons_disabled : styles.icons)}
                                                    onClick={prevSlide}
                                                />
                                                <MdKeyboardArrowRight
                                                    size={32}
                                                    className={(currentSlide === 2 ? styles.icons_disabled : styles.icons)}
                                                    onClick={nextSlide}
                                                />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    );
                }
            })}
        </section>
    )
}

export default CarouselLogin;