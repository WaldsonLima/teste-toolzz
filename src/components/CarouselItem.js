import styles from './CarouselItem.module.css';

function CarouselItem( { slide } ) {
    return (
        <section>
            <div className={styles.chip_carousel}>
                { slide }
            </div>
        </section>
    )
}

export default CarouselItem;
