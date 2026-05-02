# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: courses.spec.ts >> Courses page >> All Tracks filter restores all cards
- Location: tests\courses.spec.ts:67:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Cybersecurity')
Expected: visible
Error: strict mode violation: getByText('Cybersecurity') resolved to 3 elements:
    1) <button class="px-4 py-2 rounded-full text-sm font-medium transition-all">Cybersecurity</button> aka getByRole('button', { name: 'Cybersecurity' })
    2) <h2 class="font-heading font-bold text-navy text-lg mb-1">Cybersecurity</h2> aka getByRole('heading', { name: 'Cybersecurity' })
    3) <a href="/courses#cybersecurity" class="text-sm text-gray-400 hover:text-saffron transition-colors">🔒 Cybersecurity</a> aka getByRole('link', { name: '🔒 Cybersecurity' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Cybersecurity')

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
        - button "All Tracks" [active] [ref=e50] [cursor=pointer]
        - button "Web Dev" [ref=e51] [cursor=pointer]
        - button "AI & ML" [ref=e52] [cursor=pointer]
        - button "Data Science" [ref=e53] [cursor=pointer]
        - button "Cloud" [ref=e54] [cursor=pointer]
        - button "DevOps" [ref=e55] [cursor=pointer]
        - button "Cybersecurity" [ref=e56] [cursor=pointer]
        - button "Placement Prep" [ref=e57] [cursor=pointer]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: 💻
              - generic [ref=e66]:
                - generic [ref=e67]: 4 months
                - generic [ref=e68]: 12 modules
                - generic [ref=e69]: Beginner → Advanced
            - heading "Full-Stack Web Development" [level=2] [ref=e70]
            - paragraph [ref=e71]: Build modern web apps end-to-end
            - paragraph [ref=e72]: From HTML fundamentals to deploying full-stack applications on AWS. You will master React, Node.js, Express, MongoDB, REST APIs, and real-world deployment pipelines.
            - generic [ref=e73]:
              - generic [ref=e74]: HTML / CSS / JS
              - generic [ref=e75]: React.js
              - generic [ref=e76]: Node.js
              - generic [ref=e77]: Express
              - generic [ref=e78]: MongoDB
              - generic [ref=e79]: REST APIs
              - generic [ref=e80]: AWS Basics
              - generic [ref=e81]: Git & GitHub
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
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: 🤖
              - generic [ref=e100]:
                - generic [ref=e101]: 5 months
                - generic [ref=e102]: 14 modules
                - generic [ref=e103]: Intermediate
            - heading "AI & Machine Learning" [level=2] [ref=e104]
            - paragraph [ref=e105]: Build intelligent systems with Python
            - paragraph [ref=e106]: Cover the full ML stack — from EDA and classical algorithms to deep learning, NLP, and working with modern LLM APIs. Build 3+ capstone projects with real datasets.
            - generic [ref=e107]:
              - generic [ref=e108]: Python
              - generic [ref=e109]: Pandas / NumPy
              - generic [ref=e110]: Scikit-learn
              - generic [ref=e111]: TensorFlow / PyTorch
              - generic [ref=e112]: NLP
              - generic [ref=e113]: LLM APIs
              - generic [ref=e114]: OpenAI / Gemini
              - generic [ref=e115]: Model Deployment
            - generic [ref=e116]:
              - generic [ref=e117]: Choose Your Mode
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Video
                  - generic [ref=e121]: ₹8K
                - generic [ref=e122]:
                  - generic [ref=e123]: Group
                  - generic [ref=e124]: ₹18K
                - generic [ref=e125]:
                  - generic [ref=e126]: 1:1
                  - generic [ref=e127]: ₹38K
            - link "Enrol in This Track →" [ref=e128] [cursor=pointer]:
              - /url: /contact
          - generic [ref=e131]:
            - generic [ref=e132]:
              - generic [ref=e133]: 📊
              - generic [ref=e134]:
                - generic [ref=e135]: 4 months
                - generic [ref=e136]: 11 modules
                - generic [ref=e137]: Beginner → Intermediate
            - heading "Data Science & Analytics" [level=2] [ref=e138]
            - paragraph [ref=e139]: Turn data into decisions
            - paragraph [ref=e140]: Master data wrangling, statistical analysis, visualisation, and business intelligence. Work with SQL, Python, Excel, Power BI, and Tableau on real business datasets.
            - generic [ref=e141]:
              - generic [ref=e142]: SQL
              - generic [ref=e143]: Python
              - generic [ref=e144]: Power BI
              - generic [ref=e145]: Tableau
              - generic [ref=e146]: Excel
              - generic [ref=e147]: Statistics
              - generic [ref=e148]: EDA
              - generic [ref=e149]: Data Storytelling
            - generic [ref=e150]:
              - generic [ref=e151]: Choose Your Mode
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - generic [ref=e154]: Video
                  - generic [ref=e155]: ₹8K
                - generic [ref=e156]:
                  - generic [ref=e157]: Group
                  - generic [ref=e158]: ₹18K
                - generic [ref=e159]:
                  - generic [ref=e160]: 1:1
                  - generic [ref=e161]: ₹38K
            - link "Enrol in This Track →" [ref=e162] [cursor=pointer]:
              - /url: /contact
          - generic [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167]: ☁️
              - generic [ref=e168]:
                - generic [ref=e169]: 4 months
                - generic [ref=e170]: 10 modules
                - generic [ref=e171]: Intermediate
            - heading "Cloud Computing" [level=2] [ref=e172]
            - paragraph [ref=e173]: AWS, Azure, GCP — build for scale
            - paragraph [ref=e174]: Learn cloud infrastructure design, deployment, and cost optimisation across AWS, Azure, and GCP. Includes Docker, Kubernetes, and cloud security fundamentals.
            - generic [ref=e175]:
              - generic [ref=e176]: AWS
              - generic [ref=e177]: Azure
              - generic [ref=e178]: GCP
              - generic [ref=e179]: Docker
              - generic [ref=e180]: Kubernetes
              - generic [ref=e181]: Terraform
              - generic [ref=e182]: Cloud Security
              - generic [ref=e183]: Serverless
            - generic [ref=e184]:
              - generic [ref=e185]: Choose Your Mode
              - generic [ref=e186]:
                - generic [ref=e187]:
                  - generic [ref=e188]: Video
                  - generic [ref=e189]: ₹8K
                - generic [ref=e190]:
                  - generic [ref=e191]: Group
                  - generic [ref=e192]: ₹18K
                - generic [ref=e193]:
                  - generic [ref=e194]: 1:1
                  - generic [ref=e195]: ₹38K
            - link "Enrol in This Track →" [ref=e196] [cursor=pointer]:
              - /url: /contact
          - generic [ref=e199]:
            - generic [ref=e200]:
              - generic [ref=e201]: ⚙️
              - generic [ref=e202]:
                - generic [ref=e203]: 4 months
                - generic [ref=e204]: 10 modules
                - generic [ref=e205]: Intermediate
            - heading "DevOps & Automation" [level=2] [ref=e206]
            - paragraph [ref=e207]: Build, ship, monitor — continuously
            - paragraph [ref=e208]: "Master the DevOps lifecycle: version control, CI/CD pipelines, infrastructure as code, containerisation, and monitoring. Hands-on with real pipelines."
            - generic [ref=e209]:
              - generic [ref=e210]: Git / GitHub
              - generic [ref=e211]: Jenkins
              - generic [ref=e212]: Docker
              - generic [ref=e213]: Kubernetes
              - generic [ref=e214]: Ansible
              - generic [ref=e215]: Linux
              - generic [ref=e216]: Prometheus
              - generic [ref=e217]: Grafana
            - generic [ref=e218]:
              - generic [ref=e219]: Choose Your Mode
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]: Video
                  - generic [ref=e223]: ₹8K
                - generic [ref=e224]:
                  - generic [ref=e225]: Group
                  - generic [ref=e226]: ₹18K
                - generic [ref=e227]:
                  - generic [ref=e228]: 1:1
                  - generic [ref=e229]: ₹38K
            - link "Enrol in This Track →" [ref=e230] [cursor=pointer]:
              - /url: /contact
          - generic [ref=e233]:
            - generic [ref=e234]:
              - generic [ref=e235]: 🔒
              - generic [ref=e236]:
                - generic [ref=e237]: 4 months
                - generic [ref=e238]: 12 modules
                - generic [ref=e239]: Intermediate → Advanced
            - heading "Cybersecurity" [level=2] [ref=e240]
            - paragraph [ref=e241]: Defend. Detect. Respond.
            - paragraph [ref=e242]: Learn ethical hacking, VAPT, network security, web app pentesting, and SOC operations. Prepares for CEH and CompTIA Security+ certifications.
            - generic [ref=e243]:
              - generic [ref=e244]: Ethical Hacking
              - generic [ref=e245]: VAPT
              - generic [ref=e246]: Kali Linux
              - generic [ref=e247]: Wireshark
              - generic [ref=e248]: Metasploit
              - generic [ref=e249]: OWASP
              - generic [ref=e250]: SOC
              - generic [ref=e251]: Incident Response
            - generic [ref=e252]:
              - generic [ref=e253]: Choose Your Mode
              - generic [ref=e254]:
                - generic [ref=e255]:
                  - generic [ref=e256]: Video
                  - generic [ref=e257]: ₹8K
                - generic [ref=e258]:
                  - generic [ref=e259]: Group
                  - generic [ref=e260]: ₹18K
                - generic [ref=e261]:
                  - generic [ref=e262]: 1:1
                  - generic [ref=e263]: ₹38K
            - link "Enrol in This Track →" [ref=e264] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e265]:
          - generic [ref=e266]: ⭐ Most Popular Track
          - generic [ref=e268]:
            - generic [ref=e269]:
              - generic [ref=e270]:
                - generic [ref=e271]: 🎯
                - generic [ref=e272]:
                  - generic [ref=e273]:
                    - generic [ref=e274]: Most Popular
                    - generic [ref=e275]: On-Campus + Off-Campus
                  - heading "Placement Preparation Bootcamp" [level=2] [ref=e276]
              - paragraph [ref=e277]: For MCA · MSc IT · BCA · BE (CS/IT) students
              - paragraph [ref=e278]: A comprehensive bootcamp covering every aspect of on-campus and off-campus placements — DSA, system design, resume, mock interviews, aptitude, GD practice, and offer negotiation.
              - generic [ref=e279]:
                - generic [ref=e280]: DSA & Problem Solving
                - generic [ref=e281]: System Design
                - generic [ref=e282]: Resume & LinkedIn Optimisation
                - generic [ref=e283]: Mock Interviews
                - generic [ref=e284]: Aptitude & Reasoning
                - generic [ref=e285]: Group Discussion
                - generic [ref=e286]: On-Campus Strategy
                - generic [ref=e287]: Off-Campus Strategy
                - generic [ref=e288]: Offer Negotiation
                - generic [ref=e289]: Communication Skills
              - generic [ref=e290]:
                - generic [ref=e291]: Choose Your Mode
                - generic [ref=e292]:
                  - generic [ref=e293]:
                    - generic [ref=e294]: Video
                    - generic [ref=e295]: ₹8K
                  - generic [ref=e296]:
                    - generic [ref=e297]: Group
                    - generic [ref=e298]: ₹18K
                  - generic [ref=e299]:
                    - generic [ref=e300]: 1:1
                    - generic [ref=e301]: ₹38K
              - link "Join the Bootcamp →" [ref=e302] [cursor=pointer]:
                - /url: /contact
            - generic [ref=e303]:
              - generic [ref=e304]:
                - generic [ref=e305]: 500+
                - generic [ref=e306]: Mock Interviews Conducted
              - generic [ref=e307]:
                - generic [ref=e308]: 50+
                - generic [ref=e309]: Companies Covered
              - generic [ref=e310]:
                - generic [ref=e311]: 3 Months
                - generic [ref=e312]: Intensive Program
              - generic [ref=e313]:
                - generic [ref=e314]: 95%
                - generic [ref=e315]: Placement Success Rate
      - generic [ref=e317]:
        - heading "Frequently Asked Questions" [level=2] [ref=e318]
        - generic [ref=e319]:
          - button "Can I switch tracks after enrolling? +" [ref=e321] [cursor=pointer]:
            - text: Can I switch tracks after enrolling?
            - generic [ref=e322]: +
          - button "Do I need prior coding experience? +" [ref=e324] [cursor=pointer]:
            - text: Do I need prior coding experience?
            - generic [ref=e325]: +
          - button "Are the courses self-paced or live? +" [ref=e327] [cursor=pointer]:
            - text: Are the courses self-paced or live?
            - generic [ref=e328]: +
          - button "Will I get a certificate? +" [ref=e330] [cursor=pointer]:
            - text: Will I get a certificate?
            - generic [ref=e331]: +
          - button "Is EMI available? +" [ref=e333] [cursor=pointer]:
            - text: Is EMI available?
            - generic [ref=e334]: +
      - generic [ref=e336]:
        - heading "Not sure which track is right for you?" [level=2] [ref=e337]
        - paragraph [ref=e338]: Book a free 20-minute counselling call. We'll assess your background and recommend the best track and mode.
        - link "Book Free Counselling →" [ref=e339] [cursor=pointer]:
          - /url: /contact
  - contentinfo [ref=e340]:
    - generic [ref=e341]:
      - generic [ref=e342]:
        - generic [ref=e343]:
          - link "TechRise Academy" [ref=e345] [cursor=pointer]:
            - /url: /
            - img [ref=e346]
            - generic [ref=e357]:
              - text: TechRise
              - generic [ref=e358]: Academy
          - paragraph [ref=e359]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e360]:
            - link "📱 +91 81600 49448" [ref=e361] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e362]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e363] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e364]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e365] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e366]: ▶️
              - text: YouTube Channel
        - generic [ref=e367]:
          - heading "Our Courses" [level=4] [ref=e368]
          - list [ref=e369]:
            - listitem [ref=e370]:
              - link "💻 Full-Stack Web Dev" [ref=e371] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e372]:
              - link "🤖 AI & Machine Learning" [ref=e373] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e374]:
              - link "📊 Data Science & Analytics" [ref=e375] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e376]:
              - link "☁️ Cloud Computing" [ref=e377] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e378]:
              - link "⚙️ DevOps & Automation" [ref=e379] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e380]:
              - link "🔒 Cybersecurity" [ref=e381] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e382]:
              - link "🎯 Placement Prep Bootcamp" [ref=e383] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e384]:
          - heading "Quick Links" [level=4] [ref=e385]
          - list [ref=e386]:
            - listitem [ref=e387]:
              - link "Home" [ref=e388] [cursor=pointer]:
                - /url: /
            - listitem [ref=e389]:
              - link "All Courses" [ref=e390] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e391]:
              - link "Learning Modes" [ref=e392] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e393]:
              - link "About TechRise" [ref=e394] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e395]:
              - link "Hiring Partners" [ref=e396] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e397]:
              - link "Contact Us" [ref=e398] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e399]:
              - link "Enrol Now" [ref=e400] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e401]:
          - heading "Learning Modes" [level=4] [ref=e402]
          - list [ref=e403]:
            - listitem [ref=e404]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e405] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e406]:
              - link "👥 Group Batch — ₹18,000" [ref=e407] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e408]:
              - link "🎬 Video Library — ₹8,000" [ref=e409] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e410] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e411]:
        - paragraph [ref=e412]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e413]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e414] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e415]
  - generic [ref=e421] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e422]:
      - img [ref=e423]
    - generic [ref=e426]:
      - button "Open issues overlay" [ref=e427]:
        - generic [ref=e428]:
          - generic [ref=e429]: "0"
          - generic [ref=e430]: "1"
        - generic [ref=e431]: Issue
      - button "Collapse issues badge" [ref=e432]:
        - img [ref=e433]
  - alert [ref=e435]
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
  57 |     await expect(page.getByText('AI & Machine Learning')).toBeVisible()
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
> 71 |     await expect(page.getByText('Cybersecurity')).toBeVisible()
     |                                                   ^ Error: expect(locator).toBeVisible() failed
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