import React, { useContext, useState, useEffect } from 'react';
import './ContactUsStyles.scss'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SocialIcons from '../../Components/SocialContainer/SocialIcons';
import BackgroundImage from '../../assets/Images/ContactUsBackground.jpeg';
import { LazyBackground } from '../../Components/LazyLoadBackgroundImage/LazyBackgroundImage';
import { ColorSchema } from '../../Utils/GlobalState';
import { Mail, SendRounded, AccountCircle, Message, Error } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Radio } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function ContactUs() {
  const Colors = useContext(ColorSchema);
  const [message, setmessage] = useState<string>('')
  const [messageError, setmessageError] = useState<string | null>(null);
  const [Name, setName] = useState<string>('')
  const [NameError, setNameError] = useState<string | null>(null);
  const [Email, setEmail] = useState<string>('')
  const [EmailError, setEmailError] = useState<string | null>(null);
  const [showLoader, setshowLoader] = useState<boolean>(false);
  const [showForm, setshowForm] = useState<boolean>(false)

  const [screenDimensions, setScreenDimensions] = React.useState({
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

  const ValidateMessage = (msg: string) => {
    if (msg) {
      setmessageError(null);
      return true
    }
    else {
      setmessageError('Required !!');
      return false;
    }
  }

  const ValidateName = (name: string) => {
    if (name) {
      setNameError(null);
      return true
    }
    else {
      setNameError('Required !!');
      return false;
    }
  }

  const notifySuccess = (msg: string) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  // const notifyWarn = (msg: string) => {
  //   toast.warn(msg, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   })
  // }

  const notifyError = (msg: string) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  const ValidateEmail = (email: string) => {
    const re = /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    if (email) {
      if (re.test(email)) {
        setEmailError(null);
        return true
      }
      else {
        setEmailError('Required !!');
        return false
      }
    }
    else {
      setEmailError('Required !!');
      return false;
    }
  }

  const SendEmail = () => {
    setshowLoader(true);
    axios({
      method: 'POST',
      url: 'http://192.168.43.54:5000/send-email',
      data: {
        name: Name,
        email: Email,
        message: message
      }
    }).then((response) => {
      console.log(response.data, 'api response');
      setshowLoader(false);
      if (response.status == 200) {
        setmessage("");
        setName("");
        setEmail("");
        notifySuccess(response?.data?.message);

      }
    }).catch((error) => {
      setshowLoader(false);
      console.log(error, 'api error');
      const message_ = error?.response?.data?.message ? error?.response?.data?.message : 'Something went wrong!'
      notifyError(message_)
    })
  }

  const OnSendClick = (e: React.FormEvent<HTMLFormElement>) => {

    // prevent default; prevents page reload or a redirect to a different page.
    // Browser by default does this while form submission to submit the form data. 
    e.preventDefault();
    if (ValidateEmail(Email) && ValidateName(Name) && ValidateMessage(message)) {
      SendEmail()
    }
    else {
      notifyError('Please enter the details!')
      ValidateName(Name)
      ValidateMessage(message)
    }
  }


  const style = {
    display: screenDimensions.width < 900 && !showForm ? 'none' : 'block',
  };
  const arrowStyle = {
    transform: screenDimensions.width < 900 ? showForm ? 'rotate(270deg)' : 'rotate(90deg)' : 'rotate(0deg)',
  }

  return (
    <div className={'ContactWrapper'}  >
      <Box>
        <Grid container alignItems={'center'} justifyContent={'center'} >
          <Grid item lg={5} md={5} sm={12} xs={12} display={'flex'} alignItems={'flex-start'} flexDirection={'column'} >
            <LazyBackground className={'BGImageWrapper'} src={BackgroundImage} placeholder={BackgroundImage} >
              <div className='BGImageInnerWrapper' >
                <div className='BGImageCard' >
                  <h2 style={{ color: Colors.newVar.TXTColor }} >Come Travel With Me!</h2>
                  <SocialIcons SocialIconsStyles={{ display: 'flex' }} />
                  <div className='OrSection' >
                    <div className='HorizontalRuler' />
                    <span style={{ color: Colors.newVar.TXTColor }} >Or</span>
                    <div className='HorizontalRuler' />
                  </div>
                  <Button className='ButtonClass' color="primary" disabled={screenDimensions.width >= 900} >
                    <span style={{ color: Colors.newVar.TXTColor }} onClick={() => setshowForm(!showForm)} >Drop me a mail <span className={showForm ? 'arrowStyleRotated' : 'arrowStyle'} style={arrowStyle} > &rarr;</span></span>
                  </Button>
                </div>
              </div>
            </LazyBackground>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >
            <div className='FormWrapper' style={style} >
              <span id='emailLabel' style={{ color: '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 18 : 20, fontWeight: '500' }} >Write a message:</span>
              <form action="" onSubmit={OnSendClick}>
                <div id={'emailInputdiv'} style={{ borderBottomColor: NameError != null ? 'red' : 'rgb(65, 195, 247)' }}>
                  <input type={'text'} value={Name} id={'name'} name={'from_name'} style={{ color: '#1d1d1d' }} maxLength={60} placeholder={'Your name'} onChange={(text) => {
                    ValidateName(text.target.value)
                    setName(text.target.value)
                  }} />
                  <AccountCircle style={{ color: NameError != null ? 'red' : '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                </div>
                <div id={'messageInputdiv'} style={{ borderBottomColor: messageError != null ? 'red' : 'rgb(65, 195, 247)' }} >
                  <textarea value={message} id='message' name='message' placeholder='Write a message...' maxLength={500} style={{ color: '#1d1d1d', resize: 'none' }} rows={screenDimensions.width < 1000 ? 3 : 5} cols={6} onChange={(text) => {
                    ValidateMessage(text.target.value);
                    setmessage(text.target.value)
                  }} />
                  <Message style={{ color: messageError != null ? 'red' : '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                </div>
                <div id={'emailInputdiv'} style={{ borderBottomColor: EmailError != null ? 'red' : 'rgb(65, 195, 247)' }}>
                  <input type={'email'} value={Email} id={'email'} name={'reply_to'} style={{ color: '#1d1d1d' }} maxLength={256} placeholder={'Your email'} onChange={(text) => {
                    setEmail(text.target.value)
                    // ValidateEmail(text.target.value)
                  }} onBlur={() => {
                    ValidateEmail(Email)
                  }} />
                  {EmailError != null ?
                    <Error style={{ color: 'red', fontSize: 30 }} className={'EmailErrorIcon'} /> :
                    <Mail style={{ color: '#1d1d1d', fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />}
                </div>
                <div style={{ height: 60, width: 60, marginTop: '5%' }} >
                  {showLoader ?
                    <Radio
                      visible={true}
                      height={screenDimensions.width < 1000 ? "40" : "55"}
                      width={screenDimensions.width < 1000 ? "40" : "55"}
                      ariaLabel="radio-loading"
                      colors={['rgb(65, 195, 247)', 'rgba(65, 195, 247, 0.75)', "rgba(65, 195, 247, 0.5)"]}
                      wrapperStyle={{}}
                      wrapperClass="radio-wrapper"
                    /> :
                    <button type="submit" className='Submitbtn' style={{ color: Colors.newVar.TXTColor, backgroundColor: 'rgb(65, 195, 247)', }} >
                      <SendRounded id={'sendIcon'} style={{ fontSize: screenDimensions.width < 1000 ? 25 : 30 }} />
                    </button>}
                </div>
              </form>
            </div>
            {/* <Divider WrapperStyle={{width:'75%', paddignRight:10}} /> */}
          </Grid>
        </Grid>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
