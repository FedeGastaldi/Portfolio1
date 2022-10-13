import React from 'react'
import {
    DiJsBadge,
    DiGithubBadge,
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiReact,
    DiPython,
    DiBootstrap,


  } from "react-icons/di";

  import { SiFigma, SiTailwindcss, SiVite, SiPowerbi } from "react-icons/si";

const Skills = () => {
  return (
    <section id='skills-h2'>
        <h2>Habilidades</h2>

        <div id='skills'>
            <DiHtml5 className='icon'/>
            <DiCss3 className='icon'/>
            <DiJsBadge className='icon'/>
            <DiBootstrap className='icon'/>
            <DiReact className='icon'/>
            <DiNodejsSmall className='icon' />
            <SiVite className='icon' />
            <SiTailwindcss className='icon' />
            <SiFigma className='icon' />
            <DiPython className='icon' /> 
            <SiPowerbi className='icon' />
            <DiGithubBadge className='icon' />

        </div>
    </section>
  )
}

export default Skills