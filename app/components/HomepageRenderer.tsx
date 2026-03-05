'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { TreePine, Flame, Mountain, Map, Star, Sun } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const campLifeItems = [
  { icon: TreePine, label: 'Wooded Sites', description: 'Shaded by towering pines' },
  { icon: Flame, label: 'Campfire Pits', description: 'Every site includes one' },
  { icon: Mountain, label: 'Trail Access', description: '15 miles of hiking trails' },
  { icon: Map, label: 'Lake Activities', description: 'Kayaking, fishing & swimming' },
  { icon: Star, label: 'Stargazing', description: 'Dark sky certified area' },
  { icon: Sun, label: 'Morning Yoga', description: 'Free lakeside sessions' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80&fit=crop', alt: 'Campsite nestled among tall pine trees' },
  { src: 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=600&q=80&fit=crop', alt: 'Campfire burning under the stars' },
  { src: 'https://images.unsplash.com/photo-1497900304864-273dfb3aae33?w=600&q=80&fit=crop', alt: 'Peaceful lake at sunrise' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&fit=crop', alt: 'Mountain trail through the forest' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Camp Life Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              The Pinecrest Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              More than a campground -- it is an invitation to unplug, explore, and reconnect with the great outdoors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {campLifeItems.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300 border-2 border-primary-100">
                  <item.icon className="w-9 h-9 text-primary-600" />
                </div>
                <h3 className="font-semibold text-primary-900 text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Life at Pinecrest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From sunrise paddles on the lake to campfire stories under the stars.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="relative bg-primary-950 text-white pt-20 pb-12">
        {/* Organic wavy divider */}
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" className="fill-stone-50" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-accent-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Pinecrest Campground</h3>
              </div>
              <p className="text-primary-200 mb-6 max-w-md leading-relaxed">
                Nestled on 85 wooded acres with a private 40-acre lake, Pinecrest offers tent camping, RV sites, rustic cabins, and glamping tents for the perfect outdoor escape.
              </p>
              <div className="flex gap-3">
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200">
                  <TreePine className="w-3 h-3 mr-1" /> Family Friendly
                </span>
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200">
                  <Star className="w-3 h-3 mr-1" /> Top Rated
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-lg">Visit Us</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li>1200 Pinecrest Lodge Road</li>
                <li>Pine Valley, NC 28673</li>
                <li className="pt-2 font-semibold text-accent-300">Season Hours</li>
                <li>Apr - Oct: Open Daily</li>
                <li>Check-in: 2pm - 8pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li><a href="/campsites" className="hover:text-accent-300 transition-colors">Campsites</a></li>
                <li><a href="/amenities" className="hover:text-accent-300 transition-colors">Amenities</a></li>
                <li><a href="/activities" className="hover:text-accent-300 transition-colors">Activities</a></li>
                <li><a href="/about" className="hover:text-accent-300 transition-colors">Our Story</a></li>
                <li><a href="/campsites" className="hover:text-accent-300 transition-colors">Contact & Directions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Pinecrest Campground. All rights reserved.</p>
            <p className="text-primary-400 text-xs">Where the pines meet the lake</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
