import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-luxury-dark text-cream">
      {/* ─────────────────────────────────────────────── */}
      {/* HERO SECTION                                    */}
      {/* ─────────────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-dark">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          {/* Logo / Heading */}
          <div className="mb-8">
            <h1 className="font-cinzel text-6xl md:text-7xl font-semibold text-cream mb-6 tracking-wider">
              Netlify Bridge
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rotate-45"></div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Subheading */}
          <p className="font-cormorant text-2xl md:text-3xl text-cream text-opacity-80 mb-12 italic">
            Curated luxury experiences crafted for the discerning
          </p>

          {/* CTA */}
          <button className="px-10 py-4 bg-gold text-luxury-dark font-jost font-semibold rounded-lg hover:bg-gold hover:bg-opacity-80 transition-all duration-300 active:scale-95 mb-12">
            Explore Collections
          </button>

          {/* Trust Badge */}
          <p className="text-cream text-opacity-50 font-jost text-sm">
            Trusted by 5,000+ connoisseurs worldwide
          </p>
        </div>
      </header>

      {/* ─────────────────────────────────────────────── */}
      {/* FEATURES SECTION                               */}
      {/* ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-luxury-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✦',
                title: 'Curated Selection',
                desc: 'Hand-picked products from the world\'s most prestigious brands',
              },
              {
                icon: '◆',
                title: 'Expert Curation',
                desc: 'Our team of specialists ensures every item meets our exacting standards',
              },
              {
                icon: '◇',
                title: 'Direct Delivery',
                desc: 'Seamless fulfillment with white-glove service and premium packaging',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-luxury hover:border-gold hover:border-opacity-100 transition-all duration-300 text-center"
              >
                <div className="text-4xl text-gold mb-4">{item.icon}</div>
                <h3 className="font-cinzel text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-cream text-opacity-70 font-jost text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* PRODUCTS SECTION                               */}
      {/* ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-luxury-dark to-luxury-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Featured Collections</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-16 border-b border-gold border-opacity-20 pb-6">
            {['features', 'curated', 'prestige'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-jost font-medium capitalize transition-colors duration-300 ${
                  activeTab === tab
                    ? 'text-gold border-b-2 border-gold pb-2'
                    : 'text-cream text-opacity-50 hover:text-cream hover:text-opacity-80 pb-2'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group card-luxury overflow-hidden cursor-pointer"
              >
                {/* Placeholder Product Image */}
                <div className="w-full h-64 bg-gradient-to-br from-gold from-10% to-luxury-dark rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl text-gold opacity-30">⬬</span>
                </div>
                <h3 className="font-cinzel text-lg text-cream mb-2">Product {item}</h3>
                <p className="text-cream text-opacity-60 text-sm mb-4">
                  Premium selection handcrafted for excellence
                </p>
                <button className="btn-luxury-outline w-full">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* FOOTER                                          */}
      {/* ─────────────────────────────────────────────── */}
      <footer className="py-16 px-4 md:px-8 border-t border-gold border-opacity-10 bg-luxury-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'About', links: ['Our Story', 'Team', 'Careers'] },
              { title: 'Shop', links: ['Collections', 'New Arrivals', 'On Sale'] },
              { title: 'Support', links: ['Contact', 'FAQ', 'Shipping'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-cinzel text-cream mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-cream text-opacity-60 hover:text-opacity-100 transition-all duration-300 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-8 border-t border-gold border-opacity-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-1.5 h-1.5 bg-gold rotate-45"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          {/* Copyright */}
          <div className="text-center text-cream text-opacity-50 text-sm font-jost">
            <p>&copy; 2026 Netlify Bridge. All rights reserved. Crafted with excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
