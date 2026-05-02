import { test, expect } from '@playwright/test'

test.describe('Courses page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/courses')
  })

  test('hero shows correct stats badges', async ({ page }) => {
    await expect(page.getByText('500+ students placed')).toBeVisible()
    await expect(page.getByText('Starting ₹8,000')).toBeVisible()
  })

  test('all 7 filter tabs present', async ({ page }) => {
    const filters = ['All Tracks', 'Web Dev', 'AI & ML', 'Data Science', 'Cloud', 'DevOps', 'Cybersecurity', 'Placement Prep']
    for (const f of filters) {
      await expect(page.getByRole('button', { name: f })).toBeVisible()
    }
  })

  test('all 6 regular track cards visible', async ({ page }) => {
    const cards = [
      'Full-Stack Web Development',
      'AI & Machine Learning',
      'Data Science & Analytics',
      'Cloud Computing',
      'DevOps & Automation',
      'Cybersecurity',
    ]
    for (const c of cards) {
      await page.getByText(c).first().scrollIntoViewIfNeeded()
      await expect(page.getByText(c).first()).toBeVisible()
    }
  })

  test('Placement Prep full-width card visible', async ({ page }) => {
    const card = page.locator('#placement-prep')
    await card.scrollIntoViewIfNeeded()
    await expect(card).toBeVisible()
    await expect(page.getByText('Placement Preparation Bootcamp').first()).toBeVisible()
  })

  test('Most Popular banner on Track 7', async ({ page }) => {
    const banner = page.getByText('Most Popular Track')
    await banner.scrollIntoViewIfNeeded()
    await expect(banner).toBeVisible()
  })

  test('pricing shows ₹8K / ₹18K / ₹38K', async ({ page }) => {
    // All three pricing tiers visible on first card
    await expect(page.getByText('₹8K').first()).toBeVisible()
    await expect(page.getByText('₹18K').first()).toBeVisible()
    await expect(page.getByText('₹38K').first()).toBeVisible()
  })

  test('filter by AI & ML shows only AI card', async ({ page }) => {
    await page.getByRole('button', { name: 'AI & ML' }).click()
    await expect(page.getByText('AI & Machine Learning')).toBeVisible()
    await expect(page.getByText('Full-Stack Web Development')).not.toBeVisible()
  })

  test('filter by Placement Prep shows bootcamp card', async ({ page }) => {
    await page.getByRole('button', { name: 'Placement Prep' }).click()
    await expect(page.locator('#placement-prep')).toBeVisible()
    await expect(page.getByText('Full-Stack Web Development')).not.toBeVisible()
  })

  test('All Tracks filter restores all cards', async ({ page }) => {
    await page.getByRole('button', { name: 'AI & ML' }).click()
    await page.getByRole('button', { name: 'All Tracks' }).click()
    await expect(page.getByText('Full-Stack Web Development')).toBeVisible()
    await expect(page.getByText('Cybersecurity')).toBeVisible()
  })

  test('Enrol button links to /contact', async ({ page }) => {
    const enrolBtn = page.getByRole('link', { name: /enrol in this track/i }).first()
    await enrolBtn.scrollIntoViewIfNeeded()
    await expect(enrolBtn).toHaveAttribute('href', '/contact')
  })

  test('FAQ accordion opens and closes', async ({ page }) => {
    const faq = page.getByRole('button', { name: /can i switch tracks/i })
    await faq.scrollIntoViewIfNeeded()
    await faq.click()
    await expect(page.getByText(/first 7 days/)).toBeVisible()
    await faq.click()
    await expect(page.getByText(/first 7 days/)).not.toBeVisible()
  })
})
