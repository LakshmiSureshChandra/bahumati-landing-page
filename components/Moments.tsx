import Image from 'next/image'

const momentFeatures = [
  {
    title: 'Personalized Messages',
    description: 'Add heartfelt messages to make your gifts more meaningful',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Investment Growth',
    description: 'Watch your gifts grow over time with smart investments',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Family Connection',
    description: 'Strengthen bonds through thoughtful financial gifts',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Legacy Building',
    description: 'Create lasting impact for future generations',
    icon: '/images/placeholder.png'
  }
]

export default function Moments() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Moments Deserve More Than Just Beautiful Wishes
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Transform your celebrations into opportunities for growth and lasting impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Phone Mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/placeholder.png"
                alt="Phone with Gift Transaction"
                width={400}
                height={800}
                className="mx-auto lg:mx-0"
              />
              
              {/* Transaction Notification */}
              <div className="absolute top-20 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/placeholder.png"
                      alt="Success Icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-heading">Gift Sent Successfully!</p>
                    <p className="text-xs text-body">₹10,000 invested for Priya</p>
                  </div>
                </div>
              </div>

              {/* Growth Indicator */}
              <div className="absolute bottom-20 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">+15.2%</p>
                  <p className="text-xs text-body">Growth this year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2">
            <div className="grid gap-8">
              {momentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Start Creating Moments
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
