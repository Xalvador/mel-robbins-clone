import React from 'react';

export const BookSection: React.FC = () => {
  return (
    <section id="books" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Book Artwork */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start">
            <div className="w-full max-w-md rounded-2xl lg:rounded-3xl overflow-hidden drop-shadow-2xl">
              <img
                src="/images/let-them-book.png"
                alt="The Let Them Theory by Mel Robbins"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.melrobbins.com/wp-content/uploads/2025/11/let-them-book-holiday-2025.png";
                }}
              />
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-[46px] text-black leading-[1.1] mb-6">
              The #1 Book<br />in the World
            </h2>

            <div className="text-[#333333] text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p>
                <strong className="text-black font-semibold">The Let Them Theory</strong> is a publishing phenomenon. With 10 million copies sold in twelve months, it is the #1 selling book of 2025. It is on pace to become the biggest non-fiction book launch of all time.
              </p>
            </div>

            <a
              href="https://www.melrobbins.com/book/the-let-them-theory/"
              className="inline-block bg-[#FFD200] hover:bg-[#E5BD00] text-black font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm"
            >
              Get the Book
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
