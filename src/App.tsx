import { useContext } from 'react'
import './App.scss'
import { ColorSchema } from './Utils/GlobalState'
import { BrowserRouter } from "react-router-dom";
import TopNavBar from './Components/TopNavBar/NavBar';
function App() {
  const Colors = useContext(ColorSchema);
  return (
    <div style={{backgroundColor:Colors.newVar.BGColor}} >
      <BrowserRouter>
        <TopNavBar />
      </BrowserRouter>
    </div>
  )
}

export default App
