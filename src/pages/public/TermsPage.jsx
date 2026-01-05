import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import styles from './StaticPages.module.css';

export default function TermsPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <FileText size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Terms of Service</h1>
                        <p className={styles.heroText}>
                            Last updated: January 5, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container} style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing or using PropGhana's website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>2. Description of Service</h2>
                        <p>PropGhana is an online platform that connects property owners with potential buyers and renters. We provide property listing, verification, and payment facilitation services.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>3. User Accounts</h2>
                        <p>To use certain features, you must create an account. You are responsible for:</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>Providing accurate and complete information</li>
                            <li>Maintaining the security of your account</li>
                            <li>All activities that occur under your account</li>
                            <li>Notifying us of any unauthorized use</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>4. Property Listings</h2>
                        <p>Property owners agree that:</p>
                        <ul style={{ marginLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                            <li>All information provided is accurate and truthful</li>
                            <li>They have legal authority to list the property</li>
                            <li>Properties are free from disputes and litigation</li>
                            <li>They will cooperate with our verification process</li>
                        </ul>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>5. Fees and Payments</h2>
                        <p>PropGhana charges a commission on successful transactions. Payment terms and conditions are set forth in separate agreements for each transaction type.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>6. Verification Services</h2>
                        <p>While we conduct verification checks, PropGhana does not guarantee the completeness or accuracy of property information. Users are encouraged to conduct their own due diligence.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>7. Limitation of Liability</h2>
                        <p>PropGhana is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or any transactions between users.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>8. Governing Law</h2>
                        <p>These Terms are governed by the laws of the Republic of Ghana. Any disputes shall be resolved in the courts of Ghana.</p>

                        <h2 style={{ marginTop: 'var(--space-xl)' }}>9. Contact</h2>
                        <p>For questions about these Terms, contact us at legal@propghana.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
