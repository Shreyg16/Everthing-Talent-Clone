import React from 'react';

export const AnimatedText: React.FC = () => (
  <div className="w-[600px] h-[300px] flex items-center justify-center bg-invisible p-4">
    <div className="relative w-full max-w-2xl h-96 rounded-lg transition-shadow duration-300">
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: 'translate(0px, 0px)',
            zIndex: 7 - index,
          }}
        >
          <h1
            className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text select-none"
            style={{
              backgroundImage: 'linear-gradient(90deg, #B11AFF 0%, #FF689F 100%)',
              opacity: 1 - index * 0.15,
              WebkitBackgroundClip: 'text',
            }}
          >
            EVERYTHINGTALENT.AI
          </h1>
        </div>
      ))}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full grid grid-cols-40 grid-rows-24 rounded-lg overflow-hidden">
          {[...Array(960)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

