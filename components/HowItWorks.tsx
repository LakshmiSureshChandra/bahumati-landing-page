import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Choose a Gift',
    description: 'Select the Digi Units for any occasion.',
    icon: 'icon.png' 
  },
  {
    id: 2,
    title: 'Record Your Message',
    description: 'Add the recipient’s details and write a heartfelt message/video to make your gift special.',
    icon: 'icon.png'
  },
  {
    id: 3,
    title: 'Send Instantly',
    description: 'Your thoughtful gift is delivered instantly to your loved ones via email & text.',
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
            Gifting Bahumati DiGi units is simple, secure, and takes only a few clicks.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="text-center flex-shrink-0 w-full lg:w-auto">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <img
                    src={step.icon}
                    alt={step.title}
                    width={28}
                    height={28}
                    className="object-contain sm:w-8 sm:h-8"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal line for desktop */}
                  <div className="hidden lg:block flex-grow h-px border-t-2 border-dotted border-gray-300"></div>
                  {/* Vertical line for mobile/tablet */}
                  <div className="block lg:hidden h-8 w-px border-l-2 border-dotted border-gray-300 my-4"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
