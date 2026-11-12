import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white py-3 pb-0 hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center text-[13px] font-medium text-black pb-6">
          <div className="flex space-x-6 items-center">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gray-900 stroke-[2.5]" /> 
              <a href="tel:+18887005543" className="hover:text-[#414C00] transition-colors">(888) 700 5543</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 text-xs">Alt:</span>
              <a href="tel:+18887005498" className="hover:text-[#414C00] transition-colors">(888) 700 5498</a>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gray-900 stroke-[2.5]" /> Mon – Fri 8 am – 6 pm
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gray-900 stroke-[2.5]" /> 1015 Riley St, #297 Folsom CA 95630
            </span>
          </div>
        </div>
        <div className="border-t border-[#374102] opacity-50"></div>
      </div>
    </div>
  );
};

export default TopBar;