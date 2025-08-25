import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Choose a Gift',
    description: 'Select from a wide range of meaningful digital gifts and investments for any occasion.',
    icon: 'icon.png' 
  },
  {
    id: 2,
    title: 'Personalize Your Message',
    description: 'Add the recipient’s details and write a heartfelt message to make your gift special.',
    icon: 'icon.png'
  },
  {
    id: 3,
    title: 'Send Instantly',
    description: 'Your thoughtful gift is delivered instantly to your loved ones via email or text.',
    icon: 'icon.png'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gifting digital assets is simple, secure, and takes only a few moments.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="text-center flex-shrink-0">
                <div className="relative w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <img
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="mt-6 text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal line for desktop */}
                  <div className="hidden md:block flex-grow h-px border-t-2 border-dotted border-gray-300"></div>
                  {/* Vertical line for mobile */}
                  <div className="block md:hidden h-12 w-px border-l-2 border-dotted border-gray-300 my-4"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
