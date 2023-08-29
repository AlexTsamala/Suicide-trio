import { Link, useNavigate } from "react-router-dom";
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg";
import styles from './authentication.module.css';
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";
import { useState } from "react";

export default function Signup() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
  
    //
    const handleSubmit =(e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };

    return (
        <main className={styles.main}>
            <img src={DevlinksLogoLg} alt="DevlinksLogoLg" />
            <div className={styles.header}>
                <h2>Create Account</h2>
                <p>Let`s get you started sharing your links!</p>
            </div>
            <form
                action=""
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <label htmlFor="email">
                    <EmailIcon />
                    <span>Email address</span>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({... input, [e.target.name]: e.target.value})}
                        id="email"
                        placeholder="e.g. alex@email.com"
                        required
                    />
                </label>
                <label htmlFor="create-password">
                    <LockIcon />
                    <span>Create password</span>
                    <input
                        type="password"
                        id="create-password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        placeholder="At least 8 characters"
                        required
                    />
                </label>
                <label htmlFor="confirm-password">
                    <LockIcon />
                    <span>Confirm password</span>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        value={input.confirmPassword}
                        onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        placeholder="At least 8 characters"
                        required
                    />
                </label>
                <p className={styles.password_reqs}>
                    Password must contain at least 8 characters
                </p>

                <Button type="submit">
                    Create new account
                </Button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </main>
    );
}
