import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import styles from './StaticPages.module.css';

export default function PrivacyPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Shield size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Privacy Policy</h1>
                        <p className={styles.heroText}>
                            Last updated: January 5, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container} style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                        <h2>1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, list a property, apply for a rental, or contact us for support.</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>Personal information (name, email, phone number)</li>
                            <li>Identity documents for verification</li>
                            <li>Property information and documents</li>
                            <li>Payment and financial information</li>
                            <li>Communication records</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>Provide, maintain, and improve our services</li>
                            <li>Verify property ownership and user identity</li>
                            <li>Process transactions and payments</li>
                            <li>Send notifications about your account or transactions</li>
                            <li>Respond to your comments and questions</li>
                            <li>Protect against fraud and abuse</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>3. Information Sharing</h2>
                        <p>We may share your information in the following circumstances:</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>With property owners/tenants when you apply for or list a property</li>
                            <li>With partner banks for financing applications</li>
                            <li>With Ghana Lands Commission for verification purposes</li>
                            <li>With service providers who assist our operations</li>
                            <li>When required by law or to protect rights</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information. All sensitive data is encrypted in transit and at rest.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>5. Your Rights</h2>
                        <p>You have the right to access, update, or delete your personal information. Contact us at privacy@propghana.com for any requests.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>6. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact us at:</p>
                        <p style={{ marginTop: 'var(--space-sm)' }}>
                            <strong>PropGhana</strong><br />
                            123 Independence Avenue<br />
                            Accra, Ghana<br />
                            privacy@propghana.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
