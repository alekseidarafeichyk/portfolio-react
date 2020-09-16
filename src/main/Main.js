import React from "react";
import style from './Main.module.css'
import styleContainer from '../common/styles/Сontainer.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Alexey Darafeichyk</h1>
                    <p>I am frontend-developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}
