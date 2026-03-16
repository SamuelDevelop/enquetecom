import styles from "./Card.module.css"

type Props = {
  children: React.ReactNode
}

function Card({ children }: Props){
    
    return (
    <div className={styles.Card}>
        {children}
    </div>
    )
}

export default Card