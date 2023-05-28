import React, { useContext } from 'react'
import { Call, Mail, LinkedIn, Instagram } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { ColorSchema } from '../../Utils/GlobalState';
import './SocialIconsStyles.scss'

export default function SocialIcons(props:any) {
    const Colors = useContext(ColorSchema);
    return (
        <div className='SocialIconsWrapper' style={props.SocialIconsStyles} >
            <Tooltip className='ToolTipSocialIcons' title={"9011678069"} >
                <a href={`tel:9011678069`} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Call className='MaterialIcon' style={{ fontSize: 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"shivanibhojane226@gmail.com"} >
                <a href="mailto:shivanibhojane226@gmail.com" className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Mail className='MaterialIcon' style={{ fontSize: 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Connect me on LinkedIn"} >
                <a href="https://www.linkedin.com/in/sahillokhande26" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <LinkedIn className='MaterialIcon' style={{ fontSize: 24 }} />
                </a>
            </Tooltip>
            <Tooltip className='ToolTipSocialIcons' title={"Instagram Profile"} >
                <a href="https://www.instagram.com/shivani_22_06/" target={'_blank'} className={Colors.isDarkMode ? 'socialIcons' : 'SocialIconsDark'}>
                    <Instagram className='MaterialIcon' style={{ fontSize: 24 }} />
                </a>
            </Tooltip>
        </div>
    )
}
