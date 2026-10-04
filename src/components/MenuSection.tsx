import React, { useState } from 'react';
import { Search, Filter, Leaf, Info } from 'lucide-react';
import { verifiedMenuItems, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'cakes', label: 'Custom Cakes' },
    { key: 'bakery', label: 'Bakery & Pastry' },
    { key: 'cafe', label: 'Cafe Savories' },
    { key: 'pizza_pasta', label: 'Pizzas & Pastas' },
    { key: 'beverages', label: 'Coffee & Drinks' },
  ];

  const filteredItems = verifiedMenuItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
                AUTHENTIC KITCHEN & OVEN SELECTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight">
              THE KWALITY MENU
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#64554B] max-w-sm">
            All offerings are 100% pure vegetarian. Cakes & pastries are strictly eggless. Verified
            prices are shown as listed on public directories.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#241812]/10">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-[#2A4B37] text-white shadow-xs'
                    : 'text-[#241812]/80 hover:text-[#241812] bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#241812]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#64554B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizza, truffle, coffee..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#241812]/15 rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-[#241812] placeholder:text-[#64554B]/60"
            />
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F4EFE6] rounded-xs border border-dashed border-[#241812]/20 p-8">
            <p className="text-sm font-serif text-[#241812] mb-2">No items found matching your filter</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#2A4B37] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#241812]/10 rounded-xs p-5 shadow-xs hover:border-[#2A4B37]/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      {item.subCategory && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#64554B] block mb-1">
                          {item.subCategory}
                        </span>
                      )}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#241812] leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    {/* Pure Veg Green Dot Badge */}
                    <div className="w-4 h-4 border border-emerald-700 p-[2px] flex items-center justify-center shrink-0 mt-1" title="100% Pure Vegetarian">
                      <div className="w-2 h-2 rounded-full bg-emerald-700" />
                    </div>
                  </div>

                  <p className="text-xs text-[#241812]/75 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#241812]/8 flex items-center justify-between">
                  <div>
                    {item.price ? (
                      <span className="text-base font-bold font-mono text-[#241812] tabular-nums">
                        ₹{item.price}
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#64554B] italic">
                        Price available in-store
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#2A4B37] hover:text-[#1F3829] py-1 underline underline-offset-4 decoration-1 decoration-[#2A4B37]/30 hover:decoration-[#2A4B37]"
                  >
                    VIEW ITEM
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Pure Veg Note Bar */}
        <div className="mt-12 p-4 bg-[#F4EFE6] border border-[#241812]/10 rounded-xs flex items-center gap-3 text-xs text-[#64554B]">
          <Info className="w-4 h-4 text-[#2A4B37] shrink-0" />
          <span>
            <strong>Authenticity Note:</strong> Menu items and pricing reflect verified public listings for
            Kwality Cafe & Bakery at Eros City Square, Sector 49 Gurugram. Custom cake pricing varies by weight and design.
          </span>
        </div>

      </div>
    </section>
  );
};
