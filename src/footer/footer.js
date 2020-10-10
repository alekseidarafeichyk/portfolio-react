import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './footer.module.css'


export const Footer = () => {
    return (
        <footer>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <ul className={style.socNetworkContainer}>
                    <li><a>Facebook</a></li>
                    <li><a>VK</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>1sdfsdfdsfdsfds</a></li>
                </ul>
                <p className={style.p}>© 2020 beingeorge, All Rights Reserved.</p>
            </div>
        </footer>
    )
}