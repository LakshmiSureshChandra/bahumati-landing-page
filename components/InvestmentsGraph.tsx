"use client";
import React, { useState } from 'react';

// Main component
export default function InvestmentCalculator() {
  const [time, setTime] = useState(39); // Time in months (3 yrs 3 mon)
  const [investment, setInvestment] = useState(72000);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatTime = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    let result = '';
    if (years > 0) {
      result += `${years} Yrs `;
    }
    if (remainingMonths > 0) {
      result += `${remainingMonths} Mon`;
    }
    return result.trim();
  };
  
  // Simple calculation for returns
  const returns = investment * (time / 12) * 0.12; // 12% annual return
  const totalValue = investment + returns;

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Controls */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-indigo-600">Choose</span> investments wisely to unlock greater <span className="text-indigo-600">returns</span>
              </h2>
              <p className="text-gray-600">
                Compare asset classes and discover smarter ways to grow your wealth. Don't settle for less when your money can do more.
              </p>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-gray-500 text-sm">Invested amount</p>
                <p className="text-3xl font-bold text-indigo-600">{formatCurrency(investment)}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Returns</p>
                <p className="text-3xl font-bold text-indigo-600">{formatCurrency(returns)}</p>
              </div>
            </div>

            {/* Time Span Slider */}
            <div>
              <label className="font-semibold mb-2 block">Time Span Invested</label>
              <div className="relative">
                <input
                  type="range"
                  min="6"
                  max="60"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div 
                  className="absolute -top-8 bg-indigo-600 text-white text-xs font-semibold py-1 px-2 rounded"
                  style={{ left: `calc(${(time - 6) / 54 * 100}% - 1.5rem)` }}
                >
                  {formatTime(time)}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>6 Mon</span>
                <span>5 Yrs</span>
              </div>
            </div>

             {/* Investment Amount Slider */}
             <div>
              <label className="font-semibold mb-2 block">Investment Amount</label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="1000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{formatCurrency(10000)}</span>
                <span>{formatCurrency(1000000)}</span>
              </div>
            </div>

          </div>

          {/* Right Side: Chart Image */}
          <div>
            <img src="chart-image.png" alt="Investment returns chart" className="w-full h-auto" />
          </div>
        </div>
      </div>
       <style jsx>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #4F46E5;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4F46E5;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
