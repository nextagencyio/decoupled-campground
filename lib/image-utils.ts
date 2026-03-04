import { DrupalCampsite } from './types'

export type ImageSize = 'THUMBNAIL' | 'MEDIUM' | 'LARGE'

type ImageField = DrupalCampsite['image']

function proxyDrupalUrl(url: string): string {
  if (!url) return '';
  const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
  if (!drupalBaseUrl || !url.startsWith(drupalBaseUrl)) {
    return url;
  }
  const path = url.substring(drupalBaseUrl.length + 1);
  return `/${path}`;
}

export function getImageUrl(
  image: ImageField,
  preferredSize: ImageSize = 'MEDIUM',
  context: 'hero' | 'teaser' | 'thumbnail' | 'full' = 'full'
): string {
  if (!image) return ''
  if (context === 'hero' && preferredSize === 'LARGE') {
    const largeVariation = image.variations?.find(v => v.name === 'LARGE')
    if (largeVariation && largeVariation.width && largeVariation.width >= 1200) {
      return proxyDrupalUrl(largeVariation.url)
    }
    return proxyDrupalUrl(image.url)
  }
  return proxyDrupalUrl(image.url)
}

export function getImageDimensions(
  image: ImageField,
  preferredSize: ImageSize = 'MEDIUM'
): { width: number; height: number } | null {
  if (!image) return null
  const preferredVariation = image.variations?.find(v => v.name === preferredSize)
  if (preferredVariation) {
    return { width: preferredVariation.width, height: preferredVariation.height }
  }
  if (image.width && image.height) {
    return { width: image.width, height: image.height }
  }
  return null
}

export function generateSrcSet(image: ImageField): string {
  if (!image || !image.variations) return proxyDrupalUrl(image?.url || '')
  const srcSetEntries: string[] = []
  image.variations.forEach(variation => {
    srcSetEntries.push(`${proxyDrupalUrl(variation.url)} ${variation.width}w`)
  })
  if (image.width && image.url) {
    srcSetEntries.push(`${proxyDrupalUrl(image.url)} ${image.width}w`)
  }
  return srcSetEntries.join(', ')
}

export function getAspectRatio(
  image: ImageField,
  preferredSize: ImageSize = 'MEDIUM'
): number | null {
  const dimensions = getImageDimensions(image, preferredSize)
  if (!dimensions) return null
  return dimensions.width / dimensions.height
}
