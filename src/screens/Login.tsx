import { useState } from "react";

const Login = () => {
    const [clientId, setClientId] = useState("");

    const isClientIdValid = clientId.trim() !== "";

    return (
        <div>
            <input
                type="text"
                onChange={(e) => { setClientId(e.target.value) }}
                value={clientId}
                placeholder="Enter Client ID"
            />
            <a
                href={isClientIdValid ? `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:5173/exchange_token&approval_prompt=auto&response_type=code&scope=read_all,profile:read_all,activity:read_all` : '#'}
                onClick={(e) => {
                    if (!isClientIdValid) {
                        e.preventDefault();
                        alert("Please enter a valid Client ID.");
                    }
                }}
                style={{ pointerEvents: isClientIdValid ? 'auto' : 'none', opacity: isClientIdValid ? 1 : 0.5 }}
            >
                Login
            </a>
        </div>
    );
}

export default Login;
