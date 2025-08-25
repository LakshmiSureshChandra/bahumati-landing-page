import Image from 'next/image'

export default function AppDownload() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download Our App
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get the Bahumathi app and start gifting meaningful investments to your loved ones. Available on both Android and iOS platforms.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Easy Setup</h3>
                  <p className="opacity-90">Complete KYC in minutes and start investing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Secure Transactions</h3>
                  <p className="opacity-90">Bank-level security for all your investments</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-time Tracking</h3>
                  <p className="opacity-90">Monitor your investments and gifts anytime</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3">
                <Image
                  src="/images/placeholder.png"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
              
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3">
                <Image
                  src="/images/placeholder.png"
                  alt="App Store"
                  width={32}
                  height={32}
                />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/placeholder.png"
                alt="App Screenshot"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-heading">Live</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-xs text-body">App Store Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 rounded-2xl p-8 inline-block">
            <div className="mb-4">
              <Image
                src="/images/placeholder.png"
                alt="QR Code"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
            <p className="text-white font-semibold">Scan to download</p>
            <p className="text-white/80 text-sm">Available on both platforms</p>
          </div>
        </div>
      </div>
    </section>
  )
}
