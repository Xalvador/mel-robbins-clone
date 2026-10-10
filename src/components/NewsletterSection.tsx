import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSuccess(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-black/5">
          
          {/* Top Half: Mel on Airplane Image */}
          <div className="w-full aspect-[16/10] bg-[#111111] overflow-hidden">
            <img
              src="/images/Home_Newsletter_Promo.jpg"
              alt="Mel Robbins working on airplane"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://www.melrobbins.com/wp-content/uploads/2025/10/Home_Newsletter_Promo.jpg";
              }}
            />
          </div>

          {/* Bottom Half: Yellow Gradient Promo & Form */}
          <div className="bg-gradient-to-b from-[#FFF3C2] to-[#FFE785] px-6 sm:px-10 py-12 text-center text-black">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-2">
              2 Million Readers.<br />1 Life-Changing Newsletter.
            </h2>

            <p className="font-bold text-xs sm:text-sm text-[#222222] mb-8">
              Simple, inspiring and direct. Just like Mel!
            </p>

            {isSuccess ? (
              <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-sm font-bold text-black animate-fade-in">
                Thank you! You're subscribed to Mel's weekly newsletter. Check your inbox!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#E0D8C4] text-sm text-black placeholder:text-[#888888] focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#E0D8C4] text-sm text-black placeholder:text-[#888888] focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 text-left text-[11px] text-[#444444] pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className="mt-0.5 rounded accent-black"
                  />
                  <label htmlFor="consent" className="cursor-pointer">
                    I agree to receive communications from Mel Robbins and can unsubscribe at any time.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-block bg-black hover:bg-[#222222] text-white font-bold px-9 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
