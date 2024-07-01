import { useState, useEffect, useRef } from "react"
import pic1 from '../assets/images/pic1.jpg'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'
import pic4 from '../assets/images/picc4.png'
import pic5 from '../assets/images/pic5.png'
import avatar from '../assets/images/solvety-avatar.png'

function Main() {
    const [images, setImages] = useState([pic1, pic2, pic3, pic4, pic5])
    const [captions, setCaptions] = useState([{
        name:"onyebuchi",
        story:"A Prop firm founder who's frustrated that his business status isn't upgrading because he doesn't know his users, what they want and why.",

    }, {
        name:"CryptoNebula",
        story: "A Web 3 enthusiast who's passionate about investing in Web 3 projects by helping them with useful data that they need."
    }, {
        name: "A'isha",
        story:"A Marketing executive looking for how to access a large pool of Nigerian research respondents so that he can get the most representative sample possible."
    },{
        name:"Daniel",
        story: "A celebrity bored and looking for a fun way to kill time while waiting for his flight to board."
    },{
        name:"Alice",
        story:"A girl that's angry with traditional market research platforms and feels unappreciated for the data shared."
    }
        
    ])

    const [convos, setConvos] = useState([
        "We understand that sharing data can sometimes feel like a chore, so that's why Solvety is designed to make it fun! We know that users have busy lives, so we want to make it easy for them to share their data without feeling like they're sacrificing their time.",
        "We want them to understand they're getting something out of it, and that they're making a valuable contribution to the businesses that use their data. Therefore, our product helps a targeted audience share data through a fun and engaging process, while also ensuring that the data is useful and reliable. We're seeking a win-win for everyone!",
        "That is to say that, On one hand, users get to have fun while sharing useful data, and on the other hand, businesses get accurate and reliable data to help them make their products and services worthwhile."

    ])

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
     
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    
    return () => clearInterval(intervalId);
  }, []); 


  const [visibleConvos, setVisibleConvos] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    // Start observing the first item in the list
    if (convos.length > 0) {
      observer.current.observe(document.getElementById(`convo-item-0`));
    }

    // Cleanup when component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [convos]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index, 10);
        setVisibleConvos((prevVisibleConvos) => [
          ...prevVisibleConvos,
          convos[index],
        ]);
        observer.current.unobserve(entry.target);

        // Start observing the next item in the list
        if (index + 1 < convos.length) {
          observer.current.observe(document.getElementById(`convo-item-${index + 1}`));
        }
      }
    });
  };



    return (
    <div className="third-container">
      <h3>Who we're seeking to <span id="diff">help </span>and More</h3>
      <div className="image-slider-container ">
      <div className="image-slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="caption">
        <h3>{captions[currentIndex].name}</h3>
        <p>{captions[currentIndex].story}</p>
      </div>
      </div>
    </div>
    
    <div className="convo-list">
      <div id="solvety-avatar"><img src={avatar}/></div>
      <p id="first-greeting"> Hello!, Solvety here 👋</p>
      {convos.map((convo, index) => (
        <div
          key={index}
          id={`convo-item-${index}`}
          className={`convo-item ${visibleConvos.includes(convo) ? 'visible' : ''}`}
          data-index={index}
        >
           
          <p>{convo}</p>
        </div>
      ))}
    </div>

    </div>
  )
}
export default Main