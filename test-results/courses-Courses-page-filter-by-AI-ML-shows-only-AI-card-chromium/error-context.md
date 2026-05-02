# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: courses.spec.ts >> Courses page >> filter by AI & ML shows only AI card
- Location: tests\courses.spec.ts:55:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('AI & Machine Learning')
Expected: visible
Error: strict mode violation: getByText('AI & Machine Learning') resolved to 2 elements:
    1) <h2 class="font-heading font-bold text-navy text-lg mb-1">AI & Machine Learning</h2> aka getByRole('heading', { name: 'AI & Machine Learning' })
    2) <a href="/courses#ai-ml" class="text-sm text-gray-400 hover:text-saffron transition-colors">🤖 AI & Machine Learning</a> aka getByRole('link', { name: '🤖 AI & Machine Learning' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('AI & Machine Learning')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "7 Flagship Technology Tracks" [level=1] [ref=e32]
        - paragraph [ref=e33]: Industry-designed, mentor-led, outcome-focused. Pick a track and start building your tech career today.
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]: 🎓
            - generic [ref=e37]: 500+ students placed
          - generic [ref=e38]:
            - generic [ref=e39]: ⏱️
            - generic [ref=e40]: 3–5 month tracks
          - generic [ref=e41]:
            - generic [ref=e42]: 💰
            - generic [ref=e43]: Starting ₹8,000
          - generic [ref=e44]:
            - generic [ref=e45]: 📜
            - generic [ref=e46]: Certificate included
      - generic [ref=e49]:
        - button "All Tracks" [ref=e50] [cursor=pointer]
        - button "Web Dev" [ref=e51] [cursor=pointer]
        - button "AI & ML" [active] [ref=e52] [cursor=pointer]
        - button "Data Science" [ref=e53] [cursor=pointer]
        - button "Cloud" [ref=e54] [cursor=pointer]
        - button "DevOps" [ref=e55] [cursor=pointer]
        - button "Cybersecurity" [ref=e56] [cursor=pointer]
        - button "Placement Prep" [ref=e57] [cursor=pointer]
      - generic [ref=e63]:
        - generic [ref=e64]:
          - generic [ref=e65]: 🤖
          - generic [ref=e66]:
            - generic [ref=e67]: 5 months
            - generic [ref=e68]: 14 modules
            - generic [ref=e69]: Intermediate
        - heading "AI & Machine Learning" [level=2] [ref=e70]
        - paragraph [ref=e71]: Build intelligent systems with Python
        - paragraph [ref=e72]: Cover the full ML stack — from EDA and classical algorithms to deep learning, NLP, and working with modern LLM APIs. Build 3+ capstone projects with real datasets.
        - generic [ref=e73]:
          - generic [ref=e74]: Python
          - generic [ref=e75]: Pandas / NumPy
          - generic [ref=e76]: Scikit-learn
          - generic [ref=e77]: TensorFlow / PyTorch
          - generic [ref=e78]: NLP
          - generic [ref=e79]: LLM APIs
          - generic [ref=e80]: OpenAI / Gemini
          - generic [ref=e81]: Model Deployment
        - generic [ref=e82]:
          - generic [ref=e83]: Choose Your Mode
          - generic [ref=e84]:
            - generic [ref=e85]:
              - generic [ref=e86]: Video
              - generic [ref=e87]: ₹8K
            - generic [ref=e88]:
              - generic [ref=e89]: Group
              - generic [ref=e90]: ₹18K
            - generic [ref=e91]:
              - generic [ref=e92]: 1:1
              - generic [ref=e93]: ₹38K
        - link "Enrol in This Track →" [ref=e94] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e96]:
        - heading "Frequently Asked Questions" [level=2] [ref=e97]
        - generic [ref=e98]:
          - button "Can I switch tracks after enrolling? +" [ref=e100] [cursor=pointer]:
            - text: Can I switch tracks after enrolling?
            - generic [ref=e101]: +
          - button "Do I need prior coding experience? +" [ref=e103] [cursor=pointer]:
            - text: Do I need prior coding experience?
            - generic [ref=e104]: +
          - button "Are the courses self-paced or live? +" [ref=e106] [cursor=pointer]:
            - text: Are the courses self-paced or live?
            - generic [ref=e107]: +
          - button "Will I get a certificate? +" [ref=e109] [cursor=pointer]:
            - text: Will I get a certificate?
            - generic [ref=e110]: +
          - button "Is EMI available? +" [ref=e112] [cursor=pointer]:
            - text: Is EMI available?
            - generic [ref=e113]: +
      - generic [ref=e115]:
        - heading "Not sure which track is right for you?" [level=2] [ref=e116]
        - paragraph [ref=e117]: Book a free 20-minute counselling call. We'll assess your background and recommend the best track and mode.
        - link "Book Free Counselling →" [ref=e118] [cursor=pointer]:
          - /url: /contact
  - contentinfo [ref=e119]:
    - generic [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122]:
          - link "TechRise Academy" [ref=e124] [cursor=pointer]:
            - /url: /
            - img [ref=e125]
            - generic [ref=e136]:
              - text: TechRise
              - generic [ref=e137]: Academy
          - paragraph [ref=e138]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e139]:
            - link "📱 +91 81600 49448" [ref=e140] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e141]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e142] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e143]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e144] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e145]: ▶️
              - text: YouTube Channel
        - generic [ref=e146]:
          - heading "Our Courses" [level=4] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "💻 Full-Stack Web Dev" [ref=e150] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e151]:
              - link "🤖 AI & Machine Learning" [ref=e152] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e153]:
              - link "📊 Data Science & Analytics" [ref=e154] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e155]:
              - link "☁️ Cloud Computing" [ref=e156] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e157]:
              - link "⚙️ DevOps & Automation" [ref=e158] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e159]:
              - link "🔒 Cybersecurity" [ref=e160] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e161]:
              - link "🎯 Placement Prep Bootcamp" [ref=e162] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e163]:
          - heading "Quick Links" [level=4] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Home" [ref=e167] [cursor=pointer]:
                - /url: /
            - listitem [ref=e168]:
              - link "All Courses" [ref=e169] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e170]:
              - link "Learning Modes" [ref=e171] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e172]:
              - link "About TechRise" [ref=e173] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e174]:
              - link "Hiring Partners" [ref=e175] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e176]:
              - link "Contact Us" [ref=e177] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e178]:
              - link "Enrol Now" [ref=e179] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e180]:
          - heading "Learning Modes" [level=4] [ref=e181]
          - list [ref=e182]:
            - listitem [ref=e183]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e184] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e185]:
              - link "👥 Group Batch — ₹18,000" [ref=e186] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e187]:
              - link "🎬 Video Library — ₹8,000" [ref=e188] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e189] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e190]:
        - paragraph [ref=e191]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e192]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e193] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e194]
  - generic [ref=e200] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e201]:
      - img [ref=e202]
    - generic [ref=e205]:
      - button "Open issues overlay" [ref=e206]:
        - generic [ref=e207]:
          - generic [ref=e208]: "0"
          - generic [ref=e209]: "1"
        - generic [ref=e210]: Issue
      - button "Collapse issues badge" [ref=e211]:
        - img [ref=e212]
  - alert [ref=e214]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Courses page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/courses')
  6  |   })
  7  | 
  8  |   test('hero shows correct stats badges', async ({ page }) => {
  9  |     await expect(page.getByText('500+ students placed')).toBeVisible()
  10 |     await expect(page.getByText('Starting ₹8,000')).toBeVisible()
  11 |   })
  12 | 
  13 |   test('all 7 filter tabs present', async ({ page }) => {
  14 |     const filters = ['All Tracks', 'Web Dev', 'AI & ML', 'Data Science', 'Cloud', 'DevOps', 'Cybersecurity', 'Placement Prep']
  15 |     for (const f of filters) {
  16 |       await expect(page.getByRole('button', { name: f })).toBeVisible()
  17 |     }
  18 |   })
  19 | 
  20 |   test('all 6 regular track cards visible', async ({ page }) => {
  21 |     const cards = [
  22 |       'Full-Stack Web Development',
  23 |       'AI & Machine Learning',
  24 |       'Data Science & Analytics',
  25 |       'Cloud Computing',
  26 |       'DevOps & Automation',
  27 |       'Cybersecurity',
  28 |     ]
  29 |     for (const c of cards) {
  30 |       await page.getByText(c).first().scrollIntoViewIfNeeded()
  31 |       await expect(page.getByText(c).first()).toBeVisible()
  32 |     }
  33 |   })
  34 | 
  35 |   test('Placement Prep full-width card visible', async ({ page }) => {
  36 |     const card = page.locator('#placement-prep')
  37 |     await card.scrollIntoViewIfNeeded()
  38 |     await expect(card).toBeVisible()
  39 |     await expect(page.getByText('Placement Preparation Bootcamp').first()).toBeVisible()
  40 |   })
  41 | 
  42 |   test('Most Popular banner on Track 7', async ({ page }) => {
  43 |     const banner = page.getByText('Most Popular Track')
  44 |     await banner.scrollIntoViewIfNeeded()
  45 |     await expect(banner).toBeVisible()
  46 |   })
  47 | 
  48 |   test('pricing shows ₹8K / ₹18K / ₹38K', async ({ page }) => {
  49 |     // All three pricing tiers visible on first card
  50 |     await expect(page.getByText('₹8K').first()).toBeVisible()
  51 |     await expect(page.getByText('₹18K').first()).toBeVisible()
  52 |     await expect(page.getByText('₹38K').first()).toBeVisible()
  53 |   })
  54 | 
  55 |   test('filter by AI & ML shows only AI card', async ({ page }) => {
  56 |     await page.getByRole('button', { name: 'AI & ML' }).click()
> 57 |     await expect(page.getByText('AI & Machine Learning')).toBeVisible()
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  58 |     await expect(page.getByText('Full-Stack Web Development')).not.toBeVisible()
  59 |   })
  60 | 
  61 |   test('filter by Placement Prep shows bootcamp card', async ({ page }) => {
  62 |     await page.getByRole('button', { name: 'Placement Prep' }).click()
  63 |     await expect(page.locator('#placement-prep')).toBeVisible()
  64 |     await expect(page.getByText('Full-Stack Web Development')).not.toBeVisible()
  65 |   })
  66 | 
  67 |   test('All Tracks filter restores all cards', async ({ page }) => {
  68 |     await page.getByRole('button', { name: 'AI & ML' }).click()
  69 |     await page.getByRole('button', { name: 'All Tracks' }).click()
  70 |     await expect(page.getByText('Full-Stack Web Development')).toBeVisible()
  71 |     await expect(page.getByText('Cybersecurity')).toBeVisible()
  72 |   })
  73 | 
  74 |   test('Enrol button links to /contact', async ({ page }) => {
  75 |     const enrolBtn = page.getByRole('link', { name: /enrol in this track/i }).first()
  76 |     await enrolBtn.scrollIntoViewIfNeeded()
  77 |     await expect(enrolBtn).toHaveAttribute('href', '/contact')
  78 |   })
  79 | 
  80 |   test('FAQ accordion opens and closes', async ({ page }) => {
  81 |     const faq = page.getByRole('button', { name: /can i switch tracks/i })
  82 |     await faq.scrollIntoViewIfNeeded()
  83 |     await faq.click()
  84 |     await expect(page.getByText(/first 7 days/)).toBeVisible()
  85 |     await faq.click()
  86 |     await expect(page.getByText(/first 7 days/)).not.toBeVisible()
  87 |   })
  88 | })
  89 | 
```