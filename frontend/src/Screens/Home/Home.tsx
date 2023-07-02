import React, { useContext, useRef, useEffect, useState } from 'react';
import './Home.scss';
import { ColorSchema } from '../../Utils/GlobalState';
import HomeCarousal from '../../Components/HomeCarousal/HomeCarousal';
import { useTypewriter } from 'react-simple-typewriter'
import ProfilePicture from '../../assets/Images/ProfilePicture.jpeg'

const Home: React.FC = () => {
  const Colors = useContext(ColorSchema);
  const [isProfileVisible, setisProfileVisible] = useState(false)
  const [text] = useTypewriter({
    words: ['Trekker | Traveller | Explorer', 'Human Resource'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 35,
    delaySpeed: 2000
  });
  const ProfileRef = useRef<HTMLDivElement>(null);
  const CarousalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(window.scrollY,'123')
    let ProfileObserver = new IntersectionObserver((entries) => {
      setTimeout(() => {
        setisProfileVisible(entries[0].isIntersecting)
      }, 25);
    })
    if (ProfileRef.current) {
      ProfileObserver.observe(ProfileRef.current)
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
      {/* <TopNavBar /> */}
      <div ref={ProfileRef} className={`ProfileWraper ${isProfileVisible ? 'FadeYIn' : ''} `} >
        <div className='Intro ' >
          <span style={{ color: Colors.newVar.TXTColor }} >Hi there,</span>
          <span style={{ color: Colors.newVar.TXTColor }} >I am <span  >Shivani</span></span>
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
      {/* <div>
        <FooterComponent/>
      </div> */}
    </div>
  );
};

export default Home;
