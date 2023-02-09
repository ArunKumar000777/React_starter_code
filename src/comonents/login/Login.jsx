import { useState } from "react";
import Products from "../products/Products";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("log");
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "kminchelle",
                password: "0lelplR",
                // expiresInMins: 60, // optional
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setUsername(res?.username);
            });
    };
    console.log(username);
    return (
        <div className="main">
            <div className="login">
                <form onSubmit={handleLogin} className={username ? "offScreen" : "form"}>
                    <h1>SIGN UP</h1>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                    />
                    <button type="submit">login</button>
                </form>
                {username ? <Products /> : null}
            </div>
        </div>
    );
};

export default Login;
