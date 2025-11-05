import { useState } from 'react';
import { ChevronLeft, Smartphone, Wifi, Zap, DollarSign } from 'lucide-react';

interface TopUpProps {
  onBack?: () => void;
}

export function TopUp({ onBack }: TopUpProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const services = [
    { id: 'airtime', name: 'Airtime', icon: Smartphone, color: 'blue' },
    { id: 'data', name: 'Data Bundles', icon: Wifi, color: 'purple' },
    { id: 'electricity', name: 'Electricity', icon: Zap, color: 'yellow' },
    { id: 'wallet', name: 'Add to Wallet', icon: DollarSign, color: 'green' },
  ];

  const networks = [
    { id: 'econet', name: 'Econet', logo: '🔵' },
    { id: 'netone', name: 'NetOne', logo: '🔴' },
    { id: 'telecel', name: 'Telecel', logo: '🟢' },
  ];

  const airtimeAmounts = [5, 10, 20, 50, 100];
  const dataPackages = [
    { size: '1GB', price: 5, validity: '24 hours' },
    { size: '5GB', price: 15, validity: '7 days' },
    { size: '10GB', price: 25, validity: '30 days' },
    { size: '25GB', price: 50, validity: '30 days' },
  ];

  const handleTopUp = () => {
    alert('Top up successful!');
    onBack?.();
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Top Up</h2>
          <div className="w-10"></div>
        </div>

        {/* Service Selection */}
        {!selectedService && (
          <div>
            <h3 className="text-gray-900 mb-4">Select Service</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                const colors = getColorClasses(service.color);
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    <span className="text-gray-900">{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Airtime Top Up */}
        {selectedService === 'airtime' && (
          <div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-blue-600 mb-6 flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Back to services
            </button>

            <h3 className="text-gray-900 mb-4">Airtime Top Up</h3>

            {/* Network Selection */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Select Network</label>
              <div className="grid grid-cols-3 gap-3">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-3xl mb-2 block">{network.logo}</span>
                    <span className="text-sm text-gray-700">{network.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="+263 77 123 4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Amount (USD)</label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {airtimeAmounts.map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val.toString())}
                    className={`py-3 rounded-xl transition-colors ${
                      amount === val.toString()
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Amount</span>
                <span className="text-gray-900">${amount || '0.00'}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Fee</span>
                <span className="text-gray-900">$0.00</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">${amount || '0.00'}</span>
              </div>
            </div>

            <button
              onClick={handleTopUp}
              disabled={!amount || !phoneNumber}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Confirm Top Up
            </button>
          </div>
        )}

        {/* Data Bundles */}
        {selectedService === 'data' && (
          <div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-blue-600 mb-6 flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Back to services
            </button>

            <h3 className="text-gray-900 mb-4">Data Bundles</h3>

            {/* Network Selection */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Select Network</label>
              <div className="grid grid-cols-3 gap-3">
                {networks.map((network) => (
                  <button
                    key={network.id}
                    className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-3xl mb-2 block">{network.logo}</span>
                    <span className="text-sm text-gray-700">{network.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="+263 77 123 4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Data Packages */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Select Package</label>
              <div className="space-y-3">
                {dataPackages.map((pkg) => (
                  <button
                    key={pkg.size}
                    className="w-full bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-gray-900">{pkg.size}</p>
                        <p className="text-sm text-gray-500">Valid for {pkg.validity}</p>
                      </div>
                      <p className="text-blue-600">${pkg.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Electricity */}
        {selectedService === 'electricity' && (
          <div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-blue-600 mb-6 flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Back to services
            </button>

            <h3 className="text-gray-900 mb-4">ZESA Prepaid</h3>

            {/* Meter Number */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Meter Number</label>
              <input
                type="text"
                placeholder="Enter your meter number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Amount (USD)</label>
              <div className="grid grid-cols-4 gap-3 mb-3">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val.toString())}
                    className={`py-3 rounded-xl transition-colors ${
                      amount === val.toString()
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={handleTopUp}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Buy Electricity
            </button>
          </div>
        )}

        {/* Add to Wallet */}
        {selectedService === 'wallet' && (
          <div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-blue-600 mb-6 flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Back to services
            </button>

            <h3 className="text-gray-900 mb-4">Add Money to Wallet</h3>

            {/* Payment Methods */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Payment Method</label>
              <div className="space-y-3">
                <button className="w-full bg-gray-50 rounded-2xl p-4 text-left hover:bg-gray-100 transition-colors">
                  <p className="text-gray-900">Bank Card</p>
                  <p className="text-sm text-gray-500">Visa, Mastercard</p>
                </button>
                <button className="w-full bg-gray-50 rounded-2xl p-4 text-left hover:bg-gray-100 transition-colors">
                  <p className="text-gray-900">EcoCash</p>
                  <p className="text-sm text-gray-500">Mobile money transfer</p>
                </button>
                <button className="w-full bg-gray-50 rounded-2xl p-4 text-left hover:bg-gray-100 transition-colors">
                  <p className="text-gray-900">Bank Transfer</p>
                  <p className="text-sm text-gray-500">Direct bank deposit</p>
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-gray-900 mb-2 text-sm">Amount (USD)</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <button
              onClick={handleTopUp}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Add Money
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
