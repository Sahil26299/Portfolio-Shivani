import React, { useContext } from 'react';
import './Home.scss';
import { ColorSchema } from '../../Utils/GlobalState';
import TopNavBar from '../../Components/TopNavBar/NavBar';
import HomeCarousal from '../../Components/HomeCarousal/HomeCarousal';

const Home: React.FC = () => {
  const Colors = useContext(ColorSchema);
  return (
    <div className='Wrapper' style={{ backgroundColor: Colors.newVar.BGColor }}>
      <TopNavBar />
      <HomeCarousal  />
    </div>
  );
};

export default Home;
