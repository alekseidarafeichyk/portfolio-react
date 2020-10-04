import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={`${styleContainer.container} ${style.contactsBlock}`}>
            <Title title={'Contact'}/>
            <form className={style.form}>
                <input type="text" className={style.input}></input>
                <input type="text" className={style.input}></input>
                <textarea className={style.textarea}></textarea>
            </form>
            <button className={style.button}>Отправить</button>
        </div>
    )
}
