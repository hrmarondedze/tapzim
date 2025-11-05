import { useState, useEffect } from 'react';
import { Share2, Download, QrCode as QrCodeIcon, Eye } from 'lucide-react';

export function QRPayment() {
  const [activeTab, setActiveTab] = useState<'payment' | 'scan'>('payment');
  const [countdown, setCountdown] = useState(34);

  useEffect(() => {
    if (activeTab === 'payment') {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 60));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab('payment')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeTab === 'payment'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-200'
            }`}
          >
            <QrCodeIcon size={20} />
            <span>Payment QR</span>
          </button>
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeTab === 'scan'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border border-blue-200'
            }`}
          >
            <QrCodeIcon size={20} />
            <span>Scan QR</span>
          </button>
        </div>

        {activeTab === 'payment' ? (
          <div className="flex flex-col items-center">
            {/* Instruction Text */}
            <p className="text-gray-600 mb-8">Show this QR code to cashier</p>

            {/* QR Code */}
            <div className="mb-6">
              <div className="w-64 h-64 bg-white border-4 border-gray-900 p-2 grid grid-cols-8 gap-0.5">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Update Timer */}
            <p className="text-gray-500 mb-8">
              Update after <span className="text-blue-600">{countdown}s.</span>
            </p>

            {/* Wallet Balance */}
            <div className="w-full bg-gray-50 rounded-2xl p-4 mb-8 flex items-center justify-between">
              <span className="text-gray-600">Wallet balance</span>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">••••••</span>
                <button className="text-gray-400">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full grid grid-cols-2 gap-20">
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Share2 className="text-blue-600" size={20} />
                </div>
                <span className="text-gray-700">Share</span>
              </button>
              <button className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Download className="text-blue-600" size={20} />
                </div>
                <span className="text-gray-700">Save</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center pt-12">
            {/* Camera View Placeholder */}
            <div className="w-full aspect-square bg-gray-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden max-w-sm">
              <div className="absolute inset-8 border-2 border-blue-500 rounded-xl"></div>
              <QrCodeIcon className="text-white/50" size={80} />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 animate-pulse"></div>
            </div>

            <p className="text-gray-600 text-center mb-2">
              Position QR code within frame
            </p>
            <p className="text-sm text-gray-500 text-center">
              The QR will be scanned automatically
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
