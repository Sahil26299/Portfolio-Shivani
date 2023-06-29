import './SplashScreen.scss'; // Import CSS for styling
import { useTypewriter } from 'react-simple-typewriter'

const SplashScreen = () => {
  const [text] = useTypewriter({
    words: ['...'],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 0,
    delaySpeed: 1000
  });
  return (
    <div className="splash-screen">
      <div className='loading-box' />
      <h1 className='' >Loading{text}</h1>
    </div>
  );
};

export default SplashScreen;
