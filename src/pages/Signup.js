import { useNavigate } from "react-router-dom"


export default function Signup(){
    const navigate = useNavigate()

    const handleFormsubmit = e => {
        e.preventDefault()
        const formData = {
            email: e.target.email.value ,
            password: e.target.password.value,
        }
        navigate('/')
    }

    return (
        <div className="container">
        <h2>Signup</h2>
        <form action="submit" onSubmit={e => handleFormsubmit(e)}>
            <label htmlFor="">
                <span> Email: </span>
                    <input type="email" name="email" />
                </label>
                <br />
            <label htmlFor="">
                <span> Password: </span>
                    <input type="password" name="password"/>
                </label>
                <br />

            <button type="Submit">Signup</button>
        </form>
        
        </div>
    )
}