import { useState } from 'react';
import { ChevronLeft, QrCode, Upload, Flashlight } from 'lucide-react';

interface ScanQRProps {
  onBack?: () => void;
}

export function ScanQR({ onBack }: ScanQRProps) {
  const [flashOn, setFlashOn] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="p-2 -ml-2 text-white">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-white">Scan QR Code</h2>
          <button
            onClick={() => setFlashOn(!flashOn)}
            className={`p-2 -mr-2 ${flashOn ? 'text-yellow-400' : 'text-white'}`}
          >
            <Flashlight size={24} />
          </button>
        </div>

        {/* Camera View */}
        <div className="mb-8">
          <div className="w-full aspect-square bg-gray-900 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Scanning Frame */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full">
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-blue-500 rounded-br-2xl"></div>
                
                {/* Scanning Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50"></div>
              </div>
            </div>

            {/* QR Icon */}
            <QrCode className="text-white/30" size={80} />
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p className="text-gray-900 mb-2">Position QR code within frame</p>
          <p className="text-sm text-gray-500">
            The QR will be scanned automatically
          </p>
        </div>

        {/* Upload from Gallery */}
        <button className="w-full bg-blue-50 border-2 border-blue-200 border-dashed text-blue-600 py-4 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 mb-4">
          <Upload size={20} />
          <span>Upload QR from Gallery</span>
        </button>

        {/* Recent QR Scans */}
        <div className="mt-8">
          <h3 className="text-gray-900 mb-4">Recent Scans</h3>
          <div className="space-y-3">
            {[
              { name: 'Tendai Moyo', time: '2 hours ago', amount: '$45.00' },
              { name: 'Pick n Pay Checkout', time: 'Yesterday', amount: '$128.50' },
              { name: 'OK Supermarket', time: '2 days ago', amount: '$67.20' },
            ].map((scan, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <QrCode className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-900">{scan.name}</p>
                    <p className="text-sm text-gray-500">{scan.time}</p>
                  </div>
                </div>
                <p className="text-gray-900">{scan.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
