import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams()
    const project= ProjectList[id]
    // const uri=ProjectList[id].github
    const nav=useNavigate()
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            {console.log(project.github)}
            <GitHubIcon className='clicker1' onClick={()=>window.open(project.github, '_blank')}/>
            <IosShareIcon className='clicker2' onClick={()=>window.open(project.url, '_blank')}/>
        </div>
  )
}

export default ProjectDisplay