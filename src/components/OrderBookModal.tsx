import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle, Sparkles, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookItem } from '../data/siteData';

interface OrderBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  book?: BookItem;
}

export const OrderBookModal: React.FC<OrderBookModalProps> = ({
  isOpen,
  onClose,
  book,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'hardcover' | 'audiobook' | 'ebook'>('hardcover');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [bonusClaimed, setBonusClaimed] = useState(false);

  if (!isOpen) return null;

  const bookTitle = book?.title || "The Let Them Theory";

  const retailers = [
    { name: "Amazon", badge: "Prime Delivery", link: "https://amazon.com", rating: "4.9 ★ (42,000+ reviews)" },
    { name: "Barnes & Noble", badge: "Exclusive Edition", link: "https://barnesandnoble.com", rating: "Special Collector's Chapter" },
    { name: "Audible", badge: "Narrated by Mel", link: "https://audible.com", rating: "#1 Audio Bestseller" },
    { name: "Target", badge: "In Stores & Online", link: "https://target.com", rating: "RedCard Available" },
    { name: "Bookshop.org", badge: "Support Indie Stores", link: "https://bookshop.org", rating: "Directly funds local bookstores" },
  ];

  const handleClaimBonus = (e: React.FormEvent) => {
    e.preventDefault();
    if (receiptNumber) {
      setBonusClaimed(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white rounded-site-lg shadow-2xl border border-muted-border p-6 sm:p-8 z-50 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-muted-border/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Official Retailers</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-muted hover:text-dark hover:bg-cream"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center my-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-dark">
              Order {bookTitle}
            </h3>
            <p className="text-sm text-muted mt-1.5">
              Select your preferred format and retailer below to order now.
            </p>
          </div>

          {/* Format Selection Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1.5 bg-cream rounded-2xl mb-6">
            <button
              onClick={() => setSelectedFormat('hardcover')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedFormat === 'hardcover' ? 'bg-dark text-white shadow' : 'text-dark hover:text-black'
              }`}
            >
              Hardcover
            </button>
            <button
              onClick={() => setSelectedFormat('audiobook')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedFormat === 'audiobook' ? 'bg-dark text-white shadow' : 'text-dark hover:text-black'
              }`}
            >
              Audiobook
            </button>
            <button
              onClick={() => setSelectedFormat('ebook')}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                selectedFormat === 'ebook' ? 'bg-dark text-white shadow' : 'text-dark hover:text-black'
              }`}
            >
              E-Book (Kindle)
            </button>
          </div>

          {/* Retailer Links */}
          <div className="space-y-3 mb-8">
            {retailers.map((r, idx) => (
              <a
                key={idx}
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-muted-border/60 hover:border-yellow bg-cream/30 hover:bg-cream transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-base text-dark group-hover:text-black">
                      {r.name}
                    </span>
                    <span className="bg-yellow/40 text-dark text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                      {r.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">{r.rating}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-dark group-hover:text-yellow-hover">
                  <span>Order Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>

          {/* Claim Bonus Section */}
          <div className="p-5 rounded-2xl bg-yellow/20 border border-yellow/40">
            <div className="flex items-center gap-2 text-dark font-bold text-sm mb-2">
              <Gift className="w-4 h-4 text-dark" />
              <span>Already Pre-Ordered? Claim Your Bonus Masterclass!</span>
            </div>

            {bonusClaimed ? (
              <div className="text-xs font-bold text-dark flex items-center gap-1.5 text-green-800">
                <CheckCircle className="w-4 h-4 text-green-700" />
                Bonus unlocked! Check your inbox for the private masterclass link.
              </div>
            ) : (
              <form onSubmit={handleClaimBonus} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={receiptNumber}
                  onChange={(e) => setReceiptNumber(e.target.value)}
                  placeholder="Enter order/receipt number..."
                  required
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-yellow/60 text-dark focus:outline-none focus:ring-1 focus:ring-dark"
                />
                <button
                  type="submit"
                  className="button-black text-xs font-bold py-2 px-4 whitespace-nowrap"
                >
                  Claim Bonus
                </button>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
