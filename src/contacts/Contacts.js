import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={`${styleContainer.container} ${style.contactsBlock}`}>
            <h2>Контакты</h2>
            <form className={style.form}>
                <input type="text"></input>
                <input type="text"></input>
                <textarea></textarea>
            </form>
            <button>Отправить</button>
        </div>
    )
}
