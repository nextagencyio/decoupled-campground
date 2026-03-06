'use client'

import { DrupalHomepage } from '@/lib/types'
import { TreePine, Flame, Mountain, Map } from 'lucide-react'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const defaultStats = [
  { value: '85', label: 'Wooded Acres', icon: 'tree' },
  { value: '40', label: 'Acre Private Lake', icon: 'flame' },
  { value: '120+', label: 'Campsites', icon: 'mountain' },
  { value: '15', label: 'Miles of Trails', icon: 'map' },
]

const iconMap: Record<string, any> = {
  tree: TreePine,
  flame: Flame,
  mountain: Mountain,
  map: Map,
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Nature at Your Doorstep
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            85 acres of pristine woodland and a 40-acre private lake -- your perfect escape into nature.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat: any, i: number) => {
            const iconKey = stat.icon?.toLowerCase() || Object.keys(iconMap)[i % Object.keys(iconMap).length]
            const IconComponent = iconMap[iconKey] || TreePine
            return (
              <div
                key={stat.id || i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <IconComponent className="w-7 h-7 text-primary-700" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-800 font-display mb-2">
                  {stat.value || stat.number || stat.statValue || stat.title}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label || stat.statLabel || stat.description?.processed?.replace(/<[^>]*>/g, '') || ''}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
