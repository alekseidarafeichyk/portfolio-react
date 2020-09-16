import React from "react";
import styleContainer from './../common/styles/Сontainer.module.css'
import style from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.projects}>
                    <Project title={'Название проекта'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}/>
                    <Project title={'Название проекта'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}/>
                </div>
            </div>
        </div>
    )
}