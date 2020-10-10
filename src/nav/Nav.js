import React from "react";
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div >
            <ul className={styles.nav}>
                <li className={styles.navItem}><a href="">Home</a></li>
                <li className={styles.navItem}><a href="">Skills</a></li>
                <li className={styles.navItem}><a href="">Projects</a></li>
                <li className={styles.navItem}><a href="">Contact</a></li>
            </ul>
        </div>
    )
}
