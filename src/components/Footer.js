import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <CodeIcon onClick={()=>window.open('https://leetcode.com/dhairya98/', '_blank')}/>
          <LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/in/dhairya-anchal/', '_blank')}/>
          <GitHubIcon onClick={() =>window.open('https://github.com/dhairya98', '_blank')}/>
        </div>
        <p> &copy; 2023 Dhairya Anchal </p>
    </div>
  )
}

export default Footer