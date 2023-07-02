import { useContext, useState, useEffect } from 'react'
import './AboutStyles.scss'
import { ColorSchema } from '../../Utils/GlobalState'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProfileImage from '../../assets/Images/shivaniProfile.jpg';
import Divider from '../../Components/CommonDivider/Divider';

export default function About() {
  const Colors = useContext(ColorSchema);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='AboutWrapper' style={{ backgroundColor: Colors.newVar.BGColor }} >
      <Box sx={{ marginTop: '5%' }} >
        <Grid className='GridContainer' container flexDirection={screenDimensions.width < 950 ? 'column-reverse' : 'row'} spacing={screenDimensions.width < 950 ? 2 : 3} alignItems={'center'} justifyContent={'center'} >
          <Grid className='firstGridItem' item lg={6} md={6} sm={12} display={'flex'} alignItems={screenDimensions.width > 950 ? 'flex-end' : 'center'} flexDirection={'column'} >
            <h2  >Wanna know about me ?</h2>
            <span style={{ color: Colors.newVar.TXTColor }}  >
              <span> At the age of 7, I began my journey in trekking,
                igniting a passion that has fueled my travels for over 15 years.
                As a Human Resource Manager by profession, I lead a corporate life,
                but my true calling lies in the nomadic pursuit of travel and trekking.
              </span><br /><br />
              <span>I am a traveler, trekker, writer, photographer, and storyteller.
                My insatiable wanderlust and deep love for exploration have taken me to remote corners of the world,
                unearthing remarkable stories along the way.
              </span><br /><br />
              <span>
                As an avid traveler, I strongly believe in the power of slow, meaningful, and sustainable travel.
                I immerse myself in local cultures, connect with communities, venture off the beaten path,
                and strive to minimize my environmental impact. My ultimate goal is to experience as much of this world as
                possible while leaving a positive footprint.
              </span>
              {/* <span>- x - - -x</span> */}
            </span>
          </Grid>
          <Grid className='secondGridItem' item lg={6} md={6} sm={12} display={'flex'} alignItems={'flex-start'} flexDirection={'column'} >
            <img src={ProfileImage} alt="" className='ProfileImage' />
          </Grid>
        </Grid>
      </Box>
      <Divider />

    </div>
  )
}
