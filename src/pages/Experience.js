import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@mui/icons-material'
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2016-2020' 
            iconStyle={{background: '#3e497a', color: '#fff'}}
            icon={<School />}>
                <h3 className='vertical-timeline-element-title'>Panipat Institute of Engineering and Technology</h3>
                <p>Bachelor of Technology (Computer Science)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2021-2022' 
            iconStyle={{background: '#e9d35b', color: '#fff'}}
            icon={<WorkIcon />}>
                <h3 className='vertical-timeline-element-title'>Tech Mahindra Limited</h3>
                <p>Associate Software Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className='vertical-timeline-element--education' 
            date='2022-Present' 
            iconStyle={{background: '#e9d35b', color: '#fff'}}
            icon={<WorkIcon />}>
                <h3 className='vertical-timeline-element-title'>Tech Mahindra Limited</h3>
                <p>Software Engineer</p>
            </VerticalTimelineElement>        
        </VerticalTimeline>
    </div>
  )
}

export default Experience