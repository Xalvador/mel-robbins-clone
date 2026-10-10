import React, { useState } from 'react';
import { BookOpen, Check, ShoppingBag, Download, Star, ArrowRight } from 'lucide-react';
import { BOOKS_DATA, BookItem } from '../data/siteData';

interface FeaturedBooksSectionProps {
  onOrderClick: (book?: BookItem) => void;
}

export const FeaturedBooksSection: React.FC<FeaturedBooksSectionProps> = ({ onOrderClick }) => {
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const currentBook = BOOKS_DATA[selectedBookIndex];

  return (
    <section id="books" className="py-16 md:py-24 bg-cream/60 border-t border-muted-border/40">
      <div className="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow/40 border border-yellow text-dark text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-black" />
            New York Times & International Bestsellers
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight">
            Books & Proven Tools
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Practical frameworks with millions of copies sold around the globe.
          </p>
        </div>

        {/* Book Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {BOOKS_DATA.map((book, idx) => (
            <button
              key={book.id}
              onClick={() => setSelectedBookIndex(idx)}
              className={`px-5 py-3 rounded-2xl font-display font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 ${
                idx === selectedBookIndex
                  ? 'bg-dark text-white shadow-lg scale-105'
                  : 'bg-white text-dark hover:bg-cream border border-muted-border/60'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${idx === selectedBookIndex ? 'text-yellow' : 'text-muted'}`} />
              <span>{book.title}</span>
              {idx === 0 && (
                <span className="bg-yellow text-dark text-[10px] font-black px-1.5 py-0.5 rounded uppercase">
                  #1 Global
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Book Detail Box */}
        <div className="bg-white rounded-site-lg p-6 sm:p-10 lg:p-12 shadow-xl border border-muted-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Book Artwork Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                {/* Yellow Shadow Backdrop */}
                <div className="absolute -inset-2 bg-yellow/30 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform" />
                
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-cream flex items-center justify-center">
                  <img
                    src={currentBook.coverImage}
                    alt={currentBook.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Book Description & Retailer Triggers */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-hover mb-2">
                {currentBook.salesHighlight}
              </span>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-dark leading-tight mb-2">
                {currentBook.title}
              </h3>

              <p className="text-base sm:text-lg font-semibold text-dark/80 italic mb-4">
                &ldquo;{currentBook.subtitle}&rdquo;
              </p>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {currentBook.description}
              </p>

              {/* Bullet Features */}
              <div className="w-full space-y-2.5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-dark">
                  What You&rsquo;ll Learn Inside:
                </p>
                {currentBook.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-dark/90 font-medium">
                    <span className="w-5 h-5 rounded-full bg-yellow/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-dark font-black" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onOrderClick(currentBook)}
                  className="button-yellow font-extrabold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now &bull; Select Retailer</span>
                </button>

                <a
                  href="#newsletter"
                  className="button-outline font-bold flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Sample Chapter</span>
                </a>
              </div>

              {/* Retailer logos / text badges */}
              <div className="mt-8 pt-6 border-t border-muted-border/40 w-full">
                <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">
                  Available Everywhere Books Are Sold:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentBook.retailers.map((r, rIdx) => (
                    <button
                      key={rIdx}
                      onClick={() => onOrderClick(currentBook)}
                      className="px-3 py-1.5 bg-cream hover:bg-yellow/30 rounded-lg text-xs font-bold text-dark border border-muted-border/60 transition-colors flex items-center gap-1"
                    >
                      <span>{r.name}</span>
                      {r.badge && (
                        <span className="bg-yellow text-dark text-[9px] font-black px-1 rounded">
                          {r.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Free Toolkits Banner */}
        <div className="mt-12 bg-dark text-white rounded-site p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-yellow text-xs font-bold uppercase tracking-wider">Free Printable Toolkits</span>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Download the 30-Day Let Them &amp; High 5 Habit Habit Trackers
            </h4>
            <p className="text-white/70 text-xs sm:text-sm">
              Free PDFs, reflection journals, and habit worksheets to print and use at home or work.
            </p>
          </div>
          <a
            href="#newsletter"
            className="button-yellow text-xs sm:text-sm font-extrabold whitespace-nowrap flex items-center gap-1.5"
          >
            Get Free Trackers <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
