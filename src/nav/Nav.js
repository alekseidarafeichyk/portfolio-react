import React from "react";
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <div >
            <ul className={styles.nav}>
                <li className={styles.navItem}><a href="">Главная</a></li>
                <li className={styles.navItem}><a href="">Скиллы</a></li>
                <li className={styles.navItem}><a href="">Проекты</a></li>
                <li className={styles.navItem}><a href="">Контакты</a></li>
            </ul>
        </div>
    )
}
