import styles from "./AsteroidCardContent.module.css"

type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    },
    size: number;
    DistanceMode: boolean;
}

export const AsteroidCardContent = (props:AsteroidCardContentProps) =>{
    const {name, date, distance, size, DistanceMode} = props;

    //Среднее расстояние от земли до луны - 385.000 км согласно википедии
    return <div>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>

                {`Расстояние: ${DistanceMode ? distance.lunar : distance.kilometers} ${DistanceMode ? 'дист.' : 'км'}`}
            </div>
            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>
    </div>

}
