import {useParams} from "react-router-dom";
import {HeaderSID, TextBlockSID} from "../components/header/Header";
import styles from "./Pages.module.css";

export const Spector = () => {
    const {id} = useParams();

    return <div>
        <HeaderSID/>
        <TextBlockSID/>
    </div>
}
