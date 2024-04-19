import {useParams} from "react-router-dom";
import {HeaderAID, TextBlockAID, ColoredLine} from "../components/header/Header";
import styles from "./Pages.module.css";



export const Asteroid = () => {
    const {id} = useParams();

    return <div>
        <HeaderAID/>

        <ColoredLine color="black" />

        <TextBlockAID/>
    </div>
}
