import styles from "./AsteroidCardContent.module.css"
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";

type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    },
    size: number;
    isKM: boolean;
}

export const AsteroidCardContent = (props:AsteroidCardContentProps) =>{
    const {name, date, distance, size, isKM} = props;

    //Среднее расстояние от земли до луны - 385.000 км согласно википедии
    return <div>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>

                {`Расстояние: ${isKM ? distance.lunar : distance.kilometers} ${isKM ? 'дист.' : 'км'}`}
            </div>
            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>
    </div>

}
