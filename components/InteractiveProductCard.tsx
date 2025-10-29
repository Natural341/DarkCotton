'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface InteractiveProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const InteractiveProductCard: React.FC<InteractiveProductCardProps> = ({ product, onViewProduct }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!galleryRef.current) return;
        const rect = galleryRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const imageCount = product.imageUrls.length;
        const newIndex = Math.min(Math.max(Math.floor((x / width) * imageCount), 0), imageCount - 1);
        if (newIndex !== activeImageIndex) {
            setActiveImageIndex(newIndex);
        }
    }, [product.imageUrls.length, activeImageIndex]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setActiveImageIndex(0);
        setIsHovered(false);
    };

    return (
        <div
            className="group cursor-pointer transition-all duration-1000 ease-in-out"
            onClick={() => onViewProduct(product)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={galleryRef}
                className="relative overflow-hidden aspect-square"
                onMouseMove={handleMouseMove}
            >
                {product.imageUrls.map((url, index) => (
                    <div key={`${product.id}-${index}`} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                            src={url}
                            alt={`${product.name} view ${index + 1}`}
                            fill
                            className="object-contain p-6"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Image Progress Indicators - Retro turuncu */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-0.5 px-8">
                    {product.imageUrls.map((_, index) => (
                        <div
                            key={`${product.id}-indicator-${index}`}
                            className={`h-[2px] w-6 transition-all duration-700 ease-in-out ${
                                index === activeImageIndex
                                    ? 'bg-[#F9A822]/70'
                                    : 'bg-[#d4c5b3]/40'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="px-4 py-3 text-center">
                <h3 className={`font-heading text-sm tracking-wide mb-1.5 transition-colors duration-700 ease-in-out ${
                    isHovered ? 'text-brand-orange' : 'text-black'
                }`}>
                    {product.name}
                </h3>
                <p className="font-body text-xs text-black mb-2">
                    {product.price.toFixed(0)} TL
                </p>

                {/* Color Combinations on Hover - Daha soft ve şık */}
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                        {product.colorCombinations.map((color, index) => (
                            <span
                                key={index}
                                className="text-[10px] px-2 py-0.5 bg-transparent text-black font-light tracking-wide"
                                style={{ fontFamily: 'serif' }}
                            >
                                {color}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveProductCard;
