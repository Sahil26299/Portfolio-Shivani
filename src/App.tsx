import { useContext } from 'react'
import './App.scss'
import Home from './Screens/Home/Home'
import { ColorSchema } from './Utils/GlobalState'

function App() {
  const Colors = useContext(ColorSchema);
  return (
    <div style={{backgroundColor:Colors.newVar.BGColor}} >
      <Home />
    </div>
  )
}

export default App
