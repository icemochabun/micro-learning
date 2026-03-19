/* ============================================================
   LEARNOW — main.js
   Handles: login/logout, role views, module player, all format types
   ============================================================ */

/* === STATE === */
var currentRole      = null;
var currentModule    = null;
var staffQuizScore   = 0;
var staffRefCard     = 1;
var seniorsQuizScore = 0;
var seniorsInfoCard  = 1;
var volRefCard       = 1;
var branchPath       = null;


/* ============================================================
   LOGIN / LOGOUT
   ============================================================ */

function login(role) {
  currentRole = role;

  /* Hide login screen */
  document.getElementById('login-screen').style.display = 'none';

  /* Show app header with role chip */
  var header = document.getElementById('app-header');
  header.classList.remove('app-header--hidden');

  var chip   = document.getElementById('header-role-chip');
  var labels = { staff: 'Care Staff', seniors: 'Senior Learner', volunteers: 'Volunteer' };
  chip.textContent = labels[role];
  chip.className   = 'app-header__role-chip app-header__role-chip--' + role;

  /* Show role view, hide others */
  document.querySelectorAll('.role-view').forEach(function(v) {
    v.classList.add('role-view--hidden');
  });
  var view = document.getElementById('view-' + role);
  if (view) view.classList.remove('role-view--hidden');

  backToDashboard(role);
}

function logout() {
  document.getElementById('app-header').classList.add('app-header--hidden');
  document.querySelectorAll('.role-view').forEach(function(v) {
    v.classList.add('role-view--hidden');
  });
  currentRole   = null;
  currentModule = null;
  document.getElementById('login-screen').style.display = '';
}


/* ============================================================
   NAVIGATION HELPERS
   ============================================================ */

function backToDashboard(role) {
  currentModule = null;
  var ids = screenIds(role);
  hide(ids.player);
  hide(ids.done);
  show(ids.dashboard);
}

function showPlayerScreen(role) {
  var ids = screenIds(role);
  hide(ids.dashboard);
  hide(ids.done);
  show(ids.player);
}

function showDone(role, title, msg) {
  var ids = screenIds(role);
  hide(ids.dashboard);
  hide(ids.player);
  show(ids.done);
  var el = document.getElementById(ids.doneTitle);
  if (el && title) el.textContent = title;
  el = document.getElementById(ids.doneMsg);
  if (el && msg !== undefined) el.textContent = msg;
}

function setProgress(role, pct) {
  var fill = document.getElementById(screenIds(role).barFill);
  if (fill) fill.style.width = pct + '%';
}

function screenIds(role) {
  if (role === 'staff') return {
    dashboard: 'staff-dashboard', player: 'staff-player', done: 'staff-done',
    doneTitle: 'staff-done-title', doneMsg: 'staff-done-msg', barFill: 'staff-bar-fill'
  };
  if (role === 'seniors') return {
    dashboard: 'seniors-dashboard', player: 'seniors-player', done: 'seniors-done',
    doneTitle: 'seniors-done-title', doneMsg: 'seniors-done-msg', barFill: 'seniors-bar-fill'
  };
  return { /* volunteers */
    dashboard: 'vol-dashboard', player: 'vol-player', done: 'vol-done',
    doneTitle: 'vol-done-title', doneMsg: 'vol-done-msg', barFill: 'vol-bar-fill'
  };
}

function show(id) {
  var el = document.getElementById(id);
  if (el) {
    el.classList.remove('dash-screen--hidden', 'player-screen--hidden', 'done-screen--hidden',
                        'role-view--hidden', 'player-sub--hidden', 'format-section--hidden');
  }
}

