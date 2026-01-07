import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Mail, Lock, Chrome, Apple, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import styles from './AuthPages.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            // Check for specific dummy logins to show different roles
            let role = 'customer';
            if (email.includes('owner')) role = 'owner';
            if (email.includes('bank')) role = 'bank';
            if (email.includes('student')) role = 'student';

            login({ email, name: email.split('@')[0], role });
            setIsLoading(false);
            navigate(`/dashboard/${role}`);
        }, 1500);
    };

    return (
        <div className={styles.page}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.formSection}>
                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoIcon}>
                            <Building2 size={24} />
                        </span>
                        PropGhana
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1>Welcome Back</h1>
                        <p className={styles.subtitle}>Sign in to your account to continue</p>
                    </motion.div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            leftIcon={<Mail size={18} />}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            leftIcon={<Lock size={18} />}
                        />

                        <div className={styles.options}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" /> Remember me
                            </label>
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>

                        <Button
                            variant="primary"
                            fullWidth
                            size="lg"
                            type="submit"
                            loading={isLoading}
                            rightIcon={!isLoading && <ArrowRight size={18} />}
                        >
                            Sign In
                        </Button>
                    </form>

                    <div className={styles.divider}>
                        <span>or continue with</span>
                    </div>

                    <div className={styles.social}>
                        <button className={styles.socialBtn}>
                            <Chrome size={18} /> Google
                        </button>
                        <button className={styles.socialBtn}>
                            <Apple size={18} /> Apple
                        </button>
                    </div>

                    <p className={styles.footer}>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageOverlay}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Ghana's Smartest way to own Property
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Join thousands of Ghanaians using PropGhana for verified listings and flexible payments.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
