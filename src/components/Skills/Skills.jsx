import React, { useContext } from 'react'
import "./skills.css";
import { translations } from '../language/translations'
import { LangContext } from '../language/LangContext';

function Skills() {
    const { language, setLanguage } = useContext(LangContext);

    const skills = [
        { src: './imgs/skills/html.png', title: 'Html5' },
        { src: './imgs/skills/css.png', title: 'css' },
        { src: './imgs/skills/js.png', title: 'JavaScript' },
        { src: './imgs/skills/sass.png', title: 'Sass' },
        { src: './imgs/skills/bootstrap.png', title: 'Bootstrap' },
        { src: './imgs/skills/tailwindcss.png', title: 'Tailwindcss' },
        { src: './imgs/skills/reactjs.png', title: 'Reactjs' },
        { src: './imgs/skills/nextjs.webp', title: 'Next.js' },
        { src: './imgs/skills/wordpress.png', title: 'WordPress' },
    ];
    return (
        <div className='slider h-72 my-5 p-5 overflow-hidden flex' dir='ltr'>
            <h2 className='section-title my-4'>{translations[language].mySkills}</h2>
            <div className='d-flex gap-5 animate-swipe pb-5' style={{ animationDuration: "9s", cursor: "pointer" }}>
                {
                    [...skills, ...skills, ...skills, ...skills].map(({ src, title }, index) => {
                        return (
                            <div key={index} className='d-flex align-items-center flex-column'>
                                <img src={src} alt={title} width={100} height={100} className='object-cover rounded' />
                                <span>{title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
