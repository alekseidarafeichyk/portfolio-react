import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
    return (
        <footer>
            <div className={style.footerBlock}>
                <div className={`${styleContainer.container} ${style.footerBlockContainer}`}>
                    <ul className={style.socNetworkContainer}>
                        <li><a href={'#'}><FontAwesomeIcon className={style.icon} icon={faFacebook } /></a></li>
                        <li><a href={'#'}><FontAwesomeIcon className={style.icon} icon={faVk } /></a></li>
                        <li><a href={'#'}><FontAwesomeIcon className={style.icon} icon={faInstagram} /></a></li>
                        <li><a href={'#'}><FontAwesomeIcon className={style.icon} icon={faLinkedin} /></a></li>
                        <li><a href={'#'}><FontAwesomeIcon className={style.icon} icon={faTelegram} /></a></li>
                    </ul>
                    <p className={style.p}>© 2020 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}