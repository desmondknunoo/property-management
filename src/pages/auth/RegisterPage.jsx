import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User, Briefcase, GraduationCap, Landmark } from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import styles from './AuthPages.module.css';

const userTypes = [
    { id: 'customer', icon: <User size={24} />, title: 'Customer', desc: 'Find a property' },
    { id: 'owner', icon: <Briefcase size={24} />, title: 'Property Owner', desc: 'List properties' },
    { id: 'student', icon: <GraduationCap size={24} />, title: 'Student', desc: 'Find a hostel' },
    { id: 'bank', icon: <Landmark size={24} />, title: 'Bank', desc: 'Finance properties' }
];

export default function RegisterPage() {
    const [selectedType, setSelectedType] = useState('customer');

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

                    <h1>Create Account</h1>
                    <p className={styles.subtitle}>Choose your account type to get started</p>

                    <div className={styles.userTypeGrid}>
                        {userTypes.map(type => (
                            <div
                                key={type.id}
                                className={`${styles.userTypeCard} ${selectedType === type.id ? styles.active : ''}`}
                                onClick={() => setSelectedType(type.id)}
                            >
                                {type.icon}
                                <h4>{type.title}</h4>
                                <p>{type.desc}</p>
                            </div>
                        ))}
                    </div>

                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className={styles.field}>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className={styles.field}>
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+233 XX XXX XXXX" />
                        </div>
                        <div className={styles.field}>
                            <label>Password</label>
                            <input type="password" placeholder="Create a password" />
                        </div>

                        <Button variant="primary" fullWidth size="lg">
                            Create Account
                        </Button>
                    </form>

                    <p className={styles.footer}>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageOverlay}>
                        <h2>Join Ghana's Trusted Property Marketplace</h2>
                        <p>Verified listings, flexible payments, trusted platform.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
