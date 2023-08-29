import { Link, useNavigate } from 'react-router-dom'
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg";
import styles from './authentication.module.css';
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleLogin =(e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(
            input.email === loggeduser.email 
            && input.password === loggeduser.password) 
        {
            navigate("/profile");
        } else {
            alert("Wrong Email Or Password");
        }
    };

    
    return (
        <main className={styles.main}>
            <img src={DevlinksLogoLg} alt="DevlinksLogoLg"/>
            <div className={styles.header}>
                <h2>Login</h2>
                <p>Add your details below to get back into the app</p>
            </div>
            <form
                action=""
                onSubmit={handleLogin}
                className={styles.form}
            >
                <label htmlFor="email">
                    <EmailIcon />
                    <span>Email address</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={input.email}
                        onChange={(e) => setInput({... input, [e.target.name]: e.target.value})}
                        placeholder="e.g. alex@email.com"
                        required
                        className={input.email === '' ? 'invalid' : ''}
                    />
                </label>
                <label htmlFor="password">
                    <LockIcon />
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={input.password}
                        onChange={(e) => setInput({... input, [e.target.name]: e.target.value})}
                        placeholder="Enter your password"
                        required
                        className={input.email === '' ? 'invalid' : ''}
                    />
                </label>
                <Button type="submit">Login</Button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Don`t have an account? <Link to='/signup'>Create account</Link>
            </p>
        </main>
    );
}
