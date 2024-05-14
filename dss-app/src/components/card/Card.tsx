import {AsteroidCardAction} from "./CardAction/AsteroidCardAction"
import {AsteroidCardImage} from "./CardImage/AsteroidCardImage"
import styles from "./Card.module.css"
import {AsteroidCardContentContainer} from "./CardContent/AsteroidCardContentContainer";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";


//Проблема - почему-то не воспринимает css без комментария выше.
// Решена с помощью declare в файле Globals.d.ts

type CardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    },
    size: number;
    isDangerous: boolean;
}

export const Card = (props: CardProps) =>{
    const {name, date, distance, size, isDangerous} = props;

    const {addAsteroid} = useContext(AsteroidsContext)

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}><AsteroidCardImage />
            <AsteroidCardContentContainer name={name} date={date} distance={distance} size={size}/>
            <AsteroidCardAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
        </div>


    </div>)
}
