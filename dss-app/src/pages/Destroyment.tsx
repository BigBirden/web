import {HeaderD, TextBlockD, ColoredLine} from "../components/header/Header";
import {useContext} from "react";
import styles from "./Pages.module.css";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";

export const Destroyment = () => {
    const ContextValue = useContext(AsteroidsContext)

    console.log(">>>>>>>>", ContextValue);


    return <div>
        <HeaderD/>

        <ColoredLine color="black" />

        <TextBlockD/>
    </div>
}
