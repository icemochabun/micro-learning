# Google Stitch Prompts — LearnNow Micro-learning Platform
**Dashboard-first, 3-audience, multi-screen mobile app**

> **Note:** A fully built reference implementation now exists at `/ui/index.html`. These prompts are for generating alternative visual treatments in Google Stitch. The built app uses `tokens.css` + `style.css` + `main.js` — Claude Code can integrate any Stitch output by importing `tokens.css` and replacing hardcoded values.

---

## How to use these prompts

1. Paste **Prompt A** into Google Stitch (Experimental mode) → export HTML/CSS
2. Save output files to `/ui/stitch-output/`
3. Ask Claude Code to:
   - Add `@import '../tokens.css';` to the top of the generated CSS
   - Replace any hardcoded hex values with CSS variable names from `tokens.css`
   - Wire the toggle + screen nav by copying the `showView()` and `showScreen()` functions from `/ui/main.js`

---

## Prompt A — Full App (dashboard-first, all 3 views)

> Design a **mobile micro-learning platform app** (375px viewport) called **"LearnNow"** for social service organisations. The app uses a dark header with the logo top-left and a pill-style toggle bar beneath it: **"Care Staff" | "Seniors" | "Volunteers"**. Only one audience view is visible at a time — toggled via JavaScript.
>
> **Global rules (apply to all views):**
> - No inline styles — CSS classes only, CSS custom properties for all colours, font sizes, spacing
> - BEM class names: `.module-card__title`, `.toggle__tab--active`, `.badge--earned`
> - Semantic HTML: `<header>`, `<main>`, `<section>`, `<nav>`, `<button>`, `<article>`
> - HTML section comments: `<!-- === CARE STAFF VIEW === -->`, `<!-- === SENIORS VIEW === -->`, `<!-- === VOLUNTEERS VIEW === -->`
> - CSS block comments: `/* === CARE STAFF VIEW === */`
> - All interactive elements: minimum 44px touch target (56px for Seniors view)
> - Toggle tab active state: white pill on dark background, audience colour for text
> - Output: `index.html` + `style.css` (`:root` with all tokens) + `main.js` (toggle + screen navigation only)
>
> ---
>
> **Care Staff view** — `<section id="view-staff">` (default visible):
> - **Dashboard screen** (`id="staff-screen-1"`):
>   - Dark blue header (`--color-staff: #1a56a0`) with greeting ("Good morning, Nurul"), streak chip (🔥 4-day streak, pill shape, semi-transparent white background)
>   - White body section: "TODAY'S MODULE" label (uppercase, muted, 12px), module card (white, 1px border, 4px progress bar at top filled to 25%, module title "Delirium: Recognising the Early Signs", meta "Due today · 0% complete", full-width orange CTA button "Start module →")
>   - "PROTOCOL LIBRARY" label, 3-column grid of protocol cards (Fall Prevention, PPE Donning/Doffing, Dementia Comms — each with a circular icon background and label)
>   - "NEED A MOMENT?" resilience CTA: light blue background, left-aligned text, right-aligned leaf emoji
> - **Module screen** (`id="staff-screen-2"`, hidden): 4px blue progress bar at top; 4 sequential sub-screens (hook, core with numbered sign list, quiz with 3 options, anchor/completion) — show one at a time
> - **Completion screen** (`id="staff-screen-3"`, hidden): centred layout, green ✓ badge with glow, title, score chip, Day 7 date chip, next suggestion card
> - Colour: professional blue (`--color-staff: #1a56a0`); accent/CTA: orange (`--color-accent: #e85d2f`); tone: direct, clinical
>
> ---
>
> **Seniors view** — `<section id="view-seniors">` (hidden):
> - **Accessibility-first rules (non-negotiable):**
>   - Minimum font size: 18px (`--font-size-seniors-base: 1.125rem`)
>   - Minimum contrast: 4.5:1 for all text on background
>   - All tap targets: minimum 56px tall
>   - No abstract icons — text labels or concrete emoji only
>   - Wizard navigation: Back and Next both visible, full-width, clearly labelled
> - **Home screen** (`id="seniors-screen-1"`):
>   - Green header (`--color-seniors: #2e8b5a`) with large greeting and name (28px bold)
>   - Single module card with green border ("Staying Hydrated", "About 2 minutes", large green Start button)
>   - Peer note in soft green box: "Your neighbour Lily completed this today"
> - **Module screen** (`id="seniors-screen-2"`, hidden): wizard style — 2 sub-screens (content + yes/no question); progress bar in green; Back/Next both shown; one idea per screen; yes/no answer buttons 56px tall
> - **Done screen** (`id="seniors-screen-3"`, hidden): large ✅ emoji, "Well done!" heading at seniors font size, next topic note, large Back to home button
> - Colour: accessible green (`--color-seniors: #2e8b5a`); no decorative icons; tone: warm, plain language
>
> ---
>
> **Volunteers view** — `<section id="view-volunteers">` (hidden):
> - **Dashboard screen** (`id="volunteers-screen-1"`):
>   - Purple header (`--color-volunteers: #6e2d8e`) with mission blockquote card (italic text, left border accent, semi-transparent background)
>   - "YOUR ONBOARDING PROGRESS" label, 3-phase horizontal tracker: phase dots connected by lines (Admin ✓ filled purple → Culture active with glow ring → Task dimmed); phase labels below
>   - Current module card: phase label ("Phase 2 — Culture"), title "Our Mission & Values", meta, purple full-width Start button
>   - "YOUR BADGES" label, 3 badges in a row (Week 1 ✓ purple / Culture ○ grey / Task Ready ○ grey) with emoji icons and text labels
> - **Module screen** (`id="volunteers-screen-2"`, hidden): impact card (large stat "12" on gradient purple background), scenario question with 2 option buttons, anchor screen (values statement + "Unlock my badge →" button)
> - **Completion screen** (`id="volunteers-screen-3"`, hidden): "Badge unlocked 🎉" label, large purple badge icon with glow animation, "Phase 3 — Task training is now unlocked" status, next-up card, Back to dashboard button
> - Colour: warm purple (`--color-volunteers: #6e2d8e`); tone: welcoming, mission-driven; badge glow: CSS `@keyframes` animation
>
> ---
>
> **Output requirements:**
> - `index.html`: single file, all 3 views with all screens, section comments
> - `style.css`: all CSS variables in `:root`, BEM class names, `/* === SECTION === */` block comments, no inline styles
> - `main.js`: `showView(viewId)`, `showScreen(viewId, screenNum)` functions; toggle event listeners; guard clauses for missing elements
> - Each hidden view: `hidden` attribute in HTML + `.platform-view[hidden] { display: none; }` in CSS to prevent flex override

