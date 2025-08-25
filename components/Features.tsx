import Image from 'next/image'

const features = [
  {
    title: 'End-to-End Encryption',
    description: 'Your data and transactions are secured with bank-level encryption',
    icon: '/images/placeholder.png'
  },
  {
    title: 'No Demat Account',
    description: 'Start investing without the hassle of opening a demat account',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Track Investments',
    description: 'Monitor your investments and gifts in real-time',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Instant Delivery',
    description: 'Gifts are delivered instantly to your loved ones',
    icon: '/images/placeholder.png'
  },
  {
    title: 'Tax Benefits',
    description: 'Enjoy tax benefits on your investments and gifts',
    icon: '/images/placeholder.png'
  },
  {
    title: '24/7 Support',
    description: 'Get help anytime with our round-the-clock customer support',
    icon: '/images/placeholder.png'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Mobile Mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/placeholder.png"
                alt="Mobile App Mockup"
                width={400}
                height={800}
                className="mx-auto lg:mx-0"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-12">
                <Image
                  src="/images/placeholder.png"
                  alt="Feature Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 transform -rotate-12">
                <Image
                  src="/images/placeholder.png"
                  alt="Feature Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
                Powerful Features for Modern Gifting
              </h2>
              <p className="text-xl text-body">
                Experience the future of digital gifting with our comprehensive feature set
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
