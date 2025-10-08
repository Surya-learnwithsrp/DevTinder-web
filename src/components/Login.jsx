import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../constants';

const Login = () => {
    const [email, setEmail] = useState("supermankolel@gmail.com");
    const [password, setPassword] = useState("Superman@kolel123");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login`,
                { email, password },
                { withCredentials: true }
            );

            // const res = await fetch("http://localhost:7777/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     credentials: "include",
            //     body: JSON.stringify({ email, password }),
            // });            
            dispatch(setUser(res?.data?.user));
            return navigate("/");
        } catch (err) {
            setError(err.response.data || 'Something went wrong');
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div className="justify-center">
                    <fieldset className="fieldset max-w-xs my-4">
                        <legend className="fieldset-legend w-full">Email ID</legend>
                        <input
                            type="email"
                            value={email}
                            className="input"
                            placeholder="Type here"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="fieldset max-w-xs my-4">
                        <legend className="fieldset-legend w-full">Password</legend>
                        <input
                            type="password"
                            value={password}
                            className="input"
                            placeholder="Type here"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>
                </div>
                {error && <p className="text-red-500">{error}</p> }
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
            </div>
        </div>  
    )
}

export default Login