"use client";

import React from 'react';

// Helper component for individual grid items
const BentoBox = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={` rounded-3xl p-6 flex flex-col ${className}`}>
    {children}
  </div>
);

// Main Features component
export default function Features() {
  return (
    <section id="features" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Col 1, Item 1 (Long) */}
          <BentoBox className="md:row-span-2 justify-between overflow-hidden relative h-[250px] md:h-[520px]">
            <img src="bento1.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>

          {/* Col 2, Item 1 (Long) */}
          <BentoBox className="md:row-span-2 justify-between overflow-hidden relative h-[250px] md:h-[520px]">
            <img src="bento2.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>

          {/* Col 3, Item 1 (Short) */}
          <BentoBox className="items-center justify-center text-center relative h-[250px]">
          <img src="bento3.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>

          {/* Col 1, Item 2 (Short) */}
          <BentoBox className="md:row-span-2 relative justify-between relative h-[250px] md:h-[520px]">
          <img src="bento6.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>
          
          {/* Col 2, Item 2 (Short) */}
          <BentoBox className="items-center justify-center text-center relative h-[250px]">
          <img src="bento4.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>
          
          {/* Col 3, Item 2 (Long) */}
          <BentoBox className="relative overflow-hidden relative h-[250px]">
          <img src="bento5.png" className="absolute inset-0 w-full h-full object-fit"/>
          </BentoBox>

        </div>
      </div>
    </section>
  )
}