---

## Prompt B — Care Staff view only

> Design a **mobile clinical protocol dashboard** (375px viewport) for care staff at an Active Ageing Centre.
>
> **Screen 1 — Dashboard:**
> - Dark blue header with greeting, name ("Nurul"), and streak chip (🔥 pill badge)
> - White card: "CLINICAL PROTOCOL · SCENARIO · 3 MIN" label, "Delirium: Recognising the Early Signs" title, "Due today" meta, orange "Start module →" button (full-width, 44px)
> - 3-column protocol library grid: Fall Prevention, PPE Donning/Doffing, Dementia Comms
> - Resilience CTA: "NEED A MOMENT? / 3-minute compassion reset" on light blue background
>
> **Screen 2 — Module (4 sub-screens, show one at a time):**
> - Progress bar (4px, full width, blue)
> - Hook: scenario in bold heading + body + callout note + Continue button
> - Core: 3 numbered signs (circular numbered badges + description)
> - Quiz: scenario question + 3 answer buttons (correct highlights green, wrong highlights red)
> - Anchor: completion tag + action prompt + callout + "View completion" button
>
> Rules: no inline styles; CSS custom properties; BEM; section comments; semantic HTML.

---

## Prompt C — Seniors view only

> Design an **accessibility-first mobile learning home screen** (375px viewport) for a senior learner aged 60+ at a community centre.
>
> Accessibility rules (non-negotiable):
> - Minimum font size: 18px
> - Minimum contrast: 4.5:1 for all text
> - Tap targets: minimum 56px tall
> - No abstract icons — text or emoji only
> - One piece of information per screen
>
> Elements:
> - Green header with greeting ("Good morning,") and large name ("Mrs Tan", 28px bold)
> - Single module card with green border: "Today's topic" label, "Staying Hydrated" title, "About 2 minutes" duration, large green "Start →" button (56px)
> - Peer note card in soft green: "Your neighbour Lily completed this topic today"
>
> Module wizard screens:
> - Screen A: 💧 illustration placeholder, large heading, 2 sentences, Back + Next navigation (56px each)
> - Screen B: yes/no question ("Do you usually drink 6–8 glasses a day?"), two full-width buttons (✅ Yes / 💧 Not always), each 56px
> - Done: large ✅ emoji, "Well done!" heading, next topic note, Back to home button
>
> Rules: no inline styles; CSS custom properties; BEM; section comment `<!-- === SENIORS VIEW === -->`.

