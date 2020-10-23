import React, {useState} from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';



export const Contacts = () => {
    const [personalDataUser,setPersonalDataUser] = useState({
        name:'',
        email:'',
        number: '',
        message:'',
    })


    const handleNameChange = (e) => {
        setPersonalDataUser({...personalDataUser,name: e.currentTarget.value})
    }
    const handleEmailChange = (e) => {
        setPersonalDataUser({...personalDataUser,email: e.currentTarget.value})
    }
    const handleNumberChange = (e) => {
        setPersonalDataUser({...personalDataUser,number: e.currentTarget.value})
    }
    const handleMessageChange = (e) => {
        setPersonalDataUser({...personalDataUser,message: e.currentTarget.value})    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://message-nodejs-server.herokuapp.com/sendMessage',personalDataUser)
    }

    return (<div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlockContainer}`}>
                <Title title={'Contact'}/>
                <Zoom left>
                    <form onSubmit={handleSubmit} className={style.form}>
                        <input placeholder={'Name'}
                               type="text"
                               className={style.input}
                               value={personalDataUser.name}
                               onChange={handleNameChange}
                        />
                        <input placeholder={'Email'}
                               type="text"
                               className={style.input}
                               value={personalDataUser.email}
                               onChange={handleEmailChange}
                        /><input placeholder={'Number'}
                                 type="text"
                                 className={style.input}
                                 value={personalDataUser.number}
                                 onChange={handleNumberChange}
                    />
                        <textarea placeholder={'Message'}
                                  className={style.textarea}
                                  value={personalDataUser.message}
                                  onChange={handleMessageChange}
                        />
                        <button className={style.button}>Send message</button>
                    </form>
                </Zoom>
            </div>
        </div>
    )
}
