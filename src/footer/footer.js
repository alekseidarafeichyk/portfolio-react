import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import Zoom from 'react-reveal/Zoom';



export const Footer = () => {
    return (
        <footer>
            <div className={style.footerBlock}>
                <div className={`${styleContainer.container} ${style.footerBlockContainer}`}>
                    <ul className={style.socNetworkContainer}>
                        <Zoom top>
                            <li><a href={'https://www.instagram.com/leshatrikster/?hl=ru'}><FontAwesomeIcon className={style.icon} icon={faInstagram}/></a></li>
                            <li><a href={'https://vk.com/id516989152'}><FontAwesomeIcon className={style.icon} icon={faVk}/></a></li>
                            <li><a href={'https://www.linkedin.com/in/aliaksei-darafeichyk-03b6611a4/'}><FontAwesomeIcon className={style.icon} icon={faLinkedin}/></a></li>
                            <li><a href={'https://t.me/leshatrikster'}><FontAwesomeIcon className={style.icon} icon={faTelegram}/></a></li>
                            <li><a href={'https://www.facebook.com/lesha.dorofeichik'}><FontAwesomeIcon className={style.icon} icon={faFacebook}/></a></li>
                        </Zoom>
                    </ul>
                    <p className={style.p}>© 2020 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}