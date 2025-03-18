import { useEffect, useState } from "react"
import cover from "../images/cover.png"
import wait from "../utils/wait";
import { CircularProgress } from "@mui/material";

function FrontCardPage(){
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        wait(3).then(() => {
            setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return <CircularProgress sx={{justifySelf: "center", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
    }

    return (<section>
        <h1>Happy Birthday!</h1>
        <img src={cover} alt="Ellie sitting in a grassy area"/>
    </section>)
    
}

export default FrontCardPage