import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import LogoImage from "../../photo/directors.png";

export const HeaderS = () =>{
    return <div className={styles.containerHS}>
        <div>
            <h1 className={styles.textBlockS}>DOT.SPECTOR.SYSTEM</h1>
            <div className={styles.textBlockS}>Сервис мониторинга и увольнения сотрудников, совершивших множественные нарушения.</div>
        </div>
        <h4>
            <Link to={"/directors"} className={styles.linkStyle}>Режиссёры </Link>
            <Link to={"/spector/:id"} className={styles.linkStyle}>Спектры по идентификатору</Link>
        </h4>
    </div>
}
export const HeaderD = () =>{
    return <div className={styles.containerHD}>
        <div>
            <h1 className={styles.textBlockD}>DOT.SPECTOR.SYSTEM</h1>
            <div className={styles.textBlockD}>Сервис мониторинга и увольнения сотрудников, совершивших множественные нарушения.</div>
        </div>
        <h4>
            <Link to={"/spectors"} className={styles.linkStyleD}>Спектры </Link>
            <Link to={"/spector/:id"} className={styles.linkStyleD}>Спектры по идентификатору</Link>
        </h4>
    </div>
}

export const HeaderSID = () =>{
    return <div className={styles.containerHSID}>
        <div>
            <h1 className={styles.textBlockSID}>DOT.SPECTOR.SYSTEM</h1>
            <div className={styles.textBlockSID}>Сервис мониторинга и увольнения сотрудников, совершивших множественные нарушения.</div>
        </div>
        <h4>
            <Link to={"/directors"} className={styles.linkStyle}>Режиссёры </Link>
            <Link to={"/spectors"} className={styles.linkStyle}>Спектры</Link>
        </h4>
    </div>
}

export const TextBlockS = () =>{
    return <div className={styles.textS}>
        <div className={styles.paragraphS}>Spectors page</div>
        <div className={styles.paragraphS}>Coming soon...</div>
    </div>
}

export const TextBlockD = () => {
    return <div className={styles.textD}>
        <div className={styles.paragraphD}>Directors page</div>
        <div className={styles.paragraphD}>Coming soon...</div>
    </div>
}
export const TextBlockSID = () => {
    return <div className={styles.textSID}>
        <div className={styles.paragraphSID}>DotSpector :id page</div>
        <div className={styles.paragraphSID}>Coming soon...</div>
    </div>
}
