import React, { useContext } from 'react'
import { Mail, LinkedIn, Instagram } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { ColorSchema } from '../../Utils/GlobalState';
import './SocialIconsStyles.scss'

export default function SocialIcons(props:any) {
    const Colors = useContext(ColorSchema);
    const [screenDimensions, setScreenDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    React.useEffect(() => {
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
        <div className='SocialIconsWrapper' style={props.SocialIconsStyles} >
            <Tooltip className='ToolTipSocialIcons' title={"shivanibhojane226@gmail.com"} >
                <a href="mailto:shivanibhojane226@gmail.com" className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Mail className='MaterialIcon' style={{ fontSize: screenDimensions.width<400 ? 16 : screenDimensions.width<650 ? 20 : 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Connect me on LinkedIn"} >
                <a href="https://www.linkedin.com/in/shivani-b-452932213" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <LinkedIn className='MaterialIcon' style={{ fontSize: screenDimensions.width<400 ? 16 : screenDimensions.width<650 ? 20 : 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Instagram Profile"} >
                <a href="https://www.instagram.com/shivani_22_06/" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Instagram className='MaterialIcon' style={{ fontSize: screenDimensions.width<400 ? 16 : screenDimensions.width<650 ? 20 : 24 }} />
                </a>
            </Tooltip>
        </div>
    )
}
