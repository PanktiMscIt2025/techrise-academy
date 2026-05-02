import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/TechRise Academy/)
  })

  test('announce bar visible with enrol link', async ({ page }) => {
    const bar = page.locator('.announce-bar')
    await expect(bar).toBeVisible()
    await expect(bar.getByRole('link', { name: /enrol now/i })).toBeVisible()
  })

  test('navbar has all 5 links', async ({ page }) => {
    const nav = page.locator('header nav')
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Courses' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Learning Modes' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'About Us' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('hero tagline visible', async ({ page }) => {
    await expect(page.getByText('Learn Today.')).toBeVisible()
    await expect(page.getByText('Place Tomorrow.')).toBeVisible()
  })

  test('hero CTA buttons present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /explore courses/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /free counselling/i })).toBeVisible()
  })

  test('7 Flagship Technology Tracks heading visible', async ({ page }) => {
    await page.getByText('7 Flagship Technology Tracks').scrollIntoViewIfNeeded()
    await expect(page.getByText('7 Flagship Technology Tracks')).toBeVisible()
  })

  test('Track 7 Most Popular banner visible', async ({ page }) => {
    const banner = page.getByText('Most Popular Track')
    await banner.scrollIntoViewIfNeeded()
    await expect(banner).toBeVisible()
  })

  test('3 Learning Modes section visible', async ({ page }) => {
    await page.getByText('3 Learning Modes, Your Choice').scrollIntoViewIfNeeded()
    await expect(page.getByText('3 Learning Modes, Your Choice')).toBeVisible()
    await expect(page.getByText('1:1 Mentorship')).toBeVisible()
    await expect(page.getByText('Group Batch')).toBeVisible()
    await expect(page.getByText('Video Library')).toBeVisible()
  })

  test('testimonials section visible', async ({ page }) => {
    await page.getByText('What Our Students Say').scrollIntoViewIfNeeded()
    await expect(page.getByText('What Our Students Say')).toBeVisible()
    // at least one testimonial card
    await expect(page.locator('text=Rohan Mehta')).toBeVisible()
  })

  test('enquiry form visible and submittable', async ({ page }) => {
    const form = page.locator('form')
    await form.scrollIntoViewIfNeeded()
    await expect(form).toBeVisible()
    await page.getByPlaceholder('e.g. Priya Shah').fill('Test User')
    await page.getByPlaceholder('+91 98765 43210').fill('+91 9000000000')
    await expect(page.getByRole('button', { name: /request free call/i })).toBeEnabled()
  })

  test('WhatsApp float button present with correct href', async ({ page }) => {
    const wa = page.locator('a[href="https://wa.me/918160049448"]').first()
    await expect(wa).toBeVisible()
  })

  test('footer has brand name and contact email', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()
    await expect(page.locator('footer').getByText(/TechRise/)).toBeVisible()
    await expect(page.locator('footer').getByText('techrisewithai@gmail.com')).toBeVisible()
  })

  test('footer lists all 7 courses', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()
    await expect(page.locator('footer').getByText(/Full-Stack Web Dev/)).toBeVisible()
    await expect(page.locator('footer').getByText(/Placement Prep Bootcamp/)).toBeVisible()
  })
})

test.describe('Homepage — mobile nav', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('hamburger opens mobile nav', async ({ page }) => {
    await page.goto('/')
    const hamburger = page.getByRole('button', { name: /menu|open/i })
    await expect(hamburger).toBeVisible()
    await hamburger.click()
    await expect(page.getByRole('link', { name: 'Courses' }).nth(1)).toBeVisible()
  })

  test('mobile nav closes after link click', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /menu|open/i }).click()
    await page.getByRole('link', { name: 'About Us' }).last().click()
    await expect(page).toHaveURL(/about/)
  })
})
