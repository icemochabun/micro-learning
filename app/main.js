/* ============================================================
   main.js — Guided Learning micro-lesson prototype
   Audience: Seniors (geragogy principles throughout)
   Content source: AI-generated via backend Learning Academy
   ============================================================ */

// ============================================================
// INFOGRAPHIC HTML TEMPLATES
// Defined as constants to keep COURSES data readable
// ============================================================

const INFOG_WARNING_SIGNS = `
<div class="infog">
  <p class="infog__heading">⚠️ 5 Warning Signs of Distress</p>
  <div class="infog__list">
    <div class="infog__row infog__row--red">
      <span class="infog__icon">😰</span>
      <span class="infog__text">Sudden confusion or disorientation</span>
    </div>
    <div class="infog__row infog__row--orange">
      <span class="infog__icon">😴</span>
      <span class="infog__text">Unusual sleepiness or unresponsiveness</span>
    </div>
    <div class="infog__row infog__row--yellow">
      <span class="infog__icon">🚫</span>
      <span class="infog__text">Refusing food, drink, or medication</span>
    </div>
    <div class="infog__row infog__row--orange">
      <span class="infog__icon">😣</span>
      <span class="infog__text">Complaints of pain or unusual symptoms</span>
    </div>
    <div class="infog__row infog__row--red">
      <span class="infog__icon">🌡️</span>
      <span class="infog__text">Fever, pale skin, or difficulty breathing</span>
    </div>
  </div>
</div>`;

const INFOG_5_RIGHTS = `
<div class="infog">
  <p class="infog__heading">💊 The 5 Rights of Medication</p>
  <div class="infog__rights">
    <div class="infog__right">
      <span class="infog__rnum">1</span>
      <div><b class="infog__rlabel">Right Person</b>
      <span class="infog__rsub"> — Check name &amp; ID band</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum">2</span>
      <div><b class="infog__rlabel">Right Drug</b>
      <span class="infog__rsub"> — Read the label twice</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum">3</span>
      <div><b class="infog__rlabel">Right Dose</b>
      <span class="infog__rsub"> — Confirm with the care plan</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum">4</span>
      <div><b class="infog__rlabel">Right Route</b>
      <span class="infog__rsub"> — Oral, topical, or injection</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum">5</span>
      <div><b class="infog__rlabel">Right Time</b>
      <span class="infog__rsub"> — Morning, noon, evening, or as needed</span></div>
    </div>
  </div>
</div>`;

const INFOG_DEHYDRATION = `
<div class="infog">
  <p class="infog__heading">💧 Signs of Dehydration</p>
  <p class="infog__subhead">Urine Colour Guide</p>
  <div class="infog__urine-list">
    <div class="infog__urine-row">
      <div class="infog__urine-dot" style="background:#f5e8a0;border:1px solid #d4c870"></div>
      <span>Pale yellow — Well hydrated ✅</span>
    </div>
    <div class="infog__urine-row">
      <div class="infog__urine-dot" style="background:#e8c43c"></div>
      <span>Yellow — Drink more water ⬆️</span>
    </div>
    <div class="infog__urine-row">
      <div class="infog__urine-dot" style="background:#c49020"></div>
      <span>Dark yellow — Dehydrated ⚠️</span>
    </div>
    <div class="infog__urine-row">
      <div class="infog__urine-dot" style="background:#8b6910"></div>
      <span style="color:#c0392b;font-weight:700">Amber/brown — Seek help now 🚨</span>
    </div>
  </div>
  <p class="infog__subhead" style="margin-top:12px">Common Symptoms</p>
  <div class="infog__symptoms">
    <span class="infog__symptom">😵 Confusion</span>
    <span class="infog__symptom">🤕 Headache</span>
    <span class="infog__symptom">💋 Dry mouth</span>
    <span class="infog__symptom">😴 Fatigue</span>
    <span class="infog__symptom">🫀 Rapid heartbeat</span>
  </div>
</div>`;

const INFOG_BALANCED_PLATE = `
<div class="infog">
  <p class="infog__heading">🥗 The Balanced Plate</p>
  <div class="infog__plate-sections">
    <div class="infog__plate-sec" style="border-left-color:#22c55e;background:#f0fdf4">
      <span class="infog__plate-icon">🥦🍅🥕</span>
      <div>
        <span class="infog__plate-frac">½</span>
        <b class="infog__plate-name">Vegetables &amp; Fruit</b>
        <span class="infog__plate-tip">Aim for a variety of colours — each colour offers different nutrients</span>
      </div>
    </div>
    <div class="infog__plate-sec" style="border-left-color:#f59e0b;background:#fffbeb">
      <span class="infog__plate-icon">🍗🐟🥚</span>
      <div>
        <span class="infog__plate-frac">¼</span>
        <b class="infog__plate-name">Lean Protein</b>
        <span class="infog__plate-tip">Preserves muscle mass and speeds recovery after illness</span>
      </div>
    </div>
    <div class="infog__plate-sec" style="border-left-color:#8b5cf6;background:#f5f3ff">
      <span class="infog__plate-icon">🍚🌾🍞</span>
      <div>
        <span class="infog__plate-frac">¼</span>
        <b class="infog__plate-name">Wholegrains</b>
        <span class="infog__plate-tip">Steady energy levels and healthy digestion</span>
      </div>
    </div>
  </div>
  <div class="infog__plate-footer">💧 Add 6–8 glasses of water alongside every meal</div>
</div>`;


