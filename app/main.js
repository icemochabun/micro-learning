/* ============================================================
   main.js — Guided Learning micro-lesson prototype
   Audience: Seniors (Mr Muthu persona)
   Content source: AI-generated via backend Learning Academy
   ============================================================ */

// ============================================================
// COURSE DATA
// Mirrors the AI-generated structure from the backend:
//   Module → Chapter → Sections → Key Points / Quizzes
// ============================================================

const COURSE = {
  title: 'Introduction to Caregiving',
  chapters: [
    {
      id: 'ch1',
      title: 'Understanding the Role of a Caregiver',
      format: 'Tips',
      duration: '3 min',
      objective: 'Define what a caregiver does and the scope of their role',
      completed: false,

      // Hook → Chapter Overview + Section "Did you know?"
      hook: {
        emoji: '🤝',
        heading: 'What does a caregiver really do?',
        // Source: Section "Did you know?" field
        fact: 'Over half of caregivers report high levels of emotional strain due to their responsibilities.',
      },

      // Core cards → Section Key Points (one per card)
      cards: [
        { emoji: '👤', text: 'A caregiver assists individuals who cannot fully care for themselves.' },
        { emoji: '💊', text: 'Caregiving includes personal care, medical assistance, and advocacy.' },
        { emoji: '👥', text: 'There are three main types of caregivers: informal, formal, and professional.' },
      ],

      // Retrieval → Chapter Quizzes tab (repositioned after Core)
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

      // Anchor → Key Point reframed as rule + action
      anchor: {
        emoji: '⭐',
        takeaway: 'Caregiving means supporting the whole person — body, mind, and voice.',
        action: 'When you meet someone who needs help, ask: "What would make today easier for you?"',
      },

      // Completion → one-sentence outcome
      outcome: 'A caregiver supports people with personal care, medical needs, and advocacy.',
    },

    {
      id: 'ch2',
      title: 'Ethical and Emotional Responsibilities',
      format: 'Tips',
      duration: '4 min',
      objective: 'Understand how to communicate with care, empathy, and respect',
      completed: false,

      hook: {
        emoji: '💙',
        heading: 'Why does how you speak matter as much as what you do?',
        fact: 'Caregivers who communicate with empathy report significantly higher satisfaction from the people they care for.',
      },

      cards: [
        { emoji: '👂', text: 'Active listening means giving your full attention without interrupting.' },
        { emoji: '🤲', text: 'Empathy means understanding what the person feels — not just what they say.' },
        { emoji: '🛡️', text: 'Respecting privacy and dignity is a core ethical responsibility of all caregivers.' },
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
  ],
};


// ============================================================
// STATE
// ============================================================
let currentLesson = 0;   // index into COURSE.chapters
let playerSource  = 'course'; // 'home' | 'course' — determines back nav
let cardIndex     = 0;   // current card in Core phase
let quizAnswered  = false;

// Player step order and progress bar positions
const STEPS    = ['hook', 'core', 'retrieval', 'anchor'];
const PROGRESS = { hook: '15%', core: '45%', retrieval: '75%', anchor: '95%' };


// ============================================================
// NAVIGATION
// ============================================================

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('screen--active'));
  document.getElementById('screen-' + id).classList.add('screen--active');
}

/** Called by Today's Lesson "Start" button — auto-detects next incomplete lesson */
function startLessonFromHome() {
  const idx = getNextLessonIndex();
  if (idx >= 0) startLesson(idx, 'home');
}

/** Open the micro-player for a specific chapter */
function startLesson(index, source) {
  currentLesson = index;
  playerSource  = source || 'course';
  cardIndex     = 0;
  quizAnswered  = false;
  setupPlayer(COURSE.chapters[index]);
  showScreen('player');
  showStep('hook');
}

/** ← button inside player */
function exitPlayer() {
  showScreen(playerSource === 'home' ? 'home' : 'course');
}

/** Back button on completion screen — marks lesson done and returns */
function finishLesson() {
  COURSE.chapters[currentLesson].completed = true;
  buildChapterList();
  updateCourseProgress();
  updateHomeCard();
  showScreen(playerSource === 'home' ? 'home' : 'course');
}

