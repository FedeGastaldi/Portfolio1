import React from 'react'
import {SiLinkedin , SiGithub } from "react-icons/si"

const Footer = () => {
  return (
    <div>
        <footer>
            <p>Developed by Federico Gastaldi
                
            </p>

            <a href="https://www.linkedin.com/in/federico-gastaldi-882734234" target="_blank" >
                    <SiLinkedin className='iconfoo'/>
            </a>

            <a href="https://github.com/FedeGastaldi" target="_blank">
                    <SiGithub className='iconfoo'/>
            </a>
            

        </footer>
    </div>
  )
}

export default Footer