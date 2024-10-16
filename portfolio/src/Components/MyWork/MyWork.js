import React from 'react'
import './MyWork.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data  from '../../assets/mywork_data'
import github_logo from '../../assets/pngfind.com-github-logo-png-1766942.png'

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
              <div index={index} className='mywork-indi-container'>
                <img key={index}  src={work.w_img} alt='project'/>
                <p className='work-name'>{work.w_name}</p>
                <p className='work-description'>{work.w_description}</p>
                <div className='tech-stack-box'> Stack :
                {work.w_teckStack.map((stack , id) =>(
                    <span className='tech-stack'>{stack}</span>
                ))}
                </div>
                <div className='work-links'>

                   <a className='demo-link' href={work.w_demoLink} target="_blank" rel="noreferrer noopener"> Demo</a>
                   <a className='github-link' href={work.w_githubLink} target="_blank" rel="noreferrer noopener"><img src={github_logo} alt='github_logo'/>GitHub</a>
                </div>

              </div>
            ))
           }
        </div>

    </div>
  )
}

export default MyWork