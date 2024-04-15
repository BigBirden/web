import styles from "./Card.module.css"

export const SpectorCard = () =>{
    return (<div className={styles.card}>
            <div className={styles.cardRegular}></div>
                <SpectorCardImage />
            <SpectorCardContent />
            <SpectorCardAction />
    </div>)
}

export const DangerSpectorCard = () =>{
    return (<div className={styles.card}>
        <div className={styles.cardRed}></div>
        <SpectorCardImage />
        <SpectorCardContent />
        <SpectorCardAction />
    </div>)
}
