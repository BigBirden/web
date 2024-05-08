import styles from "./Card.module.css"
import {AsteroidCardAction} from "./CardAction/AsteroidCardAction"
import {AsteroidCardContent} from "./CardContent/AsteroidCardContent"
import {AsteroidCardImage} from "./CardImage/AsteroidCardImage"

export const Card = (props) =>{
    const {name, date, distance, size, isDangerous, DistanceMode} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}><AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={distance} size={size} DistanceMode={DistanceMode}/>
            <AsteroidCardAction isDangerous={isDangerous}/></div>


    </div>)
}
