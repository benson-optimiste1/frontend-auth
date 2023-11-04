import { useEffect, useState } from "react"

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
        {LoggedIn && <button onClick={() => localStorage.clear()}>Logout</button>}
        </>
    )
}