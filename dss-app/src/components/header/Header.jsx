import {Link} from "react-router-dom";
import styles from "./Header.module.css";

export const ColoredLine = ({ color }) => {
    return <div>
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    </div>
};

export const HeaderA = () =>{
    return <div className={styles.containerHA}>
        <div>
            <h1 className={styles.textBlockA}>ARMAGGEDON V</h1>
            <div className={styles.textBlockA}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
                Земле.
            </div>
        </div>
        <h4>
            <Link to={"/asteroid/:id"} className={styles.linkStyle}>Астероиды по ID </Link>
            <Link to={"/destroyment"} className={styles.linkStyle}>Уничтожение</Link>
        </h4>
    </div>
}
export const HeaderD = () =>{
    return <div className={styles.containerHD}>
        <div>
            <h1 className={styles.textBlockD}>ARMAGGEDON V</h1>
            <div className={styles.textBlockD}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <h4>
            <Link to={"/asteroids"} className={styles.linkStyleD}>Астероиды </Link>
            <Link to={"/asteroid/:id"} className={styles.linkStyleD}>Астероиды по ID</Link>
        </h4>
    </div>
}

export const HeaderAID = () =>{
    return <div className={styles.containerHAID}>
        <div>
            <h1 className={styles.textBlockAID}>ARMAGGEDON V</h1>
            <div className={styles.textBlockAID}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <h4>
            <Link to={"/asteroids"} className={styles.linkStyle}>Астероиды </Link>
            <Link to={"/destroyment"} className={styles.linkStyle}>Уничтожение</Link>
        </h4>
    </div>
}

export const TextBlockA = () =>{
    return <div className={styles.textA}>
        <div className={styles.paragraphA}>Spectors page</div>
        <div className={styles.paragraphA}>Coming soon...</div>
    </div>
}

export const TextBlockD = () => {
    return <div className={styles.textD}>
        <div className={styles.paragraphD}>Directors page</div>
        <div className={styles.paragraphD}>Coming soon...</div>
    </div>
}
export const TextBlockAID = () => {
    return <div className={styles.textAID}>
        <div className={styles.paragraphAID}>{'DotSpector ${id} page'}</div>
        <div className={styles.paragraphAID}>Coming soon...</div>
    </div>
}
