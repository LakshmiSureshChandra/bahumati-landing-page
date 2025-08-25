'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', returns: 12.5 },
  { month: 'Feb', returns: 15.2 },
  { month: 'Mar', returns: 18.7 },
  { month: 'Apr', returns: 22.1 },
  { month: 'May', returns: 25.8 },
  { month: 'Jun', returns: 28.3 },
  { month: 'Jul', returns: 31.2 },
  { month: 'Aug', returns: 34.7 },
  { month: 'Sep', returns: 37.9 },
  { month: 'Oct', returns: 41.2 },
  { month: 'Nov', returns: 44.8 },
  { month: 'Dec', returns: 48.5 },
]

export default function InvestmentsGraph() {
  const [totalInvested, setTotalInvested] = useState(100000)
  const [timePeriod, setTimePeriod] = useState(12)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Choose investments wisely to unlock greater returns
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            See how your investments can grow over time with our smart investment strategies
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-12">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-heading mb-2">Investment Growth Chart</h3>
            <p className="text-body">Projected returns based on historical performance</p>
          </div>

          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="month" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value: any) => [`${value}%`, 'Returns']}
                  labelStyle={{ color: '#111827' }}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="returns" 
                  fill="#6C63FF" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Total Invested Slider */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="mb-4">
              <label className="text-lg font-semibold text-heading mb-2 block">
                Total Invested
              </label>
              <div className="text-3xl font-bold text-primary mb-4">
                {formatCurrency(totalInvested)}
              </div>
            </div>
            
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={totalInvested}
              onChange={(e) => setTotalInvested(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            
            <div className="flex justify-between text-sm text-body mt-2">
              <span>₹10,000</span>
              <span>₹10,00,000</span>
            </div>
          </div>

          {/* Time Period Slider */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="mb-4">
              <label className="text-lg font-semibold text-heading mb-2 block">
                Time Period
              </label>
              <div className="text-3xl font-bold text-primary mb-4">
                {timePeriod} Months
              </div>
            </div>
            
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            
            <div className="flex justify-between text-sm text-body mt-2">
              <span>1 Month</span>
              <span>5 Years</span>
            </div>
          </div>
        </div>

        {/* Projected Returns */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Projected Returns</h3>
            <div className="text-4xl font-bold mb-2">
              {formatCurrency(totalInvested * (1 + (data[timePeriod - 1]?.returns || 0) / 100))}
            </div>
            <p className="text-lg opacity-90">
              After {timePeriod} months of investment
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Investing Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #6C63FF;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(108, 99, 255, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #6C63FF;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(108, 99, 255, 0.3);
        }
      `}</style>
    </section>
  )
}
