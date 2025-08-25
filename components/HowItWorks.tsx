import Image from 'next/image'

const steps = [
  {
    id: 1,
    title: 'Choose Gift',
    description: 'Select from a wide range of meaningful digital gifts and investments',
    icon: '/images/placeholder.png'
  },
  {
    id: 2,
    title: 'Add Recipient Details',
    description: 'Enter recipient information and personalize your gift message',
    icon: '/images/placeholder.png'
  },
  {
    id: 3,
    title: 'Send Instantly',
    description: 'Your gift is delivered instantly to your loved ones',
    icon: '/images/placeholder.png'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            How It Works
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Get started with meaningful digital gifting in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">{step.id}</span>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2">
                    <div className="w-full h-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                )}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="mx-auto group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-heading mb-4">
                {step.title}
              </h3>
              <p className="text-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Gifting Now
          </button>
        </div>
      </div>
    </section>
  )
}
