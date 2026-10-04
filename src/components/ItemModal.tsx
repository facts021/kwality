import React from 'react';
import { X, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { MenuItem, restaurantInfo } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onEnquireItem: (item: MenuItem) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onEnquireItem }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#241812]/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border border-[#241812]/15 rounded-xs shadow-2xl max-w-lg w-full overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#241812] transition-colors focus:outline-hidden"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image header if available */}
        {item.imageUrl && (
          <div className="relative aspect-16/9 w-full bg-[#EFE8DD] overflow-hidden">
            <ImageWithFallback
              src={item.imageUrl}
              alt={item.imageAlt || item.name}
              fallbackCategory={item.category === 'cakes' ? 'cakes' : 'bakery'}
              fallbackTitle={item.name}
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2A4B37]">
              {item.subCategory || 'Kwality Selection'}
            </span>

            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#C86348] text-white rounded-xs">
                  {item.badge}
                </span>
              )}
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{item.isEggless ? '100% Eggless' : 'Pure Veg'}</span>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#241812] mb-3">
            {item.name}
          </h3>

          <p className="text-sm text-[#241812]/80 leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="p-4 bg-white border border-[#241812]/10 rounded-xs mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#64554B] block">
                Price Status
              </span>
              <span className="text-xl font-bold font-mono text-[#241812] tabular-nums">
                {item.price ? `₹${item.price}` : 'Available in-store'}
              </span>
            </div>
            <div className="text-right text-xs text-[#64554B]">
              <span>Ground Floor Counter</span>
              <span className="block text-[11px] text-[#2A4B37] font-medium">Eros City Square</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onEnquireItem(item);
              }}
              className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ENQUIRE ABOUT THIS ITEM</span>
            </button>

            <a
              href={`tel:${restaurantInfo.primaryPhone}`}
              className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#241812] bg-[#FAF7F2] hover:bg-[#EAE0D1] border border-[#241812]/15 rounded-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#2A4B37]" />
              <span>CALL STORE</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