const INFOG_LONELINESS_STATS = `
<div class="infog">
  <p class="infog__heading">💙 Loneliness by the Numbers</p>
  <div class="infog__stats">
    <div class="infog__stat-item">
      <span class="infog__stat-text">1 in 3 seniors reports feeling lonely regularly</span>
      <div class="infog__stat-bar-wrap"><div class="infog__stat-bar-fill" style="width:33%;background:#3b82f6"></div></div>
    </div>
    <div class="infog__stat-item">
      <span class="infog__stat-text">50% higher risk of dementia linked to chronic loneliness</span>
      <div class="infog__stat-bar-wrap"><div class="infog__stat-bar-fill" style="width:50%;background:#8b5cf6"></div></div>
    </div>
    <div class="infog__stat-item">
      <span class="infog__stat-text">40% of seniors have no meaningful weekly social contact</span>
      <div class="infog__stat-bar-wrap"><div class="infog__stat-bar-fill" style="width:40%;background:#ef4444"></div></div>
    </div>
    <div class="infog__stat-item">
      <span class="infog__stat-text">29% higher risk of heart disease from social isolation</span>
      <div class="infog__stat-bar-wrap"><div class="infog__stat-bar-fill" style="width:29%;background:#f59e0b"></div></div>
    </div>
  </div>
  <p class="infog__footer">💡 Loneliness has the same health impact as smoking 15 cigarettes a day</p>
</div>`;

const INFOG_DEPRESSION_SIGNS = `
<div class="infog">
  <p class="infog__heading">🌱 Early Signs of Depression in Seniors</p>
  <div class="infog__grid">
    <div class="infog__grid-item infog__grid-item--red">
      <span>😔</span><span>Persistent low mood for 2+ weeks</span>
    </div>
    <div class="infog__grid-item infog__grid-item--orange">
      <span>🛏️</span><span>Sleep much more or less than usual</span>
    </div>
    <div class="infog__grid-item infog__grid-item--yellow">
      <span>🍽️</span><span>Loss of appetite or interest in food</span>
    </div>
    <div class="infog__grid-item infog__grid-item--purple">
      <span>🤝</span><span>Withdrawal from social activities</span>
    </div>
    <div class="infog__grid-item infog__grid-item--orange">
      <span>😴</span><span>Fatigue and loss of motivation</span>
    </div>
    <div class="infog__grid-item infog__grid-item--red">
      <span>💬</span><span>Feeling hopeless, worthless, or a burden</span>
    </div>
  </div>
  <p class="infog__footer">⚠️ Three or more signs lasting 2+ weeks — document and report to your supervisor</p>
</div>`;

const INFOG_DIGNITY_TIPS = `
<div class="infog">
  <p class="infog__heading">🤝 5 Principles of Dignified Communication</p>
  <div class="infog__rights">
    <div class="infog__right">
      <span class="infog__rnum" style="background:#2e8b5a">1</span>
      <div><b class="infog__rlabel">Use their name</b>
      <span class="infog__rsub"> — Every greeting uses their preferred name, not "dear" or "sweetie"</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum" style="background:#2e8b5a">2</span>
      <div><b class="infog__rlabel">Ask before touching</b>
      <span class="infog__rsub"> — Announce every action: "I'm going to help you sit up now"</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum" style="background:#2e8b5a">3</span>
      <div><b class="infog__rlabel">Speak at eye level</b>
      <span class="infog__rsub"> — Kneel or sit — never talk down to someone in a bed or chair</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum" style="background:#2e8b5a">4</span>
      <div><b class="infog__rlabel">Wait 10 seconds</b>
      <span class="infog__rsub"> — Silence is processing time — resist the urge to fill it</span></div>
    </div>
    <div class="infog__right">
      <span class="infog__rnum" style="background:#2e8b5a">5</span>
      <div><b class="infog__rlabel">Avoid elderspeak</b>
      <span class="infog__rsub"> — No "sweetie", "good boy/girl" — treat adults as adults, always</span></div>
    </div>
  </div>
</div>`;


// ============================================================
// COURSE DATA
// Three courses, 12 chapters, across 5 card types:
//   text · video · infographic · checklist
// ============================================================

