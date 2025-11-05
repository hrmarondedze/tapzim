import { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { QRPayment } from './components/QRPayment';
import { Services } from './components/Services';
import { TransactionHistory } from './components/TransactionHistory';
import { MerchantMode } from './components/MerchantMode';
import { Profile } from './components/Profile';
import { Notifications } from './components/Notifications';
import { Transfer } from './components/Transfer';
import { ScanQR } from './components/ScanQR';
import { TopUp } from './components/TopUp';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [appState, setAppState] = useState<'login' | 'onboarding' | 'main'>('login');
  const [activeTab, setActiveTab] = useState<'home' | 'transactions' | 'qr' | 'services' | 'profile'>('home');
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);
  const [isMerchantMode, setIsMerchantMode] = useState(false);

  // Handle authentication flow
  const handleLogin = () => {
    setAppState('main');
  };

  const handleSignup = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setAppState('main');
  };

  // Render authentication screens
  if (appState === 'login') {
    return <Login onLogin={handleLogin} onSignup={handleSignup} />;
  }

  if (appState === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Handle navigation
  const handleNavigate = (screen: string) => {
    if (screen === 'services' || screen === 'qr' || screen === 'transactions' || screen === 'profile') {
      setActiveTab(screen as any);
      setCurrentScreen(null);
    } else {
      setCurrentScreen(screen);
    }
  };

  const handleBack = () => {
    setCurrentScreen(null);
  };

  // Render main app with bottom navigation
  return (
    <div className="size-full max-w-lg mx-auto bg-white">
      {/* Main Content */}
      <div className="h-full overflow-y-auto">
        {currentScreen === 'transfer' && <Transfer onBack={handleBack} />}
        {currentScreen === 'scanqr' && <ScanQR onBack={handleBack} />}
        {currentScreen === 'topup' && <TopUp onBack={handleBack} />}
        {!currentScreen && activeTab === 'home' && !isMerchantMode && (
          <Home onNavigate={handleNavigate} />
        )}
        {!currentScreen && activeTab === 'home' && isMerchantMode && <MerchantMode />}
        {!currentScreen && activeTab === 'transactions' && <TransactionHistory />}
        {!currentScreen && activeTab === 'qr' && <QRPayment />}
        {!currentScreen && activeTab === 'services' && <Services />}
        {!currentScreen && activeTab === 'profile' && <Profile />}
      </div>

      {/* Bottom Navigation - Hide when in sub-screens */}
      {!currentScreen && (
        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as any)}
        />
      )}
    </div>
  );
}
