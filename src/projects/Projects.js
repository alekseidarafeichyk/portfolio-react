import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from './../assets/image/social-network.jpg'
import todolistImage from './../assets/image/todolist.png'
import Zoom from 'react-reveal/Zoom';


export const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todolistImage})`,
    };
    return (
        <div className={style.projectsBlock} id={'projects'} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My works'}/>
                <div className={style.projects}>
                    <Zoom bottom>
                        <Project gitRef={'https://alekseidarafeichyk.github.io/Todolist/'}
                            style={todolist}
                                 title={'Todolist'}
                                 description={'In this project i use React/Redux-Toolkit library + TypeScript.Also used Unit tests,storybook,Material-UI.The project can be viewed at gh-pages.Test account - email:free@samuraijs.com,password: free'}/>
                    </Zoom>
                    <Zoom bottom>
                        <Project gitRef={'https://alekseidarafeichyk.github.io/social-network/'}
                            style={social}
                                 title={'Social network'}
                                 description={'In this project i use React/Redux library + TypeScript.Also used Unit tests.The project can be viewed at gh-pages.Test account - email:free@samuraijs.com,password: free'}/>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}