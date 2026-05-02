import { useState } from "react";
import styles from "./Header.module.css"
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

function Header(){

    const [isUserLogado, setIsUserLogado] = useState<boolean>(false);

    return  (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Enquete.Com</h1>
            </div>
            
            {
                isUserLogado ?
                <nav className={styles.headerOptions}>
                    <a className={styles.option} href="/trends"><FaFire /></a>
                    <a className={styles.option} href="/createAccount"><FaUserAlt /></a>
                </nav> 
                :
                <nav className={styles.headerOptions}>
                    <a className={styles.option} href="/trends"><FaFire /></a>
                    <a className={styles.option} href="/createAccount"><FaUserAltSlash /></a>
                </nav>            
            }
            
        </header>
    )
}

export default Header;