# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Homepage >> 3 Learning Modes section visible
- Location: tests\homepage.spec.ts:48:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('1:1 Mentorship')
Expected: visible
Error: strict mode violation: getByText('1:1 Mentorship') resolved to 4 elements:
    1) <h3 class="font-heading font-bold text-navy text-xl mb-1">1:1 Mentorship</h3> aka getByRole('heading', { name: ':1 Mentorship' })
    2) <div class="text-xs mt-0.5">Data Science · 1:1 Mentorship</div> aka getByText('Data Science · 1:1 Mentorship')
    3) <div class="text-xs mt-0.5">AI & ML · 1:1 Mentorship</div> aka getByText('AI & ML · 1:1 Mentorship')
    4) <a href="/learning-modes#one-on-one" class="text-sm text-gray-400 hover:text-white transition-colors">🎓 1:1 Mentorship — ₹38,000</a> aka getByRole('link', { name: '🎓 1:1 Mentorship — ₹' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('1:1 Mentorship')

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
    - generic [ref=e31]:
      - generic [ref=e32]:
        - generic [ref=e33]: 🚀 Industry-Ready Tech Education
        - heading "Learn Today. Place Tomorrow." [level=1] [ref=e34]
        - paragraph [ref=e35]: Master in-demand tech skills with expert mentors. 7 flagship tracks, 3 flexible learning modes, and real placement support — from first lesson to first paycheck.
        - generic [ref=e36]:
          - link "Explore Courses →" [ref=e37] [cursor=pointer]:
            - /url: /courses
          - link "Free Counselling" [ref=e38] [cursor=pointer]:
            - /url: /contact
        - generic [ref=e39]:
          - generic [ref=e40]:
            - generic [ref=e41]: 0+
            - generic [ref=e42]: Students Trained
          - generic [ref=e43]:
            - generic [ref=e44]: 0%
            - generic [ref=e45]: Placement Rate
          - generic [ref=e46]:
            - generic [ref=e47]: "0"
            - generic [ref=e48]: Tech Tracks
          - generic [ref=e49]:
            - generic [ref=e50]: 0+
            - generic [ref=e51]: Hiring Partners
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]: 💻
          - generic [ref=e55]: Full-Stack Dev
          - generic [ref=e56]: 4 months · ₹18K+
        - generic [ref=e57]:
          - generic [ref=e58]: 🤖
          - generic [ref=e59]: AI & ML
          - generic [ref=e60]: 5 months · ₹18K+
        - generic [ref=e61]:
          - generic [ref=e62]: 📊
          - generic [ref=e63]: Data Science
          - generic [ref=e64]: 4 months · ₹18K+
        - generic [ref=e65]:
          - generic [ref=e66]: ⭐ Popular
          - generic [ref=e67]: 🎯
          - generic [ref=e68]: Placement Prep
          - generic [ref=e69]: 3 months · ₹18K+
        - generic [ref=e70]:
          - generic [ref=e71]: ☁️
          - generic [ref=e72]: Cloud & DevOps
          - generic [ref=e73]: 4 months · ₹18K+
        - generic [ref=e74]:
          - generic [ref=e75]: 🔒
          - generic [ref=e76]: Cybersecurity
          - generic [ref=e77]: 4 months · ₹18K+
    - generic [ref=e79]:
      - generic [ref=e80]:
        - heading "7 Flagship Technology Tracks" [level=2] [ref=e81]
        - paragraph [ref=e82]: Each track is designed with industry mentors to give you job-ready skills, hands-on projects, and real placement support.
      - generic [ref=e83]:
        - generic [ref=e86]:
          - generic [ref=e87]:
            - generic [ref=e88]: 💻
            - generic [ref=e89]:
              - generic [ref=e90]: 4 months
              - generic [ref=e91]: 12 modules
          - heading "Full-Stack Web Development" [level=3] [ref=e92]
          - paragraph [ref=e93]: React · Node.js · MongoDB · AWS
          - generic [ref=e94]:
            - generic [ref=e95]: HTML/CSS/JS
            - generic [ref=e96]: React.js
            - generic [ref=e97]: Node.js
            - generic [ref=e98]: Express
            - generic [ref=e99]: MongoDB
            - generic [ref=e100]: REST APIs
          - generic [ref=e101]:
            - generic [ref=e102]:
              - text: Starting from
              - generic [ref=e103]: ₹8,000
            - link "View Track →" [ref=e104] [cursor=pointer]:
              - /url: /courses#web-dev
        - generic [ref=e107]:
          - generic [ref=e108]:
            - generic [ref=e109]: 🤖
            - generic [ref=e110]:
              - generic [ref=e111]: 5 months
              - generic [ref=e112]: 14 modules
          - heading "AI & Machine Learning" [level=3] [ref=e113]
          - paragraph [ref=e114]: Python · TensorFlow · NLP · LLMs
          - generic [ref=e115]:
            - generic [ref=e116]: Python
            - generic [ref=e117]: Pandas
            - generic [ref=e118]: TensorFlow
            - generic [ref=e119]: Scikit-learn
            - generic [ref=e120]: NLP
            - generic [ref=e121]: LLM APIs
          - generic [ref=e122]:
            - generic [ref=e123]:
              - text: Starting from
              - generic [ref=e124]: ₹8,000
            - link "View Track →" [ref=e125] [cursor=pointer]:
              - /url: /courses#ai-ml
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: 📊
            - generic [ref=e131]:
              - generic [ref=e132]: 4 months
              - generic [ref=e133]: 11 modules
          - heading "Data Science & Analytics" [level=3] [ref=e134]
          - paragraph [ref=e135]: SQL · Python · Power BI · Statistics
          - generic [ref=e136]:
            - generic [ref=e137]: SQL
            - generic [ref=e138]: Python
            - generic [ref=e139]: Power BI
            - generic [ref=e140]: Tableau
            - generic [ref=e141]: Excel
            - generic [ref=e142]: Statistics
          - generic [ref=e143]:
            - generic [ref=e144]:
              - text: Starting from
              - generic [ref=e145]: ₹8,000
            - link "View Track →" [ref=e146] [cursor=pointer]:
              - /url: /courses#data-science
        - generic [ref=e149]:
          - generic [ref=e150]:
            - generic [ref=e151]: ☁️
            - generic [ref=e152]:
              - generic [ref=e153]: 4 months
              - generic [ref=e154]: 10 modules
          - heading "Cloud Computing" [level=3] [ref=e155]
          - paragraph [ref=e156]: AWS · Azure · GCP · Docker
          - generic [ref=e157]:
            - generic [ref=e158]: AWS
            - generic [ref=e159]: Azure
            - generic [ref=e160]: Docker
            - generic [ref=e161]: Kubernetes
            - generic [ref=e162]: Terraform
            - generic [ref=e163]: Cloud Security
          - generic [ref=e164]:
            - generic [ref=e165]:
              - text: Starting from
              - generic [ref=e166]: ₹8,000
            - link "View Track →" [ref=e167] [cursor=pointer]:
              - /url: /courses#cloud
        - generic [ref=e170]:
          - generic [ref=e171]:
            - generic [ref=e172]: ⚙️
            - generic [ref=e173]:
              - generic [ref=e174]: 4 months
              - generic [ref=e175]: 10 modules
          - heading "DevOps & Automation" [level=3] [ref=e176]
          - paragraph [ref=e177]: CI/CD · Jenkins · Ansible · Kubernetes
          - generic [ref=e178]:
            - generic [ref=e179]: Git
            - generic [ref=e180]: Jenkins
            - generic [ref=e181]: Docker
            - generic [ref=e182]: Kubernetes
            - generic [ref=e183]: Ansible
            - generic [ref=e184]: Linux
          - generic [ref=e185]:
            - generic [ref=e186]:
              - text: Starting from
              - generic [ref=e187]: ₹8,000
            - link "View Track →" [ref=e188] [cursor=pointer]:
              - /url: /courses#devops
        - generic [ref=e191]:
          - generic [ref=e192]:
            - generic [ref=e193]: 🔒
            - generic [ref=e194]:
              - generic [ref=e195]: 4 months
              - generic [ref=e196]: 12 modules
          - heading "Cybersecurity" [level=3] [ref=e197]
          - paragraph [ref=e198]: Ethical Hacking · VAPT · SOC · CEH
          - generic [ref=e199]:
            - generic [ref=e200]: Ethical Hacking
            - generic [ref=e201]: VAPT
            - generic [ref=e202]: Wireshark
            - generic [ref=e203]: Kali Linux
            - generic [ref=e204]: SOC
            - generic [ref=e205]: OWASP
          - generic [ref=e206]:
            - generic [ref=e207]:
              - text: Starting from
              - generic [ref=e208]: ₹8,000
            - link "View Track →" [ref=e209] [cursor=pointer]:
              - /url: /courses#cybersecurity
      - generic [ref=e210]:
        - generic [ref=e211]: ⭐ Most Popular Track
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - generic [ref=e216]: 🎯
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - generic [ref=e219]: Most Popular
                  - generic [ref=e220]: On-Campus + Off-Campus
                - heading "Placement Preparation Bootcamp" [level=3] [ref=e221]
            - paragraph [ref=e222]: For MCA · MSc IT · BCA · BE(CS/IT) students
            - generic [ref=e223]:
              - generic [ref=e224]: DSA & Problem Solving
              - generic [ref=e225]: System Design
              - generic [ref=e226]: Resume & LinkedIn
              - generic [ref=e227]: Mock Interviews
              - generic [ref=e228]: Aptitude & Reasoning
              - generic [ref=e229]: Group Discussions
              - generic [ref=e230]: On-Campus & Off-Campus Strategy
              - generic [ref=e231]: Offer Negotiation
            - generic [ref=e232]:
              - generic [ref=e233]:
                - text: Starting from
                - generic [ref=e234]: ₹8,000
              - link "View Bootcamp →" [ref=e235] [cursor=pointer]:
                - /url: /courses#placement-prep
          - generic [ref=e236]:
            - generic [ref=e237]:
              - generic [ref=e238]: 500+
              - generic [ref=e239]: Mock Interviews
            - generic [ref=e240]:
              - generic [ref=e241]: 50+
              - generic [ref=e242]: Companies Covered
            - generic [ref=e243]:
              - generic [ref=e244]: 3 Months
              - generic [ref=e245]: Intensive Program
            - generic [ref=e246]:
              - generic [ref=e247]: 95%
              - generic [ref=e248]: Success Rate
    - generic [ref=e250]:
      - generic [ref=e251]:
        - heading "3 Learning Modes, Your Choice" [level=2] [ref=e252]
        - paragraph [ref=e253]: Pick the mode that fits your schedule, budget, and learning style. Switch any time.
      - generic [ref=e254]:
        - generic [ref=e257]:
          - generic [ref=e258]:
            - generic [ref=e259]: 🎓
            - generic [ref=e260]: Best Results
          - heading "1:1 Mentorship" [level=3] [ref=e261]
          - paragraph [ref=e262]: Dedicated expert, your pace
          - list [ref=e263]:
            - listitem [ref=e264]:
              - generic [ref=e265]: ✓
              - text: Dedicated industry mentor
            - listitem [ref=e266]:
              - generic [ref=e267]: ✓
              - text: Custom learning roadmap
            - listitem [ref=e268]:
              - generic [ref=e269]: ✓
              - text: Unlimited doubt sessions
            - listitem [ref=e270]:
              - generic [ref=e271]: ✓
              - text: Resume & LinkedIn review
            - listitem [ref=e272]:
              - generic [ref=e273]: ✓
              - text: Mock interviews with feedback
            - listitem [ref=e274]:
              - generic [ref=e275]: ✓
              - text: Placement referrals
          - generic [ref=e276]:
            - generic [ref=e277]:
              - generic [ref=e278]: Per course
              - generic [ref=e279]: ₹38,000
            - link "Learn More" [ref=e280] [cursor=pointer]:
              - /url: /learning-modes#one-on-one
        - generic [ref=e283]:
          - generic [ref=e284]:
            - generic [ref=e285]: 👥
            - generic [ref=e286]: Most Popular
          - heading "Group Batch" [level=3] [ref=e287]
          - paragraph [ref=e288]: Learn with peers, grow together
          - list [ref=e289]:
            - listitem [ref=e290]:
              - generic [ref=e291]: ✓
              - text: Live sessions (3×/week)
            - listitem [ref=e292]:
              - generic [ref=e293]: ✓
              - text: Batch of 10–15 students
            - listitem [ref=e294]:
              - generic [ref=e295]: ✓
              - text: Peer project collaboration
            - listitem [ref=e296]:
              - generic [ref=e297]: ✓
              - text: Weekly doubt Q&A
            - listitem [ref=e298]:
              - generic [ref=e299]: ✓
              - text: Placement mock drives
            - listitem [ref=e300]:
              - generic [ref=e301]: ✓
              - text: Community access
          - generic [ref=e302]:
            - generic [ref=e303]:
              - generic [ref=e304]: Per course
              - generic [ref=e305]: ₹18,000
            - link "Learn More" [ref=e306] [cursor=pointer]:
              - /url: /learning-modes#group
        - generic [ref=e309]:
          - generic [ref=e310]:
            - generic [ref=e311]: 🎬
            - generic [ref=e312]: Best Value
          - heading "Video Library" [level=3] [ref=e313]
          - paragraph [ref=e314]: Learn anytime, at your pace
          - list [ref=e315]:
            - listitem [ref=e316]:
              - generic [ref=e317]: ✓
              - text: Lifetime access to recordings
            - listitem [ref=e318]:
              - generic [ref=e319]: ✓
              - text: Structured module-by-module path
            - listitem [ref=e320]:
              - generic [ref=e321]: ✓
              - text: Downloadable resources
            - listitem [ref=e322]:
              - generic [ref=e323]: ✓
              - text: Community forum access
            - listitem [ref=e324]:
              - generic [ref=e325]: ✓
              - text: Certificate on completion
            - listitem [ref=e326]:
              - generic [ref=e327]: ✓
              - text: Course updates included
          - generic [ref=e328]:
            - generic [ref=e329]:
              - generic [ref=e330]: Per course
              - generic [ref=e331]: ₹8,000
            - link "Learn More" [ref=e332] [cursor=pointer]:
              - /url: /learning-modes#video
      - link "Compare All Modes in Detail →" [ref=e334] [cursor=pointer]:
        - /url: /learning-modes
    - generic [ref=e336]:
      - generic [ref=e337]:
        - heading "What Our Students Say" [level=2] [ref=e338]
        - paragraph [ref=e339]: Real outcomes. Real people. No stock photos.
      - generic [ref=e340]:
        - generic [ref=e341]:
          - generic [ref=e342]:
            - generic [ref=e343]: ★
            - generic [ref=e344]: ★
            - generic [ref=e345]: ★
            - generic [ref=e346]: ★
            - generic [ref=e347]: ★
          - paragraph [ref=e348]: “TechRise completely changed my career trajectory. The projects were real-world and the mentors gave honest feedback — not just encouragement. Placed in 2 months after completing the track.”
          - generic [ref=e349]:
            - generic [ref=e350]: RM
            - generic [ref=e351]:
              - generic [ref=e352]: Rohan Mehta
              - generic [ref=e353]: Software Engineer, Infosys
              - generic [ref=e354]: Full-Stack Web Dev · Group Batch
        - generic [ref=e355]:
          - generic [ref=e356]:
            - generic [ref=e357]: ★
            - generic [ref=e358]: ★
            - generic [ref=e359]: ★
            - generic [ref=e360]: ★
            - generic [ref=e361]: ★
          - paragraph [ref=e362]: “I had zero coding background. My mentor built a custom roadmap and was available whenever I got stuck. The placement mock drives were incredibly realistic — I felt ready on interview day.”
          - generic [ref=e363]:
            - generic [ref=e364]: PS
            - generic [ref=e365]:
              - generic [ref=e366]: Priya Shah
              - generic [ref=e367]: Data Analyst, TCS
              - generic [ref=e368]: Data Science · 1:1 Mentorship
        - generic [ref=e369]:
          - generic [ref=e370]:
            - generic [ref=e371]: ★
            - generic [ref=e372]: ★
            - generic [ref=e373]: ★
            - generic [ref=e374]: ★
            - generic [ref=e375]: ★
          - paragraph [ref=e376]: “The AWS labs and hands-on projects are what set TechRise apart. By module 4, I was deploying real infrastructure. Got my first cloud role within 6 weeks of finishing.”
          - generic [ref=e377]:
            - generic [ref=e378]: KP
            - generic [ref=e379]:
              - generic [ref=e380]: Karan Patel
              - generic [ref=e381]: Cloud Engineer, Wipro
              - generic [ref=e382]: Cloud Computing · Group Batch
        - generic [ref=e383]:
          - generic [ref=e384]:
            - generic [ref=e385]: ★
            - generic [ref=e386]: ★
            - generic [ref=e387]: ★
            - generic [ref=e388]: ★
            - generic [ref=e389]: ★
          - paragraph [ref=e390]: “Pankti ma'am's guidance on LLM APIs and fine-tuning was exceptional. The 1:1 sessions meant I could ask every question without hesitation. Best investment I've made in my career.”
          - generic [ref=e391]:
            - generic [ref=e392]: SJ
            - generic [ref=e393]:
              - generic [ref=e394]: Sneha Joshi
              - generic [ref=e395]: ML Engineer, Startup
              - generic [ref=e396]: AI & ML · 1:1 Mentorship
        - generic [ref=e397]:
          - generic [ref=e398]:
            - generic [ref=e399]: ★
            - generic [ref=e400]: ★
            - generic [ref=e401]: ★
            - generic [ref=e402]: ★
            - generic [ref=e403]: ★
          - paragraph [ref=e404]: “5 on-campus drives attended, 3 offers in hand. The mock interviews were brutal (in a good way). DSA sessions and GD practice sessions made all the difference.”
          - generic [ref=e405]:
            - generic [ref=e406]: AD
            - generic [ref=e407]:
              - generic [ref=e408]: Arjun Desai
              - generic [ref=e409]: Campus Placed — Accenture
              - generic [ref=e410]: Placement Prep Bootcamp
        - generic [ref=e411]:
          - generic [ref=e412]:
            - generic [ref=e413]: ★
            - generic [ref=e414]: ★
            - generic [ref=e415]: ★
            - generic [ref=e416]: ★
            - generic [ref=e417]: ★
          - paragraph [ref=e418]: “Even the self-paced video track is incredibly structured. I completed it at night after work and cracked the CEH certification on my first attempt. Worth every rupee.”
          - generic [ref=e419]:
            - generic [ref=e420]: NV
            - generic [ref=e421]:
              - generic [ref=e422]: Nisha Verma
              - generic [ref=e423]: Security Analyst, Cybersecurity Firm
              - generic [ref=e424]: Cybersecurity · Video Library
    - generic [ref=e427]:
      - generic [ref=e428]:
        - heading "Ready to Start Your Tech Journey?" [level=2] [ref=e429]
        - paragraph [ref=e430]: Get free career counselling. We'll help you pick the right track and mode based on your goals and background.
        - generic [ref=e431]:
          - generic [ref=e432]:
            - generic [ref=e433]: 📞
            - generic [ref=e434]: +91 81600 49448
          - generic [ref=e435]:
            - generic [ref=e436]: ✉️
            - generic [ref=e437]: techrisewithai@gmail.com
          - generic [ref=e438]:
            - generic [ref=e439]: 💬
            - generic [ref=e440]: WhatsApp us anytime
      - generic [ref=e442]:
        - heading "Get Free Counselling" [level=3] [ref=e443]
        - paragraph [ref=e444]: No spam. No hard sell. Just guidance.
        - generic [ref=e445]:
          - generic [ref=e446]: Full Name
          - textbox "e.g. Priya Shah" [ref=e447]
        - generic [ref=e448]:
          - generic [ref=e449]: Phone Number
          - textbox "+91 98765 43210" [ref=e450]
        - generic [ref=e451]:
          - generic [ref=e452]: Interested In
          - combobox [ref=e453]:
            - option "Select a course..." [selected]
            - option "Full-Stack Web Development"
            - option "AI & Machine Learning"
            - option "Data Science & Analytics"
            - option "Cloud Computing"
            - option "DevOps & Automation"
            - option "Cybersecurity"
            - option "Placement Prep Bootcamp"
            - option "I'm not sure yet"
        - button "Request Free Call →" [ref=e454] [cursor=pointer]
        - paragraph [ref=e455]:
          - text: Or WhatsApp us at
          - link "+91 81600 49448" [ref=e456] [cursor=pointer]:
            - /url: https://wa.me/918160049448
  - contentinfo [ref=e457]:
    - generic [ref=e458]:
      - generic [ref=e459]:
        - generic [ref=e460]:
          - link "TechRise Academy" [ref=e462] [cursor=pointer]:
            - /url: /
            - img [ref=e463]
            - generic [ref=e474]:
              - text: TechRise
              - generic [ref=e475]: Academy
          - paragraph [ref=e476]:
            - text: Learn Today. Place Tomorrow.
            - text: Industry-ready tech education with real mentors and proven outcomes.
          - generic [ref=e477]:
            - link "📱 +91 81600 49448" [ref=e478] [cursor=pointer]:
              - /url: https://wa.me/918160049448
              - generic [ref=e479]: 📱
              - text: +91 81600 49448
            - link "✉️ techrisewithai@gmail.com" [ref=e480] [cursor=pointer]:
              - /url: mailto:techrisewithai@gmail.com
              - generic [ref=e481]: ✉️
              - text: techrisewithai@gmail.com
            - link "▶️ YouTube Channel" [ref=e482] [cursor=pointer]:
              - /url: https://www.youtube.com/@TechRiseAcademy-w3k
              - generic [ref=e483]: ▶️
              - text: YouTube Channel
        - generic [ref=e484]:
          - heading "Our Courses" [level=4] [ref=e485]
          - list [ref=e486]:
            - listitem [ref=e487]:
              - link "💻 Full-Stack Web Dev" [ref=e488] [cursor=pointer]:
                - /url: /courses#web-dev
            - listitem [ref=e489]:
              - link "🤖 AI & Machine Learning" [ref=e490] [cursor=pointer]:
                - /url: /courses#ai-ml
            - listitem [ref=e491]:
              - link "📊 Data Science & Analytics" [ref=e492] [cursor=pointer]:
                - /url: /courses#data-science
            - listitem [ref=e493]:
              - link "☁️ Cloud Computing" [ref=e494] [cursor=pointer]:
                - /url: /courses#cloud
            - listitem [ref=e495]:
              - link "⚙️ DevOps & Automation" [ref=e496] [cursor=pointer]:
                - /url: /courses#devops
            - listitem [ref=e497]:
              - link "🔒 Cybersecurity" [ref=e498] [cursor=pointer]:
                - /url: /courses#cybersecurity
            - listitem [ref=e499]:
              - link "🎯 Placement Prep Bootcamp" [ref=e500] [cursor=pointer]:
                - /url: /courses#placement-prep
        - generic [ref=e501]:
          - heading "Quick Links" [level=4] [ref=e502]
          - list [ref=e503]:
            - listitem [ref=e504]:
              - link "Home" [ref=e505] [cursor=pointer]:
                - /url: /
            - listitem [ref=e506]:
              - link "All Courses" [ref=e507] [cursor=pointer]:
                - /url: /courses
            - listitem [ref=e508]:
              - link "Learning Modes" [ref=e509] [cursor=pointer]:
                - /url: /learning-modes
            - listitem [ref=e510]:
              - link "About TechRise" [ref=e511] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e512]:
              - link "Hiring Partners" [ref=e513] [cursor=pointer]:
                - /url: /about#hiring-partners
            - listitem [ref=e514]:
              - link "Contact Us" [ref=e515] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e516]:
              - link "Enrol Now" [ref=e517] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e518]:
          - heading "Learning Modes" [level=4] [ref=e519]
          - list [ref=e520]:
            - listitem [ref=e521]:
              - link "🎓 1:1 Mentorship — ₹38,000" [ref=e522] [cursor=pointer]:
                - /url: /learning-modes#one-on-one
            - listitem [ref=e523]:
              - link "👥 Group Batch — ₹18,000" [ref=e524] [cursor=pointer]:
                - /url: /learning-modes#group
            - listitem [ref=e525]:
              - link "🎬 Video Library — ₹8,000" [ref=e526] [cursor=pointer]:
                - /url: /learning-modes#video
          - link "Enrol Now →" [ref=e527] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e528]:
        - paragraph [ref=e529]: © 2026 TechRise Academy. All rights reserved.
        - paragraph [ref=e530]: Made with ❤️ for aspiring developers · Ahmedabad, Gujarat
  - link "Chat on WhatsApp" [ref=e531] [cursor=pointer]:
    - /url: https://wa.me/918160049448
    - img [ref=e532]
  - alert [ref=e534]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | test.describe('Homepage', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/')
  6   |   })
  7   | 
  8   |   test('page loads with correct title', async ({ page }) => {
  9   |     await expect(page).toHaveTitle(/TechRise Academy/)
  10  |   })
  11  | 
  12  |   test('announce bar visible with enrol link', async ({ page }) => {
  13  |     const bar = page.locator('.announce-bar')
  14  |     await expect(bar).toBeVisible()
  15  |     await expect(bar.getByRole('link', { name: /enrol now/i })).toBeVisible()
  16  |   })
  17  | 
  18  |   test('navbar has all 5 links', async ({ page }) => {
  19  |     const nav = page.locator('header nav')
  20  |     await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible()
  21  |     await expect(nav.getByRole('link', { name: 'Courses' })).toBeVisible()
  22  |     await expect(nav.getByRole('link', { name: 'Learning Modes' })).toBeVisible()
  23  |     await expect(nav.getByRole('link', { name: 'About Us' })).toBeVisible()
  24  |     await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible()
  25  |   })
  26  | 
  27  |   test('hero tagline visible', async ({ page }) => {
  28  |     await expect(page.getByText('Learn Today.')).toBeVisible()
  29  |     await expect(page.getByText('Place Tomorrow.')).toBeVisible()
  30  |   })
  31  | 
  32  |   test('hero CTA buttons present', async ({ page }) => {
  33  |     await expect(page.getByRole('link', { name: /explore courses/i })).toBeVisible()
  34  |     await expect(page.getByRole('link', { name: /free counselling/i })).toBeVisible()
  35  |   })
  36  | 
  37  |   test('7 Flagship Technology Tracks heading visible', async ({ page }) => {
  38  |     await page.getByText('7 Flagship Technology Tracks').scrollIntoViewIfNeeded()
  39  |     await expect(page.getByText('7 Flagship Technology Tracks')).toBeVisible()
  40  |   })
  41  | 
  42  |   test('Track 7 Most Popular banner visible', async ({ page }) => {
  43  |     const banner = page.getByText('Most Popular Track')
  44  |     await banner.scrollIntoViewIfNeeded()
  45  |     await expect(banner).toBeVisible()
  46  |   })
  47  | 
  48  |   test('3 Learning Modes section visible', async ({ page }) => {
  49  |     await page.getByText('3 Learning Modes, Your Choice').scrollIntoViewIfNeeded()
  50  |     await expect(page.getByText('3 Learning Modes, Your Choice')).toBeVisible()
> 51  |     await expect(page.getByText('1:1 Mentorship')).toBeVisible()
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  52  |     await expect(page.getByText('Group Batch')).toBeVisible()
  53  |     await expect(page.getByText('Video Library')).toBeVisible()
  54  |   })
  55  | 
  56  |   test('testimonials section visible', async ({ page }) => {
  57  |     await page.getByText('What Our Students Say').scrollIntoViewIfNeeded()
  58  |     await expect(page.getByText('What Our Students Say')).toBeVisible()
  59  |     // at least one testimonial card
  60  |     await expect(page.locator('text=Rohan Mehta')).toBeVisible()
  61  |   })
  62  | 
  63  |   test('enquiry form visible and submittable', async ({ page }) => {
  64  |     const form = page.locator('form')
  65  |     await form.scrollIntoViewIfNeeded()
  66  |     await expect(form).toBeVisible()
  67  |     await page.getByPlaceholder('e.g. Priya Shah').fill('Test User')
  68  |     await page.getByPlaceholder('+91 98765 43210').fill('+91 9000000000')
  69  |     await expect(page.getByRole('button', { name: /request free call/i })).toBeEnabled()
  70  |   })
  71  | 
  72  |   test('WhatsApp float button present with correct href', async ({ page }) => {
  73  |     const wa = page.locator('a[href="https://wa.me/918160049448"]').first()
  74  |     await expect(wa).toBeVisible()
  75  |   })
  76  | 
  77  |   test('footer has brand name and contact email', async ({ page }) => {
  78  |     await page.locator('footer').scrollIntoViewIfNeeded()
  79  |     await expect(page.locator('footer').getByText(/TechRise/)).toBeVisible()
  80  |     await expect(page.locator('footer').getByText('techrisewithai@gmail.com')).toBeVisible()
  81  |   })
  82  | 
  83  |   test('footer lists all 7 courses', async ({ page }) => {
  84  |     await page.locator('footer').scrollIntoViewIfNeeded()
  85  |     await expect(page.locator('footer').getByText(/Full-Stack Web Dev/)).toBeVisible()
  86  |     await expect(page.locator('footer').getByText(/Placement Prep Bootcamp/)).toBeVisible()
  87  |   })
  88  | })
  89  | 
  90  | test.describe('Homepage — mobile nav', () => {
  91  |   test.use({ viewport: { width: 390, height: 844 } })
  92  | 
  93  |   test('hamburger opens mobile nav', async ({ page }) => {
  94  |     await page.goto('/')
  95  |     const hamburger = page.getByRole('button', { name: /menu|open/i })
  96  |     await expect(hamburger).toBeVisible()
  97  |     await hamburger.click()
  98  |     await expect(page.getByRole('link', { name: 'Courses' }).nth(1)).toBeVisible()
  99  |   })
  100 | 
  101 |   test('mobile nav closes after link click', async ({ page }) => {
  102 |     await page.goto('/')
  103 |     await page.getByRole('button', { name: /menu|open/i }).click()
  104 |     await page.getByRole('link', { name: 'About Us' }).last().click()
  105 |     await expect(page).toHaveURL(/about/)
  106 |   })
  107 | })
  108 | 
```