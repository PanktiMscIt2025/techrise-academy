import { test, expect } from '@playwright/test'

const pages = [
  { name: 'Home', path: '/', heading: 'Learn Today. Place Tomorrow.' },
  { name: 'Courses', path: '/courses', heading: '7 Flagship Technology Tracks' },
  { name: 'Learning Modes', path: '/learning-modes', heading: 'Choose Your Learning Mode' },
  { name: 'About', path: '/about', heading: 'Built by Learners' },
  { name: 'Contact', path: '/contact', heading: "Let's Get You Placed" },
]

test.describe('Navigation — all pages load', () => {
  for (const p of pages) {
    test(`${p.name} page loads (200) and shows heading`, async ({ page }) => {
      const response = await page.goto(p.path)
      expect(response?.status()).toBe(200)
      await expect(page.getByText(p.heading, { exact: false }).first()).toBeVisible()
    })
  }
})

test.describe('Navigation — header links', () => {
  test('Courses link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Courses' }).first().click()
    await expect(page).toHaveURL('/courses')
  })

  test('Learning Modes link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Learning Modes' }).first().click()
    await expect(page).toHaveURL('/learning-modes')
  })

  test('About Us link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'About Us' }).first().click()
    await expect(page).toHaveURL('/about')
  })

  test('Enrol Now CTA goes to /contact', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Enrol Now' }).first().click()
    await expect(page).toHaveURL('/contact')
  })

  test('Logo click returns to home', async ({ page }) => {
    await page.goto('/courses')
    await page.locator('header a[href="/"]').first().click()
    await expect(page).toHaveURL('/')
  })
})

test.describe('Navigation — footer links', () => {
  test('footer Hiring Partners link goes to /about#hiring-partners', async ({ page }) => {
    await page.goto('/')
    await page.locator('footer').scrollIntoViewIfNeeded()
    const link = page.locator('footer').getByRole('link', { name: 'Hiring Partners' })
    await expect(link).toHaveAttribute('href', '/about#hiring-partners')
  })

  test('footer YouTube link correct', async ({ page }) => {
    await page.goto('/')
    await page.locator('footer').scrollIntoViewIfNeeded()
    const yt = page.locator('footer').getByRole('link', { name: /youtube/i })
    await expect(yt).toHaveAttribute('href', 'https://www.youtube.com/@TechRiseAcademy-w3k')
  })

  test('footer WhatsApp link correct', async ({ page }) => {
    await page.goto('/')
    await page.locator('footer').scrollIntoViewIfNeeded()
    const wa = page.locator('footer a[href*="wa.me"]').first()
    await expect(wa).toHaveAttribute('href', /918160049448/)
  })
})
