import { Home, Repeat, QrCode, Menu, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'transactions', icon: Repeat, label: 'Transactions' },
    { id: 'qr', icon: QrCode, label: 'QR' },
    { id: 'services', icon: Menu, label: 'Services' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 safe-area-bottom">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 py-1 px-2 transition-colors relative"
            >
              {isActive && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"></div>
              )}
              <Icon
                size={24}
                className={isActive ? 'text-blue-600' : 'text-gray-400'}
                strokeWidth={isActive ? 2 : 2}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
