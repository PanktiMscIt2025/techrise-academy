# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: about.spec.ts >> About page >> hiring partners includes TCS and Infosys
- Location: tests\about.spec.ts:62:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('TCS')
Expected: visible
Error: strict mode violation: getByText('TCS') resolved to 2 elements:
    1) <div class="text-xs text-gray-400">7+ years @ TCS</div> aka getByText('+ years @ TCS')
    2) <div class="px-5 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm text-sm font-semibold text-gray-700 card-hover">TCS</div> aka getByText('TCS', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('TCS')

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
        - generic [ref=e32]:
          - generic [ref=e33]: Our Story
          - heading "Built by Learners, For Learners" [level=1] [ref=e34]
          - paragraph [ref=e35]: "TechRise Academy was founded with one question: why do so many talented graduates fail to get placed, despite studying hard?"
          - paragraph [ref=e36]: The answer wasn't talent — it was the gap between textbook knowledge and what companies actually test for. TechRise bridges that gap with real mentors, real projects, and real placement preparation.
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic [ref=e39]: 0+
            - generic [ref=e40]: Students Trained
          - generic [ref=e41]:
            - generic [ref=e42]: 0%
            - generic [ref=e43]: Placement Rate
          - generic [ref=e44]:
            - generic [ref=e45]: 0+
            - generic [ref=e46]: Hiring Partners
          - generic [ref=e47]:
            - generic [ref=e48]: "0"
            - generic [ref=e49]: Expert Mentors
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]: PP
          - heading "Pankti Patel" [level=2] [ref=e55]
          - paragraph [ref=e56]: Founder & Lead Mentor
          - paragraph [ref=e57]: Pankti spent 6+ years in the tech industry across AI/ML and full-stack development before founding TechRise Academy. She watched brilliant students fail interviews not because of knowledge gaps, but because of a lack of structured preparation and industry exposure.
          - paragraph [ref=e58]: TechRise is her answer to that problem — an academy that doesn't just teach you to code, but prepares you to interview, communicate, and succeed in the real industry.
          - generic [ref=e59]:
            - link "WhatsApp Pankti" [ref=e60] [cursor=pointer]:
              - /url: https://wa.me/918160049448
            - link "YouTube Channel" [ref=e61] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
        - generic [ref=e62]:
          - heading "Our Values" [level=3] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - generic [ref=e66]: 🎯
              - generic [ref=e67]:
                - generic [ref=e68]: Outcome First
                - generic [ref=e69]: Every lesson, every project, every mock interview exists for one reason — to get you placed.
            - generic [ref=e70]:
              - generic [ref=e71]: 🤝
              - generic [ref=e72]:
                - generic [ref=e73]: Real Mentors
                - generic [ref=e74]: No fake bios. Our mentors are active industry professionals who interview, hire, and build every day.
            - generic [ref=e75]:
              - generic [ref=e76]: 🔬
              - generic [ref=e77]:
                - generic [ref=e78]: Hands-On Always
                - generic [ref=e79]: Theory explains; projects prove. Every module ends with something you build and can show.
            - generic [ref=e80]:
              - generic [ref=e81]: 💬
              - generic [ref=e82]:
                - generic [ref=e83]: No Student Left Behind
                - generic [ref=e84]: Small batches and 1:1 access mean we know your name, your progress, and your blockers.
      - generic [ref=e86]:
        - generic [ref=e87]:
          - heading "Meet the Mentors" [level=2] [ref=e88]
          - paragraph [ref=e89]: Active industry professionals — not just teachers.
        - generic [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]: PP
            - generic [ref=e93]:
              - generic [ref=e94]: Pankti Patel
              - generic [ref=e95]: Founder & Lead Mentor
              - generic [ref=e96]: AI/ML · Full-Stack · Placement Strategy
              - generic [ref=e97]: 6+ years
          - generic [ref=e98]:
            - generic [ref=e99]: RK
            - generic [ref=e100]:
              - generic [ref=e101]: Raj Kumar
              - generic [ref=e102]: Senior Mentor
              - generic [ref=e103]: Cloud & DevOps
              - generic [ref=e104]: 8+ years @ AWS
          - generic [ref=e105]:
            - generic [ref=e106]: MN
            - generic [ref=e107]:
              - generic [ref=e108]: Meera Nair
              - generic [ref=e109]: Senior Mentor
              - generic [ref=e110]: Data Science & Analytics
              - generic [ref=e111]: 7+ years @ TCS
          - generic [ref=e112]:
            - generic [ref=e113]: AS
            - generic [ref=e114]:
              - generic [ref=e115]: Aryan Shah
              - generic [ref=e116]: Mentor
              - generic [ref=e117]: Cybersecurity & Ethical Hacking
              - generic [ref=e118]: 5+ years, CEH certified
          - generic [ref=e119]:
            - generic [ref=e120]: DV
            - generic [ref=e121]:
              - generic [ref=e122]: Deepa Verma
              - generic [ref=e123]: Mentor
              - generic [ref=e124]: Full-Stack Web Development
              - generic [ref=e125]: 5+ years @ Wipro
          - generic [ref=e126]:
            - generic [ref=e127]: NJ
            - generic [ref=e128]:
              - generic [ref=e129]: Nikhil Joshi
              - generic [ref=e130]: Placement Coach
              - generic [ref=e131]: Placement Prep · Interview Strategy
              - generic [ref=e132]: Ex-Infosys HR, 400+ interviews
      - generic [ref=e134]:
        - heading "Our Journey" [level=2] [ref=e135]
        - generic [ref=e138]:
          - generic [ref=e139]:
            - generic [ref=e141]: "2022"
            - generic [ref=e142]: TechRise Academy founded by Pankti Patel with first 10 students.
          - generic [ref=e143]:
            - generic [ref=e145]: 2023 Q1
            - generic [ref=e146]: Expanded to 5 tech tracks and 100+ enrolled students.
          - generic [ref=e147]:
            - generic [ref=e149]: 2023 Q3
            - generic [ref=e150]: Placement Prep Bootcamp launched — first 30 students placed in 8 weeks.
          - generic [ref=e151]:
            - generic [ref=e153]: 2024 Q1
            - generic [ref=e154]: 50+ hiring partners onboarded across Gujarat, Mumbai, Pune, Bangalore.
          - generic [ref=e155]:
            - generic [ref=e157]: 2024 Q3
            - generic [ref=e158]: 7th track (Placement Prep) designated Most Popular. 300+ total placements.
          - generic [ref=e159]:
            - generic [ref=e161]: "2025"
            - generic [ref=e162]: 500+ students trained. 95% placement rate. YouTube channel @TechRiseAcademy-w3k launched.
      - generic [ref=e164]:
        - heading "Our Hiring Partners" [level=2] [ref=e165]
        - paragraph [ref=e166]: 50+ companies actively hire TechRise graduates.
        - generic [ref=e167]:
          - generic [ref=e168]: TCS
          - generic [ref=e169]: Infosys
          - generic [ref=e170]: Wipro
          - generic [ref=e171]: Accenture
          - generic [ref=e172]: Capgemini
          - generic [ref=e173]: HCL Technologies
          - generic [ref=e174]: Tech Mahindra
          - generic [ref=e175]: Cognizant
          - generic [ref=e176]: Mphasis
          - generic [ref=e177]: Persistent Systems
          - generic [ref=e178]: LTIMindtree
          - generic [ref=e179]: Hexaware
          - generic [ref=e180]: KPIT Technologies
          - generic [ref=e181]: Mastech Digital
          - generic [ref=e182]: Cyient
          - generic [ref=e183]: Birlasoft
          - generic [ref=e184]: NIIT Technologies
          - generic [ref=e185]: Zensar Technologies
        - paragraph [ref=e187]:
          - text: Want to hire TechRise graduates?
          - link "Contact us →" [ref=e188] [cursor=pointer]:
            - /url: mailto:techrisewithai@gmail.com
      - generic [ref=e190]:
        - heading "Ready to join the TechRise family?" [level=2] [ref=e191]
        - paragraph [ref=e192]: 500+ students have already made the leap. Your turn.
        - link "Start Your Journey →" [ref=e193] [cursor=pointer]:
          - /url: /contact
  - contentinfo [ref=e194]:
    - generic [ref=e195]:
      - generic [ref=e196]:
        - generic [ref=e197]:
          - link "TechRise Academy" [ref=e199] [cursor=pointer]:
            - /url: /
            - img [ref=e200]
            - generic [ref=e211]:
              - text: TechRise
              - generic [ref=e212]: Academy
          - paragraph [ref=e213]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e214]:
            - link "📱 +91 81600 49448" [ref=e215] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e216]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e217] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e218]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e219] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e220]: ▶️
              - text: YouTube Channel
        - generic [ref=e221]:
          - heading "Our Courses" [level=4] [ref=e222]
          - list [ref=e223]:
            - listitem [ref=e224]:
              - link "💻 Full-Stack Web Dev" [ref=e225] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e226]:
              - link "🤖 AI & Machine Learning" [ref=e227] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e228]:
              - link "📊 Data Science & Analytics" [ref=e229] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e230]:
              - link "☁️ Cloud Computing" [ref=e231] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e232]:
              - link "⚙️ DevOps & Automation" [ref=e233] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e234]:
              - link "🔒 Cybersecurity" [ref=e235] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e236]:
              - link "🎯 Placement Prep Bootcamp" [ref=e237] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e238]:
          - heading "Quick Links" [level=4] [ref=e239]
          - list [ref=e240]:
            - listitem [ref=e241]:
              - link "Home" [ref=e242] [cursor=pointer]:
                - /url: /
            - listitem [ref=e243]:
              - link "All Courses" [ref=e244] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e245]:
              - link "Learning Modes" [ref=e246] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e247]:
              - link "About TechRise" [ref=e248] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e249]:
              - link "Hiring Partners" [ref=e250] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e251]:
              - link "Contact Us" [ref=e252] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e253]:
              - link "Enrol Now" [ref=e254] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e255]:
          - heading "Learning Modes" [level=4] [ref=e256]
          - list [ref=e257]:
            - listitem [ref=e258]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e259] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e260]:
              - link "👥 Group Batch — ₹18,000" [ref=e261] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e262]:
              - link "🎬 Video Library — ₹8,000" [ref=e263] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e264] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e265]:
        - paragraph [ref=e266]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e267]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e268] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e269]
  - generic [ref=e275] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e276]:
      - img [ref=e277]
    - generic [ref=e280]:
      - button "Open issues overlay" [ref=e281]:
        - generic [ref=e282]:
          - generic [ref=e283]: "0"
          - generic [ref=e284]: "1"
        - generic [ref=e285]: Issue
      - button "Collapse issues badge" [ref=e286]:
        - img [ref=e287]
  - alert [ref=e289]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('About page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/about')
  6  |   })
  7  | 
  8  |   test('hero heading and story visible', async ({ page }) => {
  9  |     await expect(page.getByText('Built by Learners')).toBeVisible()
  10 |     await expect(page.getByText('For Learners')).toBeVisible()
  11 |   })
  12 | 
  13 |   test('4 stat tiles visible', async ({ page }) => {
  14 |     await expect(page.getByText('Students Trained')).toBeVisible()
  15 |     await expect(page.getByText('Placement Rate')).toBeVisible()
  16 |     await expect(page.getByText('Hiring Partners')).toBeVisible()
  17 |     await expect(page.getByText('Expert Mentors')).toBeVisible()
  18 |   })
  19 | 
  20 |   test('founder section shows Pankti Patel', async ({ page }) => {
  21 |     await expect(page.getByText('Pankti Patel')).toBeVisible()
  22 |     await expect(page.getByText('Founder & Lead Mentor')).toBeVisible()
  23 |   })
  24 | 
  25 |   test('WhatsApp Pankti button has correct href', async ({ page }) => {
  26 |     const btn = page.getByRole('link', { name: /whatsapp pankti/i })
  27 |     await expect(btn).toHaveAttribute('href', 'https://wa.me/918160049448')
  28 |   })
  29 | 
  30 |   test('YouTube link correct', async ({ page }) => {
  31 |     const yt = page.getByRole('link', { name: /youtube channel/i }).first()
  32 |     await expect(yt).toHaveAttribute('href', 'https://www.youtube.com/@TechRiseAcademy-w3k')
  33 |   })
  34 | 
  35 |   test('4 values visible', async ({ page }) => {
  36 |     await expect(page.getByText('Outcome First')).toBeVisible()
  37 |     await expect(page.getByText('Real Mentors')).toBeVisible()
  38 |     await expect(page.getByText('Hands-On Always')).toBeVisible()
  39 |     await expect(page.getByText('No Student Left Behind')).toBeVisible()
  40 |   })
  41 | 
  42 |   test('mentors section shows 6 mentor cards', async ({ page }) => {
  43 |     await page.getByText('Meet the Mentors').scrollIntoViewIfNeeded()
  44 |     const mentorCards = page.locator('section').filter({ hasText: 'Meet the Mentors' }).locator('.card-hover')
  45 |     await expect(mentorCards).toHaveCount(6)
  46 |   })
  47 | 
  48 |   test('timeline section visible with milestones', async ({ page }) => {
  49 |     await page.getByText('Our Journey').scrollIntoViewIfNeeded()
  50 |     await expect(page.getByText('Our Journey')).toBeVisible()
  51 |     await expect(page.getByText('2022')).toBeVisible()
  52 |     await expect(page.getByText('2025')).toBeVisible()
  53 |   })
  54 | 
  55 |   test('hiring partners section has correct anchor id', async ({ page }) => {
  56 |     const section = page.locator('#hiring-partners')
  57 |     await section.scrollIntoViewIfNeeded()
  58 |     await expect(section).toBeVisible()
  59 |     await expect(page.getByText('Our Hiring Partners')).toBeVisible()
  60 |   })
  61 | 
  62 |   test('hiring partners includes TCS and Infosys', async ({ page }) => {
  63 |     await page.locator('#hiring-partners').scrollIntoViewIfNeeded()
> 64 |     await expect(page.getByText('TCS')).toBeVisible()
     |                                         ^ Error: expect(locator).toBeVisible() failed
  65 |     await expect(page.getByText('Infosys')).toBeVisible()
  66 |     await expect(page.getByText('Accenture')).toBeVisible()
  67 |   })
  68 | })
  69 | 
```