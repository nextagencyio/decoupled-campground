
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
  siteType?: string
  pricePerNight?: string
  maxOccupancy?: number
  hookups?: string
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
  difficultyLevel?: string
  duration?: string
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
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
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
