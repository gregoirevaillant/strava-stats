import { useState } from "react"

const Login = () => {
    const [clientId, setClientId] = useState("")

    return (
        <div>
            <input type="text" onChange={(e) => { setClientId(e.target.value) }} />
            <a href={`https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:5173/exchange_token&approval_prompt=auto&response_type=code&scope=read_all,profile:read_all,activity:read_all`}>
                Login
            </a>
        </div>
    )
}

export default Login