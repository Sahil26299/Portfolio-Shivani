import React, { useContext, useRef, useEffect, useState } from 'react';
import './Home.scss';
import { ColorSchema } from '../../Utils/GlobalState';
import TopNavBar from '../../Components/TopNavBar/NavBar';
import HomeCarousal from '../../Components/HomeCarousal/HomeCarousal';
import { useTypewriter } from 'react-simple-typewriter'
import ProfilePicture from '../../assets/Images/PrifileImage.jpeg'

const Home: React.FC = () => {
  const Colors = useContext(ColorSchema);
  const [isProfileVisible, setisProfileVisible] = useState(false)
  const [text] = useTypewriter({
    words: ['Traveller', 'Human Resource', 'Explorer', 'Trekker'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000
  });
  const ProfileRef = useRef<HTMLDivElement>(null);
  const CarousalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(window.scrollY,'123')
    let CarousalObserver = new IntersectionObserver((entries) => {
      setisProfileVisible(entries[0].isIntersecting)
    })
    if (ProfileRef.current) {
      CarousalObserver.observe(ProfileRef.current)
    }
  }, [])
  const handleScroll = () => {
    if (isProfileVisible && window.scrollY<100) {
      CarousalRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <div className='Wrapper' style={{ backgroundColor: Colors.newVar.BGColor }}>
      <TopNavBar />
      <div ref={ProfileRef} className='ProfileWraper' >
        <div className='Intro' >
          <span style={{ color: Colors.newVar.TXTColor }} >hi, i am</span>
          <span  >shivani</span>
          <hr />
          <p className="typewriter" style={{ color: Colors.newVar.TXTColor }} >{text}<span className='Cursor' style={{ color: Colors.newVar.TXTColor }} >|</span></p>
        </div>
        <div className='ProfilePictureContainer'>
          <img src={ProfilePicture} className='ProfilePicture' />
        </div>
      </div>
      <div className='ScrollDownButtonContainer' >
        <div className='ScrollDownButton' style={{ borderColor: Colors.newVar.TXTColor }} onClick={() => handleScroll()} >
          <div className='innerButton' style={{ backgroundColor: Colors.newVar.TXTColor }} />
        </div>
      </div>
      <div ref={CarousalRef} >
        <HomeCarousal />
      </div>
    </div>
  );
};

export default Home;
