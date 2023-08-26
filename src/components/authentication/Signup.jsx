import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg";
import styles from './authentication.module.css';
import EmailIcon from "../authentication/icons/EmailIcon";
import LockIcon from "../authentication/icons/LockIcon";
import Button from "../button/Button";

export default function Signup() {
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !emailRef.current ||
            !passwordRef.current ||
            !passwordConfirmRef.current
        ) return;

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        localStorage.setItem("userData", JSON.stringify(data));

        const success = true;

        if (success) {
            navigate('/');
            console.log(data);
        }
    };

    return (
        <main className={styles.main}>
            <img src={DevlinksLogoLg} alt="DevlinksLogoLg" />
            <div className={styles.header}>
                <h2>Create Account</h2>
                <p>Let`s get you started sharing your links!</p>
            </div>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
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
                <label htmlFor="create-password">
                    <LockIcon />
                    <span>Create password</span>
                    <input
                        type="password"
                        name="create-password"
                        id="create-password"
                        ref={passwordRef}
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
                        ref={passwordConfirmRef}
                        placeholder="At least 8 characters"
                        required
                    />
                </label>
                <p className={styles.password_reqs}>
                    Password must contain at least 8 characters
                </p>

                <Button>
                    Create new account
                </Button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </main>
    );
}

