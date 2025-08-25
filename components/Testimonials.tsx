import Image from 'next/image'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    company: 'TechCorp',
    image: '/images/placeholder.png',
    text: 'Bahumathi has transformed how I gift to my family. Instead of buying things they might not need, I invest in their future. The returns are amazing!',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    company: 'InnovateTech',
    image: '/images/placeholder.png',
    text: 'The app is incredibly user-friendly and the investment options are well-curated. I love how I can track the growth of my gifts in real-time.',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'Financial Advisor',
    company: 'WealthFirst',
    image: '/images/placeholder.png',
    text: 'As a financial advisor, I recommend Bahumathi to my clients. It\'s a brilliant way to combine gifting with smart investments.',
    rating: 5
  },
  {
    name: 'Suresh Reddy',
    role: 'Business Owner',
    company: 'Reddy Enterprises',
    image: '/images/placeholder.png',
    text: 'I\'ve been using Bahumathi for corporate gifting. My employees love receiving investment gifts instead of traditional items.',
    rating: 5
  },
  {
    name: 'Meera Singh',
    role: 'HR Director',
    company: 'Global Solutions',
    image: '/images/placeholder.png',
    text: 'The platform makes it so easy to send meaningful gifts to our team members. The tax benefits are an added bonus!',
    rating: 5
  },
  {
    name: 'Vikram Malhotra',
    role: 'Investment Analyst',
    company: 'Capital Markets',
    image: '/images/placeholder.png',
    text: 'Bahumathi offers excellent investment options with transparent fee structure. Perfect for both personal and corporate gifting.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their gifting experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-body mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-heading">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-body">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-body">Happy Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">₹2Cr+</div>
            <div className="text-body">Total Invested</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-body">User Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-body">Support</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  )
}
