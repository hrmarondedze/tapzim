import {
  User,
  Shield,
  Globe,
  Bell,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  AlertCircle,
  ChevronLeft,
} from 'lucide-react';

export function Profile() {
  const kycProgress = 75;

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', badge: null },
        { icon: Shield, label: 'Security Settings', badge: null },
        { icon: AlertCircle, label: 'KYC Verification', badge: 'Pending' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', badge: null },
        { icon: Globe, label: 'Language', badge: 'English' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', badge: null },
        { icon: FileText, label: 'Terms & Privacy', badge: null },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Profile</h2>
          <div className="w-10"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
              <span className="text-xl">TM</span>
            </div>
            <div>
              <h3 className="text-white mb-1">Takudzwa Mutasa</h3>
              <p className="text-blue-100 text-sm">+263 77 123 4567</p>
              <p className="text-blue-100 text-sm">takudzwa@example.com</p>
            </div>
          </div>

          {/* KYC Progress */}
          <div className="border-t border-white/20 pt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="text-orange-300" size={16} />
                <span className="text-sm text-white">KYC Verification</span>
              </div>
              <span className="text-sm text-orange-300">{kycProgress}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
              <div
                className="bg-orange-300 h-2 rounded-full transition-all"
                style={{ width: `${kycProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-gray-900 mb-3">{section.title}</h3>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={itemIndex}
                      className={`w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors ${
                        itemIndex !== section.items.length - 1
                          ? 'border-b border-gray-200'
                          : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-gray-600" size={20} />
                        <span className="text-gray-700">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.badge === 'Pending'
                                ? 'bg-orange-100 text-orange-600'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className="text-gray-400" size={20} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <button className="w-full bg-red-50 border border-red-200 text-red-600 py-4 rounded-2xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
            <LogOut size={20} />
            <span>Logout</span>
          </button>

          {/* App Version */}
          <p className="text-center text-gray-400 text-sm">Version 2.1.0</p>
        </div>
      </div>
    </div>
  );
}
