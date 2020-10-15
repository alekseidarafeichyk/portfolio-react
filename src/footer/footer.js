import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './footer.module.scss'


export const Footer = () => {
    return (
        <footer>
            <div className={style.footerBlock}>
                <div className={`${styleContainer.container} ${style.footerBlockContainer}`}>
                    <ul className={style.socNetworkContainer}>
                        <li><a href={'#'}>Facebook</a></li>
                        <li><a href={'#'}>VK</a></li>
                        <li><a href={'#'}>Instagram</a></li>
                        <li><a href={'#'}>LinkedIn</a></li>
                    </ul>
                    <p className={style.p}>© 2020 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}