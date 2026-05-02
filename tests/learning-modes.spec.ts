import { test, expect } from '@playwright/test'

test.describe('Learning Modes page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/learning-modes')
  })

  test('all 3 mode cards visible', async ({ page }) => {
    await expect(page.getByText('1:1 Mentorship').first()).toBeVisible()
    await expect(page.getByText('Group Batch').first()).toBeVisible()
    await expect(page.getByText('Video Library').first()).toBeVisible()
  })

  test('correct prices shown', async ({ page }) => {
    await expect(page.getByText('₹38,000').first()).toBeVisible()
    await expect(page.getByText('₹18,000').first()).toBeVisible()
    await expect(page.getByText('₹8,000').first()).toBeVisible()
  })

  test('badges shown: Best Results, Most Popular, Best Value', async ({ page }) => {
    await expect(page.getByText('Best Results')).toBeVisible()
    await expect(page.getByText('Most Popular')).toBeVisible()
    await expect(page.getByText('Best Value')).toBeVisible()
  })

  test('comparison table visible with feature rows', async ({ page }) => {
    const table = page.locator('table')
    await table.scrollIntoViewIfNeeded()
    await expect(table).toBeVisible()
    await expect(page.getByText('Mock interviews')).toBeVisible()
    await expect(page.getByText('EMI available')).toBeVisible()
  })

  test('quiz section visible', async ({ page }) => {
    const quiz = page.locator('#quiz')
    await quiz.scrollIntoViewIfNeeded()
    await expect(page.getByText('Not Sure Which Mode to Pick?')).toBeVisible()
    await expect(page.getByText('How much time can you dedicate per week?')).toBeVisible()
  })

  test('quiz recommendation button disabled until all answered', async ({ page }) => {
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    const submitBtn = page.getByRole('button', { name: /show my recommendation/i })
    await expect(submitBtn).toBeDisabled()
  })

  test('quiz shows result after all 3 answered', async ({ page }) => {
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    // Answer all 3 questions — pick first option each time
    const options = page.locator('#quiz button').filter({ hasText: /< 5 hours|learn best alone|6\+ months/ })
    for (let i = 0; i < 3; i++) {
      await page.locator('#quiz .space-y-6 > div').nth(i).locator('button').first().click()
    }
    await page.getByRole('button', { name: /show my recommendation/i }).click()
    await expect(page.getByText(/we recommend:/i)).toBeVisible()
  })

  test('FAQ accordion works', async ({ page }) => {
    const faq = page.getByRole('button', { name: /can i switch modes/i })
    await faq.scrollIntoViewIfNeeded()
    await faq.click()
    await expect(page.getByText(/first 7 days/)).toBeVisible()
  })

  test('Enrol buttons link to /contact', async ({ page }) => {
    const enrolLinks = page.getByRole('link', { name: /enrol/i })
    await expect(enrolLinks.first()).toHaveAttribute('href', '/contact')
  })
})
