import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Сontainer.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1>Alexey Darafeichyk</h1>
                    <p>I am Front-End Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}
