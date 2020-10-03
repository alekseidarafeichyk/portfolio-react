import React from "react";
import style from './Project.module.scss'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div style={props.style} className={style.projectLogo}>
                <button><a href={''}>Look</a></button>
            </div>
            <div className={style.information}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}