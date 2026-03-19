/* ============================================================
   MICRO-LEARNING EXPLAINER — main.js
   Handles: sample module navigation, quiz logic, module selector
   ============================================================ */

/* === MODULE SELECTOR === */
function loadModule(type) {
  // Hide all modules
  ['staff', 'seniors', 'volunteers'].forEach(function (id) {
    var el = document.getElementById('module-' + id);
    if (el) el.classList.add('sample-module--hidden');
  });

  // Show chosen module
  var target = document.getElementById('module-' + type);
  if (target) target.classList.remove('sample-module--hidden');

  // Update choice card states
  document.querySelectorAll('.module-choice').forEach(function (btn) {
    var isActive = btn.getAttribute('onclick').includes("'" + type + "'");
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    btn.classList.remove('module-choice--active', 'module-choice--active-seniors', 'module-choice--active-volunteers');
    if (isActive) {
      if (type === 'seniors') btn.classList.add('module-choice--active-seniors');
      else if (type === 'volunteers') btn.classList.add('module-choice--active-volunteers');
      else btn.classList.add('module-choice--active');
    }
  });

  // Reset the module to its first screen
  if (type === 'staff') resetModule();
  if (type === 'seniors') resetSeniorsModule();
  if (type === 'volunteers') resetVolModule();
}

