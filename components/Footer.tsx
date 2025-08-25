import Image from 'next/image'

const footerLinks = {
  gifting: [
    { name: 'Birthday Gifts', href: '#' },
    { name: 'Wedding Gifts', href: '#' },
    { name: 'Corporate Gifts', href: '#' },
    { name: 'Festival Gifts', href: '#' },
    { name: 'Anniversary Gifts', href: '#' }
  ],
  investing: [
    { name: 'Mutual Funds', href: '#' },
    { name: 'ETFs', href: '#' },
    { name: 'Investment Plans', href: '#' },
    { name: 'Portfolio Tracking', href: '#' },
    { name: 'Tax Benefits', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'KYC Guidelines', href: '#' },
    { name: 'SEBI Compliance', href: '#' },
    { name: 'Grievance Policy', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: '/images/placeholder.png', href: '#' },
  { name: 'Twitter', icon: '/images/placeholder.png', href: '#' },
  { name: 'Instagram', icon: '/images/placeholder.png', href: '#' },
  { name: 'LinkedIn', icon: '/images/placeholder.png', href: '#' },
  { name: 'YouTube', icon: '/images/placeholder.png', href: '#' }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-heading text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/placeholder.png"
                alt="Bahumathi Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bahumathi is revolutionizing the way people gift by combining the joy of giving with the power of smart investments. Make every moment meaningful.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Gifting */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Gifting</h3>
            <ul className="space-y-3">
              {footerLinks.gifting.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Investing */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Investing</h3>
            <ul className="space-y-3">
              {footerLinks.investing.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest investment opportunities and gifting trends.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Bahumathi. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Image
                src="/images/placeholder.png"
                alt="SEBI Registered"
                width={24}
                height={24}
              />
              <span className="text-sm">SEBI Registered</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Image
                src="/images/placeholder.png"
                alt="SSL Secured"
                width={24}
                height={24}
              />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Image
                src="/images/placeholder.png"
                alt="ISO Certified"
                width={24}
                height={24}
              />
              <span className="text-sm">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
