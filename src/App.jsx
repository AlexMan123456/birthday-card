import { Route, Routes } from "react-router-dom"
import FrontCardPage from "./components/FrontCardPage"
import Navigation from "./components/Navigation"
import MessagePage from "./components/MessagePage"
import QuizPage from "./components/QuizPage"
import audio from "./audio/willow.mp3"
import 'react-h5-audio-player/lib/styles.css'
import H5AudioPlayer from "react-h5-audio-player"
import { Box } from "@mui/material"
import EndPage from "./components/EndPage"

function App() {

  return (<>
    <Routes>
      <Route path="/" element={<FrontCardPage/>}/>
      <Route path="/card/1" element={<FrontCardPage/>}/>
      <Route path="/card/2" element={<QuizPage/>}/>
      <Route path="/card/3" element={<MessagePage/>}/>
      <Route path="/card/4" element={<EndPage/>}/>
    </Routes>
    <Box sx={{justifyItems: "center"}}>
      <H5AudioPlayer style={{width: "30vw"}} src={audio} showJumpControls={false} showSkipControls={false} autoPlay={true}/>
      <Navigation/>
    </Box>
    </>)
}

export default App
