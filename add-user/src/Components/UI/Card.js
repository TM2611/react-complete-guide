
import styles from './Card.module.css'

const Card = (props) => {
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div> //setup custom component to accept external classNames
}

export default Card;