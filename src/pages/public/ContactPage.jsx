import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import Input, { Textarea } from '../../components/ui/Input/Input';
import styles from './StaticPages.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the form data to an API
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <h1>Get in Touch</h1>
                        <p className={styles.heroText}>
                            Have questions about our platform or need help?
                            We're here to assist you every step of the way.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <motion.div
                            className={styles.contactInfo}
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            <motion.div variants={fadeInUp} className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4>Office Address</h4>
                                    <p>123 Independence Avenue<br />Accra, Greater Accra, Ghana</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+233 30 123 4567<br />+233 24 567 8901</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@propghana.com<br />support@propghana.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Card variant="glass" padding="lg">
                                    <CardBody>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <MessageCircle size={24} color="var(--color-primary)" />
                                            <h4 style={{ margin: 0 }}>Live Chat</h4>
                                        </div>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                            Need immediate help? Chat with our support team online.
                                        </p>
                                        <Button variant="primary" fullWidth style={{ marginTop: '16px' }}>
                                            Start Chat
                                        </Button>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card variant="elevated" padding="lg">
                                <CardBody>
                                    <h3 style={{ marginBottom: '24px' }}>Send us a Message</h3>
                                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                                        <div className={styles.formRow}>
                                            <Input
                                                label="Your Name"
                                                placeholder="Enter your name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            />
                                            <Input
                                                label="Email Address"
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            />
                                        </div>
                                        <div className={styles.formRow}>
                                            <Input
                                                label="Phone Number"
                                                type="tel"
                                                placeholder="+233 XX XXX XXXX"
                                                value={formData.phone}
                                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                            />
                                            <Input
                                                label="Subject"
                                                placeholder="What is this about?"
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            />
                                        </div>
                                        <Textarea
                                            label="Message"
                                            placeholder="Tell us how we can help..."
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        />
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            type="submit"
                                            leftIcon={<Send size={18} />}
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