---

## Prompt D — Volunteers view only

> Design a **mobile volunteer onboarding dashboard** (375px viewport) for a volunteer at a social service organisation.
>
> Elements:
> - Purple header with mission blockquote card: italic quote in a semi-transparent bordered card ("Every visit you make changes someone's day.")
> - "YOUR ONBOARDING PROGRESS" label + 3-phase horizontal tracker: Admin (✓ purple filled) → connector line → Culture (active: purple ring glow) → connector → Task (3, dimmed)
> - Current module card: "Phase 2 — Culture" label, "Our Mission & Values" title, meta, purple "Start →" button
> - "YOUR BADGES" label + 3 badge items in a row: Week 1 (🌟 purple, earned), Culture (🎓 grey, locked), Task Ready (⭐ grey, locked)
>
> Module screens:
> - Impact card: large "12" stat on gradient purple card + label
> - Scenario: question heading + 2 option buttons
> - Anchor: completion message + "Unlock my badge →" button
>
> Completion screen:
> - "Badge unlocked 🎉" label, large purple 🎓 badge with CSS glow animation, phase tracker shows Task now highlighted, next-up card, Back to dashboard button
>
> Rules: no inline styles; CSS custom properties; BEM; section comment `<!-- === VOLUNTEERS VIEW === -->`.

---

## Prompt E — Completion + Day 7 spaced review teaser

> Design a **module completion screen** (375px viewport) for a care staff micro-learning app. This screen appears after the learner answers the final quiz question correctly.
>
> Elements:
> - Green ✓ badge (64px circle, green border, glow shadow: `box-shadow: 0 0 0 8px rgba(46,139,90,0.15)`) — centred
> - Title: "Delirium module complete" — bold, 22px
> - Subtitle: "Completed in 3 min · Score: 100% · Streak extended to 5 days 🔥"
> - Day 7 chip: pill shape, light blue background, "📆 Day 7 review: 26 Mar 2026" — date in bold
> - Spaced review preview card (greyed, dashed border):
>   - Label: "ARRIVES IN 7 DAYS" (muted, uppercase)
>   - Preview question (opacity 0.4): "Which of the following is NOT a sign of delirium?"
>   - 3 greyed option chips beneath (locked appearance)
>   - "🔒 Unlocks on 26 Mar" label at bottom
> - "Next protocol suggestion" card: label "Up next in your track" + module title + secondary button "Back to dashboard"
>
> Rules: no inline styles; CSS custom properties (use `--color-success`, `--color-primary-light`); BEM; no framework.

---

## After Stitch — Claude Code integration steps

1. Open the generated `style.css`
2. Add `@import '../tokens.css';` as the very first line
3. In `:root`, replace any hardcoded hex values with variable names from `tokens.css`
4. Copy `showView()` and `showScreen()` from `/ui/main.js` — paste at top of generated `main.js`
5. Add `.platform-view[hidden] { display: none; }` to CSS to prevent `display:flex` override
6. Tell Claude Code: "Import tokens.css into the Stitch output and replace hardcoded values with CSS variables"

The toggle, quiz logic, badge animation, and accessibility rules are all in the built reference at `/ui/index.html`.