const COURSES = [

  // ─────────────────────────────────────────────────────────
  // COURSE 1: Introduction to Caregiving (5 chapters)
  // ─────────────────────────────────────────────────────────
  {
    id: 'course-caregiving',
    title: 'Introduction to Caregiving',
    icon: '🤝',
    description: 'Core knowledge for care support staff and family caregivers',
    chapters: [

      // Chapter 1 — text cards
      {
        id: 'ch1',
        title: 'Understanding the Role of a Caregiver',
        format: 'Tips',
        duration: '3 min',
        objective: 'Define what a caregiver does and the scope of their role',
        completed: false,
        hook: {
          emoji: '🤝',
          heading: 'What does a caregiver really do?',
          fact: 'Over half of caregivers report high levels of emotional strain due to the breadth of their responsibilities.',
        },
        cards: [
          { type: 'text', emoji: '👤', text: 'A caregiver assists individuals who cannot fully care for themselves.' },
          { type: 'text', emoji: '💊', text: 'Caregiving includes personal care, medical assistance, and advocacy.' },
          { type: 'text', emoji: '👥', text: 'There are three main types of caregivers: informal, formal, and professional.' },
        ],
        quiz: {
          question: 'What is the primary role of a caregiver?',
          options: [
            { text: 'Help people who cannot fully care for themselves', correct: true },
            { text: 'Provide entertainment and social activities only', correct: false },
          ],
          feedback: {
            correct: '✅ Well done! Caregivers support people with daily life, medical needs, and more.',
            wrong: '❌ Not quite — caregivers do much more: personal care, medical support, and advocacy.',
          },
        },
        anchor: {
          emoji: '⭐',
          takeaway: 'Caregiving means supporting the whole person — body, mind, and voice.',
          action: 'When you meet someone who needs help, ask: "What would make today easier for you?"',
        },
        outcome: 'A caregiver supports people with personal care, medical needs, and advocacy.',
      },

      // Chapter 2 — text cards
      {
        id: 'ch2',
        title: 'Ethical and Emotional Responsibilities',
        format: 'Tips',
        duration: '4 min',
        objective: 'Communicate with care, empathy, and respect in every interaction',
        completed: false,
        hook: {
          emoji: '💙',
          heading: 'Why does how you speak matter as much as what you do?',
          fact: 'Caregivers who communicate with empathy report significantly higher satisfaction from the people they support.',
        },
        cards: [
          { type: 'text', emoji: '👂', text: 'Active listening means giving your full attention — without interrupting.' },
          { type: 'text', emoji: '🤲', text: 'Empathy means understanding what the person feels, not just what they say.' },
          { type: 'text', emoji: '🛡️', text: 'Respecting privacy and dignity is a core ethical responsibility of every caregiver.' },
        ],
        quiz: {
          question: 'Which of these shows ethical communication as a caregiver?',
          options: [
            { text: 'Listen fully and respect the person\'s own choices', correct: true },
            { text: 'Make decisions for the person to save time', correct: false },
          ],
          feedback: {
            correct: '✅ Exactly right! Respecting choices is at the heart of ethical caregiving.',
            wrong: '❌ Caregivers should support — not override — the person\'s own choices and voice.',
          },
        },
        anchor: {
          emoji: '💬',
          takeaway: 'How you say something matters as much as what you say.',
          action: 'Before speaking to someone today, take a breath and ask: "How would I want to be spoken to?"',
        },
        outcome: 'Ethical caregivers listen, empathise, and always respect the person\'s dignity and choices.',
      },

      // Chapter 3 — INFOGRAPHIC card
      {
        id: 'ch3',
        title: 'Recognising Signs of Distress',
        format: 'Infographic',
        duration: '4 min',
        objective: 'Identify physical and emotional warning signs that someone needs immediate support',
        completed: false,
        hook: {
          emoji: '🚨',
          heading: 'What does it look like when someone is not okay?',
          fact: 'Early recognition of distress can prevent 40% of care emergencies from escalating to a critical level.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_WARNING_SIGNS,
            caption: 'Tap "Next card" when you have read all 5 signs.',
          },
          { type: 'text', emoji: '👁️', text: 'Trust your instincts — if something seems wrong, it probably is. Never dismiss a quiet concern.' },
          { type: 'text', emoji: '📋', text: 'Document what you observe: time, behaviour, and any change from the person\'s normal pattern.' },
        ],
        quiz: {
          question: 'What should you do first when you notice signs of distress?',
          options: [
            { text: 'Alert the care team and document what you saw', correct: true },
            { text: 'Wait and see if it improves on its own', correct: false },
          ],
          feedback: {
            correct: '✅ Right! Early reporting and accurate documentation are the two most critical first responses.',
            wrong: '❌ Never wait — distress signs require prompt reporting to the care team immediately.',
          },
        },
        anchor: {
          emoji: '🚨',
          takeaway: 'Notice. Document. Report. These three actions can save a life.',
          action: 'Practice saying aloud: "I noticed something different today and I need to report it."',
        },
        outcome: 'Early recognition and prompt reporting of distress signs prevents emergencies from escalating.',
      },

      // Chapter 4 — VIDEO + INFOGRAPHIC cards
      {
        id: 'ch4',
        title: 'Safe Medication Handling',
        format: 'Video',
        duration: '5 min',
        objective: 'Apply the 5 Rights of medication to prevent errors in care settings',
        completed: false,
        hook: {
          emoji: '💊',
          heading: 'Getting medication right is one of the most important things you will do',
          fact: 'Medication errors are the second most common cause of preventable harm in care settings globally.',
        },
        cards: [
          {
            type: 'video',
            emoji: '💊',
            title: 'Safe Medication Practices',
            caption: 'How to verify the 5 Rights before every dose',
            duration: '3:24',
            gradient: 'linear-gradient(135deg, #1a56a0 0%, #0d3b7a 100%)',
            videoUrl: 'https://www.youtube.com/results?search_query=medication+safety+5+rights+caregiving',
          },
          {
            type: 'infographic',
            html: INFOG_5_RIGHTS,
            caption: 'Memorise all 5 Rights — check each one before every dose.',
          },
          { type: 'text', emoji: '🚫', text: 'Never administer medication without checking for known allergies first. Check the care plan every time.' },
        ],
        quiz: {
          question: 'What does "The 5 Rights" in medication administration mean?',
          options: [
            { text: 'Right person, drug, dose, route, and time', correct: true },
            { text: 'Right ward, doctor, date, nurse, and hospital', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Always verify all 5 Rights before giving any medication.',
            wrong: '❌ The 5 Rights are: right person, right drug, right dose, right route, and right time.',
          },
        },
        anchor: {
          emoji: '💊',
          takeaway: 'A moment of care now prevents a medical emergency later.',
          action: 'Say all 5 Rights out loud before giving any medication this week — every single time.',
        },
        outcome: 'The 5 Rights of medication prevent errors and protect the people in your care.',
      },

      // Chapter 5 — CHECKLIST card
      {
        id: 'ch5',
        title: 'Preventing Falls at Home',
        format: 'Checklist',
        duration: '4 min',
        objective: 'Use a systematic home safety checklist to identify and reduce fall risks',
        completed: false,
        hook: {
          emoji: '🏠',
          heading: 'Falls are preventable — most happen in familiar places',
          fact: '1 in 3 seniors falls each year. 80% of home falls happen in the bathroom or bedroom — both fixable.',
        },
        cards: [
          {
            type: 'checklist',
            title: '🏠 Home Safety Check — tap each item to verify it',
            items: [
              'Clear pathways — no loose rugs or clutter on the floor',
              'Non-slip mats in the bathroom and next to the bed',
              'Grab bars installed near the toilet and shower',
              'Good lighting in hallways, stairs, and bathroom',
              'Frequently used items within easy reach (no stretching up)',
              'Non-slip footwear available — no bare feet or socks only',
            ],
          },
          { type: 'text', emoji: '💡', text: 'Good lighting alone reduces fall risk by up to 60% — replace dim bulbs immediately.' },
          { type: 'text', emoji: '🧓', text: 'Ask: "Is there anything in your home that makes you feel unsafe?" Their answer is your guide.' },
        ],
        quiz: {
          question: 'Which factor most commonly causes falls at home?',
          options: [
            { text: 'Poor lighting and slippery or cluttered surfaces', correct: true },
            { text: 'Too much physical activity during the day', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Environmental hazards cause most home falls — and they are fixable.',
            wrong: '❌ Most falls are caused by environment: poor lighting, loose rugs, and slippery surfaces.',
          },
        },
        anchor: {
          emoji: '🏠',
          takeaway: 'A safe home is a designed home — prevention starts with your eyes open.',
          action: 'Do a 2-minute walk-through of the home right now. What is one thing you can fix today?',
        },
        outcome: 'Identifying and removing environmental hazards is the most effective way to prevent falls.',
      },

      // Chapter 6 — INFOGRAPHIC card
      {
        id: 'ch6',
        title: 'Communicating with Dignity',
        format: 'Infographic',
        duration: '4 min',
        objective: 'Apply 5 dignity principles in every interaction with the seniors you care for',
        completed: false,
        hook: {
          emoji: '🤝',
          heading: 'Every word shapes how someone feels about themselves',
          fact: 'Seniors who feel respected report 40% less anxiety and communicate more openly about their health needs.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_DIGNITY_TIPS,
            caption: 'These 5 principles apply to every interaction, every single time.',
          },
          { type: 'text', emoji: '🚫', text: '"Elderspeak" — using words like "sweetie" or "good girl" — reduces dignity and can worsen cognitive decline.' },
          { type: 'text', emoji: '⏳', text: 'Silence is not awkwardness — it is processing time. Give 10 seconds before repeating. Rushing someone damages trust.' },
        ],
        quiz: {
          question: 'Which habit best promotes dignity in every interaction?',
          options: [
            { text: 'Announcing your actions and using their preferred name', correct: true },
            { text: 'Speaking loudly and using very simple words', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Announcing actions and using names are the two highest-impact dignity behaviours.',
            wrong: '❌ Volume and simplicity don\'t equal dignity. Asking before touching and using their name does.',
          },
        },
        anchor: {
          emoji: '🤝',
          takeaway: 'Use their name. Ask before touching. Wait for the answer.',
          action: 'In your next interaction, announce every action before you do it: "I\'m going to help you sit up now."',
        },
        outcome: 'Asking before touching and using someone\'s preferred name are the highest-impact dignity behaviours.',
      },

    ], // end course 1 chapters
  },

  // ─────────────────────────────────────────────────────────
  // COURSE 2: Nutrition & Hydration for Seniors (3 chapters)
  // ─────────────────────────────────────────────────────────
  {
    id: 'course-nutrition',
    title: 'Nutrition & Hydration',
    icon: '💧',
    description: 'Support seniors to eat well and stay properly hydrated every day',
    chapters: [

      // Chapter 1 — VIDEO card
      {
        id: 'nh1',
        title: 'Why Hydration Matters for Seniors',
        format: 'Video',
        duration: '4 min',
        objective: 'Understand why seniors are at high risk of dehydration and your role in prevention',
        completed: false,
        hook: {
          emoji: '💧',
          heading: 'Many seniors are dehydrated — and they don\'t know it',
          fact: 'Up to 40% of care home residents are chronically under-hydrated, putting them at risk of falls and confusion.',
        },
        cards: [
          {
            type: 'video',
            emoji: '💧',
            title: 'Hydration and the Ageing Body',
            caption: 'Why thirst is not a reliable signal for seniors',
            duration: '2:48',
            gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
            videoUrl: 'https://www.youtube.com/results?search_query=hydration+importance+elderly+seniors+caregiving',
          },
          { type: 'text', emoji: '🧠', text: 'As we age, the sense of thirst decreases. Seniors may not feel thirsty even when dehydrated.' },
          { type: 'text', emoji: '🥤', text: 'Aim to offer 6–8 glasses (1.5–2 litres) of fluid throughout the day. Do not wait to be asked.' },
        ],
        quiz: {
          question: 'Why do seniors often not feel thirsty even when dehydrated?',
          options: [
            { text: 'The sense of thirst naturally decreases with age', correct: true },
            { text: 'They already drink too much water each day', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! This is exactly why caregivers must proactively offer drinks throughout the day.',
            wrong: '❌ Most seniors actually under-drink. The thirst mechanism weakens with age — we must offer proactively.',
          },
        },
        anchor: {
          emoji: '💧',
          takeaway: 'Your job is to offer drinks proactively — do not wait to be asked.',
          action: 'Set a reminder to offer a drink every 2 hours during your next shift or visit.',
        },
        outcome: 'Seniors have a weakened sense of thirst — proactive drink offerings prevent dehydration.',
      },

      // Chapter 2 — INFOGRAPHIC card
      {
        id: 'nh2',
        title: 'Recognising Dehydration',
        format: 'Infographic',
        duration: '3 min',
        objective: 'Identify the visual and physical signs of dehydration quickly and accurately',
        completed: false,
        hook: {
          emoji: '🔍',
          heading: 'Can you spot the signs of dehydration?',
          fact: 'Mild dehydration in seniors is often mistaken for confusion or the early stages of dementia.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_DEHYDRATION,
            caption: 'Study the urine colour guide — it is the most reliable visual indicator.',
          },
          { type: 'text', emoji: '👁️', text: 'Check urine colour daily — pale straw to light yellow means well hydrated; dark yellow or amber means act now.' },
          { type: 'text', emoji: '🧠', text: 'Sudden confusion or drowsiness may be dehydration. Offer water first, then assess further.' },
        ],
        quiz: {
          question: 'Which is an early warning sign of dehydration?',
          options: [
            { text: 'Dark-coloured urine and feeling confused', correct: true },
            { text: 'Bright red skin and very high energy levels', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Dark urine and confusion are key early warning signs to watch for.',
            wrong: '❌ Dehydration signs include dark urine, confusion, dry mouth, and fatigue — not increased energy.',
          },
        },
        anchor: {
          emoji: '💧',
          takeaway: 'When in doubt — offer a drink. It is the simplest act of care.',
          action: 'Next time you see confusion or low energy, offer a glass of water before anything else.',
        },
        outcome: 'Dark urine and confusion are key dehydration signs — proactive monitoring prevents harm.',
      },

      // Chapter 3 — INFOGRAPHIC card
      {
        id: 'nh3',
        title: 'Building a Balanced Plate',
        format: 'Infographic',
        duration: '4 min',
        objective: 'Plan balanced meals that meet seniors\' nutritional needs for energy and recovery',
        completed: false,
        hook: {
          emoji: '🥗',
          heading: 'A balanced meal supports energy, immunity, and healing',
          fact: 'Poor nutrition contributes to 30% of hospital readmissions in seniors over 65 — most of which are preventable.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_BALANCED_PLATE,
            caption: 'Half the plate vegetables — this is the single most important rule.',
          },
          { type: 'text', emoji: '🍗', text: 'Protein is especially important for seniors — it preserves muscle mass and supports healing after illness.' },
          { type: 'text', emoji: '🍽️', text: 'Small, frequent meals often work better than three large ones for seniors with reduced appetites.' },
        ],
        quiz: {
          question: 'Which food group should take up the most space on a senior\'s plate?',
          options: [
            { text: 'Vegetables and fruit', correct: true },
            { text: 'Bread, rice, and pasta', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Half the plate should be colourful vegetables and fruit.',
            wrong: '❌ Vegetables and fruit should fill half the plate. Wholegrains are just one quarter.',
          },
        },
        anchor: {
          emoji: '🥗',
          takeaway: 'A colourful plate is usually a healthy plate.',
          action: 'At the next meal, count how many different colours are on the plate. Aim for three or more.',
        },
        outcome: 'Half plate vegetables, quarter protein, quarter wholegrains — plus 6–8 glasses of water daily.',
      },

    ], // end course 2 chapters
  },

  // ─────────────────────────────────────────────────────────
  // COURSE 3: Emotional Wellbeing & Communication (3 chapters)
  // ─────────────────────────────────────────────────────────
  {
    id: 'course-wellbeing',
    title: 'Emotional Wellbeing',
    icon: '💙',
    description: 'Recognise emotional needs and communicate with empathy and dignity',
    chapters: [

      // Chapter 1 — INFOGRAPHIC card
      {
        id: 'ew1',
        title: 'Understanding Loneliness in Seniors',
        format: 'Infographic',
        duration: '4 min',
        objective: 'Recognise how loneliness affects seniors and how your daily interactions make a difference',
        completed: false,
        hook: {
          emoji: '💙',
          heading: 'Loneliness is as harmful as smoking',
          fact: 'Chronic loneliness increases dementia risk by 50% and has the same health impact as smoking 15 cigarettes a day.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_LONELINESS_STATS,
            caption: 'These statistics reflect seniors in residential and home care settings.',
          },
          { type: 'text', emoji: '👥', text: 'Social connection is not a nice-to-have — it is a health need. For many isolated seniors, caregivers are their primary human contact.' },
          { type: 'text', emoji: '💡', text: 'Even brief, warm interactions — a shared memory, a compliment, a moment of genuine eye contact — have measurable benefits for wellbeing.' },
        ],
        quiz: {
          question: 'How does chronic loneliness compare to other well-known health risks?',
          options: [
            { text: 'It has the same health impact as smoking 15 cigarettes daily', correct: true },
            { text: 'It mainly causes short-term sadness with no lasting health effects', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Loneliness is a serious health risk — intentional connection is part of your care role.',
            wrong: '❌ Chronic loneliness has profound physical effects, including a 50% higher risk of dementia and heart disease.',
          },
        },
        anchor: {
          emoji: '💙',
          takeaway: 'Social connection is a health need — treat it as part of your care plan.',
          action: 'Make genuine eye contact and use one person\'s name meaningfully today.',
        },
        outcome: 'Loneliness increases dementia risk by 50% — intentional daily connection is part of your care role.',
      },

      // Chapter 2 — VIDEO card
      {
        id: 'ew2',
        title: 'How to Start a Caring Conversation',
        format: 'Video',
        duration: '4 min',
        objective: 'Use open questions and active listening to create meaningful connection in every interaction',
        completed: false,
        hook: {
          emoji: '🗣️',
          heading: 'A caring conversation can transform someone\'s day',
          fact: 'Most seniors in residential care have fewer than 10 minutes of meaningful conversation per day.',
        },
        cards: [
          {
            type: 'video',
            emoji: '🗣️',
            title: 'Meaningful Conversations with Seniors',
            caption: 'Open questions, active listening, and person-centred dialogue',
            duration: '3:12',
            gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
            videoUrl: 'https://www.youtube.com/results?search_query=meaningful+conversations+elderly+seniors+active+listening+caregiver',
          },
          { type: 'text', emoji: '❓', text: 'Open questions invite stories. "What was your favourite job?" opens a conversation. "Are you comfortable?" closes one.' },
          { type: 'text', emoji: '👂', text: 'Active listening means putting down what you are doing, making eye contact, and not finishing their sentences for them.' },
        ],
        quiz: {
          question: 'Which question is more likely to start a meaningful conversation?',
          options: [
            { text: '"What did you enjoy most about your working life?"', correct: true },
            { text: '"Did you sleep well last night?"', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Open, life-story questions create real connection — closed questions get one-word answers.',
            wrong: '❌ "Did you sleep well?" is a closed question with a yes/no answer. Open questions invite stories and memories.',
          },
        },
        anchor: {
          emoji: '🗣️',
          takeaway: 'One open question is worth ten closed ones.',
          action: 'Ask one open, life-story question in your next interaction — then listen without interrupting for a full minute.',
        },
        outcome: 'Open questions and active listening create meaningful connection in less than 5 minutes.',
      },

      // Chapter 3 — CHECKLIST + INFOGRAPHIC
      {
        id: 'ew3',
        title: 'Recognising Early Signs of Depression',
        format: 'Checklist',
        duration: '5 min',
        objective: 'Identify early signs of depression in seniors and know when and how to escalate',
        completed: false,
        hook: {
          emoji: '🌱',
          heading: 'Depression is common in seniors — and often missed',
          fact: 'Nearly 1 in 5 seniors experiences depression, yet over 60% of cases go unrecognised and untreated.',
        },
        cards: [
          {
            type: 'infographic',
            html: INFOG_DEPRESSION_SIGNS,
            caption: 'Three or more of these signs lasting 2+ weeks — document and report to your supervisor.',
          },
          {
            type: 'checklist',
            title: '🌱 Signs to Watch For — tap each one you have observed',
            items: [
              'Persistent low mood or tearfulness for 2 or more weeks',
              'Loss of interest in hobbies or activities they previously enjoyed',
              'Increased social withdrawal — avoiding mealtimes or group activities',
              'Significant changes in sleep (sleeping much more or much less than usual)',
              'Unexplained weight loss or persistent loss of appetite',
              'Talking about feeling hopeless, worthless, or a burden to others',
            ],
          },
          { type: 'text', emoji: '🤝', text: 'Your observations are clinical information. If you notice these signs, document them in your handover and report to your supervisor the same day.' },
        ],
        quiz: {
          question: 'How long should symptoms persist before you raise a concern?',
          options: [
            { text: '2 weeks or more of persistent low mood or withdrawal', correct: true },
            { text: 'Only after the person explicitly asks for help themselves', correct: false },
          ],
          feedback: {
            correct: '✅ Correct! Two weeks of persistent symptoms is the clinical threshold — do not wait for them to ask.',
            wrong: '❌ Many seniors with depression will never ask for help. Two weeks of observed symptoms is enough to act.',
          },
        },
        anchor: {
          emoji: '🌱',
          takeaway: 'Depression is not a normal part of ageing — your observation can prompt life-changing treatment.',
          action: 'Document any mood or behaviour changes you noticed today in your handover notes.',
        },
        outcome: 'Persistent low mood for 2+ weeks warrants documentation and escalation — your observation matters.',
      },

    ], // end course 3 chapters
  },

]; // end COURSES


// ============================================================
// STATE
// ============================================================
let currentCourse  = 0;   // index into COURSES
let currentLesson  = 0;   // index into COURSES[currentCourse].chapters
let playerSource   = 'course'; // 'home' | 'course'
let cardIndex      = 0;
let quizAnswered   = false;

const STEPS    = ['hook', 'core', 'retrieval', 'anchor'];
const PROGRESS = { hook: '15%', core: '45%', retrieval: '75%', anchor: '95%' };


// ============================================================
// NAVIGATION — screens
// ============================================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen--active'));
  document.getElementById('screen-' + id).classList.add('screen--active');
  // Sync course screen title when showing course list
  if (id === 'course') {
    document.getElementById('course-screen-title').textContent = COURSES[currentCourse].title;
  }
}

function startLessonFromHome() {
  // Find next incomplete lesson in course 0 (primary course)
  const idx = COURSES[0].chapters.findIndex(c => !c.completed);
  if (idx >= 0) startLesson(0, idx, 'home');
}

function startLesson(courseIdx, chapterIdx, source) {
  currentCourse  = courseIdx;
  currentLesson  = chapterIdx;
  playerSource   = source || 'course';
  cardIndex      = 0;
  quizAnswered   = false;
  setupPlayer(COURSES[courseIdx].chapters[chapterIdx]);
  showScreen('player');
  showStep('hook');
}

function exitPlayer() {
  showScreen(playerSource === 'home' ? 'home' : 'course');
}

function finishLesson() {
  COURSES[currentCourse].chapters[currentLesson].completed = true;
  buildChapterList();
  updateCourseProgress();
  updateHomeCard();
  showScreen(playerSource === 'home' ? 'home' : 'course');
}


// ============================================================
// HOME SCREEN
// ============================================================

function updateHomeCard() {
  const idx = COURSES[0].chapters.findIndex(c => !c.completed);
  if (idx < 0) {
    document.getElementById('home-lesson-title').textContent = 'All caregiving lessons complete! 🎉';
    document.getElementById('home-lesson-sub').textContent   = 'Great work — review arrives in 7 days';
    document.getElementById('home-start-btn').textContent    = 'Revisit course →';
    document.getElementById('home-start-btn').onclick = () => { currentCourse = 0; showScreen('course'); };
  } else {
    const lesson = COURSES[0].chapters[idx];
    document.getElementById('home-lesson-title').textContent = lesson.title;
    document.getElementById('home-lesson-sub').textContent   = `${lesson.format} · ${lesson.duration}`;
    document.getElementById('home-start-btn').textContent    = 'Start today\'s lesson →';
    document.getElementById('home-start-btn').onclick = startLessonFromHome;
  }
}


// ============================================================
// COURSE SCREEN — tabs + chapter list
// ============================================================

function buildCourseTabs() {
  const container = document.getElementById('course-tabs');
  container.innerHTML = '';
  COURSES.forEach((course, i) => {
    const btn = document.createElement('button');
    btn.className = 'course-tab' + (i === currentCourse ? ' course-tab--active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === currentCourse ? 'true' : 'false');
    btn.innerHTML = `<span class="course-tab__icon">${course.icon}</span><span class="course-tab__title">${course.title}</span><span class="course-tab__count">${course.chapters.length}</span>`;
    btn.onclick = () => selectCourse(i);
    container.appendChild(btn);
  });
}

function selectCourse(idx) {
  currentCourse = idx;
  // Update tab active states
  document.querySelectorAll('.course-tab').forEach((tab, i) => {
    tab.classList.toggle('course-tab--active', i === idx);
    tab.setAttribute('aria-selected', i === idx ? 'true' : 'false');
  });
  document.getElementById('course-screen-title').textContent = COURSES[idx].title;
  buildChapterList();
  updateCourseProgress();
}

function buildChapterList() {
  const list     = document.getElementById('chapter-list');
  const chapters = COURSES[currentCourse].chapters;
  list.innerHTML = '';

  chapters.forEach((ch, i) => {
    const prevDone     = i === 0 || chapters[i - 1].completed;
    const isAccessible = ch.completed || prevDone;

    let itemClass  = '';
    let stateHtml  = '';
    let clickable  = false;

    if (ch.completed) {
      itemClass = 'chapter-item--done';
      stateHtml = '<span class="chapter-state chapter-state--done">✓ Done</span>';
      clickable  = true;
    } else if (isAccessible) {
      itemClass = 'chapter-item--next';
      stateHtml = '<span class="chapter-state chapter-state--next">→ Start</span>';
      clickable  = true;
    } else {
      itemClass = 'chapter-item--locked';
      stateHtml = '<span class="chapter-state">🔒</span>';
    }

    // Format badge colour variant
    const formatClass = {
      'Video': 'format-badge--video',
      'Infographic': 'format-badge--infographic',
      'Checklist': 'format-badge--checklist',
    }[ch.format] || '';

    const li = document.createElement('li');
    li.className = `chapter-item ${itemClass}`;
    li.setAttribute('role', clickable ? 'button' : 'listitem');
    if (clickable) li.setAttribute('tabindex', '0');

    li.innerHTML = `
      <span class="chapter-num">${i + 1}</span>
      <div class="chapter-info">
        <span class="chapter-title">${ch.title}</span>
        <div class="chapter-meta">
          <span class="format-badge ${formatClass}">${ch.format}</span>
          <span class="chapter-duration">${ch.duration}</span>
        </div>
        <span class="chapter-objective">${ch.objective}</span>
      </div>
      ${stateHtml}
    `;

    if (clickable) {
      li.onclick   = () => startLesson(currentCourse, i, 'course');
      li.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') startLesson(currentCourse, i, 'course'); };
    }
    list.appendChild(li);
  });
}

function updateCourseProgress() {
  const chapters = COURSES[currentCourse].chapters;
  const done  = chapters.filter(c => c.completed).length;
  const total = chapters.length;
  const pct   = Math.round((done / total) * 100);
  document.getElementById('course-progress-fill').style.width  = pct + '%';
  document.getElementById('course-progress-label').textContent =
    `${done} of ${total} lesson${total !== 1 ? 's' : ''} complete`;
}


// ============================================================
// PLAYER SETUP
// ============================================================

function setupPlayer(lesson) {
  // Format badge
  document.getElementById('player-format-badge').textContent = `${lesson.format} · ${lesson.duration}`;

  // Hook
  document.getElementById('hook-emoji').textContent   = lesson.hook.emoji;
  document.getElementById('hook-heading').textContent = lesson.hook.heading;
  document.getElementById('hook-fact').textContent    = lesson.hook.fact;

  // Core cards — render by type
  const container = document.getElementById('core-cards-container');
  container.innerHTML = '';
  lesson.cards.forEach((card, i) => {
    const el = renderCard(card);
    if (i === 0) el.classList.add('core-card--active');
    container.appendChild(el);
  });

  // Card dots
  const dotsContainer = document.getElementById('card-dots');
  dotsContainer.innerHTML = '';
  lesson.cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'card-dot' + (i === 0 ? ' card-dot--active' : '');
    dot.id = `card-dot-${i}`;
    dotsContainer.appendChild(dot);
  });

  updateCardUI(lesson, 0);

  // Quiz
  document.getElementById('quiz-question').textContent   = lesson.quiz.question;
  document.getElementById('quiz-feedback').textContent   = '';
  document.getElementById('quiz-continue-btn').style.display = 'none';
  quizAnswered = false;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  lesson.quiz.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className  = 'quiz-option';
    btn.textContent = opt.text;
    btn.onclick = () => submitQuiz(btn, opt.correct, lesson.quiz.feedback);
    optionsContainer.appendChild(btn);
  });

  // Anchor
  document.getElementById('anchor-emoji').textContent    = lesson.anchor.emoji;
  document.getElementById('anchor-takeaway').textContent = lesson.anchor.takeaway;
  document.getElementById('anchor-action').textContent   = lesson.anchor.action;

  // Reset progress bar
  document.getElementById('player-progress-fill').style.width = '0%';
}


