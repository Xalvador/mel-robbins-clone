import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#FFD200] text-black py-2 px-4 text-xs sm:text-sm font-semibold tracking-tight text-center border-b border-black/5 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5">
        <span>The Let Them Theory — 10 million copies sold in twelve months.</span>
        <a
          href="https://www.melrobbins.com/book/the-let-them-theory/"
          className="font-bold underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
        >
          Order your copy today &rarr;
        </a>
      </div>
    </div>
  );
};
