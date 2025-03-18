import { useEffect, useState } from "react"
import wait from "../utils/wait";
import { CircularProgress } from "@mui/material";

function MessagePage(){
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

    return (<section style={{justifyItems: "center", textAlign: "center"}}>
        <h1>Message</h1>
        <p>To Ellie,</p>
        <p>Happy birthday!</p>
        <p>This year, I decided to put my software development skills into practice and create a birthday card site! Excuse the very basic design, though - I put it together very quickly over the course of, like, a little over one night.</p>
        <p>Either way, though, happy 19th birthday! I hope college life continues to treat you well, and I hope you achieve great things this year.</p>
        <p>Have a great day celebrating today, and keep being yourself! You're an amazing, smart, kind, and talented person, and I always enjoy our conversations. It's always great being one of your supporters, and I'll always be wishing for your success.</p>
        <p>From Alex</p>
    </section>)
}

export default MessagePage