// ============================================================
// CARD RENDERERS — dispatches by card.type
// ============================================================

function renderCard(card) {
  switch (card.type) {
    case 'video':       return renderVideoCard(card);
    case 'infographic': return renderInfographicCard(card);
    case 'checklist':   return renderChecklistCard(card);
    default:            return renderTextCard(card);
  }
}

function renderTextCard(card) {
  const div = document.createElement('div');
  div.className = 'core-card core-card--text';
  div.innerHTML = `
    <div class="core-card__emoji">${card.emoji}</div>
    <p class="core-card__text">${card.text}</p>
  `;
  return div;
}

function renderVideoCard(card) {
  const div = document.createElement('div');
  div.className = 'core-card core-card--video';
  div.setAttribute('role', 'button');
  div.setAttribute('tabindex', '0');
  div.setAttribute('aria-label', `Watch video: ${card.title}`);

  div.innerHTML = `
    <div class="vc-thumb" style="background:${card.gradient || '#1a56a0'}">
      <div class="vc-play" aria-hidden="true">▶</div>
      <div class="vc-center-emoji" aria-hidden="true">${card.emoji}</div>
      <span class="vc-duration">${card.duration}</span>
    </div>
    <div class="vc-meta">
      <p class="vc-title">▶ ${card.title}</p>
      <p class="vc-caption">${card.caption}</p>
    </div>
    <p class="vc-tap-hint">Tap to watch on YouTube →</p>
  `;

  const openVideo = () => {
    if (card.videoUrl) window.open(card.videoUrl, '_blank', 'noopener');
  };
  div.onclick = openVideo;
  div.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') openVideo(); };
  return div;
}

