'use client'

import { useState } from 'react'

const faqData = {
  Gifting: [
    {
      question: 'How do I send a digital gift through Bahumathi?',
      answer: 'Simply choose the asset you want to gift, enter the recipient’s phone number or Bahumati ID, add an optional message, and hit send. It’s fast, secure, and takes just a few taps.'
    },
    {
      question: 'What types of assets can I gift on Bahumati?',
      answer: 'You can gift a variety of digital units, including Gold and units of Top 50 Indian Companies.'
    },
    {
      question: 'Can I schedule a gift for a birthday or special occasion?',
      answer: 'Yes, our platform allows you to schedule gifts for future dates, ensuring your loved ones receive their surprise on their special day.'
    },
    {
      question: 'Will the recipient need a Bahumati account to receive the gift?',
      answer: 'Yes, the recipient will be prompted to create a free Bahumati account to claim and manage their gifted asset. The process is quick and easy.'
    },
    {
      question: 'Is my gift safe and private?',
      answer: 'Absolutely. All transactions are end-to-end encrypted, and we adhere to strict privacy policies to ensure your data and gifts are secure.'
    }
  ],
  Investing: [
    {
      question: 'What are the benefits of investing through Bahumati?',
      answer: 'Bahumathi offers a user-friendly platform with curated investment options, zero commission, and the ability to start with small amounts. It\'s designed to make investing accessible to everyone.'
    },
    // {
    //   question: 'How are the investment options selected?',
    //   answer: 'Our financial experts carefully select a range of high-performing, SEBI-registered mutual funds and ETFs to ensure you have access to quality investment products.'
    // }
  ],
  Transactions: [
    {
      question: 'Are there any hidden fees on transactions?',
      answer: 'No, Bahumathi is a zero-commission platform. We believe in complete transparency. The only charges are the standard expense ratios applicable to mutual funds.'
    },
    {
      question: 'How long do transactions take to process?',
      answer: 'Most transactions, including self-gifting and gifting, are processed instantly or within a few business hours.'
    }
  ],
  'Security & Services': [
    {
      question: 'Is Bahumathi regulated?',
      answer: 'Yes, Bahumati is a SEBI-registered platform, and we comply with all regulatory guidelines to ensure the safety and security of your investments.'
    },
    {
      question: 'What kind of customer support do you offer?',
      answer: 'We offer 24/7 customer support through live chat and email. Our dedicated team is always ready to assist you with any queries or issues.'
    }
  ]
};

const categories = ['Gifting', 'Investing', 'Transactions', 'Security & Services'];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Gifting');
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Send your love wrapped in value. Gift Gold or mutual fund units app. Celebrate meaningfully, anytime, anywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Categories */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenIndex(0); // Open the first question of the new category
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-colors text-lg ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right: FAQs */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqData[activeCategory as keyof typeof faqData].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-md font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-indigo-600">
                      {openIndex === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8z"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
                        </svg>
                      )}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div 
  id="contact" // <-- ADD THIS ID HERE
  className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden min-h-[300px]"
>
  <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left z-10">
    <h3 className="text-3xl font-bold mb-4">
      Still Got Questions?
    </h3>
    <p className="text-indigo-200 mb-6 max-w-xl">
      We're here to help! Whether it's about gifting, self-investing, or app features — reach out to us anytime for quick answers and friendly support.
    </p>
    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto md:mx-0">
      Contact Us 24x7
      {/* ... svg icon ... */}
    </button>
  </div>
  <div className="md:absolute md:bottom-0 md:right-10 md:w-1/3 bottom-0flex justify-center">
    <img src="support-lady.png" alt="Support agent" className="w-43 md:w-65 h-auto" />
  </div>
</div>
      </div>
    </section>
  )
}
