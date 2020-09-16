import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './footer.module.css'


export const Footer = () => {
    return (
        <footer>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <h2>Ivan Ivanov</h2>
                <div className={style.socNetworkContainer}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <p>© 2020 beingeorge, All Rights Reserved.</p>
            </div>
        </footer>
    )
}