/** Returns the index of the first incomplete chapter, or -1 if all done */
function getNextLessonIndex() {
  return COURSE.chapters.findIndex(c => !c.completed);
}


// ============================================================
// HOME SCREEN — update Today's Lesson card dynamically
// ============================================================

function updateHomeCard() {
  const idx = getNextLessonIndex();
  if (idx < 0) {
    // All lessons complete
    document.getElementById('home-lesson-title').textContent = 'All lessons complete! 🎉';
    document.getElementById('home-lesson-sub').textContent = 'Great work — review arrives in 7 days';
    document.getElementById('home-start-btn').textContent  = 'Revisit course →';
    document.getElementById('home-start-btn').onclick = () => showScreen('course');
  } else {
    const lesson = COURSE.chapters[idx];
    document.getElementById('home-lesson-title').textContent = lesson.title;
    document.getElementById('home-lesson-sub').textContent  = `${lesson.format} · ${lesson.duration}`;
    document.getElementById('home-start-btn').textContent   = 'Start today\'s lesson →';
    document.getElementById('home-start-btn').onclick = startLessonFromHome;
  }
}


// ============================================================
// PLAYER SETUP — populate all sub-screens for one chapter
// ============================================================

function setupPlayer(lesson) {
  // --- Format badge ---
  document.getElementById('player-format-badge').textContent = `${lesson.format} · ${lesson.duration}`;

  // --- Hook ---
  document.getElementById('hook-emoji').textContent   = lesson.hook.emoji;
  document.getElementById('hook-heading').textContent = lesson.hook.heading;
  document.getElementById('hook-fact').textContent    = lesson.hook.fact;

  // --- Core cards ---
  const cardsContainer = document.getElementById('core-cards-container');
  cardsContainer.innerHTML = '';
  lesson.cards.forEach((card, i) => {
    const div = document.createElement('div');
    div.className = 'core-card' + (i === 0 ? ' core-card--active' : '');
    div.innerHTML = `
      <div class="core-card__emoji">${card.emoji}</div>
      <p class="core-card__text">${card.text}</p>
    `;
    cardsContainer.appendChild(div);
  });

  // --- Card dots ---
  const dotsContainer = document.getElementById('card-dots');
  dotsContainer.innerHTML = '';
  lesson.cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'card-dot' + (i === 0 ? ' card-dot--active' : '');
    dot.id = `card-dot-${i}`;
    dotsContainer.appendChild(dot);
  });

  updateCardUI(lesson, 0);

  // --- Quiz ---
  document.getElementById('quiz-question').textContent = lesson.quiz.question;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-continue-btn').style.display = 'none';
  quizAnswered = false;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  lesson.quiz.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt.text;
    btn.onclick = () => submitQuiz(btn, opt.correct, lesson.quiz.feedback);
    optionsContainer.appendChild(btn);
  });

  // --- Anchor ---
  document.getElementById('anchor-emoji').textContent    = lesson.anchor.emoji;
  document.getElementById('anchor-takeaway').textContent = lesson.anchor.takeaway;
  document.getElementById('anchor-action').textContent   = lesson.anchor.action;

  // Reset progress bar
  document.getElementById('player-progress-fill').style.width = '0%';
}


// ============================================================
// PLAYER STEP NAVIGATION
// ============================================================

function showStep(step) {
  document.querySelectorAll('.player-sub').forEach(s => s.classList.remove('player-sub--active'));
  document.getElementById('player-' + step).classList.add('player-sub--active');
  document.getElementById('player-progress-fill').style.width = PROGRESS[step];
}

/** Advance to the next step in sequence (used by Hook "Next →" and Retrieval "Continue →") */
function nextStep() {
  const activeEl   = document.querySelector('.player-sub--active');
  const currentId  = activeEl ? activeEl.id.replace('player-', '') : 'hook';
  const idx        = STEPS.indexOf(currentId);
  if (idx >= 0 && idx < STEPS.length - 1) {
    const next = STEPS[idx + 1];
    if (next === 'core') {
      cardIndex = 0;
      updateCardUI(COURSE.chapters[currentLesson], 0);
    }
    showStep(next);
  }
}