function hide(id) {
  var el = document.getElementById(id);
  if (!el) return;
  if (el.classList.contains('dash-screen'))    el.classList.add('dash-screen--hidden');
  if (el.classList.contains('player-screen'))  el.classList.add('player-screen--hidden');
  if (el.classList.contains('done-screen'))    el.classList.add('done-screen--hidden');
  if (el.classList.contains('role-view'))      el.classList.add('role-view--hidden');
  if (el.classList.contains('player-sub'))     el.classList.add('player-sub--hidden');
  if (el.classList.contains('format-section')) el.classList.add('format-section--hidden');
}

function hideSub(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('player-sub--hidden');
}

function showSub(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('player-sub--hidden');
}

function resetQuizOptions(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  c.querySelectorAll('.quiz-option').forEach(function(o) {
    o.disabled = false;
    o.classList.remove('quiz-option--correct', 'quiz-option--wrong');
    o.setAttribute('aria-pressed', 'false');
  });
}

function clearFeedback(id) {
  var el = document.getElementById(id);
  if (el) { el.textContent = ''; el.className = 'quiz-feedback'; }
}

function resetSubScreens(sectionId, firstSubId) {
  var section = document.getElementById(sectionId);
  if (!section) return;
  section.querySelectorAll('.player-sub').forEach(function(sub) {
    sub.classList.add('player-sub--hidden');
  });
  showSub(firstSubId);
}


/* ============================================================
   LAUNCH MODULE (dispatcher)
   ============================================================ */

function launchModule(role, moduleId) {
  currentModule = moduleId;

  /* Reset and show player */
  resetModule(role, moduleId);
  showPlayerScreen(role);

  /* Hide all format sections in this role's player */
  var playerId = role === 'volunteers' ? 'vol-player' : role + '-player';
  var player   = document.getElementById(playerId);
  if (!player) return;
  player.querySelectorAll('.format-section').forEach(function(s) {
    s.classList.add('format-section--hidden');
  });

  /* Show the requested format section */
  var map = {
    staff:      { scenario: 'staff-scenario',    quiz: 'staff-quiz',          reference: 'staff-reference'    },
    seniors:    { wizard:   'seniors-wizard',     quiz: 'seniors-quiz',        infographic: 'seniors-infographic' },
    volunteers: { culture:  'vol-culture',        branching: 'vol-branching',  reference: 'vol-reference'      }
  };
  var sectionId = map[role] && map[role][moduleId];
  if (sectionId) {
    var section = document.getElementById(sectionId);
    if (section) section.classList.remove('format-section--hidden');
  }

  setProgress(role, 0);
}

function resetModule(role, moduleId) {
  if (role === 'staff') {
    if (moduleId === 'scenario') {
      resetSubScreens('staff-scenario', 'staff-s-hook');
      resetQuizOptions('staff-scenario-options');
      clearFeedback('staff-scenario-feedback');
    } else if (moduleId === 'quiz') {
      staffQuizScore = 0;
      resetSubScreens('staff-quiz', 'staff-q-q1');
      ['staff-quiz-q1-options','staff-quiz-q2-options','staff-quiz-q3-options'].forEach(resetQuizOptions);
      ['staff-quiz-q1-feedback','staff-quiz-q2-feedback','staff-quiz-q3-feedback'].forEach(clearFeedback);
    } else if (moduleId === 'reference') {
      staffRefCard = 1;
      resetSubScreens('staff-reference', 'staff-r-c1');
    }
  } else if (role === 'seniors') {
    if (moduleId === 'wizard') {
      resetSubScreens('seniors-wizard', 'seniors-w-step1');
      clearFeedback('seniors-wizard-feedback');
      var yes = document.getElementById('seniors-yes');
      var no  = document.getElementById('seniors-no');
      if (yes) { yes.disabled = false; yes.classList.remove('quiz-option--correct'); }
      if (no)  { no.disabled  = false; no.classList.remove('quiz-option--correct');  }
    } else if (moduleId === 'quiz') {
      seniorsQuizScore = 0;
      resetSubScreens('seniors-quiz', 'seniors-q-q1');
      ['seniors-quiz-q1-options','seniors-quiz-q2-options'].forEach(resetQuizOptions);
      ['seniors-quiz-q1-feedback','seniors-quiz-q2-feedback'].forEach(clearFeedback);
    } else if (moduleId === 'infographic') {
      seniorsInfoCard = 1;
      resetSubScreens('seniors-infographic', 'seniors-i-tip1');
    }
  } else if (role === 'volunteers') {
    if (moduleId === 'culture') {
      resetSubScreens('vol-culture', 'vol-c-impact');
      resetQuizOptions('vol-culture-options');
      clearFeedback('vol-culture-feedback');
    } else if (moduleId === 'branching') {
      branchPath = null;
      resetSubScreens('vol-branching', 'vol-b-setup');
    } else if (moduleId === 'reference') {
      volRefCard = 1;
      resetSubScreens('vol-reference', 'vol-r-c1');
    }
  }
}


