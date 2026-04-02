
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalCampsite extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  siteType?: Array<{ name: string }>
  rate?: string
  maxOccupancy?: string
  hookups?: string[]
  features?: string[]
  featured?: boolean
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalAmenity extends DrupalNode {
  body?: {
    processed: string
  }
  amenityCategory?: Array<{ name: string }>
  locationOnProperty?: string
  hours?: string
  included?: boolean
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalActivity extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  difficulty?: string
  duration?: string
  bestSeason?: string
  equipmentProvided?: boolean
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface CampsiteTeaserData {
  nodeCampsites: {
    nodes: DrupalCampsite[]
  }
}

export interface AmenityTeaserData {
  nodeAmenities: {
    nodes: DrupalAmenity[]
  }
}

export interface ActivityTeaserData {
  nodeActivities: {
    nodes: DrupalActivity[]
  }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
