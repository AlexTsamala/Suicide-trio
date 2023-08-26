import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg";
import styles from './authentication.module.css';
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailRef.current || !passwordRef.current) return;

        const success = true; // Simulate success

        if (success) {
            navigate('/');
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
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <label htmlFor="email">
                    <EmailIcon />
                    <span>Email address</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        ref={emailRef}
                        placeholder="e.g. alex@email.com"
                        required
                    />
                </label>
                <label htmlFor="password">
                    <LockIcon />
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passwordRef}
                        placeholder="Enter your password"
                        required
                    />
                </label>
                <Button>Login</Button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Don`t have an account? <Link to='/signup'>Create account</Link>
            </p>
        </main>
    );
}
