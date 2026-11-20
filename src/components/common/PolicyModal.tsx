import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';

export const PolicyModal: React.FC = () => {
  const { policyModal, setPolicyModal } = useShop();

  if (!policyModal) return null;

  const contentMap = {
    shipping: {
      title: 'Shipping Policy',
      icon: Truck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-chocolate/80 leading-relaxed">
          <p>
            <strong>Pan India Doorstep Coverage:</strong> BOOP STORE delivers genuine pet food, grooming supplies, and accessories to over 19,000 pincodes across India through certified temperature-monitored courier networks.
          </p>
          <p>
            <strong>Delivery Timelines:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Metro Cities (Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad): 2 to 3 Business Days.</li>
            <li>Rest of India: 4 to 6 Business Days.</li>
          </ul>
          <p>
            <strong>Free Shipping:</strong> Orders with a cart value of ₹999 or above automatically qualify for Free Pan-India Standard Shipping. Orders below ₹999 are charged a flat delivery fee of ₹99.
          </p>
          <p>
            <strong>Specialized Aquatic Packaging:</strong> All live aquatic plants and delicate aquarium supplies are packaged in insulated, shock-absorbent bio-packaging.
          </p>
        </div>
      ),
    },
    returns: {
      title: 'Return & Refund Policy',
      icon: RotateCcw,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-chocolate/80 leading-relaxed">
          <p>
            <strong>7-Day Easy Returns Guarantee:</strong> We want every pet and pet parent to be completely delighted with their purchase. If you receive an item that is damaged, defective, or incorrect, you can request a return within 7 days of delivery.
          </p>
          <p>
            <strong>Eligibility for Returns:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Unopened pet food and nutrition pouches in original sealed packaging.</li>
            <li>Unused toys, beds, collars, leashes, and carriers with all tags intact.</li>
            <li>For hygiene and safety reasons, opened edible treats and personal grooming clippers cannot be returned once unsealed.</li>
          </ul>
          <p>
            <strong>Refund Processing:</strong> Once the returned item is inspected at our central fulfillment warehouse, refunds are credited back to the original payment source within 3-5 business days.
          </p>
        </div>
      ),
    },
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-chocolate/80 leading-relaxed">
          <p>
            <strong>Data Integrity Commitment:</strong> BOOP STORE and Volga Life Biosciences LLP respect your privacy. We collect only the essential information necessary to process your pet-care orders and enhance your browsing experience.
          </p>
          <p>
            <strong>Information We Protect:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your contact and shipping address details for reliable package dispatch.</li>
            <li>Pet profile information (e.g. breed, age) used solely to tailor relevant product recommendations.</li>
            <li>We never sell, rent, or trade your personal data with third-party advertisers.</li>
          </ul>
          <p>
            <strong>Payment Security:</strong> All financial transactions are secured through 256-bit SSL encrypted payment channels compliant with PCI-DSS regulations.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-chocolate/80 leading-relaxed">
          <p>
            <strong>Agreement of Service:</strong> By accessing BOOP STORE (a brand by Volga Life Biosciences LLP), you agree to our terms of commerce and authentic service.
          </p>
          <p>
            <strong>Product Authenticity &amp; Use:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All listed branded items (Royal Canin, Farmina, Whiskas, Hikari, etc.) are guaranteed 100% genuine and authorized.</li>
            <li>Feeding guides and nutritional specifications are provided by manufacturer guidelines and should be adapted to your pet's individual health conditions in consultation with a qualified veterinarian.</li>
          </ul>
          <p>
            <strong>Jurisdiction:</strong> All commercial engagements are governed under the laws of India and subject to the exclusive jurisdiction of the courts of competent authority.
          </p>
        </div>
      ),
    },
  };

  const active = contentMap[policyModal];
  const Icon = active.icon;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setPolicyModal(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-xl w-full shadow-2xl border border-beige-border overflow-hidden z-10 flex flex-col max-h-[85vh]">
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-caramel" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              {active.title}
            </h3>
          </div>
          <button
            onClick={() => setPolicyModal(null)}
            className="p-1.5 rounded-full hover:bg-beige-light text-chocolate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {active.body}
          <div className="mt-6 pt-4 border-t border-beige-border text-[11px] text-chocolate/60 text-center">
            A Unit of Volga Life Biosciences LLP • Verified Policy
          </div>
        </div>
      </div>
    </div>
  );
};
