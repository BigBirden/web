import {HeaderS, TextBlockS} from "../components/header/Header";
import styles from "./Pages.module.css";
import LogoImage from "../photo/spectors.png";

export const Spectors = () => {
    return <div>
        <HeaderS/>
        <TextBlockS/>
        <img src={LogoImage} className={styles.imgContainer}/>
    </div>
}
