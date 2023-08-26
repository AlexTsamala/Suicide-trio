import { Link } from "react-router-dom"
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg"
import styles from './authentication.module.css'
import EmailIcon from "../../assets/images/icon-email.svg"
import LockIcon from "../../assets/images/icon-password.svg"

export default function Login() {
    return (
        <main className={styles.main}>
            <img src={DevlinksLogoLg} alt="DevlinksLogoLg"/>
            <div className={styles.header}>
                <h2>
                    Login
                </h2>
                <p>
                    Add your details below to get back into the app
                </p>
            </div>
            <form action="" className={styles.form}>
                <label htmlFor="email">
                <img src={EmailIcon} alt="EmailIcon" />
                    <span>
                        Email address
                    </span>
                    <input type="email" name="email" id="email" required />
                </label>
                <label htmlFor="password">
                <img src={LockIcon} alt="LockIcon" />
                    <span>
                        Password
                    </span>
                    <input type="password" name="password" id="password" required />
                </label>
                <button>
                    Login
                </button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Don&apos;t have an account? <Link to='/signup'>Create account</Link>
            </p>
        </main>
    )
}