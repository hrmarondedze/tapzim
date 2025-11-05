import { useState } from 'react';
import { ChevronLeft, Search, User, Users, Building2, X } from 'lucide-react';

interface TransferProps {
  onBack?: () => void;
}

export function Transfer({ onBack }: TransferProps) {
  const [transferMethod, setTransferMethod] = useState<'select' | 'wallet' | 'bank' | 'mobile'>('select');
  const [step, setStep] = useState<'method' | 'recipient' | 'amount' | 'confirm'>('method');
  const [selectedRecipient, setSelectedRecipient] = useState<any>(null);
  const [selectedBank, setSelectedBank] = useState<any>(null);
  const [selectedMobileMoney, setSelectedMobileMoney] = useState<any>(null);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const recentContacts = [
    { id: 1, name: 'Tendai Moyo', phone: '+263 77 123 4567', avatar: 'TM' },
    { id: 2, name: 'Rudo Chikwanha', phone: '+263 78 234 5678', avatar: 'RC' },
    { id: 3, name: 'Chipo Maseko', phone: '+263 71 345 6789', avatar: 'CM' },
    { id: 4, name: 'Tafadzwa Ncube', phone: '+263 77 456 7890', avatar: 'TN' },
  ];

  const transferMethods = [
    { id: 'wallet', name: 'To Wallet User', icon: User, description: 'Transfer to another wallet' },
    { id: 'bank', name: 'To Bank Account', icon: Building2, description: 'Transfer to any bank' },
    { id: 'mobile', name: 'To Mobile Money', icon: Users, description: 'EcoCash, OneMoney, etc.' },
  ];

  const zimbabweBanks = [
    { id: 'cbz', name: 'CBZ Bank', logo: '🏦', color: 'blue' },
    { id: 'stanbic', name: 'Stanbic Bank', logo: '🏦', color: 'blue' },
    { id: 'standard', name: 'Standard Chartered', logo: '🏦', color: 'green' },
    { id: 'fbc', name: 'FBC Bank', logo: '🏦', color: 'red' },
    { id: 'nmb', name: 'NMB Bank', logo: '🏦', color: 'orange' },
    { id: 'steward', name: 'Steward Bank', logo: '🏦', color: 'purple' },
    { id: 'zb', name: 'ZB Bank', logo: '🏦', color: 'yellow' },
    { id: 'bancabc', name: 'BancABC', logo: '🏦', color: 'blue' },
  ];

  const mobileMoneyProviders = [
    { id: 'ecocash', name: 'EcoCash', logo: '📱', color: 'red', description: 'Most popular in Zimbabwe' },
    { id: 'onemoney', name: 'OneMoney', logo: '📱', color: 'red', description: 'NetOne mobile money' },
    { id: 'innbucks', name: 'InnBucks', logo: '📱', color: 'orange', description: 'NMB mobile wallet' },
    { id: 'mukuru', name: 'Mukuru', logo: '💸', color: 'blue', description: 'Money transfer service' },
    { id: 'omari', name: 'Omari', logo: '💰', color: 'green', description: 'Digital payments' },
  ];

  const handleSelectMethod = (method: string) => {
    if (method === 'wallet') {
      setTransferMethod('wallet');
      setStep('recipient');
    } else if (method === 'bank') {
      setTransferMethod('bank');
      setStep('recipient');
    } else if (method === 'mobile') {
      setTransferMethod('mobile');
      setStep('recipient');
    }
  };

  const handleSelectRecipient = (contact: any) => {
    setSelectedRecipient(contact);
    setStep('amount');
  };

  const handleSelectBank = (bank: any) => {
    setSelectedBank(bank);
    setStep('amount');
  };

  const handleSelectMobileMoney = (provider: any) => {
    setSelectedMobileMoney(provider);
    setStep('amount');
  };

  const handleContinueToConfirm = () => {
    if (amount && parseFloat(amount) > 0) {
      setStep('confirm');
    }
  };

  const handleConfirmTransfer = () => {
    alert('Transfer successful!');
    onBack?.();
  };

  const handleBackToMethod = () => {
    setTransferMethod('select');
    setStep('method');
    setSelectedRecipient(null);
    setSelectedBank(null);
    setSelectedMobileMoney(null);
    setAmount('');
    setNote('');
    setAccountNumber('');
    setMobileNumber('');
  };

  // Confirm Screen
  if (step === 'confirm') {
    const recipientName = transferMethod === 'wallet' 
      ? selectedRecipient?.name 
      : transferMethod === 'bank'
      ? selectedBank?.name
      : selectedMobileMoney?.name;

    const recipientDetail = transferMethod === 'wallet'
      ? selectedRecipient?.phone
      : transferMethod === 'bank'
      ? `Account: ${accountNumber}`
      : `Mobile: ${mobileNumber}`;

    return (
      <div className="min-h-screen bg-white pb-24">
        <div className="px-6 pt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setStep('amount')} className="p-2 -ml-2">
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <h2 className="text-gray-900">Confirm Transfer</h2>
            <div className="w-10"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-lg mb-6 text-center">
            <p className="text-blue-100 mb-2 text-sm">You're sending</p>
            <h1 className="text-white mb-4">${parseFloat(amount).toFixed(2)}</h1>
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-blue-100 text-sm mb-1">To</p>
              <p className="text-white">{recipientName}</p>
              <p className="text-blue-100 text-sm">{recipientDetail}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount</span>
              <span className="text-gray-900">${parseFloat(amount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction Fee</span>
              <span className="text-gray-900">$0.00</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">${parseFloat(amount).toFixed(2)}</span>
            </div>
          </div>

          {note && (
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <p className="text-gray-600 text-sm mb-1">Note</p>
              <p className="text-gray-900">{note}</p>
            </div>
          )}

          <button
            onClick={handleConfirmTransfer}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors mb-3"
          >
            Confirm & Send
          </button>
          <button
            onClick={() => setStep('amount')}
            className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // Amount Screen
  if (step === 'amount') {
    return (
      <div className="min-h-screen bg-white pb-24">
        <div className="px-6 pt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setStep('recipient')} className="p-2 -ml-2">
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <h2 className="text-gray-900">Enter Amount</h2>
            <div className="w-10"></div>
          </div>

          {/* Recipient Info */}
          <div className="bg-blue-50 rounded-2xl p-4 mb-6">
            {transferMethod === 'wallet' && selectedRecipient && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                  {selectedRecipient.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{selectedRecipient.name}</p>
                  <p className="text-sm text-gray-600">{selectedRecipient.phone}</p>
                </div>
              </div>
            )}
            {transferMethod === 'bank' && selectedBank && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {selectedBank.logo}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{selectedBank.name}</p>
                  <p className="text-sm text-gray-600">Account: {accountNumber}</p>
                </div>
              </div>
            )}
            {transferMethod === 'mobile' && selectedMobileMoney && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                  {selectedMobileMoney.logo}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{selectedMobileMoney.name}</p>
                  <p className="text-sm text-gray-600">{mobileNumber}</p>
                </div>
              </div>
            )}
          </div>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-2 text-sm">Amount (USD)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">$</span>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-xl"
              />
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[10, 20, 50, 100].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val.toString())}
                className="py-3 bg-gray-50 rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
              >
                ${val}
              </button>
            ))}
          </div>

          {/* Note */}
          <div className="mb-6">
            <label className="block text-gray-900 mb-2 text-sm">Note (Optional)</label>
            <input
              type="text"
              placeholder="Add a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Available Balance */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Available Balance</span>
              <span className="text-gray-900">$2,847.50</span>
            </div>
          </div>

          <button
            onClick={handleContinueToConfirm}
            disabled={!amount || parseFloat(amount) <= 0}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Recipient Selection for Wallet
  if (step === 'recipient' && transferMethod === 'wallet') {
    return (
      <div className="min-h-screen bg-white pb-24">
        <div className="px-6 pt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBackToMethod} className="p-2 -ml-2">
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <h2 className="text-gray-900">Select Recipient</h2>
            <div className="w-10"></div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Recent Contacts */}
          <div>
            <h3 className="text-gray-900 mb-4">Recent</h3>
            <div className="space-y-3">
              {recentContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => handleSelectRecipient(contact)}
                  className="w-full bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                    {contact.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.phone}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Bank Selection
  if (step === 'recipient' && transferMethod === 'bank') {
    return (
      <div className="min-h-screen bg-white pb-24">
        <div className="px-6 pt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBackToMethod} className="p-2 -ml-2">
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <h2 className="text-gray-900">Select Bank</h2>
            <div className="w-10"></div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search banks..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Banks List */}
          <div>
            <h3 className="text-gray-900 mb-4">All Banks</h3>
            <div className="space-y-3">
              {zimbabweBanks.map((bank) => (
                <div key={bank.id}>
                  <button
                    onClick={() => {
                      setSelectedBank(bank);
                    }}
                    className="w-full bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {bank.logo}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-gray-900">{bank.name}</p>
                    </div>
                  </button>
                  
                  {/* Account Number Input */}
                  {selectedBank?.id === bank.id && (
                    <div className="mt-3 px-2">
                      <label className="block text-gray-900 mb-2 text-sm">Account Number</label>
                      <input
                        type="text"
                        placeholder="Enter account number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 mb-3"
                      />
                      <button
                        onClick={() => accountNumber && setStep('amount')}
                        disabled={!accountNumber}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile Money Selection
  if (step === 'recipient' && transferMethod === 'mobile') {
    return (
      <div className="min-h-screen bg-white pb-24">
        <div className="px-6 pt-12 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBackToMethod} className="p-2 -ml-2">
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <h2 className="text-gray-900">Mobile Money</h2>
            <div className="w-10"></div>
          </div>

          {/* Mobile Money Providers */}
          <div>
            <h3 className="text-gray-900 mb-4">Select Provider</h3>
            <div className="space-y-3">
              {mobileMoneyProviders.map((provider) => (
                <div key={provider.id}>
                  <button
                    onClick={() => {
                      setSelectedMobileMoney(provider);
                    }}
                    className="w-full bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-12 h-12 ${
                      provider.color === 'red' ? 'bg-red-100' :
                      provider.color === 'orange' ? 'bg-orange-100' :
                      provider.color === 'blue' ? 'bg-blue-100' :
                      'bg-green-100'
                    } rounded-xl flex items-center justify-center text-2xl`}>
                      {provider.logo}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-gray-900">{provider.name}</p>
                      <p className="text-sm text-gray-500">{provider.description}</p>
                    </div>
                  </button>

                  {/* Mobile Number Input */}
                  {selectedMobileMoney?.id === provider.id && (
                    <div className="mt-3 px-2">
                      <label className="block text-gray-900 mb-2 text-sm">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="+263 77 123 4567"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 mb-3"
                      />
                      <button
                        onClick={() => mobileNumber && setStep('amount')}
                        disabled={!mobileNumber}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Method Selection (Initial Screen)
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Transfer Money</h2>
          <div className="w-10"></div>
        </div>

        {/* Transfer Methods */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-4">Transfer Method</h3>
          <div className="space-y-3">
            {transferMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => handleSelectMethod(method.id)}
                  className="w-full bg-gray-50 rounded-2xl p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-900">{method.name}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
