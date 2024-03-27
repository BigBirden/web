import {HeaderD, TextBlockD} from "../components/header/Header";
import styles from "./Pages.module.css";
import LogoImage from "../photo/directors.png"

export const Directors = () => {
    return <div>
        <HeaderD/>
        <TextBlockD/>
        <img src={LogoImage} className={styles.imgContainer}/>
    </div>
}
