export default function Hero() {
  return (
         <section className="relative top-14 flex flex-col items-center justify-center bg-white overflow-hidden">
       {/* Top Pill Button */}
       <div className="absolute top-8 md:top-8">
         <div className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
             <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
           </svg>
           Redefining the way India Gifts!
         </div>
       </div>

       {/* Main Content */}
       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20 md:mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-600 mb-4 leading-tight">
          Celebrate Moments With
          <br />
          <span className="text-gray-800">Meaningful Digital Units</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          A revolutionary way to gift in India. Send Top 50 Indian Company Units and Gold Units with personalized wishes instantly to your loved ones.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 shadow-md">
            Get Started
          </button> */}
          {/* <button className="text-gray-800 hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Know More
          </button> */}
        </div>
      </div>

      {/* Bottom Map Image */}
      <div className="relative w-full max-w-5xl -mt-8 md:-mt-12 lg:-mt-16">
        <img
          src="hero.png"
          alt="Dotted map of India with gift and coin icons"
          width="1200"
          height="600"
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  )
}
