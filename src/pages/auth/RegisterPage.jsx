import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    User,
    Briefcase,
    GraduationCap,
    Landmark,
    Mail,
    Lock,
    Phone,
    ArrowRight,
    Check
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import styles from './AuthPages.module.css';

const userTypes = [
    { id: 'customer', icon: <User size={20} />, title: 'Customer', desc: 'Find & buy properties' },
    { id: 'owner', icon: <Briefcase size={20} />, title: 'Owner', desc: 'List & manage property' },
    { id: 'student', icon: <GraduationCap size={20} />, title: 'Student', desc: 'Find student hostels' },
    { id: 'bank', icon: <Landmark size={20} />, title: 'Bank', desc: 'Finance properties' }
];

export default function RegisterPage() {
    const [selectedType, setSelectedType] = useState('customer');
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setIsLoading(true);
        // Simulate registration
        setTimeout(() => {
            login({ ...formData, role: selectedType });
            setIsLoading(false);
            navigate(`/dashboard/${selectedType}`);
        }, 1500);
    };

    const updateFormData = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
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

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <h1>Create Account</h1>
                                <p className={styles.subtitle}>Choose your account type to get started</p>

                                <div className={styles.userTypeGrid}>
                                    {userTypes.map(type => (
                                        <div
                                            key={type.id}
                                            className={`${styles.userTypeCard} ${selectedType === type.id ? styles.active : ''}`}
                                            onClick={() => setSelectedType(type.id)}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                {type.icon}
                                                {selectedType === type.id && <Check size={16} color="var(--color-primary)" />}
                                            </div>
                                            <h4>{type.title}</h4>
                                            <p>{type.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'auto' }}>
                                    <Button
                                        variant="primary"
                                        fullWidth
                                        size="lg"
                                        onClick={() => setStep(2)}
                                        rightIcon={<ArrowRight size={18} />}
                                    >
                                        Next Step
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setStep(1)}
                                    style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-md)', padding: 0 }}
                                >
                                    ← Back to account types
                                </Button>
                                <h1>Your Details</h1>
                                <p className={styles.subtitle}>Complete your profile to join the platform</p>

                                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                    <Input
                                        label="Full Name"
                                        placeholder="Kofi Mensah"
                                        required
                                        value={formData.name}
                                        onChange={(e) => updateFormData('name', e.target.value)}
                                        leftIcon={<User size={18} />}
                                    />
                                    <Input
                                        label="Email Address"
                                        type="email"
                                        placeholder="kofi@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateFormData('email', e.target.value)}
                                        leftIcon={<Mail size={18} />}
                                    />
                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        placeholder="+233 XX XXX XXXX"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => updateFormData('phone', e.target.value)}
                                        leftIcon={<Phone size={18} />}
                                    />
                                    <Input
                                        label="Password"
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
                                        onChange={(e) => updateFormData('password', e.target.value)}
                                        leftIcon={<Lock size={18} />}
                                    />

                                    <Button
                                        variant="primary"
                                        fullWidth
                                        size="lg"
                                        onClick={handleSubmit}
                                        loading={isLoading}
                                    >
                                        Create Account
                                    </Button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className={styles.footer} style={{ marginTop: 'var(--space-xl)' }}>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageOverlay}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            The Most Trusted Marketplace
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Every account goes through verification to ensure a safe and genuine community for everyone.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
