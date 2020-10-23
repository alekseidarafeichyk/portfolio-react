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
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My works'}/>
                <div className={style.projects}>
                    <Zoom bottom>
                        <Project style={todolist}
                                 title={'Todolist'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}/>
                    </Zoom>
                    <Zoom bottom>
                        <Project style={social}
                                 title={'Social network'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}