import { Route, Routes } from "react-router-dom"
import FrontCardPage from "./components/FrontCardPage"
import Navigation from "./components/Navigation"
import MessagePage from "./components/MessagePage"
import QuizPage from "./components/QuizPage"

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<FrontCardPage/>}/>
      <Route path="/card/1" element={<FrontCardPage/>}/>
      <Route path="/card/2" element={<QuizPage/>}/>
      <Route path="/card/3" element={<MessagePage/>}/>
    </Routes>
    <Navigation/>
    </>)
}

export default App
