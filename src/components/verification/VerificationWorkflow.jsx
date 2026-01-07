import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload,
    FileText,
    Shield,
    CheckCircle,
    AlertCircle,
    ChevronRight,
    ArrowLeft,
    Camera
} from 'lucide-react';
import Button from '../ui/Button/Button';
import { Card, CardBody } from '../ui/Card/Card';
import { Badge } from '../ui/Badge/Badge';
import Input from '../ui/Input/Input';
import styles from './Verification.module.css';

const steps = [
    { title: 'Identity', desc: 'Verify who you are', icon: <Shield size={20} /> },
    { title: 'Documents', desc: 'Property/Income proof', icon: <FileText size={20} /> },
    { title: 'Review', desc: 'Final application check', icon: <CheckCircle size={20} /> }
];

export function VerificationWorkflow({ userType, onComplete }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [files, setFiles] = useState({});
    const [isUploading, setIsUploading] = useState(false);

    const handleFileUpload = (type) => {
        // Simulate file upload
        setIsUploading(true);
        setTimeout(() => {
            setFiles(prev => ({ ...prev, [type]: 'uploaded' }));
            setIsUploading(false);
        }, 1000);
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            onComplete?.();
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div className={styles.workflow}>
            {/* Stepper */}
            <div className={styles.stepper}>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`${styles.step} ${i <= currentStep ? styles.active : ''} ${i < currentStep ? styles.completed : ''}`}
                    >
                        <div className={styles.stepIcon}>
                            {i < currentStep ? <CheckCircle size={18} /> : step.icon}
                        </div>
                        <div className={styles.stepInfo}>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                        {i < steps.length - 1 && <div className={styles.connector} />}
                    </div>
                ))}
            </div>

            <Card className={styles.content}>
                <CardBody padding="xl">
                    <AnimatePresence mode="wait">
                        {currentStep === 0 && (
                            <motion.div
                                key="identity"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className={styles.contentHeader}>
                                    <h2>Identity Verification</h2>
                                    <p>Please provide your official identification for security and trust.</p>
                                </div>

                                <div className={styles.uploadGrid}>
                                    <div className={styles.uploadBox}>
                                        <div className={styles.uploadIcon}>
                                            <Camera size={32} />
                                        </div>
                                        <div className={styles.uploadInfo}>
                                            <h4>Ghana Card (Front)</h4>
                                            <p>Ensure all text is clearly visible</p>
                                        </div>
                                        {files.idFront ? (
                                            <Badge variant="success">Uploaded</Badge>
                                        ) : (
                                            <Button variant="outline" size="sm" onClick={() => handleFileUpload('idFront')} loading={isUploading}>
                                                Upload
                                            </Button>
                                        )}
                                    </div>

                                    <div className={styles.uploadBox}>
                                        <div className={styles.uploadIcon}>
                                            <Camera size={32} />
                                        </div>
                                        <div className={styles.uploadInfo}>
                                            <h4>Ghana Card (Back)</h4>
                                            <p>Ensure all text is clearly visible</p>
                                        </div>
                                        {files.idBack ? (
                                            <Badge variant="success">Uploaded</Badge>
                                        ) : (
                                            <Button variant="outline" size="sm" onClick={() => handleFileUpload('idBack')} loading={isUploading}>
                                                Upload
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 1 && (
                            <motion.div
                                key="documents"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className={styles.contentHeader}>
                                    <h2>Required Documents</h2>
                                    <p>Upload the necessary documents based on your account type.</p>
                                </div>

                                <div className={styles.docList}>
                                    {userType === 'owner' ? (
                                        <>
                                            <div className={styles.docItem}>
                                                <FileText size={24} color="var(--color-primary)" />
                                                <div className={styles.docInfo}>
                                                    <h4>Land Title / Deed</h4>
                                                    <p>Indenture or certificate of ownership</p>
                                                </div>
                                                <Button variant="ghost" size="sm" onClick={() => handleFileUpload('title')}>
                                                    {files.title ? 'Change' : 'Upload'}
                                                </Button>
                                            </div>
                                            <div className={styles.docItem}>
                                                <FileText size={24} color="var(--color-primary)" />
                                                <div className={styles.docInfo}>
                                                    <h4>Site Plan</h4>
                                                    <p>Certified plan showing property boundaries</p>
                                                </div>
                                                <Button variant="ghost" size="sm" onClick={() => handleFileUpload('sitePlan')}>
                                                    {files.sitePlan ? 'Change' : 'Upload'}
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={styles.docItem}>
                                                <FileText size={24} color="var(--color-secondary)" />
                                                <div className={styles.docInfo}>
                                                    <h4>Proof of Income</h4>
                                                    <p>Last 3 months' paystubs or bank statements</p>
                                                </div>
                                                <Button variant="ghost" size="sm" onClick={() => handleFileUpload('income')}>
                                                    {files.income ? 'Change' : 'Upload'}
                                                </Button>
                                            </div>
                                            <div className={styles.docItem}>
                                                <FileText size={24} color="var(--color-secondary)" />
                                                <div className={styles.docInfo}>
                                                    <h4>Employment Letter</h4>
                                                    <p>Optional but recommended for faster approval</p>
                                                </div>
                                                <Button variant="ghost" size="sm" onClick={() => handleFileUpload('employment')}>
                                                    {files.employment ? 'Change' : 'Upload'}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="review"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className={styles.reviewStep}
                            >
                                <div className={styles.successIcon}>
                                    <CheckCircle size={64} />
                                </div>
                                <h2>Ready to Submit?</h2>
                                <p>We've collected all the necessary information. Our team will review your application within 3-5 business days.</p>

                                <div className={styles.reviewSummary}>
                                    <div className={styles.summaryItem}>
                                        <span>Identity Verified</span>
                                        <Badge variant="success">Complete</Badge>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Documents Provided</span>
                                        <Badge variant="success">Complete</Badge>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className={styles.footer}>
                        {currentStep > 0 && (
                            <Button variant="ghost" onClick={prevStep} leftIcon={<ArrowLeft size={18} />}>
                                Previous
                            </Button>
                        )}
                        <Button
                            variant="primary"
                            className={styles.nextBtn}
                            onClick={nextStep}
                            rightIcon={<ChevronRight size={18} />}
                        >
                            {currentStep === steps.length - 1 ? 'Submit Verification' : 'Continue'}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