/* ============================================================
   FORMAT: SCENARIO — Care Staff / Delirium Signs
   ============================================================ */

function scenarioNext(step) {
  if (step === 1) {
    setProgress('staff', 33);
    hideSub('staff-s-hook');
    showSub('staff-s-core');
  } else if (step === 2) {
    setProgress('staff', 66);
    hideSub('staff-s-core');
    showSub('staff-s-quiz');
  }
}

function staffScenarioAnswer(btn, isCorrect) {
  var options  = document.getElementById('staff-scenario-options');
  var feedback = document.getElementById('staff-scenario-feedback');
  options.querySelectorAll('.quiz-option').forEach(function(o) {
    o.disabled = true; o.setAttribute('aria-pressed', 'false');
  });
  btn.setAttribute('aria-pressed', 'true');

  if (isCorrect) {
    btn.classList.add('quiz-option--correct');
    feedback.textContent = 'Correct. A sudden change — even quiet withdrawal — is a red flag. Report immediately.';
    feedback.className   = 'quiz-feedback quiz-feedback--correct';
    setTimeout(function() {
      setProgress('staff', 100);
      hideSub('staff-s-quiz');
      showSub('staff-s-anchor');
    }, 1800);
  } else {
    btn.classList.add('quiz-option--wrong');
    feedback.textContent = 'Not quite. Sudden changes — even if she seems just quiet — should be reported immediately. Delirium can worsen fast.';
    feedback.className   = 'quiz-feedback quiz-feedback--wrong';
    options.querySelectorAll('.quiz-option').forEach(function(o) {
      if (o.getAttribute('onclick') && o.getAttribute('onclick').includes('true')) {
        o.classList.add('quiz-option--correct');
      }
    });
    setTimeout(function() {
      setProgress('staff', 100);
      hideSub('staff-s-quiz');
      showSub('staff-s-anchor');
    }, 2400);
  }
}


/* ============================================================
   FORMAT: QUICK QUIZ — Care Staff / Falls Prevention
   ============================================================ */