/* === MODULE NAVIGATION (Care Staff) === */
function showScreen(screenNumber) {
  // Hide all screens
  const screens = document.querySelectorAll('.module-screen');
  screens.forEach(s => s.classList.add('module-screen--hidden'));

  // Show target screen
  const target = document.getElementById('screen-' + screenNumber);
  if (target) {
    target.classList.remove('module-screen--hidden');
    // Scroll module into view on mobile
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* === QUIZ LOGIC === */
function selectAnswer(button, isCorrect) {
  const optionsContainer = document.getElementById('quiz-options');
  const feedback = document.getElementById('quiz-feedback');

  // Disable all options after selection
  const allOptions = optionsContainer.querySelectorAll('.quiz-option');
  allOptions.forEach(opt => {
    opt.disabled = true;
    opt.setAttribute('aria-pressed', 'false');
  });

  // Style the selected answer
  if (isCorrect) {
    button.classList.add('quiz-option--correct');
    button.setAttribute('aria-pressed', 'true');
    feedback.textContent = 'Correct. A sudden change in behaviour or orientation is a red flag. Report immediately — early intervention reduces complications.';
    feedback.className = 'quiz-feedback quiz-feedback--correct';
    // Auto-advance to anchor screen after delay
    setTimeout(() => showScreen(4), 1800);
  } else {
    button.classList.add('quiz-option--wrong');
    button.setAttribute('aria-pressed', 'true');
    feedback.textContent = 'Not quite. Sudden changes — even if the resident seems just "quiet" — should be reported immediately. Delirium can worsen fast without intervention.';
    feedback.className = 'quiz-feedback quiz-feedback--wrong';
    // Show correct answer
    allOptions.forEach(opt => {
      if (opt.getAttribute('onclick').includes('true')) {
        opt.classList.add('quiz-option--correct');
      }
    });
    setTimeout(() => showScreen(4), 2400);
  }
}

/* === RESET MODULE === */
function resetModule() {
  // Re-enable quiz options
  const allOptions = document.querySelectorAll('.quiz-option');
  allOptions.forEach(opt => {
    opt.disabled = false;
    opt.classList.remove('quiz-option--correct', 'quiz-option--wrong');
    opt.setAttribute('aria-pressed', 'false');
  });

  // Clear feedback
  const feedback = document.getElementById('quiz-feedback');
  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
  }

  // Return to screen 1
  showScreen(1);
}

/* === SENIORS MODULE NAVIGATION === */
function showSeniorsScreen(screenNumber) {
  var screens = document.querySelectorAll('#module-seniors .module-screen');
  screens.forEach(function (s) { s.classList.add('module-screen--hidden'); });
  var target = document.getElementById('seniors-screen-' + screenNumber);
  if (target) {
    target.classList.remove('module-screen--hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function selectSeniorsAnswer(button, answer) {
  var yesBtn = document.getElementById('seniors-yes');
  var noBtn = document.getElementById('seniors-no');
  var feedback = document.getElementById('seniors-feedback');

  [yesBtn, noBtn].forEach(function (b) {
    if (b) { b.disabled = true; b.setAttribute('aria-pressed', 'false'); }
  });

  button.setAttribute('aria-pressed', 'true');
  button.classList.add('quiz-option--correct');

  if (answer === 'yes') {
    feedback.textContent = '🌟 Great habit! Keeping a water bottle nearby makes it easy to stay on track.';
  } else {
    feedback.textContent = '💧 That\'s okay. Try one glass when you wake up and one with each meal — you\'ll get there.';
  }
  feedback.className = 'quiz-feedback quiz-feedback--correct';

  setTimeout(function () { showSeniorsScreen(4); }, 1800);
}

function resetSeniorsModule() {
  var screens = document.querySelectorAll('#module-seniors .module-screen');
  screens.forEach(function (s, i) {
    s.classList.toggle('module-screen--hidden', i !== 0);
  });
  var yesBtn = document.getElementById('seniors-yes');
  var noBtn = document.getElementById('seniors-no');
  [yesBtn, noBtn].forEach(function (b) {
    if (b) {
      b.disabled = false;
      b.classList.remove('quiz-option--correct', 'quiz-option--wrong');
      b.setAttribute('aria-pressed', 'false');
    }
  });
  var feedback = document.getElementById('seniors-feedback');
  if (feedback) { feedback.textContent = ''; feedback.className = 'quiz-feedback'; }
}

/* === VOLUNTEERS MODULE NAVIGATION === */
function showVolScreen(screenNumber) {
  var screens = document.querySelectorAll('#module-volunteers .module-screen');
  screens.forEach(function (s) { s.classList.add('module-screen--hidden'); });
  var target = document.getElementById('vol-screen-' + screenNumber);
  if (target) {
    target.classList.remove('module-screen--hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function selectVolAnswer(button, isCorrect) {
  var container = document.getElementById('vol-quiz-options');
  var feedback = document.getElementById('vol-feedback');

  container.querySelectorAll('.quiz-option').forEach(function (opt) {
    opt.disabled = true;
    opt.setAttribute('aria-pressed', 'false');
  });

  button.setAttribute('aria-pressed', 'true');

  if (isCorrect) {
    button.classList.add('quiz-option--correct');
    feedback.textContent = 'Exactly right. A warm, unhurried greeting gives seniors time to feel safe. Patience is the skill.';
    feedback.className = 'quiz-feedback quiz-feedback--correct';
    setTimeout(function () { showVolScreen(4); }, 1800);
  } else {
    button.classList.add('quiz-option--wrong');
    feedback.textContent = 'Asking "what\'s wrong" right away can feel abrupt. Give her a warm greeting first and let her set the pace.';
    feedback.className = 'quiz-feedback quiz-feedback--wrong';
    container.querySelectorAll('.quiz-option').forEach(function (opt) {
      if (opt.getAttribute('onclick') && opt.getAttribute('onclick').includes('true')) {
        opt.classList.add('quiz-option--correct');
      }
    });
    setTimeout(function () { showVolScreen(4); }, 2400);
  }
}

function resetVolModule() {
  var screens = document.querySelectorAll('#module-volunteers .module-screen');
  screens.forEach(function (s, i) {
    s.classList.toggle('module-screen--hidden', i !== 0);
  });
  var container = document.getElementById('vol-quiz-options');
  if (container) {
    container.querySelectorAll('.quiz-option').forEach(function (opt) {
      opt.disabled = false;
      opt.classList.remove('quiz-option--correct', 'quiz-option--wrong');
      opt.setAttribute('aria-pressed', 'false');
    });
  }
  var feedback = document.getElementById('vol-feedback');
  if (feedback) { feedback.textContent = ''; feedback.className = 'quiz-feedback'; }
}

/* === JOURNEY TABS === */
(function () {
  const tabs = document.querySelectorAll('.journey-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs and hide all panels
      tabs.forEach(t => {
        t.classList.remove('journey-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.journey-panel').forEach(p => {
        p.classList.add('journey-panel--hidden');
      });

      // Activate clicked tab
      tab.classList.add('journey-tab--active');
      tab.setAttribute('aria-selected', 'true');

      // Show matching panel
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.remove('journey-panel--hidden');
    });
  });
})();

/* === ACTIVE NAV HIGHLIGHT === */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = '';
            link.style.background = '';
          });
          const active = document.querySelector('.nav__link[href="#' + entry.target.id + '"]');
          if (active) {
            active.style.color = 'var(--color-primary)';
            active.style.background = 'var(--color-primary-light)';
          }
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();

/* === DAY 7 / WEEK 2 / MONTH 2 DATE LABELS === */
(function () {
  var locale = 'en-SG';
  var fmt = { day: 'numeric', month: 'short', year: 'numeric' };

  function futureDate(days) {
    var d = new Date();
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString(locale, fmt);
  }

  var staffEl = document.getElementById('staff-day7-date');
  if (staffEl) staffEl.textContent = futureDate(7);

  var seniorsEl = document.getElementById('seniors-day7-date');
  if (seniorsEl) seniorsEl.textContent = futureDate(14);

  var volEl = document.getElementById('vol-day7-date');
  if (volEl) volEl.textContent = futureDate(30);
})();
