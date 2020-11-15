import React from "react";
import styles from './Nav.module.scss'
import {Link} from 'react-scroll'

export const Nav = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <Link
                    activeClass={styles.active}
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link
                        activeClass={styles.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Skills</Link>
                    </li>
                <li className={styles.navItem}>
                    <Link
                        activeClass={styles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Projects</Link>
                    </li>
                <li className={styles.navItem}>
                    <Link
                        activeClass={styles.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}>Contact</Link>
                   </li>
            </ul>
        </div>
    )
}
