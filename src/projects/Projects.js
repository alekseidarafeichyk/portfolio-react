import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialNetworkImage from './../assets/image/social-network.jpg'

export const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialNetworkImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My works'}/>
                <div className={style.projects}>
                    <Project
                        title={'Todolist'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}/>
                    <Project style={social}
                             title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}/>
                </div>
            </div>
        </div>
    )
}