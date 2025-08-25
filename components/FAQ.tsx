'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Bahumathi?',
    answer: 'Bahumathi is a modern digital gifting platform that allows you to gift investments to your loved ones instead of traditional gifts. We combine the joy of giving with the power of smart investments.'
  },
  {
    question: 'How does the investment gifting work?',
    answer: 'You can choose from various investment options, add recipient details, and send the gift instantly. The recipient receives a notification and can track the growth of their investment over time.'
  },
  {
    question: 'Do I need a demat account to use Bahumathi?',
    answer: 'No, you don\'t need a demat account. Bahumathi handles all the technical requirements, making it easy for anyone to start investing and gifting.'
  },
  {
    question: 'What investment options are available?',
    answer: 'We offer a curated selection of mutual funds, ETFs, and other investment products that are suitable for gifting. All options are SEBI registered and carefully selected for their performance.'
  },
  {
    question: 'Is my money safe with Bahumathi?',
    answer: 'Yes, Bahumathi is SEBI registered and follows all regulatory requirements. Your investments are held in your name with authorized custodians, ensuring complete safety and transparency.'
  },
  {
    question: 'Can I track the performance of my gifts?',
    answer: 'Absolutely! You can track the performance of all your gifts and investments in real-time through our mobile app or web platform. You\'ll receive regular updates on growth and returns.'
  },
  {
    question: 'What are the fees and charges?',
    answer: 'Bahumathi operates on a zero-commission model. There are no hidden fees or charges. You only pay the standard mutual fund expense ratios, which are among the lowest in the industry.'
  },
  {
    question: 'How do I get started?',
    answer: 'Download our app, complete a quick KYC process, and you\'re ready to start gifting investments. The entire setup takes just a few minutes.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Get answers to common questions about Bahumathi and investment gifting
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-heading pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-heading mb-4">
              Still have questions?
            </h3>
            <p className="text-body mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
