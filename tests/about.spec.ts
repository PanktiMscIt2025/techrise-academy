import { test, expect } from '@playwright/test'

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about')
  })

  test('hero heading and story visible', async ({ page }) => {
    await expect(page.getByText('Built by Learners')).toBeVisible()
    await expect(page.getByText('For Learners')).toBeVisible()
  })

  test('4 stat tiles visible', async ({ page }) => {
    await expect(page.getByText('Students Trained')).toBeVisible()
    await expect(page.getByText('Placement Rate')).toBeVisible()
    await expect(page.getByText('Hiring Partners')).toBeVisible()
    await expect(page.getByText('Expert Mentors')).toBeVisible()
  })

  test('founder section shows Pankti Patel', async ({ page }) => {
    await expect(page.getByText('Pankti Patel')).toBeVisible()
    await expect(page.getByText('Founder & Lead Mentor')).toBeVisible()
  })

  test('WhatsApp Pankti button has correct href', async ({ page }) => {
    const btn = page.getByRole('link', { name: /whatsapp pankti/i })
    await expect(btn).toHaveAttribute('href', 'https://wa.me/918160049448')
  })

  test('YouTube link correct', async ({ page }) => {
    const yt = page.getByRole('link', { name: /youtube channel/i }).first()
    await expect(yt).toHaveAttribute('href', 'https://www.youtube.com/@TechRiseAcademy-w3k')
  })

  test('4 values visible', async ({ page }) => {
    await expect(page.getByText('Outcome First')).toBeVisible()
    await expect(page.getByText('Real Mentors')).toBeVisible()
    await expect(page.getByText('Hands-On Always')).toBeVisible()
    await expect(page.getByText('No Student Left Behind')).toBeVisible()
  })

  test('mentors section shows 6 mentor cards', async ({ page }) => {
    await page.getByText('Meet the Mentors').scrollIntoViewIfNeeded()
    const mentorCards = page.locator('section').filter({ hasText: 'Meet the Mentors' }).locator('.card-hover')
    await expect(mentorCards).toHaveCount(6)
  })

  test('timeline section visible with milestones', async ({ page }) => {
    await page.getByText('Our Journey').scrollIntoViewIfNeeded()
    await expect(page.getByText('Our Journey')).toBeVisible()
    await expect(page.getByText('2022')).toBeVisible()
    await expect(page.getByText('2025')).toBeVisible()
  })

  test('hiring partners section has correct anchor id', async ({ page }) => {
    const section = page.locator('#hiring-partners')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(page.getByText('Our Hiring Partners')).toBeVisible()
  })

  test('hiring partners includes TCS and Infosys', async ({ page }) => {
    await page.locator('#hiring-partners').scrollIntoViewIfNeeded()
    await expect(page.getByText('TCS')).toBeVisible()
    await expect(page.getByText('Infosys')).toBeVisible()
    await expect(page.getByText('Accenture')).toBeVisible()
  })
})
