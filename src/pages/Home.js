import React from 'react'
import '../styles/Home.css'
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Dhairya Anchal</h2>
            <div className='prompt'>
                <p>
                    A Software Engineer with a passion for learning and creating.
                </p>
                <div className='prompter'>
                <CodeIcon onClick={()=>window.open('https://leetcode.com/dhairya98/', '_blank')}/>
                <LinkedInIcon onClick={()=>window.open('https://www.linkedin.com/in/dhairya-anchal/', '_blank')}/>
                <GitHubIcon onClick={() =>window.open('https://github.com/dhairya98', '_blank')}/>
                <MailIcon onClick={() =>window.open('mailto:dharya.anchal@gmail.com', '_blank')}/>
                </div>

            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'><h5>Linux</h5></li>
                <li className='item'><h5>Azure</h5></li>
                <li className='item'><h5>ReactJS and JavaScript</h5></li>
                <li className='item'><h5>Firebase</h5></li>
                <li className='item'><h5>Python</h5></li>
                <li className='item'><h5>Logic Building and Problem Solving</h5></li>
                <li className='item'><h5>AWS</h5></li>
                <li className='item'><h5>HTML and CSS</h5></li>
            </ol>
        </div>
    </div>
  )
}

export default Home