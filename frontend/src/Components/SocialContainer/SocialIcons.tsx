import React, { useContext } from 'react'
import { Mail, LinkedIn, Instagram } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { ColorSchema } from '../../Utils/GlobalState';
import './SocialIconsStyles.scss'

export default function SocialIcons(props: any) {
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
                <a href="mailto:thesunshineladaki@gmail.com?subject=Referred from your travel portfolio.&body=Dear Shivani,%0D%0A%0D%0AMy name is [Your Name], and I recently had an opportunity to explore your travel portfolio. I must say, I was impressed by the wide array of travel options you present. %0D%0A%0D%0AI am writing to express my interest in traveling with you and your team. The destinations and experiences showcased on your portfolio truly caught my attention, and I believe your expertise can help me create memorable adventures.%0D%0A%0D%0AI would appreciate it if you could provide me with more information regarding your travel packages, including destinations, itineraries, and pricing. Additionally, if there are any ongoing promotions or special offers, please do let me know.%0D%0A%0D%0AThank you for your time and consideration. I eagerly await your response. %0D%0A%0D%0ARegards, %0D%0A[Your Name], %0D%0A[Your Contact Number]" className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Mail className='MaterialIcon' style={{ fontSize: screenDimensions.width < 400 ? 16 : screenDimensions.width < 650 ? 20 : 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Connect me on LinkedIn"} >
                <a href="https://www.linkedin.com/in/shivani-b-452932213" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <LinkedIn className='MaterialIcon' style={{ fontSize: screenDimensions.width < 400 ? 16 : screenDimensions.width < 650 ? 20 : 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Instagram Profile"} >
                <a href="https://www.instagram.com/shivani_22_06/" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Instagram className='MaterialIcon' style={{ fontSize: screenDimensions.width < 400 ? 16 : screenDimensions.width < 650 ? 20 : 24 }} />
                </a>
            </Tooltip>
        </div>
    )
}
