import { useEffect, useState } from "react"
import CardContainer from "../Components/CardContainer"

export default function Home(){

    const [LoggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const userLS = localStorage.getItem('myUser')
        console.log('userLs ->', userLS)
        if ( userLS ){
            setLoggedIn(true)
        }

    }, [])
    return(
        <>
        <h1 className="home">Welcome To Ben's Page ❕</h1>
        
        <CardContainer/>
        {LoggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
        
        </>
    )
}