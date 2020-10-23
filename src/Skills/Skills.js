import React from "react";
import style from './Skills.module.scss'
import styleContainer from './../common/styles/Сontainer.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactLogo from "../assets/image/react.png";
import reduxLogo from "../assets/image/redux.png";
import jsLogo from "../assets/image/javascript.png";
import htmlLogo from "../assets/image/html.png";
import cssLogo from "../assets/image/CSS.3png.png";
import tsLogo from "../assets/image/typescript.png";
import Zoom from 'react-reveal/Zoom';

export const Skills = () => {
    const reactStyle = {backgroundImage: `url(${reactLogo})`,};
    const reduxStyle = {backgroundImage: `url(${reduxLogo})`,};
    const jsStyle = {backgroundImage: `url(${jsLogo})`,};
    const htmlStyle = {backgroundImage: `url(${htmlLogo})`,};
    const cssStyle = {backgroundImage: `url(${cssLogo})`,};
    const tsStyle = {backgroundImage: `url(${tsLogo})`,};
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={style.skills}>
                    <Zoom top>
                        <Skill style={reactStyle} title='React'
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    <Zoom top>
                        <Skill style={reduxStyle} title='Redux'
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    <Zoom top>
                        <Skill style={jsStyle} title='JavaScript'
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    <Zoom top>
                    <Skill style={tsStyle} title='Typescript'
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    <Zoom top>
                    <Skill style={htmlStyle} title='HTML'
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    <Zoom top>
                    <Skill style={cssStyle} title='CSS'
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    </Zoom>
                    </div>
            </div>
        </div>
    )
}
