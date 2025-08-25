import Image from 'next/image'

const uniqueCards = [
  {
    title: 'Smart Gifting',
    description: 'Choose from curated investment options for every occasion',
    icon: '/images/placeholder.png',
    color: 'bg-blue-50'
  },
  {
    title: 'Easy Returns',
    description: 'Flexible return policies with no hidden charges',
    icon: '/images/placeholder.png',
    color: 'bg-green-50'
  },
  {
    title: 'Noble Causes',
    description: 'Support social causes while gifting to your loved ones',
    icon: '/images/placeholder.png',
    color: 'bg-purple-50'
  }
]

export default function UniqueFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Why Choose Bahumathi?
            </h2>
            <p className="text-xl text-body mb-8 leading-relaxed">
              We're not just another gifting platform. We're revolutionizing how people think about gifts by combining the joy of giving with the power of smart investments.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">SEBI Registered</h3>
                  <p className="text-body">Your investments are protected under SEBI regulations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">Zero Commission</h3>
                  <p className="text-body">No hidden fees or commission charges on your investments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">Instant Processing</h3>
                  <p className="text-body">Get your investments processed within minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div>
            <div className="relative">
              <Image
                src="/images/placeholder.png"
                alt="Unique Features Phone Mockup"
                width={400}
                height={800}
                className="mx-auto lg:mx-0"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">50K+</p>
                  <p className="text-xs text-body">Happy Users</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">₹2Cr+</p>
                  <p className="text-xs text-body">Invested</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {uniqueCards.map((card, index) => (
            <div key={index} className={`${card.color} rounded-2xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-2`}>
              <div className="mb-6">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-heading mb-3">
                  {card.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
