import {HeaderD, ColoredLine} from "../components/header/Header";
import {useContext} from "react";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {Card} from "../components/card/Card";

export const Destroyment = () => {
    const {destroyment} = useContext(AsteroidsContext);

    return <div>
        <HeaderD/>

        <ColoredLine color="black" />

        {destroyment.map(item=><Card key={item.id} {...item}/>)}

    </div>
}
