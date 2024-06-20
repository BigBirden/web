import styles from "./Action.module.css"

type AsteroidCardActionProps = {
    isDangerous: boolean;
}

export const AsteroidCardAction = ({isDangerous}:AsteroidCardActionProps) =>{
    return (<div>
        <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>
        <button className={styles.action}>
            <div className={styles.actionText}>На уничтожение</div>
        </button>
    </div>)
}
