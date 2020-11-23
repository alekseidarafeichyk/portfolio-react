import React from "react";
import style from './Skills.module.scss'
import styleContainer from './../common/styles/Сontainer.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactLogo from "../assets/image/react.png";
import reduxLogo from "../assets/image/redux.png";
import jsLogo from "../assets/image/javascript.png";
import Zoom from 'react-reveal/Zoom';

export const Skills = () => {
    const reactStyle = {backgroundImage: `url(${reactLogo})`,};
    const reduxStyle = {backgroundImage: `url(${reduxLogo})`,};
    const jsStyle = {backgroundImage: `url(${jsLogo})`,};


    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={style.skills}>
                    <Zoom top>
                        <Skill style={reactStyle} title='React'
                               description={'I`m  usage of React library.Functional components: hooks(useState, useEffect, useReducer, etc).' +
                               'Class components : life cycle methods,HOCs,local state,mapStateToProps,mapDispatchToProps. For state managment i use React-Redux library or Redux-Toolkit.I work in a bundle React + Typescript'}/>
                    </Zoom>
                    <Zoom top>
                        <Skill style={reduxStyle} title='Redux'
                               description={'State management, Middlewares, Redux Thunk knowledge, reducers, actions, createStore, dispatch,Flux-workflow'}/>
                    </Zoom>
                    <Zoom top>
                        <Skill style={jsStyle} title='JavaScript'
                               description={'I have knowledge of JavaScript.Understanding of function(expressions,declaration,arrow), Deep array and object copying,classes,promises,recursion,closure'}/>
                    </Zoom>
                    </div>
            </div>
        </div>
    )
}
