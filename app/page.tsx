import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Pinecrest Campground & RV Park - Your Home Under the Pines'
  const description = 'Family campground on 85 wooded acres with a 40-acre private lake. Tent sites, full-hookup RV sites, rustic cabins, and glamping tents. Hiking, fishing, kayaking, and swimming.'

  return {
    title,
    description,
    keywords: ['campground', 'RV park', 'tent camping', 'cabins', 'glamping', 'fishing', 'hiking', 'lake camping'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()
  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()
  const data = await client.raw(GET_HOMEPAGE_DATA) as any
  const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
