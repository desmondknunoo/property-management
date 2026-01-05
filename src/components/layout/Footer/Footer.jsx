import { Link } from 'react-router-dom';
import {
    Building2,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>
                                <Building2 size={20} />
                            </span>
                            PropGhana
                        </div>
                        <p className={styles.brandText}>
                            Ghana's trusted property marketplace. Verified listings,
                            flexible payment plans, and comprehensive property management.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Properties</h4>
                        <ul>
                            <li><Link to="/properties?type=buy">For Sale</Link></li>
                            <li><Link to="/properties?type=rent">For Rent</Link></li>
                            <li><Link to="/hostels">Student Hostels</Link></li>
                            <li><Link to="/properties?category=land">Land</Link></li>
                            <li><Link to="/properties?category=commercial">Commercial</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/help">Help Center</Link></li>
                            <li><Link to="/verification">Verification Process</Link></li>
                            <li><Link to="/payment-plans">Payment Plans</Link></li>
                            <li><Link to="/for-owners">For Property Owners</Link></li>
                            <li><Link to="/for-banks">For Banks</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} PropGhana. All rights reserved.
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/cookies">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
