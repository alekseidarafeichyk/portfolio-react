import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Сontainer.module.css'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import myPhoto from './../assets/image/myphoto.jpg'
import socialNetworkImage from "../assets/image/social-network.jpg";


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
    const photo = {
        backgroundImage: `url(${myPhoto})`,
    }

    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles}
                       params={particlesOpt}/>
            <div className={`${styleContainer.container} ${style.mainBlockContainer}`}>
                <div className={style.text}>
                    <h1>Alexey Darafeichyk</h1>
                    <p><ReactTypingEffect
                        text={"I am Front-End Developer"}
                        speed={100}
                        typingDelay={500}
                        eraseDelay={2000}
                    /></p>
                </div>
                <Tilt className="Tilt"  options={{max:25}} style={{zIndex: 1}} >
                    <div style={photo} className={style.photo}>

                    </div>
                </Tilt>
            </div>
        </div>
    )
}