function renderInfographicCard(card) {
  const div = document.createElement('div');
  div.className = 'core-card core-card--infographic';
  div.innerHTML = `
    <div class="infog-wrapper">${card.html}</div>
    ${card.caption ? `<p class="core-card__caption">${card.caption}</p>` : ''}
  `;
  return div;
}

function renderChecklistCard(card) {
  const itemsHtml = card.items.map((item, i) => `
    <li class="cl-item" id="cli-${i}" onclick="toggleCheck(this)" role="checkbox" aria-checked="false" tabindex="0">
      <span class="cl-box" aria-hidden="true">○</span>
      <span class="cl-text">${item}</span>
    </li>
  `).join('');

  const div = document.createElement('div');
  div.className = 'core-card core-card--checklist';
  div.innerHTML = `
    <p class="cl-title">${card.title}</p>
    <ul class="cl-list" role="group" aria-label="Safety checklist">${itemsHtml}</ul>
    <p class="cl-hint">Tap each item to mark it checked ✓</p>
  `;
  return div;
}

// Called by checklist items
function toggleCheck(el) {
  const checked = el.classList.toggle('cl-item--checked');
  el.setAttribute('aria-checked', checked ? 'true' : 'false');
  el.querySelector('.cl-box').textContent = checked ? '✓' : '○';
}


