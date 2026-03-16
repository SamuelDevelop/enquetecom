import styles from "./Header.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

function Header(){
    return  (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Enquete.Com</h1>
            </div>
            
            <nav className={styles.headerOptions}>
                <a className={styles.option} href="/createAccount"><FaUserAlt /></a>
                <a className={styles.option} href="/trends"><FaFire /></a>
            </nav>
        </header>
    )
}

export default Header;