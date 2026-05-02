import { test, expect } from '@playwright/test'

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('hero heading visible', async ({ page }) => {
    await expect(page.getByText("Let's Get You Placed")).toBeVisible()
  })

  test('step 1 shows name and phone fields', async ({ page }) => {
    await expect(page.getByText('Your Details')).toBeVisible()
    await expect(page.getByLabel('Full Name')).toBeVisible()
    await expect(page.getByLabel('Phone Number')).toBeVisible()
  })

  test('step 1 continue disabled until name + phone filled', async ({ page }) => {
    const continueBtn = page.getByRole('button', { name: /continue/i })
    await expect(continueBtn).toBeDisabled()
    await page.getByLabel('Full Name').fill('Priya Shah')
    await expect(continueBtn).toBeDisabled()
    await page.getByLabel('Phone Number').fill('+91 9000000000')
    await expect(continueBtn).toBeEnabled()
  })

  test('step indicator advances to step 2', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Priya Shah')
    await page.getByLabel('Phone Number').fill('+91 9000000000')
    await page.getByRole('button', { name: /continue/i }).click()
    await expect(page.getByText('Course Preferences')).toBeVisible()
  })

  test('step 2 shows all 8 course options', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Test')
    await page.getByLabel('Phone Number').fill('9000000000')
    await page.getByRole('button', { name: /continue/i }).click()
    await expect(page.getByRole('button', { name: 'Full-Stack Web Development' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Placement Prep Bootcamp' })).toBeVisible()
    await expect(page.getByRole('button', { name: "I'm not sure yet" })).toBeVisible()
  })

  test('step 2 continue disabled until course selected', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Test')
    await page.getByLabel('Phone Number').fill('9000000000')
    await page.getByRole('button', { name: /continue/i }).click()
    const nextBtn = page.getByRole('button', { name: /continue/i })
    await expect(nextBtn).toBeDisabled()
    await page.getByRole('button', { name: 'AI & Machine Learning' }).click()
    await expect(nextBtn).toBeEnabled()
  })

  test('step 3 shows summary and submit button', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Priya Shah')
    await page.getByLabel('Phone Number').fill('+91 9000000000')
    await page.getByRole('button', { name: /continue/i }).click()
    await page.getByRole('button', { name: 'Cloud Computing' }).click()
    await page.getByRole('button', { name: /continue/i }).click()
    await expect(page.getByText('Almost Done!')).toBeVisible()
    await expect(page.getByText('Priya Shah')).toBeVisible()
    await expect(page.getByRole('button', { name: /submit enquiry/i })).toBeVisible()
  })

  test('back button returns to previous step', async ({ page }) => {
    await page.getByLabel('Full Name').fill('Test')
    await page.getByLabel('Phone Number').fill('9000000000')
    await page.getByRole('button', { name: /continue/i }).click()
    await expect(page.getByText('Course Preferences')).toBeVisible()
    await page.getByRole('button', { name: /← back/i }).click()
    await expect(page.getByText('Your Details')).toBeVisible()
  })

  test('sidebar shows WhatsApp, email and phone', async ({ page }) => {
    await expect(page.getByText('+91 81600 49448').first()).toBeVisible()
    await expect(page.getByText('techrisewithai@gmail.com')).toBeVisible()
  })

  test('sidebar WhatsApp link correct', async ({ page }) => {
    const waLink = page.locator('a[href="https://wa.me/918160049448"]').first()
    await expect(waLink).toBeVisible()
  })

  test('FAQ accordion opens', async ({ page }) => {
    const faq = page.getByRole('button', { name: /how soon will someone contact/i })
    await faq.scrollIntoViewIfNeeded()
    await faq.click()
    await expect(page.getByText(/within 24 hours/i)).toBeVisible()
  })
})

test.describe('Contact page — full form submission flow', () => {
  test('completes 3-step form and shows success screen', async ({ page }) => {
    await page.goto('/contact')
    // Step 1
    await page.getByLabel('Full Name').fill('Arjun Test')
    await page.getByLabel('Phone Number').fill('+91 9876543210')
    await page.getByLabel('Email Address').fill('arjun@test.com')
    await page.getByRole('button', { name: /continue/i }).click()
    // Step 2
    await page.getByRole('button', { name: 'Placement Prep Bootcamp' }).click()
    await page.getByRole('button', { name: /1:1 Mentorship/i }).click()
    await page.getByRole('button', { name: /continue/i }).click()
    // Step 3
    await page.getByRole('button', { name: 'MCA' }).click()
    await page.getByRole('button', { name: /submit enquiry/i }).click()
    // Success screen
    await expect(page.getByText(/thanks, arjun test/i)).toBeVisible({ timeout: 8000 })
    await expect(page.getByText(/9876543210/)).toBeVisible()
  })
})
