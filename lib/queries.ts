import { gql } from '@apollo/client'

export const GET_CAMPSITE_TEASERS = gql`
  query GetCampsiteTeasers($first: Int = 10) {
    nodeCampsites(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeCampsite {
          body { processed summary }
          siteType
          pricePerNight
          maxOccupancy
          hookups
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name url width height
            }
          }
        }
      }
    }
  }
`

export const GET_AMENITY_TEASERS = gql`
  query GetAmenityTeasers($first: Int = 10) {
    nodeAmenities(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeAmenity {
          body { processed }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name url width height
            }
          }
        }
      }
    }
  }
`

export const GET_ACTIVITY_TEASERS = gql`
  query GetActivityTeasers($first: Int = 10) {
    nodeActivities(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeActivity {
          body { processed summary }
          difficultyLevel
          duration
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name url width height
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description { processed }
            icon
          }
        }
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body { processed }
          }
          ... on NodeCampsite {
            id
            title
            body { processed }
            siteType
            pricePerNight
            maxOccupancy
            hookups
            image {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name url width height
              }
            }
          }
          ... on NodeAmenity {
            id
            title
            body { processed }
            image {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name url width height
              }
            }
          }
          ... on NodeActivity {
            id
            title
            body { processed }
            difficultyLevel
            duration
            image {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name url width height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description { processed }
                icon
              }
            }
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
