import { Link } from "react-router-dom"
import DevlinksLogoLg from "../../assets/images/logo-devlinks-large.svg"
import styles from './authentication.module.css'
import EmailIcon from "../../assets/images/icon-email.svg"
import LockIcon from "../../assets/images/icon-password.svg"

export default function Signup() {
    return (
        <main className={styles.main}>
            <img src={DevlinksLogoLg} alt="DevlinksLogoLg" />
            <div className={styles.header}>
                <h2>
                    Create Account
                </h2>
                <p>
                    Let&apos;s get you started sharing your links!
                </p>
            </div>
            <form action="" onSubmit={e => e.preventDefault()} className={styles.form}>
                <label htmlFor="email">
                <img src={EmailIcon} alt="EmailIcon" />
                    <span>
                        Email address
                    </span>
                    <input type="email" name="email" id="email" required />
                </label>
                <label htmlFor="create-password">
                <img src={LockIcon} alt="LockIcon" />
                    <span>
                        Create password
                    </span>
                    <input type="password" name="create-password" id="create-password" required />
                </label>
                <label htmlFor="confirm-password">
                <img src={LockIcon} alt="LockIcon" />
                    <span>
                        Confirm password
                    </span>
                    <input type="password" name="confirm-password" id="confirm-password" required />
                </label>
                <p className={styles.password_reqs}>
                    Password must contain at least 8 characters
                </p>
                <button>
                    Create new account
                </button>
            </form>
            <p style={{ textAlign: 'center' }}>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </main>
    )
}