import '../assets/css/style.css';
import Home from './Home'
import Logo from '../assets/images/Solvety_logo_white.png';
import arrow from '../assets/images/down-arrow.png'
import bars from '../assets/images/bars.svg'
import x from '../assets/images/x.svg';
import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Main from './Main';
import { RiMenu3Fill } from "react-icons/ri";

function Header() {


    const [barClicked, setBarClicked]= useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClick = ()=>{
      setBarClicked(prevState=> !prevState)
      
    }

    const closeAnswers = () => {
      // Close the dropdown bar in small devices when the window is scrolled
     setBarClicked(false);
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [barClicked]);
    
    const handleOutsideClick = (event) => {
      if (!event.target.closest('#medi')) {
        closeAnswers();
      }
    };


    useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
 
  return (
    <>
   
   <div id='medi'>
   <div className='nav-medium-devices'>
      
      <Link to='/' className='small-logo'><img src={Logo}></img></Link>
      
      <button onClick={handleClick} 
                         id="dropdown-btn" style={{color:'#fff'}}><RiMenu3Fill size={'2.5rem'}/></button>
                         </div>
           
           {barClicked &&              
          <nav id="nav-bar-small">
            
          <Link to='/' className='items logo'><img src={Logo}></img></Link>
          {
            barClicked&&  <IoMdClose id="close-bar" onClick={handleClick} size={'2rem'}/>
          } 
          <Link to='/researcher/home'className='items' id="first-item">about us</Link>
          <Link to='/signedUp/rewards'className='items' id="second-item">  contact us</Link>
          <Link to='/'className='items' id="third-item">  services<TiArrowSortedDown id="arrow" /></Link>
         <Link to='/login'className='items' id="fourth-item">LogIn</Link>
         
      </nav>}              
      </div>       
        <nav id="nav-bar">
            
            <Link to='/' className='items logo'><img src={Logo}></img></Link>
         
            <Link to='/researcher/home' className='items' id="first-item">about us</Link>
            <Link to='/signedUp/rewards' className='items' id="second-item">contact us</Link>
            <Link to='/' className='items' id="third-item">services<TiArrowSortedDown id="arrow" /></Link>
            <Link to='/login' className='items' id="fourth-item">LogIn</Link>
           
        </nav>

   
        <Routes>
            <Route path='*' element={<Home/>}></Route>
        </Routes>
        </>
  )
}
export default Header