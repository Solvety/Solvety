import logo from '../assets/images/Solvety_logo_white.png'
import fbIcon from '../assets/images/fb.svg'
import igIcon from '../assets/images/ig.svg'
import linkedinIcon from '../assets/images/linkedin.svg'

function Footer() {
  return (
<>
    <div className="footer-container">
        
        <div className='flex-items-1'><img src={logo}
                  alt="Qwesty'logo"/></div>
         <div className='social-links'>
        <div className='flex-items'>
           <a href='https://www.facebook.com/profile.php?id=61553683791897'> 
            <img src={fbIcon}
                 alt="Facebook icon"/></a>
        </div>
        <div className='flex-items'>
           <a href="https://www.linkedin.com/company/qwesty-biz/about/"> <img src={linkedinIcon}
                 alt="Linkedin icon"/>
        </a>
        </div>
        <div className='flex-items'>
            <a href="https://www.instagram.com/solvety.info?igsh=OWI5YW9qdjlxYjNz"><img src={igIcon}
                 alt="Instagram icon"/>
                 </a>
        </div>
       
        </div>

        <div className='flex-items-lists'>
            {/* <div className='list-items'>Terms</div>
            <div className='list-items'>help</div>
            <div className='list-items'>about</div>
            <div className='list-items'>privacy</div>
            <div className='list-items'>features</div> */}


        </div>
        
        
        </div>
        <div id="last-item">©{new Date().getFullYear()} Qwesty. All rights reserved.</div>
        </>
  )
}
export default Footer