import { Route, Routes } from "react-router-dom"
import FrontCardPage from "./components/FrontCardPage"
import Navigation from "./components/Navigation"

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<FrontCardPage/>}/>
      <Route path="/card/1" element={<FrontCardPage/>}/>
    </Routes>
    <Navigation/>
    </>)
}

export default App
