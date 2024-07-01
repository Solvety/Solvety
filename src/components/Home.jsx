import vid from '../assets/images/vid.png'
import womanPic from '../assets/images/woman.png'
import connector from '../assets/images/connector.png'
import Main from './Main';
import { useState, useEffect } from 'react'
import Faq from './Faq';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import video from '../../src/assets/Solvtey_vid/vid.mp4';

function Home() {
  const [isTouched, setIsTouched] = useState(false);
  const[isHovoured, setIsHovoured] = useState({
                  problemOne:false,
                  problemTwo:false,
                  problemThree:false
  })
  const solutions = [{
    problem: ' "This form is so long, I\'m starting'+'\n'+' to think I\'m applying for a job."',
    identity:'A typical Participant\'s day',
    solution: 'Solvety is so fun, you\'ll forget'+'\n'+'  you\'re giving feedback'
  },
  {
    problem:'"These responses are so empty, that'+'\n'+'  I wonder if the participants are forced to respond."',
    identity:'A typical Product Manager\'s day',
    solution:'Solvety is the only way to'+'\n'+'  find out what your users really think, even if they don\'t want to tell you.'
 
  },
  {
    problem: '“I know what my target audience want'+'\n'+'  but but it\'s still not kinda helpful”',
    identity: 'A typical Content Strategist\'s day',
    solution:'Solvety not only tells you'+'\n'+'  What but also tells you Why'
     }
]
  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouched(true);
    
    };
   window.addEventListener('touchstart', handleTouchStart);

   
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []); 
  
  const handleHover = ()=>{
    setIsHovoured()
  }
 

  return (  
    
    <>
    
    <div id="grid-container-first">
      <div id="desc">
        <h1 id="title">
            User <span> research </span> has never been so fun and fast
        </h1>
      <p>
    Solvety help UX Researchers get useful data in order to make the market
     desire their product while helping the participants enjoy and get rewards for the data they share
   </p>
    </div>

    <div id="vid" style={{ border: 'none', padding: '0' }}>
      <ReactPlayer 
          url={video}
          playing={false}
          controls={true}
          width={'90%'}
          height={'auto'}
          className='vid-player'
         
      />
    </div>

    <Link to='/SignUp'><div id="btn-join">
      <button id="btn"><span>Join Us</span></button> 
    </div></Link>

    </div>

    <div id="grid-container-second">
      <div id="heading">
        <p>Traditional Market/UX Research Platforms</p>
      </div>

      <div id="item2">
        <img src={womanPic} />
        </div>
        <div id="item3">
      Solvety
      </div>
      <div className='item-box first'>
        <div className='first-item'
             onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemOne:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemOne:false})}}>
       {isHovoured.problemOne? <p className='hovoured'>{solutions[0].identity}</p>:
        <p>{solutions[0].problem}</p>}</div>

        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[0].solution}</p>
          </div>  

      </div>

      <div className='item-box second'>
        <div className='first-item'onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemTwo:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemTwo:false})}}>
       {isHovoured.problemTwo? <p className='hovoured'>{solutions[1].identity}</p>:
        <p>{solutions[1].problem}</p>}</div>

        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[1].solution}</p>
          </div>  

      </div>

      <div className='item-box third'>
        <div className='first-item'onMouseEnter={()=>{
              setIsHovoured({...isHovoured, problemThree:true})
             }}
             onMouseLeave={()=>{
              setIsHovoured({...isHovoured, problemThree:false})}}>
       {isHovoured.problemThree? <p className='hovoured'>{solutions[2].identity}</p>:
        <p>{solutions[2].problem}</p>}</div>
        <div id="connector"> <img src={connector} /></div>
        <div className='second-item'>
          <p>{solutions[2].solution}</p>
          </div>  

      </div>
        {/* {
           solutions.map((solutione,index) =>{
           
          return(<div key={index}>
              <Convos key={index} solutions={solutione} index={index}/>
            </div>
           )})
        } */}

      

      
    </div>
    {<Main/>}
    {<Faq/>}
    {<Footer/>}
    </>
  )
}

// function Convos(props){
  
//   return(
//     <>
//     <div id="flex-items" 
//          style={{translate:props.index==1?'200px':props.index==2?'600px':'0'}}
//         >
//   <p id="first-displayed">
    
//    {props.solutions.problem}
//   </p>
//   <p id="on-hover">
//     {props.solutions.identity}
//   </p>
//   <img src={connector} />
//   <p >
//   {props.solutions.solution}
//   </p>
//   </div>
//   </>
//   )
  
// }



export default Home