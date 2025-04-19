
import React from 'react';

type StoreBannerProps = {
  title: string;
  subtitle: string;
  image: string;
};

const StoreBanner: React.FC<StoreBannerProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image || 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ksdm-navy/80 to-black/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl max-w-2xl opacity-90">{subtitle}</p>
      </div>
    </div>
  );
};

export default StoreBanner;
