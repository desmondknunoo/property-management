import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Layouts
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';

// Public Pages
import HomePage from './pages/public/HomePage';
import PropertyListingPage from './pages/public/PropertyListingPage';
import PropertyDetailPage from './pages/public/PropertyDetailPage';
import HostelListingPage from './pages/public/HostelListingPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import FAQPage from './pages/public/FAQPage';
import VerificationPage from './pages/public/VerificationPage';
import PaymentPlansPage from './pages/public/PaymentPlansPage';
import HelpCenterPage from './pages/public/HelpCenterPage';
import ForOwnersPage from './pages/public/ForOwnersPage';
import ForBanksPage from './pages/public/ForBanksPage';
import CareersPage from './pages/public/CareersPage';
import BlogPage from './pages/public/BlogPage';
import PrivacyPage from './pages/public/PrivacyPage';
import TermsPage from './pages/public/TermsPage';
import CookiesPage from './pages/public/CookiesPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Dashboard Layouts (will be expanded in Phase 5+)
import CustomerDashboard from './pages/customer/CustomerDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import BankDashboard from './pages/bank/BankDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

import './index.css';

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/properties" element={<PublicLayout><PropertyListingPage /></PublicLayout>} />
            <Route path="/properties/:id" element={<PublicLayout><PropertyDetailPage /></PublicLayout>} />
            <Route path="/hostels" element={<PublicLayout><HostelListingPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
            <Route path="/faq" element={<PublicLayout><FAQPage /></PublicLayout>} />
            <Route path="/verification" element={<PublicLayout><VerificationPage /></PublicLayout>} />
            <Route path="/payment-plans" element={<PublicLayout><PaymentPlansPage /></PublicLayout>} />
            <Route path="/help" element={<PublicLayout><HelpCenterPage /></PublicLayout>} />
            <Route path="/for-owners" element={<PublicLayout><ForOwnersPage /></PublicLayout>} />
            <Route path="/for-banks" element={<PublicLayout><ForBanksPage /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
            <Route path="/privacy" element={<PublicLayout><PrivacyPage /></PublicLayout>} />
            <Route path="/terms" element={<PublicLayout><TermsPage /></PublicLayout>} />
            <Route path="/cookies" element={<PublicLayout><CookiesPage /></PublicLayout>} />

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard/customer/*" element={<CustomerDashboard />} />
            <Route path="/dashboard/owner/*" element={<OwnerDashboard />} />
            <Route path="/dashboard/bank/*" element={<BankDashboard />} />
            <Route path="/dashboard/student/*" element={<StudentDashboard />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

