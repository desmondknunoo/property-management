import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import styles from './StaticPages.module.css';

export default function CookiesPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Cookie size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Cookie Policy</h1>
                        <p className={styles.heroText}>
                            Last updated: January 5, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container} style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                        <h2>What Are Cookies?</h2>
                        <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and how you use our site.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>Types of Cookies We Use</h2>

                        <h3 style={{ marginTop: 'var(--space-lg)' }}>Essential Cookies</h3>
                        <p>Required for the website to function properly. They enable core functionality like security, authentication, and accessibility.</p>

                        <h3 style={{ marginTop: 'var(--space-lg)' }}>Functional Cookies</h3>
                        <p>Remember your preferences such as language, region, and display settings (like dark/light theme).</p>

                        <h3 style={{ marginTop: 'var(--space-lg)' }}>Analytics Cookies</h3>
                        <p>Help us understand how visitors interact with our website by collecting anonymous information.</p>

                        <h3 style={{ marginTop: 'var(--space-lg)' }}>Marketing Cookies</h3>
                        <p>Used to track visitors across websites to display relevant advertisements.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>Managing Cookies</h2>
                        <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
                        <p>Most browsers allow you to:</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>View what cookies are stored</li>
                            <li>Delete cookies individually or all at once</li>
                            <li>Block third-party cookies</li>
                            <li>Block all cookies from specific sites</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>Updates to This Policy</h2>
                        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>Contact Us</h2>
                        <p>If you have questions about our use of cookies, please contact us at privacy@propghana.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
