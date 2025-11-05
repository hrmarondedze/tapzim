import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDownLeft,
  Receipt,
  Smartphone,
  Filter,
  Download,
  ChevronLeft,
} from 'lucide-react';

export function TransactionHistory() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'received' | 'sent' | 'bills' | 'topups'
  >('all');

  const allTransactions = [
    {
      id: 1,
      type: 'received',
      name: 'Tendai Moyo',
      description: 'Money received',
      amount: 450.0,
      currency: 'USD',
      date: '2025-11-04',
      time: '14:32',
      status: 'completed',
    },
    {
      id: 2,
      type: 'bill',
      name: 'ZESA Prepaid',
      description: 'Electricity payment',
      amount: 25.0,
      currency: 'USD',
      date: '2025-11-03',
      time: '09:15',
      status: 'completed',
    },
    {
      id: 3,
      type: 'topup',
      name: 'Econet Airtime',
      description: 'Airtime purchase',
      amount: 10.0,
      currency: 'USD',
      date: '2025-11-03',
      time: '16:20',
      status: 'completed',
    },
    {
      id: 4,
      type: 'sent',
      name: 'Rudo Chikwanha',
      description: 'Money sent',
      amount: 120.5,
      currency: 'USD',
      date: '2025-11-02',
      time: '11:45',
      status: 'completed',
    },
  ];

  const filteredTransactions = allTransactions.filter((transaction) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'received') return transaction.type === 'received';
    if (activeTab === 'sent') return transaction.type === 'sent';
    if (activeTab === 'bills') return transaction.type === 'bill';
    if (activeTab === 'topups') return transaction.type === 'topup';
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'received':
        return <ArrowDownLeft className="text-green-600" size={20} />;
      case 'sent':
        return <ArrowUpRight className="text-red-600" size={20} />;
      case 'bill':
        return <Receipt className="text-blue-600" size={20} />;
      case 'topup':
        return <Smartphone className="text-orange-600" size={20} />;
      default:
        return <ArrowUpRight className="text-gray-600" size={20} />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'received':
        return 'bg-green-100';
      case 'sent':
        return 'bg-red-100';
      case 'bill':
        return 'bg-blue-100';
      case 'topup':
        return 'bg-orange-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Transactions</h2>
          <div className="flex gap-2">
            <button className="p-2">
              <Filter className="text-gray-600" size={20} />
            </button>
            <button className="p-2">
              <Download className="text-gray-600" size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-6">
          {['all', 'received', 'sent', 'bills', 'topups'].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(
                  tab as 'all' | 'received' | 'sent' | 'bills' | 'topups'
                )
              }
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg mb-6">
          <p className="text-blue-100 mb-2 text-sm">
            Total {activeTab} this month
          </p>
          <h2 className="text-white mb-4">
            $
            {filteredTransactions
              .reduce((sum, t) => sum + t.amount, 0)
              .toFixed(2)}
          </h2>
          <div className="flex gap-6">
            <div>
              <p className="text-blue-100 text-sm">Transactions</p>
              <p className="text-white">{filteredTransactions.length}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Average</p>
              <p className="text-white">
                $
                {(
                  filteredTransactions.reduce((sum, t) => sum + t.amount, 0) /
                    filteredTransactions.length || 0
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBg(
                      transaction.type
                    )}`}
                  >
                    {getIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {transaction.date} • {transaction.time}
                    </p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