// ============================================================
// PLAYER STEP NAVIGATION
// ============================================================

function showStep(step) {
  document.querySelectorAll('.player-sub').forEach(s => s.classList.remove('player-sub--active'));
  document.getElementById('player-' + step).classList.add('player-sub--active');
  document.getElementById('player-progress-fill').style.width = PROGRESS[step];
}

function nextStep() {
  const activeEl  = document.querySelector('.player-sub--active');
  const currentId = activeEl ? activeEl.id.replace('player-', '') : 'hook';
  const idx       = STEPS.indexOf(currentId);
  if (idx >= 0 && idx < STEPS.length - 1) {
    const next = STEPS[idx + 1];
    if (next === 'core') {
      cardIndex = 0;
      updateCardUI(COURSES[currentCourse].chapters[currentLesson], 0);
    }
    showStep(next);
  }
}

/** Go back one step — retrieval "← Back to cards" and anchor "← Back to quiz" */
function prevStep() {
  const activeEl  = document.querySelector('.player-sub--active');
  const currentId = activeEl ? activeEl.id.replace('player-', '') : 'hook';
  const idx       = STEPS.indexOf(currentId);
  if (idx > 0) {
    const prev = STEPS[idx - 1];
    if (prev === 'core') {
      // Land on the last card so they can review from the end forward
      const lesson = COURSES[currentCourse].chapters[currentLesson];
      cardIndex = lesson.cards.length - 1;
      updateCardUI(lesson, cardIndex);
    }
    showStep(prev);
  }
}


