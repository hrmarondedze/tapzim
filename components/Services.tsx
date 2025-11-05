import {
  Receipt,
  Smartphone,
  UtensilsCrossed,
  Tag,
  Building2,
  Zap,
  Heart,
  Car,
  Stethoscope,
  Wifi,
  Music,
  ShoppingBag,
  Trophy,
  MoreHorizontal,
  Search,
  ChevronLeft,
  MoreVertical,
} from 'lucide-react';

export function Services() {
  const mostUsed = [
    { id: 1, name: 'Bill\nPayment', icon: Receipt, color: 'blue' },
    { id: 2, name: 'Mobile\ntop up', icon: Smartphone, color: 'blue' },
    { id: 3, name: 'Camo\nfood', icon: UtensilsCrossed, color: 'blue' },
    { id: 4, name: 'Discount', icon: Tag, color: 'blue' },
  ];

  const allServices = [
    { id: 1, name: 'Shopping\ndeals', icon: ShoppingBag, color: 'blue' },
    { id: 2, name: 'Transfer to\nbank', icon: Building2, color: 'blue' },
    { id: 3, name: 'Delivery', icon: Car, color: 'blue' },
    { id: 4, name: 'Football\nticket', icon: Trophy, color: 'blue' },
    { id: 5, name: 'Electric\nbill', icon: Zap, color: 'blue' },
    { id: 6, name: 'Health\ncare', icon: Stethoscope, color: 'blue' },
    { id: 7, name: 'Internet', icon: Wifi, color: 'blue' },
    { id: 8, name: 'Hospital\nbill', icon: Heart, color: 'blue' },
    { id: 9, name: 'Discount', icon: Tag, color: 'blue' },
    { id: 10, name: 'Taxi', icon: Car, color: 'blue' },
    { id: 11, name: 'Music\nsubscription', icon: Music, color: 'blue' },
    { id: 12, name: 'Camo\nfood', icon: UtensilsCrossed, color: 'blue' },
    { id: 13, name: 'Game', icon: Trophy, color: 'blue' },
    { id: 14, name: 'Bill\nPayment', icon: Receipt, color: 'blue' },
    { id: 15, name: 'Electric\nbill', icon: Zap, color: 'blue' },
    { id: 16, name: 'Other', icon: MoreHorizontal, color: 'blue' },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="px-6 pt-12 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 -ml-2">
            <ChevronLeft className="text-gray-900" size={24} />
          </button>
          <h2 className="text-gray-900">Services</h2>
          <button className="p-2 -mr-2">
            <MoreVertical className="text-gray-900" size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Internet"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Most Used Section */}
        <div className="mb-8">
          <h3 className="text-gray-900 mb-4">Most Used</h3>
          <div className="grid grid-cols-4 gap-6">
            {mostUsed.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <span className="text-xs text-gray-700 text-center leading-tight whitespace-pre-line">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* All Services Section */}
        <div>
          <h3 className="text-gray-900 mb-4">All Services</h3>
          <div className="grid grid-cols-4 gap-6">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <span className="text-xs text-gray-700 text-center leading-tight whitespace-pre-line">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
