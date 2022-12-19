import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects Section</h1>
        <div className='projectList'>
            {/* <ProjectItem name='Tinder Clone' image={'https://i.imgur.com/7z3EWEE.jpg'}/>
            <ProjectItem name='Spotify Clone' image={'https://reactjsexample.com/content/images/2022/02/Code-2022-01-53-49.jpg'}/>
            <ProjectItem name='Weather App' image={'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/d4/41/6b/d4416bcf-73b8-a8fc-9452-f27ba9f78301/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'}/>
            <ProjectItem name='To-do App' image={'https://images.ctfassets.net/lzny33ho1g45/759cOtf1oirOpFxvisNPNB/cd26ca1d1251d16bdc57cc940b987a88/Best_Mac_to_do_list_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760'}/>
            <ProjectItem name='Netflix Clone' image={'https://cdn3.f-cdn.com//files/download/128385152/netflix1.jpg?width=780&height=401&fit=crop'}/>
            <ProjectItem name='Twitter Clone' image={'https://user-images.githubusercontent.com/54351909/160769519-f2ebbc99-afa2-4071-badd-9c28fbf9e17c.png'}/>
            <ProjectItem name='Airbnb Clone' image={'https://reactjsexample.com/content/images/2021/09/Airbnb.jpg'}/> */}

            {ProjectList.map((project,id)=>{
              return <ProjectItem name={project.name} image={project.image} id={id}/>
            })}
            
        </div>
    </div>
  )
}

export default Projects