// ============================================================
// CORE CARDS — navigation
// ============================================================

function updateCardUI(lesson, idx) {
  const cards = document.querySelectorAll('.core-card');
  cards.forEach((card, i) => card.classList.toggle('core-card--active', i === idx));

  const dots = document.querySelectorAll('.card-dot');
  dots.forEach((dot, i) => {
    dot.className = 'card-dot';
    if (i === idx)     dot.classList.add('card-dot--active');
    else if (i < idx)  dot.classList.add('card-dot--done');
  });

  document.getElementById('card-counter-text').textContent =
    `Card ${idx + 1} of ${lesson.cards.length}`;

  // Prev button — goes to previous card, or back to Hook on the first card
  const prevBtn = document.getElementById('core-prev-btn');
  if (idx === 0) {
    prevBtn.textContent = '← Back to intro';
    prevBtn.onclick = () => showStep('hook');
  } else {
    prevBtn.textContent = '← Previous';
    prevBtn.onclick = prevCard;
  }

  // Next button — advances card or moves to retrieval on the last card
  const nextBtn = document.getElementById('core-next-btn');
  if (idx === lesson.cards.length - 1) {
    nextBtn.textContent = 'Check your learning →';
    nextBtn.onclick = () => showStep('retrieval');
  } else {
    nextBtn.textContent = 'Next card →';
    nextBtn.onclick = nextCard;
  }
}

