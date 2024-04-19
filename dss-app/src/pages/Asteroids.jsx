import {HeaderA, TextBlockA, ColoredLine} from "../components/header/Header";
import styles from "./Pages.module.css";
import {Card} from "../components/card/Card"
import {useState} from "react";

export const Asteroids = () => {

    const [asteroids] = useState(generateAsteroids)

    const[onlyDangerous, setOnlyDangerous] = useState(false)
    //КМ - в километрах, MD - в дистанциях до луны
    let [isKM, setKM] = useState(false);

    //Тернарный оператор сначала определяет Единицы измерения, затем флажок Опасности. Как сделать по-другому - я так и не понял
    return <div>
        Home
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value ={onlyDangerous} onChange={()=>setOnlyDangerous(!onlyDangerous)}>
        </input> Показать только опасные </div>
        <div className={styles.distanceMode}>
            Расстояние <button className={styles.distanceChooser} value ={isKM} onClick={()=>setKM(isKM = false)}> в километрах
        </button>,
            <button className={styles.distanceChooser} value ={isKM} onClick={()=>setKM(isKM = true)}> в дистанциях до луны</button>
        </div>


        {isKM ?  onlyDangerous ?
                    asteroids.filter((item)=>item.isDangerous).map((item)=><Card
                        name={item.name} date={item.date} size={item.size}
                        distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true}/>) :
                    asteroids.map((item)=><Card
                        name={item.name} date={item.date} size={item.size}
                        distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true}/>)
            :
            onlyDangerous ?
                asteroids.filter((item)=>item.isDangerous).map((item)=><Card
                    name={item.name} date={item.date} size={item.size}
                    distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false}/>) :
                asteroids.map((item)=><Card
                    name={item.name} date={item.date} size={item.size}
                    distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false}/>)

        }



    </div>
}

//Функция-генератор значений
const generateAsteroids = () => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const result = [];

    for (let i = 0; i < 10; i++){
        const name = characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)];
        const date = `${(Math.random()*27 + 1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2024`;
        const size = (Math.random()*100 + 10).toFixed(0);
        const distance = (Math.random()*90000000).toFixed(0);
        const isDangerous = Math.random() >= 0.5;

        result.push({name, date, size, distance, isDangerous});
    }

    return result;
}
