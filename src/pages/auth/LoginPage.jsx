import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import styles from './AuthPages.module.css';

export default function LoginPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoIcon}>
                            <Building2 size={24} />
                        </span>
                        PropGhana
                    </Link>

                    <h1>Welcome Back</h1>
                    <p className={styles.subtitle}>Sign in to your account</p>

                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className={styles.field}>
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className={styles.options}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <Button variant="primary" fullWidth size="lg">
                            Sign In
                        </Button>
                    </form>

                    <div className={styles.divider}>
                        <span>or continue with</span>
                    </div>

                    <div className={styles.social}>
                        <button className={styles.socialBtn}>Google</button>
                        <button className={styles.socialBtn}>Apple</button>
                    </div>

                    <p className={styles.footer}>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageOverlay}>
                        <h2>Find Your Perfect Property in Ghana</h2>
                        <p>Verified listings, flexible payments, trusted platform.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
