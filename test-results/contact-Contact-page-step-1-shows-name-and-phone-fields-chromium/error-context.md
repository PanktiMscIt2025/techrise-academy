# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.ts >> Contact page >> step 1 shows name and phone fields
- Location: tests\contact.spec.ts:12:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Full Name')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel('Full Name')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - text: 🚀 New batch starting May 2025 · Limited seats
    - link "Enrol Now →" [ref=e3] [cursor=pointer]:
      - /url: /contact
  - banner [ref=e4]:
    - navigation [ref=e5]:
      - link "TechRise Academy" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e18]:
          - text: TechRise
          - generic [ref=e19]: Academy
      - generic [ref=e20]:
        - link "Home" [ref=e21] [cursor=pointer]:
          - /url: /
        - link "Courses" [ref=e22] [cursor=pointer]:
          - /url: /courses
        - link "Learning Modes" [ref=e23] [cursor=pointer]:
          - /url: /learning-modes
        - link "About Us" [ref=e24] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e25] [cursor=pointer]:
          - /url: /contact
      - link "Enrol Now" [ref=e27] [cursor=pointer]:
        - /url: /contact
  - main [ref=e28]:
    - generic [ref=e29]:
      - generic [ref=e31]:
        - heading "Let's Get You Placed" [level=1] [ref=e32]
        - paragraph [ref=e33]: Fill in the form below or WhatsApp us directly. Free counselling, no hard sell.
      - generic [ref=e36]:
        - generic [ref=e38]:
          - generic [ref=e40]:
            - generic [ref=e41]:
              - generic [ref=e42]: "1"
              - generic [ref=e43]: Your Info
            - generic [ref=e45]:
              - generic [ref=e46]: "2"
              - generic [ref=e47]: Course Prefs
            - generic [ref=e49]:
              - generic [ref=e50]: "3"
              - generic [ref=e51]: Final Details
          - generic [ref=e53]:
            - heading "Your Details" [level=2] [ref=e54]
            - generic [ref=e55]:
              - generic [ref=e56]: Full Name *
              - textbox "e.g. Priya Shah" [ref=e57]
            - generic [ref=e58]:
              - generic [ref=e59]: Phone Number *
              - textbox "+91 98765 43210" [ref=e60]
            - generic [ref=e61]:
              - generic [ref=e62]: Email Address
              - textbox "priya@email.com" [ref=e63]
            - button "Continue →" [disabled] [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - heading "Contact Us Directly" [level=3] [ref=e67]
            - generic [ref=e68]:
              - link "💬 WhatsApp (Fastest) +91 81600 49448" [ref=e69] [cursor=pointer]:
                - /url: https://wa.me/918160049448
                - generic [ref=e70]: 💬
                - generic [ref=e71]:
                  - generic [ref=e72]: WhatsApp (Fastest)
                  - generic [ref=e73]: +91 81600 49448
              - link "📞 Call Us +91 81600 49448" [ref=e74] [cursor=pointer]:
                - /url: tel:+918160049448
                - generic [ref=e75]: 📞
                - generic [ref=e76]:
                  - generic [ref=e77]: Call Us
                  - generic [ref=e78]: +91 81600 49448
              - link "✉️ Email techrisewithai@gmail.com" [ref=e79] [cursor=pointer]:
                - /url: mailto:techrisewithai@gmail.com
                - generic [ref=e80]: ✉️
                - generic [ref=e81]:
                  - generic [ref=e82]: Email
                  - generic [ref=e83]: techrisewithai@gmail.com
              - link "▶️ YouTube @TechRiseAcademy-w3k" [ref=e84] [cursor=pointer]:
                - /url: https://www.youtube.com/@TechRiseAcademy-w3k
                - generic [ref=e85]: ▶️
                - generic [ref=e86]:
                  - generic [ref=e87]: YouTube
                  - generic [ref=e88]: "@TechRiseAcademy-w3k"
          - generic [ref=e89]:
            - generic [ref=e90]: Response Times
            - generic [ref=e91]:
              - generic [ref=e92]:
                - generic [ref=e93]: WhatsApp
                - generic [ref=e94]: Under 2 hrs
              - generic [ref=e95]:
                - generic [ref=e96]: Form / Email
                - generic [ref=e97]: Within 24 hrs
              - generic [ref=e98]:
                - generic [ref=e99]: Phone
                - generic [ref=e100]: Mon–Sat, 9am–7pm
      - generic [ref=e102]:
        - heading "Frequently Asked Questions" [level=2] [ref=e103]
        - generic [ref=e104]:
          - button "How soon will someone contact me? +" [ref=e106] [cursor=pointer]:
            - text: How soon will someone contact me?
            - generic [ref=e107]: +
          - button "Is the counselling session really free? +" [ref=e109] [cursor=pointer]:
            - text: Is the counselling session really free?
            - generic [ref=e110]: +
          - button "Can I enrol the same day? +" [ref=e112] [cursor=pointer]:
            - text: Can I enrol the same day?
            - generic [ref=e113]: +
          - button "Do you offer group discounts? +" [ref=e115] [cursor=pointer]:
            - text: Do you offer group discounts?
            - generic [ref=e116]: +
          - button "Is EMI available? +" [ref=e118] [cursor=pointer]:
            - text: Is EMI available?
            - generic [ref=e119]: +
  - contentinfo [ref=e120]:
    - generic [ref=e121]:
      - generic [ref=e122]:
        - generic [ref=e123]:
          - link "TechRise Academy" [ref=e125] [cursor=pointer]:
            - /url: /
            - img [ref=e126]
            - generic [ref=e137]:
              - text: TechRise
              - generic [ref=e138]: Academy
          - paragraph [ref=e139]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e140]:
            - link "📱 +91 81600 49448" [ref=e141] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e142]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e143] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e144]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e145] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e146]: ▶️
              - text: YouTube Channel
        - generic [ref=e147]:
          - heading "Our Courses" [level=4] [ref=e148]
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link "💻 Full-Stack Web Dev" [ref=e151] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e152]:
              - link "🤖 AI & Machine Learning" [ref=e153] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e154]:
              - link "📊 Data Science & Analytics" [ref=e155] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e156]:
              - link "☁️ Cloud Computing" [ref=e157] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e158]:
              - link "⚙️ DevOps & Automation" [ref=e159] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e160]:
              - link "🔒 Cybersecurity" [ref=e161] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e162]:
              - link "🎯 Placement Prep Bootcamp" [ref=e163] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e164]:
          - heading "Quick Links" [level=4] [ref=e165]
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Home" [ref=e168] [cursor=pointer]:
                - /url: /
            - listitem [ref=e169]:
              - link "All Courses" [ref=e170] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e171]:
              - link "Learning Modes" [ref=e172] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e173]:
              - link "About TechRise" [ref=e174] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e175]:
              - link "Hiring Partners" [ref=e176] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e177]:
              - link "Contact Us" [ref=e178] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e179]:
              - link "Enrol Now" [ref=e180] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e181]:
          - heading "Learning Modes" [level=4] [ref=e182]
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e185] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e186]:
              - link "👥 Group Batch — ₹18,000" [ref=e187] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e188]:
              - link "🎬 Video Library — ₹8,000" [ref=e189] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e190] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e191]:
        - paragraph [ref=e192]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e193]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e194] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e195]
  - generic [ref=e201] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e202]:
      - img [ref=e203]
    - generic [ref=e206]:
      - button "Open issues overlay" [ref=e207]:
        - generic [ref=e208]:
          - generic [ref=e209]: "0"
          - generic [ref=e210]: "1"
        - generic [ref=e211]: Issue
      - button "Collapse issues badge" [ref=e212]:
        - img [ref=e213]
  - alert [ref=e215]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.describe('Contact page', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/contact')
  6   |   })
  7   | 
  8   |   test('hero heading visible', async ({ page }) => {
  9   |     await expect(page.getByText("Let's Get You Placed")).toBeVisible()
  10  |   })
  11  | 
  12  |   test('step 1 shows name and phone fields', async ({ page }) => {
  13  |     await expect(page.getByText('Your Details')).toBeVisible()
> 14  |     await expect(page.getByLabel('Full Name')).toBeVisible()
      |                                                ^ Error: expect(locator).toBeVisible() failed
  15  |     await expect(page.getByLabel('Phone Number')).toBeVisible()
  16  |   })
  17  | 
  18  |   test('step 1 continue disabled until name + phone filled', async ({ page }) => {
  19  |     const continueBtn = page.getByRole('button', { name: /continue/i })
  20  |     await expect(continueBtn).toBeDisabled()
  21  |     await page.getByLabel('Full Name').fill('Priya Shah')
  22  |     await expect(continueBtn).toBeDisabled()
  23  |     await page.getByLabel('Phone Number').fill('+91 9000000000')
  24  |     await expect(continueBtn).toBeEnabled()
  25  |   })
  26  | 
  27  |   test('step indicator advances to step 2', async ({ page }) => {
  28  |     await page.getByLabel('Full Name').fill('Priya Shah')
  29  |     await page.getByLabel('Phone Number').fill('+91 9000000000')
  30  |     await page.getByRole('button', { name: /continue/i }).click()
  31  |     await expect(page.getByText('Course Preferences')).toBeVisible()
  32  |   })
  33  | 
  34  |   test('step 2 shows all 8 course options', async ({ page }) => {
  35  |     await page.getByLabel('Full Name').fill('Test')
  36  |     await page.getByLabel('Phone Number').fill('9000000000')
  37  |     await page.getByRole('button', { name: /continue/i }).click()
  38  |     await expect(page.getByRole('button', { name: 'Full-Stack Web Development' })).toBeVisible()
  39  |     await expect(page.getByRole('button', { name: 'Placement Prep Bootcamp' })).toBeVisible()
  40  |     await expect(page.getByRole('button', { name: "I'm not sure yet" })).toBeVisible()
  41  |   })
  42  | 
  43  |   test('step 2 continue disabled until course selected', async ({ page }) => {
  44  |     await page.getByLabel('Full Name').fill('Test')
  45  |     await page.getByLabel('Phone Number').fill('9000000000')
  46  |     await page.getByRole('button', { name: /continue/i }).click()
  47  |     const nextBtn = page.getByRole('button', { name: /continue/i })
  48  |     await expect(nextBtn).toBeDisabled()
  49  |     await page.getByRole('button', { name: 'AI & Machine Learning' }).click()
  50  |     await expect(nextBtn).toBeEnabled()
  51  |   })
  52  | 
  53  |   test('step 3 shows summary and submit button', async ({ page }) => {
  54  |     await page.getByLabel('Full Name').fill('Priya Shah')
  55  |     await page.getByLabel('Phone Number').fill('+91 9000000000')
  56  |     await page.getByRole('button', { name: /continue/i }).click()
  57  |     await page.getByRole('button', { name: 'Cloud Computing' }).click()
  58  |     await page.getByRole('button', { name: /continue/i }).click()
  59  |     await expect(page.getByText('Almost Done!')).toBeVisible()
  60  |     await expect(page.getByText('Priya Shah')).toBeVisible()
  61  |     await expect(page.getByRole('button', { name: /submit enquiry/i })).toBeVisible()
  62  |   })
  63  | 
  64  |   test('back button returns to previous step', async ({ page }) => {
  65  |     await page.getByLabel('Full Name').fill('Test')
  66  |     await page.getByLabel('Phone Number').fill('9000000000')
  67  |     await page.getByRole('button', { name: /continue/i }).click()
  68  |     await expect(page.getByText('Course Preferences')).toBeVisible()
  69  |     await page.getByRole('button', { name: /← back/i }).click()
  70  |     await expect(page.getByText('Your Details')).toBeVisible()
  71  |   })
  72  | 
  73  |   test('sidebar shows WhatsApp, email and phone', async ({ page }) => {
  74  |     await expect(page.getByText('+91 81600 49448').first()).toBeVisible()
  75  |     await expect(page.getByText('techrisewithai@gmail.com')).toBeVisible()
  76  |   })
  77  | 
  78  |   test('sidebar WhatsApp link correct', async ({ page }) => {
  79  |     const waLink = page.locator('a[href="https://wa.me/918160049448"]').first()
  80  |     await expect(waLink).toBeVisible()
  81  |   })
  82  | 
  83  |   test('FAQ accordion opens', async ({ page }) => {
  84  |     const faq = page.getByRole('button', { name: /how soon will someone contact/i })
  85  |     await faq.scrollIntoViewIfNeeded()
  86  |     await faq.click()
  87  |     await expect(page.getByText(/within 24 hours/i)).toBeVisible()
  88  |   })
  89  | })
  90  | 
  91  | test.describe('Contact page — full form submission flow', () => {
  92  |   test('completes 3-step form and shows success screen', async ({ page }) => {
  93  |     await page.goto('/contact')
  94  |     // Step 1
  95  |     await page.getByLabel('Full Name').fill('Arjun Test')
  96  |     await page.getByLabel('Phone Number').fill('+91 9876543210')
  97  |     await page.getByLabel('Email Address').fill('arjun@test.com')
  98  |     await page.getByRole('button', { name: /continue/i }).click()
  99  |     // Step 2
  100 |     await page.getByRole('button', { name: 'Placement Prep Bootcamp' }).click()
  101 |     await page.getByRole('button', { name: /1:1 Mentorship/i }).click()
  102 |     await page.getByRole('button', { name: /continue/i }).click()
  103 |     // Step 3
  104 |     await page.getByRole('button', { name: 'MCA' }).click()
  105 |     await page.getByRole('button', { name: /submit enquiry/i }).click()
  106 |     // Success screen
  107 |     await expect(page.getByText(/thanks, arjun test/i)).toBeVisible({ timeout: 8000 })
  108 |     await expect(page.getByText(/9876543210/)).toBeVisible()
  109 |   })
  110 | })
  111 | 
```