function staffQuizAnswer(btn, isCorrect, qId) {
  var container = document.getElementById('staff-quiz-' + qId + '-options');
  var feedback  = document.getElementById('staff-quiz-' + qId + '-feedback');
  if (!container || !feedback) return;

  container.querySelectorAll('.quiz-option').forEach(function(o) {
    o.disabled = true; o.setAttribute('aria-pressed', 'false');
  });
  btn.setAttribute('aria-pressed', 'true');

  if (isCorrect) {
    staffQuizScore++;
    btn.classList.add('quiz-option--correct');
    feedback.textContent = 'Correct!';
    feedback.className   = 'quiz-feedback quiz-feedback--correct';
  } else {
    btn.classList.add('quiz-option--wrong');
    feedback.textContent = 'Not quite — see the correct answer highlighted.';
    feedback.className   = 'quiz-feedback quiz-feedback--wrong';
    container.querySelectorAll('.quiz-option').forEach(function(o) {
      if (o.getAttribute('onclick') && o.getAttribute('onclick').includes('true')) {
        o.classList.add('quiz-option--correct');
      }
    });
  }

  var delay = isCorrect ? 1200 : 1800;
  setTimeout(function() {
    if (qId === 'q1') {
      setProgress('staff', 33); hideSub('staff-q-q1'); showSub('staff-q-q2');
    } else if (qId === 'q2') {
      setProgress('staff', 66); hideSub('staff-q-q2'); showSub('staff-q-q3');
    } else if (qId === 'q3') {
      setProgress('staff', 100);
      hideSub('staff-q-q3');
      var badge = document.getElementById('staff-quiz-score-badge');
      var msg   = document.getElementById('staff-quiz-score-msg');
      if (badge) badge.textContent = staffQuizScore + ' / 3';
      if (msg) {
        if (staffQuizScore === 3) msg.textContent = 'Excellent — all correct. You\'re clear on the three key fall-risk principles.';
        else if (staffQuizScore >= 2) msg.textContent = '2 out of 3. Review the question you missed before your next shift.';
        else msg.textContent = '1 out of 3. Take a moment to review the falls prevention protocol.';
      }
      showSub('staff-q-score');
    }
  }, delay);
}


/* ============================================================
   FORMAT: REFERENCE CARD — Care Staff / PPE Protocol
   ============================================================ */

function staffRefNext() {
  if (staffRefCard === 1) {
    setProgress('staff', 50); hideSub('staff-r-c1'); showSub('staff-r-c2'); staffRefCard = 2;
  } else if (staffRefCard === 2) {
    setProgress('staff', 100); hideSub('staff-r-c2'); showSub('staff-r-c3'); staffRefCard = 3;
  }
}


/* ============================================================
   FORMAT: WIZARD — Seniors / Staying Hydrated
   ============================================================ */

function wizardNext(step) {
  if (step === 1) {
    setProgress('seniors', 50);
    hideSub('seniors-w-step1');
    showSub('seniors-w-step2');
  }
}

function seniorsWizardAnswer(btn, answer) {
  var yes = document.getElementById('seniors-yes');
  var no  = document.getElementById('seniors-no');
  var fb  = document.getElementById('seniors-wizard-feedback');
  [yes, no].forEach(function(b) { if (b) b.disabled = true; });
  btn.classList.add('quiz-option--correct');
  if (answer === 'yes') {
    fb.textContent = '🌟 Great habit! Keeping water nearby makes it easy to stay on track.';
  } else {
    fb.textContent = '💧 That\'s okay. Try one glass when you wake up — you\'ll get there.';
  }
  fb.className = 'quiz-feedback quiz-feedback--correct';
  setTimeout(function() {
    setProgress('seniors', 100);
    hideSub('seniors-w-step2');
    showSub('seniors-w-step3');
  }, 1800);
}


/* ============================================================
   FORMAT: QUIZ — Seniors / My Medications
   ============================================================ */

function seniorsQuizAnswer(btn, isCorrect, qId) {
  var container = document.getElementById('seniors-quiz-' + qId + '-options');
  var feedback  = document.getElementById('seniors-quiz-' + qId + '-feedback');
  if (!container || !feedback) return;

  container.querySelectorAll('.quiz-option').forEach(function(o) {
    o.disabled = true; o.setAttribute('aria-pressed', 'false');
  });
  btn.setAttribute('aria-pressed', 'true');

  if (isCorrect) {
    seniorsQuizScore++;
    btn.classList.add('quiz-option--correct');
    feedback.textContent = 'That\'s right! Well done.';
    feedback.className   = 'quiz-feedback quiz-feedback--correct';
  } else {
    btn.classList.add('quiz-option--wrong');
    feedback.textContent = 'Not quite — the correct answer is highlighted above.';
    feedback.className   = 'quiz-feedback quiz-feedback--wrong';
    container.querySelectorAll('.quiz-option').forEach(function(o) {
      if (o.getAttribute('onclick') && o.getAttribute('onclick').includes('true')) {
        o.classList.add('quiz-option--correct');
      }
    });
  }

  var delay = isCorrect ? 1200 : 1800;
  setTimeout(function() {
    if (qId === 'q1') {
      setProgress('seniors', 50); hideSub('seniors-q-q1'); showSub('seniors-q-q2');
    } else if (qId === 'q2') {
      setProgress('seniors', 100); hideSub('seniors-q-q2'); showSub('seniors-q-score');
    }
  }, delay);
}


