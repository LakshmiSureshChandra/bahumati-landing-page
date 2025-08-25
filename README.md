# Bahumathi Landing Page

A modern, responsive landing page for Bahumathi - a digital gifting platform that combines the joy of giving with smart investments.

## 🚀 Features

- **Next.js 14** with App Router
- **TailwindCSS** for styling
- **TypeScript** for type safety
- **Recharts** for interactive investment graphs
- **Responsive Design** for all devices
- **Modern UI/UX** with smooth animations
- **SEO Optimized** with proper meta tags

## 📱 Sections

1. **Hero Section** - Main headline with world map background
2. **How It Works** - 3-step process flow
3. **Features** - Mobile mockup with feature highlights
4. **Moments** - Why moments deserve more than wishes
5. **Unique Features** - Why choose Bahumathi
6. **Investment Graph** - Interactive chart with sliders
7. **Testimonials** - User reviews and ratings
8. **App Download** - Download buttons and QR code
9. **FAQ** - Accordion-style questions
10. **Footer** - Links, newsletter, and social media

## 🎨 Design System

- **Primary Color**: #6C63FF (Purple)
- **Secondary Color**: #FFB400 (Yellow/Orange)
- **Typography**: Inter font family
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle shadows for depth
- **Border Radius**: Rounded corners (xl, 2xl)

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bahumathi-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
bahumathi-landing-page/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Moments.tsx
│   ├── UniqueFeatures.tsx
│   ├── InvestmentsGraph.tsx
│   ├── Testimonials.tsx
│   ├── AppDownload.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── placeholder.png
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🖼️ Image Requirements

Replace the placeholder images in `/public/images/` with actual PNG files:

- **Logo** - Company logo (120x40px)
- **Icons** - Feature icons (24x24px, 32x32px, 48x48px)
- **Phone Mockups** - App screenshots (300x600px, 400x800px)
- **World Map** - Background image (1920x1080px)
- **Social Icons** - Social media icons (20x20px)
- **App Store Badges** - Download buttons (32x32px)
- **QR Code** - Download QR code (120x120px)
- **Trust Badges** - Certifications (24x24px)

## 🎯 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#6C63FF',
  secondary: '#FFB400',
  heading: '#111827',
  body: '#6B7280',
}
```

### Content
- Update text content in each component
- Modify testimonials in `Testimonials.tsx`
- Change FAQ questions in `FAQ.tsx`
- Update footer links in `Footer.tsx`

### Styling
- Modify Tailwind classes in components
- Add custom CSS in `globals.css`
- Update animations and transitions

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size
- SEO optimized

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support, email support@bahumathi.com or create an issue in the repository.

---

Built with ❤️ using Next.js and TailwindCSS
