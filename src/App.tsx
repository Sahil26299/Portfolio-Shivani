import { useContext, useState, useEffect } from 'react'
import './App.scss'
import { ColorSchema } from './Utils/GlobalState'
import { BrowserRouter } from "react-router-dom";
import TopNavBar from './Components/TopNavBar/NavBar';
import SplashScreen from './Components/SplashComponent/SplashScreen';

function App() {
  const Colors = useContext(ColorSchema);
  const [ShowApp, setShowApp] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setShowApp(true)
    }, 2000);
  }, [])

  return (
    <div style={{ backgroundColor: Colors.newVar.BGColor }} >
      {!ShowApp ?
        <SplashScreen /> :
        <BrowserRouter>
          <TopNavBar />
        </BrowserRouter>}
    </div>
  )
}

export default App
