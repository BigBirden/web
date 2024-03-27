import {useParams} from "react-router-dom";

export const Spector = () => {
    const {id} = useParams();

    return <div>{`DotSpector ${id} page`}</div>
}
