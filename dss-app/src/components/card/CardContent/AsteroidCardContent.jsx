import styles from "./SpectorCardContent.module.css"

export const SpectorCardContent = () =>{
    return <div>
        <div className={styles.contentName}>Первый</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>Дата назначения: 22 апреля 2012 года</div>
            <div className={styles.contentDistance}>
                Зарплата: 320000 рублей
            </div>
            <div className={styles.contentSize}>Должность: СеТ</div>
        </div>
    </div>

}
