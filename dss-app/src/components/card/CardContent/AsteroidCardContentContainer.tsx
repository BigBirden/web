import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";
import {AsteroidCardContent} from "./AsteroidCardContent";

export const AsteroidCardContentContainer = (props) => {
    const {isKM} = useContext(AsteroidsContext);
    return <AsteroidCardContent {...props} isKM = {isKM}/>
}