function nextCard() {
  const lesson = COURSES[currentCourse].chapters[currentLesson];
  if (cardIndex < lesson.cards.length - 1) {
    cardIndex++;
    updateCardUI(lesson, cardIndex);
  }
}

function prevCard() {
  const lesson = COURSES[currentCourse].chapters[currentLesson];
  if (cardIndex > 0) {
    cardIndex--;
    updateCardUI(lesson, cardIndex);
  }
}


// ============================================================
// RETRIEVAL QUIZ
// ============================================================

function submitQuiz(selectedBtn, isCorrect, feedback) {
  if (quizAnswered) return;
  quizAnswered = true;

  document.querySelectorAll('.quiz-option').forEach(btn => { btn.disabled = true; });
  selectedBtn.classList.add(isCorrect ? 'quiz-option--correct' : 'quiz-option--wrong');
  document.getElementById('quiz-feedback').textContent = isCorrect ? feedback.correct : feedback.wrong;

  setTimeout(() => {
    document.getElementById('quiz-continue-btn').style.display = 'flex';
  }, 1200);
}


// ============================================================
// COMPLETION SCREEN
// ============================================================

function showCompletion() {
  const lesson = COURSES[currentCourse].chapters[currentLesson];
  document.getElementById('done-outcome').textContent = 'You now know: ' + lesson.outcome;

  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 7);
  const formatted = reviewDate.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
  document.getElementById('done-review-date').textContent = formatted;
  document.getElementById('done-back-btn').textContent =
    playerSource === 'home' ? '← Back to home' : '← Back to course';

  showScreen('done');
}


// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildCourseTabs();
  buildChapterList();
  updateCourseProgress();
  updateHomeCard();
  // Show course count on home tile
  const sub = document.getElementById('tile-course-count');
  if (sub) sub.textContent = `${COURSES.length} courses available`;
  showScreen('home');
});
