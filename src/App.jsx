import './App.css'
import NavBar from './component/NavBar/NavBar'
import LineChart from './component/lineCart/LineChart'
import PriceOptions from './component/priceOptions/PriceOptions'
// import DaisyNav from './component/DaisyNav/DaisyNav'

function App() {


  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav/> */}
      <h1 className='text-5xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      

    </>
  )
}

export default App
