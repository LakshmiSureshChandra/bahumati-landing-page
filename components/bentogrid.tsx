"use client";

import React from 'react';

// Helper component for individual grid items
const BentoBox = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-3xl p-6 flex flex-col ${className}`}>
    {children}
  </div>
);

// Main Features component
export default function Features() {
  return (
    <section id="features" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We define a 3-row grid and remove dense flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
          
          {/* TALL BOX 1: Manually placed in column 1, rows 1-2 */}
          <BentoBox className="md:col-start-1 md:row-start-1 md:row-span-2 justify-between overflow-hidden relative aspect-[10/13]">
            <img src="bento1.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>

          {/* TALL BOX 2: Manually placed in column 2, rows 1-2 */}
          <BentoBox className="md:col-start-2 md:row-start-1 md:row-span-2 justify-between overflow-hidden relative aspect-[10/13]">
            <img src="bento2.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>

          {/* TALL BOX 3 (bento6): Manually placed in column 3, rows 1-2 */}
          <BentoBox className="md:col-start-3 md:row-start-2 md:row-span-2 justify-between overflow-hidden relative aspect-[10/13]">
            <img src="bento6.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>

          {/* SHORT BOX 1 (bento3): Manually placed in column 1, row 3 */}
          <BentoBox className="md:col-start-3 md:row-start-1 items-center justify-center text-center relative aspect-[8/5]">
            <img src="bento3.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>
          
          {/* SHORT BOX 2 (bento4): Manually placed in column 2, row 3 */}
          <BentoBox className="md:col-start-1 md:row-start-3 items-center justify-center text-center relative aspect-[8/5]">
            <img src="bento4.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>
          
          {/* SHORT BOX 3 (bento5): Manually placed in column 3, row 3 */}
          <BentoBox className="md:col-start-2 md:row-start-3 relative overflow-hidden relative aspect-[8/5]">
            <img src="bento5.png" className="absolute inset-0 w-full h-full object-cover"/>
          </BentoBox>

        </div>
      </div>
    </section>
  )
}