import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import styles from './StaticPages.module.css';

const faqData = [
    {
        category: 'General',
        questions: [
            {
                q: 'What is PropGhana?',
                a: 'PropGhana is Ghana\'s most trusted property marketplace. We connect verified property owners with buyers and renters, ensuring every listing is legitimate and every transaction is transparent.'
            },
            {
                q: 'How does PropGhana verify properties?',
                a: 'We verify properties through a rigorous process that includes Ghana Lands Commission checks, document authenticity validation, ownership confirmation, and ensuring there are no disputes or litigation on the property.'
            },
            {
                q: 'Is PropGhana available across Ghana?',
                a: 'Yes! PropGhana operates in all 16 regions of Ghana, with properties available in major cities like Accra, Kumasi, Takoradi, Tamale, and more.'
            }
        ]
    },
    {
        category: 'Payments',
        questions: [
            {
                q: 'What are flexible payment plans?',
                a: 'Flexible payment plans allow you to pay for a property in installments rather than a lump sum. We partner with banks and property owners to offer financing options with durations up to 60 months.'
            },
            {
                q: 'Who qualifies for flexible payments?',
                a: 'Salaried employees with verifiable income, business owners with documented revenue, and students (with parent guarantors) can qualify. You\'ll need to submit employment verification, bank statements, and potentially a guarantor.'
            },
            {
                q: 'What is the minimum down payment?',
                a: 'The minimum down payment varies by property and financing option, typically ranging from 20% to 30% of the property value. Some bank-financed options may require higher down payments.'
            }
        ]
    },
    {
        category: 'Property Owners',
        questions: [
            {
                q: 'How do I list my property?',
                a: 'Register as a property owner, complete our verification process (submit property documents and ID), and once verified, you can list your properties. Our team will review each listing before it goes live.'
            },
            {
                q: 'What are the fees for listing?',
                a: 'Listing on PropGhana is free. We only earn a commission when a successful transaction (sale or rental) is completed through our platform.'
            },
            {
                q: 'How long does verification take?',
                a: 'Property verification typically takes 3-5 business days. This includes document review, Lands Commission checks, and ownership confirmation.'
            }
        ]
    },
    {
        category: 'Students & Hostels',
        questions: [
            {
                q: 'Can students use PropGhana for hostels?',
                a: 'Yes! We have a dedicated section for student hostels near universities across Ghana. Students can search by university, compare room types, and even set up payment plans with parent guarantors.'
            },
            {
                q: 'How does the parent guarantor system work?',
                a: 'Parents can register as guarantors, verify their identity and income, and then authorize flexible payment arrangements for their student\'s hostel accommodation.'
            }
        ]
    }
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const filteredFAQ = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
            q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <HelpCircle size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Frequently Asked Questions</h1>
                        <p className={styles.heroText}>
                            Find answers to common questions about PropGhana
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.searchBox} style={{ maxWidth: '500px', margin: '0 auto var(--space-2xl)' }}>
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                flex: 1,
                                border: 'none',
                                background: 'transparent',
                                padding: 'var(--space-md)',
                                fontSize: '1rem',
                                color: 'var(--color-text-primary)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className={styles.faqGrid}>
                        {filteredFAQ.map((category, catIndex) => (
                            <div key={catIndex} style={{ marginBottom: 'var(--space-xl)' }}>
                                <h3 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>
                                    {category.category}
                                </h3>
                                {category.questions.map((item, qIndex) => {
                                    const key = `${catIndex}-${qIndex}`;
                                    const isOpen = openItems[key];
                                    return (
                                        <div key={qIndex} className={styles.faqItem}>
                                            <button
                                                className={styles.faqQuestion}
                                                onClick={() => toggleItem(catIndex, qIndex)}
                                            >
                                                {item.q}
                                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            {isOpen && (
                                                <div className={styles.faqAnswer}>
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
