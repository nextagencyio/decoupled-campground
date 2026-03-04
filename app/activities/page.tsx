import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ACTIVITY_TEASERS } from '@/lib/queries'
import { ActivityTeaserData } from '@/lib/types'
import Header from '../components/Header'
import ActivityCard from '../components/ActivityCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Activities | Pinecrest Campground',
  description: 'Discover hiking, fishing, kayaking, swimming, and more outdoor adventures at Pinecrest.',
}

async function getActivities() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ActivityTeaserData>({
      query: GET_ACTIVITY_TEASERS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeActivities?.nodes || []
  } catch (error) {
    console.error('Error fetching activities:', error)
    return []
  }
}

export default async function ActivitiesPage() {
  const items = await getActivities()

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <section className="relative bg-primary-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-primary-950/40" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" className="fill-stone-50" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Activities
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              From sunrise paddles to sunset hikes -- adventure is always calling at Pinecrest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Activities Yet</h2>
              <p className="text-gray-500">
                Activities will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ActivityCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
