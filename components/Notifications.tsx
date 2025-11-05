import {
  Bell,
  ArrowDownLeft,
  ArrowUpRight,
  Gift,
  AlertTriangle,
  CheckCircle,
  ChevronLeft,
} from 'lucide-react';

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'transaction',
      icon: ArrowDownLeft,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Money Received',
      message: 'You received $450.00 from Tendai Moyo',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      type: 'promo',
      icon: Gift,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Cashback Earned!',
      message: 'You earned $5 cashback on your last transaction',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'transaction',
      icon: ArrowUpRight,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Payment Successful',
      message: 'ZESA Prepaid payment of $25.00 completed',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 4,
      type: 'alert',
      icon: AlertTriangle,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'KYC Verification Pending',
      message: 'Complete your verification to unlock all features',
      time: '2 days ago',
      unread: false,
    },
    {
      id: 5,
      type: 'success',
      icon: CheckCircle,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Account Secured',
      message: 'Two-factor authentication has been enabled',
      time: '3 days ago',
      unread: false,
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
          <h2 className="text-gray-900">Notifications</h2>
          <button className="text-blue-600 text-sm">Mark all read</button>
        </div>

        {/* Unread count */}
        <div className="flex items-center gap-2 mb-6 bg-blue-50 rounded-2xl p-4">
          <Bell className="text-blue-600" size={20} />
          <p className="text-gray-700">
            You have{' '}
            <span className="text-blue-600">
              {notifications.filter((n) => n.unread).length}
            </span>{' '}
            unread notifications
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-gray-50 rounded-2xl p-4 ${
                  notification.unread ? 'border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`w-10 h-10 ${notification.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={notification.iconColor} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-gray-900">{notification.title}</p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
