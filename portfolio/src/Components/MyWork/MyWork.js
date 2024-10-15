import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data  from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
               <h1>My Latest Work</h1>
               <img src={theme_pattern} alt=""/>
        </div>

        <div className="mywork-container">
           {
            mywork_data.map((work , index)=>(
              <div index={index}>
                <img key={index}  src={work.w_img} alt='project'/>
                <p>work.w_name</p>
                <p>work.w_description</p>
                <div>
                {work.w_teckStack.map((stack , id) =>(
                    <span>{stack}</span>
                ))}
                </div>

                <a className='hero-connect' href={work.w_demoLink} target="_blank" rel="noreferrer noopener"> Demo</a>
           <a className='hero-resume' href={work.w_githubLink} target="_blank" rel="noreferrer noopener">GitHub</a>
                </div>
            ))
           }
        </div>

    </div>
  )
}

export default MyWork