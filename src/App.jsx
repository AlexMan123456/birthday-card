import { Route, Routes } from "react-router-dom"
import FrontCardPage from "./components/FrontCardPage"
import Navigation from "./components/Navigation"
import MessagePage from "./components/MessagePage"
import QuizPage from "./components/QuizPage"
import audio from "./audio/willow.mp3"
import 'react-h5-audio-player/lib/styles.css'
import H5AudioPlayer from "react-h5-audio-player"

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<FrontCardPage/>}/>
      <Route path="/card/1" element={<FrontCardPage/>}/>
      <Route path="/card/2" element={<QuizPage/>}/>
      <Route path="/card/3" element={<MessagePage/>}/>
    </Routes>
    <H5AudioPlayer style={{width: "30vw"}} src={audio} showJumpControls={false} showSkipControls={false}/>
    <Navigation/>
    </>)
}

export default App
