import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Сontainer.module.css'
import Particles from 'react-particles-js';


export const Main = () => {

    const particlesOpt = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }
    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles}
                       params={particlesOpt} />
            <div className={`${styleContainer.container} ${style.mainBlockContainer}`}>
                <div className={style.text}>
                    <h1>Alexey Darafeichyk</h1>
                    <p>I am Front-End Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}
