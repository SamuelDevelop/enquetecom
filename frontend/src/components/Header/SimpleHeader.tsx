import styles from "./Header.module.css"

function SimpleHeader(){
    return  (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Enquete.Com</h1>
            </div>
        </header>
    )
}

export default SimpleHeader;