/* ============================================================
   FORMAT: INFOGRAPHIC (TIP CARDS) — Seniors / Daily Movement
   ============================================================ */

function seniorsInfoNext() {
  if (seniorsInfoCard === 1) {
    setProgress('seniors', 50); hideSub('seniors-i-tip1'); showSub('seniors-i-tip2'); seniorsInfoCard = 2;
  } else if (seniorsInfoCard === 2) {
    setProgress('seniors', 100); hideSub('seniors-i-tip2'); showSub('seniors-i-tip3'); seniorsInfoCard = 3;
  }
}


/* ============================================================
   FORMAT: CULTURE/STORY — Volunteers / Our Mission
   ============================================================ */

function cultureNext(step) {
  if (step === 1) {
    setProgress('volunteers', 50); hideSub('vol-c-impact'); showSub('vol-c-mission');
  } else if (step === 2) {
    setProgress('volunteers', 80); hideSub('vol-c-mission'); showSub('vol-c-reflect');
  }
}

function volCultureAnswer(btn, answer) {
  var options  = document.getElementById('vol-culture-options');
  var feedback = document.getElementById('vol-culture-feedback');
  options.querySelectorAll('.quiz-option').forEach(function(o) {
    o.disabled = true; o.setAttribute('aria-pressed', 'false');
  });
  btn.setAttribute('aria-pressed', 'true');
  btn.classList.add('quiz-option--correct');
  feedback.textContent = 'That same feeling — that\'s what your senior will feel when you show up consistently.';
  feedback.className   = 'quiz-feedback quiz-feedback--correct';
  setTimeout(function() {
    setProgress('volunteers', 100);
    showDone('volunteers', 'Module complete', 'You now understand why consistency is the core skill of befriending.');
  }, 1800);
}


/* ============================================================
   FORMAT: BRANCHING SCENARIO — Volunteers / First Visit
   ============================================================ */

function branchChoose(path) {
  branchPath = path;
  hideSub('vol-b-setup');
  setProgress('volunteers', 50);
  showSub(path === 'a' ? 'vol-b-consequence-a' : 'vol-b-consequence-b');
}

function branchNext() {
  hideSub(branchPath === 'a' ? 'vol-b-consequence-a' : 'vol-b-consequence-b');
  setProgress('volunteers', 90);
  showSub('vol-b-resolution');
}


/* ============================================================
   FORMAT: REFERENCE CARD — Volunteers / Quick Reference
   ============================================================ */

function volRefNext() {
  if (volRefCard === 1) {
    setProgress('volunteers', 50); hideSub('vol-r-c1'); showSub('vol-r-c2'); volRefCard = 2;
  } else if (volRefCard === 2) {
    setProgress('volunteers', 100); hideSub('vol-r-c2'); showSub('vol-r-c3'); volRefCard = 3;
  }
}


/* ============================================================
   DATE LABELS
   ============================================================ */

(function() {
  var locale = 'en-SG';
  var fmt    = { day: 'numeric', month: 'short', year: 'numeric' };
  function futureDate(days) {
    var d = new Date(); d.setDate(d.getDate() + days);
    return d.toLocaleDateString(locale, fmt);
  }
  var s = document.getElementById('staff-day7-date');
  if (s) s.textContent = futureDate(7);
  var v = document.getElementById('vol-day7-date');
  if (v) v.textContent = futureDate(30);
})();
