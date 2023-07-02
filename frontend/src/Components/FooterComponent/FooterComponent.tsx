import { useContext } from 'react';
import './FooterStyles.scss'
import { ColorSchema } from '../../Utils/GlobalState'
import SocialIcons from '../SocialContainer/SocialIcons';

export default function FooterComponent() {
  const Colors = useContext(ColorSchema);
  return (
    <div className='FooterContainer' >
        <div>
          <span style={{color:Colors.newVar.TXTColor}} >Copyright &copy; 2023 Shivani Bhojane. All rights reserved. </span>
        </div>
        <div>
          <SocialIcons SocialIconsStyles={{display:'flex'}} />
        </div>
    </div>
  )
}
