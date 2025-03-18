import { useEffect, useState } from "react"
import cover from "../images/cover.png"
import wait from "../utils/wait";
import { CircularProgress } from "@mui/material";

function EndPage(){
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

    return (<section style={{justifyItems: "center"}}>
        <h1>The end!</h1>
        <img src={cover} alt="Ellie sitting in a grassy area"/>
        <p>I hope you liked this!</p>
    </section>)
}

export default EndPage