# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning-modes.spec.ts >> Learning Modes page >> comparison table visible with feature rows
- Location: tests\learning-modes.spec.ts:26:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Mock interviews')
Expected: visible
Error: strict mode violation: getByText('Mock interviews') resolved to 2 elements:
    1) <li class="flex items-start gap-2.5 text-sm text-gray-600">…</li> aka getByText('🎤Mock interviews with')
    2) <td class="px-6 py-3.5 text-gray-600 font-medium">Mock interviews</td> aka getByRole('cell', { name: 'Mock interviews' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Mock interviews')

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
        - heading "Choose Your Learning Mode" [level=1] [ref=e32]
        - paragraph [ref=e33]: Three modes, one goal — job-ready in the shortest time possible. Pick what fits your life.
      - generic [ref=e36]:
        - generic [ref=e39]:
          - generic [ref=e40]:
            - generic [ref=e41]: 🎓
            - generic [ref=e42]: Best Results
          - heading "1:1 Mentorship" [level=2] [ref=e43]
          - paragraph [ref=e44]: A dedicated industry expert, your pace, your goals.
          - paragraph [ref=e45]: The most intensive mode. You get paired with an industry mentor who has worked at top companies. Every session is customised to your pace, your gaps, and your career goals. Unlimited doubt sessions, resume reviews, and active placement referrals.
          - list [ref=e46]:
            - listitem [ref=e47]:
              - generic [ref=e48]: 👤
              - text: Dedicated industry mentor (5+ years exp.)
            - listitem [ref=e49]:
              - generic [ref=e50]: 🗓️
              - text: Flexible scheduling — weekdays or weekends
            - listitem [ref=e51]:
              - generic [ref=e52]: ♾️
              - text: Unlimited doubt sessions via chat & video
            - listitem [ref=e53]:
              - generic [ref=e54]: 📝
              - text: Custom learning roadmap built for you
            - listitem [ref=e55]:
              - generic [ref=e56]: 📄
              - text: 1:1 resume, LinkedIn & portfolio review
            - listitem [ref=e57]:
              - generic [ref=e58]: 🎤
              - text: Mock interviews with detailed feedback
            - listitem [ref=e59]:
              - generic [ref=e60]: 🤝
              - text: Placement referrals to mentor's network
            - listitem [ref=e61]:
              - generic [ref=e62]: 📜
              - text: Certificate of completion
          - generic [ref=e63]:
            - generic [ref=e64]: Ideal for
            - list [ref=e65]:
              - listitem [ref=e66]:
                - generic [ref=e67]: •
                - text: Working professionals
              - listitem [ref=e68]:
                - generic [ref=e69]: •
                - text: Career switchers
              - listitem [ref=e70]:
                - generic [ref=e71]: •
                - text: Students who need personalised attention
              - listitem [ref=e72]:
                - generic [ref=e73]: •
                - text: Those with specific timelines (interviews in 2–3 months)
          - generic [ref=e74]:
            - generic [ref=e75]:
              - generic [ref=e76]: per course
              - generic [ref=e77]: ₹38,000
            - link "Enrol →" [ref=e78] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]: 👥
            - generic [ref=e84]: Most Popular
          - heading "Group Batch" [level=2] [ref=e85]
          - paragraph [ref=e86]: Live sessions, peer energy, and expert guidance.
          - paragraph [ref=e87]: Our most popular mode. Small batches of 10–15 students so the instructor knows every student by name. Three live sessions per week with recordings available. Peer collaboration on projects, weekly doubt-clearing sessions, and mock placement drives.
          - list [ref=e88]:
            - listitem [ref=e89]:
              - generic [ref=e90]: 📡
              - text: Live sessions 3×/week (recorded)
            - listitem [ref=e91]:
              - generic [ref=e92]: 👥
              - text: Small batch — 10 to 15 students
            - listitem [ref=e93]:
              - generic [ref=e94]: 🤝
              - text: Peer project collaboration
            - listitem [ref=e95]:
              - generic [ref=e96]: ❓
              - text: Weekly doubt Q&A with instructor
            - listitem [ref=e97]:
              - generic [ref=e98]: 🏆
              - text: Placement mock drives for the batch
            - listitem [ref=e99]:
              - generic [ref=e100]: 💬
              - text: Private batch WhatsApp community
            - listitem [ref=e101]:
              - generic [ref=e102]: 📄
              - text: Group resume workshop
            - listitem [ref=e103]:
              - generic [ref=e104]: 📜
              - text: Certificate of completion
          - generic [ref=e105]:
            - generic [ref=e106]: Ideal for
            - list [ref=e107]:
              - listitem [ref=e108]:
                - generic [ref=e109]: •
                - text: Recent graduates
              - listitem [ref=e110]:
                - generic [ref=e111]: •
                - text: Students who prefer structure
              - listitem [ref=e112]:
                - generic [ref=e113]: •
                - text: Those who want peer motivation
              - listitem [ref=e114]:
                - generic [ref=e115]: •
                - text: Budget-conscious learners who want live guidance
          - generic [ref=e116]:
            - generic [ref=e117]:
              - generic [ref=e118]: per course
              - generic [ref=e119]: ₹18,000
            - link "Enrol →" [ref=e120] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e123]:
          - generic [ref=e124]:
            - generic [ref=e125]: 🎬
            - generic [ref=e126]: Best Value
          - heading "Video Library" [level=2] [ref=e127]
          - paragraph [ref=e128]: Self-paced. Lifetime access. Learn on your schedule.
          - paragraph [ref=e129]: Pre-recorded, structured video content with lifetime access. Perfect for those who prefer learning at their own pace — at night, on weekends, or between commitments. Includes all resources, downloadable notes, and community forum access.
          - list [ref=e130]:
            - listitem [ref=e131]:
              - generic [ref=e132]: ♾️
              - text: Lifetime access to all videos
            - listitem [ref=e133]:
              - generic [ref=e134]: 🗂️
              - text: Structured module-by-module path
            - listitem [ref=e135]:
              - generic [ref=e136]: 📥
              - text: Downloadable notes & resources
            - listitem [ref=e137]:
              - generic [ref=e138]: 💬
              - text: Community forum access
            - listitem [ref=e139]:
              - generic [ref=e140]: 🔄
              - text: Course updates included free
            - listitem [ref=e141]:
              - generic [ref=e142]: 📜
              - text: Certificate on project submission
            - listitem [ref=e143]:
              - generic [ref=e144]: ⏱️
              - text: No schedule — learn anytime
            - listitem [ref=e145]:
              - generic [ref=e146]: 📱
              - text: Mobile-friendly player
          - generic [ref=e147]:
            - generic [ref=e148]: Ideal for
            - list [ref=e149]:
              - listitem [ref=e150]:
                - generic [ref=e151]: •
                - text: Working professionals with limited time
              - listitem [ref=e152]:
                - generic [ref=e153]: •
                - text: Self-motivated learners
              - listitem [ref=e154]:
                - generic [ref=e155]: •
                - text: Those with tight budgets
              - listitem [ref=e156]:
                - generic [ref=e157]: •
                - text: Students supplementing college coursework
          - generic [ref=e158]:
            - generic [ref=e159]:
              - generic [ref=e160]: per course
              - generic [ref=e161]: ₹8,000
            - link "Enrol →" [ref=e162] [cursor=pointer]:
              - /url: /contact
      - generic [ref=e164]:
        - heading "Compare Modes Side-by-Side" [level=2] [ref=e165]
        - table [ref=e167]:
          - rowgroup [ref=e168]:
            - row "Feature 🎓 1:1 Mentorship 👥 Group Batch 🎬 Video Library" [ref=e169]:
              - columnheader "Feature" [ref=e170]
              - columnheader "🎓 1:1 Mentorship" [ref=e171]:
                - generic [ref=e172]: 🎓
                - text: 1:1 Mentorship
              - columnheader "👥 Group Batch" [ref=e173]:
                - generic [ref=e174]: 👥
                - text: Group Batch
              - columnheader "🎬 Video Library" [ref=e175]:
                - generic [ref=e176]: 🎬
                - text: Video Library
          - rowgroup [ref=e177]:
            - row "Price per course ₹38,000 ₹18,000 ₹8,000" [ref=e178]:
              - cell "Price per course" [ref=e179]
              - cell "₹38,000" [ref=e180]
              - cell "₹18,000" [ref=e181]
              - cell "₹8,000" [ref=e182]
            - row "Live sessions ✓ Custom schedule ✓ 3×/week ✗ Recorded only" [ref=e183]:
              - cell "Live sessions" [ref=e184]
              - cell "✓ Custom schedule" [ref=e185]
              - cell "✓ 3×/week" [ref=e186]
              - cell "✗ Recorded only" [ref=e187]
            - row "Recordings ✓ ✓ ✓ Lifetime access" [ref=e188]:
              - cell "Recordings" [ref=e189]
              - cell "✓" [ref=e190]
              - cell "✓" [ref=e191]
              - cell "✓ Lifetime access" [ref=e192]
            - row "Mentor access ✓ Dedicated 1:1 ✓ Shared (batch) ✗ Forum only" [ref=e193]:
              - cell "Mentor access" [ref=e194]
              - cell "✓ Dedicated 1:1" [ref=e195]
              - cell "✓ Shared (batch)" [ref=e196]
              - cell "✗ Forum only" [ref=e197]
            - row "Doubt resolution ✓ Unlimited, instant ✓ Weekly Q&A ✗ Forum only" [ref=e198]:
              - cell "Doubt resolution" [ref=e199]
              - cell "✓ Unlimited, instant" [ref=e200]
              - cell "✓ Weekly Q&A" [ref=e201]
              - cell "✗ Forum only" [ref=e202]
            - row "Mock interviews ✓ Personalised ✓ Batch drives ✗" [ref=e203]:
              - cell "Mock interviews" [ref=e204]
              - cell "✓ Personalised" [ref=e205]
              - cell "✓ Batch drives" [ref=e206]
              - cell "✗" [ref=e207]
            - row "Resume review ✓ 1:1 ✓ Group workshop ✗" [ref=e208]:
              - cell "Resume review" [ref=e209]
              - cell "✓ 1:1" [ref=e210]
              - cell "✓ Group workshop" [ref=e211]
              - cell "✗" [ref=e212]
            - row "Placement referrals ✓ ✓ (batch) ✗" [ref=e213]:
              - cell "Placement referrals" [ref=e214]
              - cell "✓" [ref=e215]
              - cell "✓ (batch)" [ref=e216]
              - cell "✗" [ref=e217]
            - row "Certificate ✓ ✓ ✓" [ref=e218]:
              - cell "Certificate" [ref=e219]
              - cell "✓" [ref=e220]
              - cell "✓" [ref=e221]
              - cell "✓" [ref=e222]
            - row "EMI available ✓ ✓ ✗" [ref=e223]:
              - cell "EMI available" [ref=e224]
              - cell "✓" [ref=e225]
              - cell "✓" [ref=e226]
              - cell "✗" [ref=e227]
      - generic [ref=e229]:
        - heading "Not Sure Which Mode to Pick?" [level=2] [ref=e230]
        - paragraph [ref=e231]: Answer 3 quick questions.
        - generic [ref=e232]:
          - generic [ref=e233]:
            - paragraph [ref=e234]: 1. How much time can you dedicate per week?
            - generic [ref=e235]:
              - button "< 5 hours (very busy)" [ref=e236] [cursor=pointer]
              - button "5–10 hours" [ref=e237] [cursor=pointer]
              - button "10+ hours (focused)" [ref=e238] [cursor=pointer]
          - generic [ref=e239]:
            - paragraph [ref=e240]: 2. What best describes your learning style?
            - generic [ref=e241]:
              - button "I learn best alone, at my own pace" [ref=e242] [cursor=pointer]
              - button "I love learning in groups" [ref=e243] [cursor=pointer]
              - button "I need direct, personal guidance" [ref=e244] [cursor=pointer]
          - generic [ref=e245]:
            - paragraph [ref=e246]: 3. What is your placement timeline?
            - generic [ref=e247]:
              - button "I have 6+ months" [ref=e248] [cursor=pointer]
              - button "3–6 months" [ref=e249] [cursor=pointer]
              - button "Under 3 months — urgent" [ref=e250] [cursor=pointer]
          - button "Show My Recommendation →" [disabled] [ref=e251]
      - generic [ref=e253]:
        - heading "FAQs About Learning Modes" [level=2] [ref=e254]
        - generic [ref=e255]:
          - button "Can I switch modes after starting? +" [ref=e257] [cursor=pointer]:
            - text: Can I switch modes after starting?
            - generic [ref=e258]: +
          - button "What if I miss a live session in Group Batch? +" [ref=e260] [cursor=pointer]:
            - text: What if I miss a live session in Group Batch?
            - generic [ref=e261]: +
          - button "How are 1:1 sessions scheduled? +" [ref=e263] [cursor=pointer]:
            - text: How are 1:1 sessions scheduled?
            - generic [ref=e264]: +
          - button "Is EMI available? +" [ref=e266] [cursor=pointer]:
            - text: Is EMI available?
            - generic [ref=e267]: +
          - button "Do all modes include the certificate? +" [ref=e269] [cursor=pointer]:
            - text: Do all modes include the certificate?
            - generic [ref=e270]: +
      - generic [ref=e272]:
        - heading "Ready to enrol?" [level=2] [ref=e273]
        - paragraph [ref=e274]: Pick a track, pick a mode, and get started. Free counselling available.
        - generic [ref=e275]:
          - link "Browse All Courses →" [ref=e276] [cursor=pointer]:
            - /url: /courses
          - link "Free Counselling" [ref=e277] [cursor=pointer]:
            - /url: /contact
  - contentinfo [ref=e278]:
    - generic [ref=e279]:
      - generic [ref=e280]:
        - generic [ref=e281]:
          - link "TechRise Academy" [ref=e283] [cursor=pointer]:
            - /url: /
            - img [ref=e284]
            - generic [ref=e295]:
              - text: TechRise
              - generic [ref=e296]: Academy
          - paragraph [ref=e297]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e298]:
            - link "📱 +91 81600 49448" [ref=e299] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e300]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e301] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e302]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e303] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e304]: ▶️
              - text: YouTube Channel
        - generic [ref=e305]:
          - heading "Our Courses" [level=4] [ref=e306]
          - list [ref=e307]:
            - listitem [ref=e308]:
              - link "💻 Full-Stack Web Dev" [ref=e309] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e310]:
              - link "🤖 AI & Machine Learning" [ref=e311] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e312]:
              - link "📊 Data Science & Analytics" [ref=e313] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e314]:
              - link "☁️ Cloud Computing" [ref=e315] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e316]:
              - link "⚙️ DevOps & Automation" [ref=e317] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e318]:
              - link "🔒 Cybersecurity" [ref=e319] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e320]:
              - link "🎯 Placement Prep Bootcamp" [ref=e321] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e322]:
          - heading "Quick Links" [level=4] [ref=e323]
          - list [ref=e324]:
            - listitem [ref=e325]:
              - link "Home" [ref=e326] [cursor=pointer]:
                - /url: /
            - listitem [ref=e327]:
              - link "All Courses" [ref=e328] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e329]:
              - link "Learning Modes" [ref=e330] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e331]:
              - link "About TechRise" [ref=e332] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e333]:
              - link "Hiring Partners" [ref=e334] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e335]:
              - link "Contact Us" [ref=e336] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e337]:
              - link "Enrol Now" [ref=e338] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e339]:
          - heading "Learning Modes" [level=4] [ref=e340]
          - list [ref=e341]:
            - listitem [ref=e342]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e343] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e344]:
              - link "👥 Group Batch — ₹18,000" [ref=e345] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e346]:
              - link "🎬 Video Library — ₹8,000" [ref=e347] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e348] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e349]:
        - paragraph [ref=e350]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e351]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e352] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e353]
  - alert [ref=e355]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Learning Modes page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/learning-modes')
  6  |   })
  7  | 
  8  |   test('all 3 mode cards visible', async ({ page }) => {
  9  |     await expect(page.getByText('1:1 Mentorship').first()).toBeVisible()
  10 |     await expect(page.getByText('Group Batch').first()).toBeVisible()
  11 |     await expect(page.getByText('Video Library').first()).toBeVisible()
  12 |   })
  13 | 
  14 |   test('correct prices shown', async ({ page }) => {
  15 |     await expect(page.getByText('₹38,000').first()).toBeVisible()
  16 |     await expect(page.getByText('₹18,000').first()).toBeVisible()
  17 |     await expect(page.getByText('₹8,000').first()).toBeVisible()
  18 |   })
  19 | 
  20 |   test('badges shown: Best Results, Most Popular, Best Value', async ({ page }) => {
  21 |     await expect(page.getByText('Best Results')).toBeVisible()
  22 |     await expect(page.getByText('Most Popular')).toBeVisible()
  23 |     await expect(page.getByText('Best Value')).toBeVisible()
  24 |   })
  25 | 
  26 |   test('comparison table visible with feature rows', async ({ page }) => {
  27 |     const table = page.locator('table')
  28 |     await table.scrollIntoViewIfNeeded()
  29 |     await expect(table).toBeVisible()
> 30 |     await expect(page.getByText('Mock interviews')).toBeVisible()
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  31 |     await expect(page.getByText('EMI available')).toBeVisible()
  32 |   })
  33 | 
  34 |   test('quiz section visible', async ({ page }) => {
  35 |     const quiz = page.locator('#quiz')
  36 |     await quiz.scrollIntoViewIfNeeded()
  37 |     await expect(page.getByText('Not Sure Which Mode to Pick?')).toBeVisible()
  38 |     await expect(page.getByText('How much time can you dedicate per week?')).toBeVisible()
  39 |   })
  40 | 
  41 |   test('quiz recommendation button disabled until all answered', async ({ page }) => {
  42 |     await page.locator('#quiz').scrollIntoViewIfNeeded()
  43 |     const submitBtn = page.getByRole('button', { name: /show my recommendation/i })
  44 |     await expect(submitBtn).toBeDisabled()
  45 |   })
  46 | 
  47 |   test('quiz shows result after all 3 answered', async ({ page }) => {
  48 |     await page.locator('#quiz').scrollIntoViewIfNeeded()
  49 |     // Answer all 3 questions — pick first option each time
  50 |     const options = page.locator('#quiz button').filter({ hasText: /< 5 hours|learn best alone|6\+ months/ })
  51 |     for (let i = 0; i < 3; i++) {
  52 |       await page.locator('#quiz .space-y-6 > div').nth(i).locator('button').first().click()
  53 |     }
  54 |     await page.getByRole('button', { name: /show my recommendation/i }).click()
  55 |     await expect(page.getByText(/we recommend:/i)).toBeVisible()
  56 |   })
  57 | 
  58 |   test('FAQ accordion works', async ({ page }) => {
  59 |     const faq = page.getByRole('button', { name: /can i switch modes/i })
  60 |     await faq.scrollIntoViewIfNeeded()
  61 |     await faq.click()
  62 |     await expect(page.getByText(/first 7 days/)).toBeVisible()
  63 |   })
  64 | 
  65 |   test('Enrol buttons link to /contact', async ({ page }) => {
  66 |     const enrolLinks = page.getByRole('link', { name: /enrol/i })
  67 |     await expect(enrolLinks.first()).toHaveAttribute('href', '/contact')
  68 |   })
  69 | })
  70 | 
```