"use client";
import React from 'react';

export default function AppDownload() {
  return (
    <section id="download" className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investing, Gifting and Portfolio Tracking - All at one place
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Take control of your finances with our all-in-one app. Seamlessly invest, send meaningful gifts, and track your portfolio's performance with ease.
            </p>
            
            <p className="font-semibold text-gray-700 mb-4">Soon you can Download on</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a aria-label="Download on the App Store">
                <img src="app-store-badge.png" alt="App Store Badge" className="h-12" />
              </a>
              <a aria-label="Get it on Google Play">
                <img src="google-play-badge.png" alt="Google Play Badge" className="h-12" />
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="app-download-mockup.png"
              alt="App Screenshot"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
