import { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Users,
  QrCode,
  Download,
  FileText,
  Printer,
  Share2,
  ChevronLeft,
} from 'lucide-react';

export function MerchantMode() {
  const [isMerchantMode, setIsMerchantMode] = useState(true);

  const todayStats = [
    { label: 'Sales', value: '$1,245.50', change: '+12%', icon: DollarSign },
    { label: 'Transactions', value: '47', change: '+8%', icon: TrendingUp },
    { label: 'Customers', value: '32', change: '+5%', icon: Users },
  ];

  const recentSales = [
    { id: 1, customer: 'Tendai M.', amount: 45.0, time: '2 min ago' },
    { id: 2, customer: 'Rudo C.', amount: 120.0, time: '15 min ago' },
    { id: 3, customer: 'Chipo M.', amount: 78.5, time: '32 min ago' },
    { id: 4, customer: 'Tafadzwa N.', amount: 200.0, time: '1 hour ago' },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Merchant Mode</h2>
          <button
            onClick={() => setIsMerchantMode(!isMerchantMode)}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              isMerchantMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                isMerchantMode ? 'right-1' : 'left-1'
              }`}
            ></div>
          </button>
        </div>

        {/* Revenue Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg mb-6">
          <p className="text-blue-100 mb-2 text-sm">Today's Revenue</p>
          <h1 className="text-white mb-1">$1,245.50</h1>
          <p className="text-sm text-green-300">+12% from yesterday</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {todayStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    index === 0
                      ? 'bg-green-100'
                      : index === 1
                      ? 'bg-blue-100'
                      : 'bg-purple-100'
                  }`}
                >
                  <Icon
                    className={
                      index === 0
                        ? 'text-green-600'
                        : index === 1
                        ? 'text-blue-600'
                        : 'text-purple-600'
                    }
                    size={20}
                  />
                </div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Merchant QR */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-700 mb-1">Your Payment QR</p>
              <p className="text-gray-500 text-sm">Show to customers</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <QrCode className="text-blue-600" size={32} />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-blue-600 py-2 rounded-xl flex items-center justify-center gap-2 shadow-sm">
              <Share2 size={16} />
              Share
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 shadow-sm">
              <Download size={16} />
              Save
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="text-blue-600" size={20} />
            </div>
            <div className="text-left">
              <p className="text-gray-900 text-sm">Create</p>
              <p className="text-gray-900 text-sm">Invoice</p>
            </div>
          </button>
          <button className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Download className="text-green-600" size={20} />
            </div>
            <div className="text-left">
              <p className="text-gray-900 text-sm">Withdraw</p>
              <p className="text-gray-900 text-sm">Funds</p>
            </div>
          </button>
        </div>

        {/* Recent Sales */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Recent Sales</h3>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {recentSales.map((sale) => (
            <div
              key={sale.id}
              className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                  {sale.customer.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900">{sale.customer}</p>
                  <p className="text-sm text-gray-500">{sale.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-900">${sale.amount.toFixed(2)}</p>
                <button className="p-2 bg-white rounded-xl shadow-sm">
                  <Printer className="text-gray-600" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
