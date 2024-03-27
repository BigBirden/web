import {useParams} from "react-router-dom";
import {HeaderSID, TextBlockSID} from "../components/header/Header";
import styles from "./Pages.module.css";
import LogoImage from "../photo/spectors.png";

export const Spector = () => {
    const {id} = useParams();

    return <div>
        <HeaderSID/>
        <TextBlockSID/>
        <img src={LogoImage} className={styles.imgContainer}/>
    </div>
}
