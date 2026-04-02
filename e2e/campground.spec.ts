import { test, expect } from '@playwright/test'

test.describe('Campground Homepage', () => {
  test('renders homepage with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.locator('text=Pinecrest').first()).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Wooded Acres').first()).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Reserve').first()).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/campsites"]').first()).toBeVisible()
    await expect(page.locator('a[href="/activities"]').first()).toBeVisible()
    await expect(page.locator('a[href="/amenities"]').first()).toBeVisible()
  })
})

test.describe('Campsites Page', () => {
  test('lists campsites', async ({ page }) => {
    await page.goto('/campsites')
    await expect(page.locator('h1').first()).toContainText('Campsites')
    await expect(page.locator('text=Lakefront RV Sites').first()).toBeVisible()
    await expect(page.locator('text=Woodland Tent Sites').first()).toBeVisible()
  })

  test('campsite cards have links', async ({ page }) => {
    await page.goto('/campsites')
    // Cards are <a> elements containing campsite titles
    const firstCard = page.locator('a.group').first()
    await expect(firstCard).toBeVisible()
  })
})

test.describe('Activities Page', () => {
  test('lists activities', async ({ page }) => {
    await page.goto('/activities')
    await expect(page.locator('h1').first()).toContainText('Activities')
    await expect(page.locator('text=Hiking Trails').first()).toBeVisible()
  })
})

test.describe('Amenities Page', () => {
  test('lists amenities', async ({ page }) => {
    await page.goto('/amenities')
    await expect(page.locator('h1').first()).toContainText('Amenities')
    await expect(page.locator('text=Swimming Pool').first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('can navigate from homepage to campsites', async ({ page }) => {
    await page.goto('/')
    await page.locator('a[href="/campsites"]').first().click()
    await expect(page).toHaveURL('/campsites')
    await expect(page.locator('h1').first()).toContainText('Campsites')
  })

  test('can navigate from homepage to activities', async ({ page }) => {
    await page.goto('/')
    await page.locator('a[href="/activities"]').first().click()
    await expect(page).toHaveURL('/activities')
    await expect(page.locator('h1').first()).toContainText('Activities')
  })

  test('can navigate from homepage to amenities', async ({ page }) => {
    await page.goto('/')
    await page.locator('a[href="/amenities"]').first().click()
    await expect(page).toHaveURL('/amenities')
    await expect(page.locator('h1').first()).toContainText('Amenities')
  })
})
