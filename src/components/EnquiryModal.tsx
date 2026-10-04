import React, { useState } from 'react';
import { X, CheckCircle, Send, Cake } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  prefilledItemName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'General',
  prefilledItemName,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: initialType || 'General',
    message: prefilledItemName ? `I would like to enquire about ordering: ${prefilledItemName}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Contact number is too short';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Local demo confirmation
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'General',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#241812]/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] border border-[#241812]/15 rounded-xs shadow-2xl max-w-lg w-full p-6 sm:p-8 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#64554B] hover:text-[#241812] rounded-xs hover:bg-[#F2ECE1] transition-colors"
          aria-label="Close enquiry form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-700" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#241812] mb-2">
              Enquiry Received
            </h3>

            <p className="text-sm text-[#241812]/80 max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-[#241812]">{formData.name}</span>!
              This is a live website demonstration. For instant orders or cake discussions,
              you may also reach the bakery counter directly at{' '}
              <a
                href={`tel:${restaurantInfo.primaryPhone}`}
                className="font-mono font-bold text-[#2A4B37] underline"
              >
                {restaurantInfo.phones[1].display}
              </a>.
            </p>

            <div className="p-3 bg-white rounded-xs border border-[#241812]/10 text-xs text-[#64554B] mb-6 text-left space-y-1">
              <div><strong>Enquiry Type:</strong> {formData.enquiryType}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Store:</strong> Shop 85, Eros City Square, Sector 49 Gurugram</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] rounded-xs transition-colors"
            >
              DONE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2A4B37] block mb-1">
                KWALITY CAFE & BAKERY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241812]">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#64554B] mt-1">
                Enquire about custom celebration cakes, catering trays, bulk party orders, or general questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#241812] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Sen"
                  className={`w-full px-3 py-2.5 bg-white border ${
                    errors.name ? 'border-red-500' : 'border-[#241812]/15'
                  } rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-sm text-[#241812]`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#241812] mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3 py-2.5 bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-[#241812]/15'
                    } rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-sm text-[#241812] font-mono`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#241812] mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2.5 bg-white border border-[#241812]/15 rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-sm text-[#241812]"
                  />
                </div>
              </div>

              {/* Enquiry Type */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#241812] mb-1">
                  Enquiry Type
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#241812]/15 rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-sm text-[#241812]"
                >
                  <option value="Cake">Custom Cake (100% Eggless)</option>
                  <option value="Bulk Order">Bulk Bakery Order / Catering</option>
                  <option value="Event">Event / Casual Gathering</option>
                  <option value="General">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#241812] mb-1">
                  Your Message or Requirement *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your cake flavor/weight, preferred date, or general inquiry..."
                  className={`w-full px-3 py-2.5 bg-white border ${
                    errors.message ? 'border-red-500' : 'border-[#241812]/15'
                  } rounded-xs focus:outline-hidden focus:border-[#2A4B37] text-sm text-[#241812] resize-none`}
                />
                {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] active:scale-98 transition-all rounded-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND ENQUIRY</span>
                </button>
                <p className="text-[10px] text-[#64554B] text-center mt-2">
                  Demo notice: Form triggers local simulated confirmation. Direct order phone: {restaurantInfo.phones[1].display}
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