// ============================================================
// CORE CARDS
// ============================================================

function updateCardUI(lesson, idx) {
  // Show/hide cards
  const cards = document.querySelectorAll('.core-card');
  cards.forEach((card, i) => card.classList.toggle('core-card--active', i === idx));

  // Update dots
  const dots = document.querySelectorAll('.card-dot');
  dots.forEach((dot, i) => {
    dot.className = 'card-dot';
    if (i === idx) dot.classList.add('card-dot--active');
    else if (i < idx) dot.classList.add('card-dot--done');
  });

  // Counter label
  document.getElementById('card-counter-text').textContent =
    `Card ${idx + 1} of ${lesson.cards.length}`;

  // Next button: last card triggers retrieval
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
  const lesson = COURSE.chapters[currentLesson];
  if (cardIndex < lesson.cards.length - 1) {
    cardIndex++;
    updateCardUI(lesson, cardIndex);
  }
}


// ============================================================
// RETRIEVAL QUIZ
// ============================================================

function submitQuiz(selectedBtn, isCorrect, feedback) {
  if (quizAnswered) return;
  quizAnswered = true;

  // Disable all options
  document.querySelectorAll('.quiz-option').forEach(btn => { btn.disabled = true; });

  // Highlight selected
  selectedBtn.classList.add(isCorrect ? 'quiz-option--correct' : 'quiz-option--wrong');

  // Show feedback
  document.getElementById('quiz-feedback').textContent =
    isCorrect ? feedback.correct : feedback.wrong;

  // Reveal continue button after brief pause so feedback is read first
  setTimeout(() => {
    const continueBtn = document.getElementById('quiz-continue-btn');
    continueBtn.style.display = 'flex';
  }, 1200);
}


// ============================================================
// COMPLETION SCREEN
// ============================================================

function showCompletion() {
  const lesson = COURSE.chapters[currentLesson];

  // Outcome
  document.getElementById('done-outcome').textContent = 'You now know: ' + lesson.outcome;

  // Review date: today + 7 days, formatted for seniors (clear and readable)
  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 7);
  const formatted = reviewDate.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  document.getElementById('done-review-date').textContent = formatted;

  // Back button label
  document.getElementById('done-back-btn').textContent =
    playerSource === 'home' ? '← Back to home' : '← Back to course';

  showScreen('done');
}


// ============================================================
// COURSE LIST
// ============================================================

function buildChapterList() {
  const list = document.getElementById('chapter-list');
  list.innerHTML = '';

  COURSE.chapters.forEach((ch, i) => {
    const prevDone    = i === 0 || COURSE.chapters[i - 1].completed;
    const isAccessible = ch.completed || prevDone;

    // State classification
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

    const li = document.createElement('li');
    li.className = `chapter-item ${itemClass}`;
    li.setAttribute('role', clickable ? 'button' : 'listitem');
    if (clickable) li.setAttribute('tabindex', '0');

    li.innerHTML = `
      <span class="chapter-num">${i + 1}</span>
      <div class="chapter-info">
        <span class="chapter-title">${ch.title}</span>
        <div class="chapter-meta">
          <span class="format-badge">${ch.format}</span>
          <span class="chapter-duration">${ch.duration}</span>
        </div>
        <span class="chapter-objective" style="font-size:var(--font-size-sm);color:var(--color-text-muted);margin-top:2px;">${ch.objective}</span>
      </div>
      ${stateHtml}
    `;

    if (clickable) {
      li.onclick = () => startLesson(i, 'course');
      li.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') startLesson(i, 'course'); };
    }

    list.appendChild(li);
  });
}

function updateCourseProgress() {
  const done  = COURSE.chapters.filter(c => c.completed).length;
  const total = COURSE.chapters.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('course-progress-fill').style.width = pct + '%';
  document.getElementById('course-progress-label').textContent =
    `${done} of ${total} lesson${total !== 1 ? 's' : ''} complete`;
}


// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildChapterList();
  updateCourseProgress();
  updateHomeCard();
  showScreen('home');
});
