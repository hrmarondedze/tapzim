import {
  Send,
  QrCode,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Zap,
  MessageCircle,
  Bell,
} from 'lucide-react';

interface HomeProps {
  onNavigate?: (screen: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const transactions = [
    {
      id: 1,
      type: 'received',
      name: 'Tendai Moyo',
      amount: 450.0,
      currency: 'USD',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'sent',
      name: 'ZESA Prepaid',
      amount: 25.0,
      currency: 'USD',
      time: 'Yesterday',
      status: 'completed',
    },
    {
      id: 3,
      type: 'sent',
      name: 'Econet Airtime',
      amount: 10.0,
      currency: 'USD',
      time: '2 days ago',
      status: 'completed',
    },
    {
      id: 4,
      type: 'received',
      name: 'Rudo Chikwanha',
      amount: 120.5,
      currency: 'USD',
      time: '3 days ago',
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500 mb-1">Good Morning,</p>
            <h2 className="text-gray-900">Takudzwa Mutasa</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2">
              <Bell className="text-gray-900" size={24} />
            </button>
            <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
              <span className="text-sm">TM</span>
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg mb-6">
          <p className="text-blue-100 mb-2 text-sm">Total Balance</p>
          <div className="flex items-baseline gap-2 mb-1">
            <h1 className="text-white">$2,847.50</h1>
            <span className="text-green-300 text-sm">+12.5%</span>
          </div>
          <p className="text-blue-100 text-sm">≈ ZWL 915,600.00</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <button 
            onClick={() => onNavigate?.('transfer')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Send className="text-blue-600" size={24} />
            </div>
            <span className="text-xs text-gray-700">Transfer</span>
          </button>
          <button 
            onClick={() => onNavigate?.('scanqr')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <QrCode className="text-blue-600" size={24} />
            </div>
            <span className="text-xs text-gray-700">Scan QR</span>
          </button>
          <button 
            onClick={() => onNavigate?.('topup')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Plus className="text-blue-600" size={24} />
            </div>
            <span className="text-xs text-gray-700">Top Up</span>
          </button>
          <button 
            onClick={() => onNavigate?.('services')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Zap className="text-blue-600" size={24} />
            </div>
            <span className="text-xs text-gray-700">Services</span>
          </button>
        </div>

        {/* Exchange Rate Widget */}
        <div className="bg-blue-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Current Rate</p>
              <p className="text-gray-900">1 USD = 321.50 ZWL</p>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <Zap size={16} />
              <span className="text-sm">Live</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Recent Transactions</h3>
          <button className="text-blue-600 text-sm">See All</button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'received'
                      ? 'bg-green-100'
                      : 'bg-red-100'
                  }`}
                >
                  {transaction.type === 'received' ? (
                    <ArrowDownLeft className="text-green-600" size={20} />
                  ) : (
                    <ArrowUpRight className="text-red-600" size={20} />
                  )}
                </div>
                <div>
                  <p className="text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`${
                    transaction.type === 'received'
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}
                >
                  {transaction.type === 'received' ? '+' : '-'}
                  {transaction.currency} {transaction.amount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
