import React from 'react'
import './Footer.css'
import github_logo from '../../assets/pngfind.com-github-logo-png-1766942.png'
import linkedin_logo from '../../assets/pngfind.com-linkedin-png-533561.png'
import instagram_logo from '../../assets/pngfind.com-instagram-png-white-2773517.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-right">
                <p>Visit my social profile and get connected</p>
                <div className="footer-connect">
                    
                    <div className="github-connect">
                        <img src={github_logo} className='sociallogo' alt='githublogo'/>
                        <span>GitHub</span>
                    </div>
                    <div className="linkedin-connect">
                        <img src={linkedin_logo}className='sociallogo' alt='linkedinlogo'/>
                        <span>LinkedIn</span>
                    </div>

                    <div className="instagram-connect">
                        <img src={instagram_logo} className='sociallogo' alt='instalogo'/>
                        <span>Instagram</span>
                    </div>
                </div>
                
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024.&nbsp;  Designed by Sanjay R. &nbsp; All right reserved.</p> 
        </div>

    </div>
  )
}

export default Footer