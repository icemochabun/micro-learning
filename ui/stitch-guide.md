# Stitch — Step-by-Step Guide

## Before you start
- Open [stitch.withgoogle.com](https://stitch.withgoogle.com)
- Switch to **Experimental mode** (Gemini 2.5 Pro) — required for image input and best code output

---

## Step 1 — Paste the main prompt

Copy **Prompt A** from `stitch-prompts.md` and paste it into the Stitch input field.

> Use Prompt A first. It generates all 3 views in one go.

---

## Step 2 — Check the output

Before exporting, visually confirm:

- [ ] Toggle bar shows 3 tabs: Care Staff / Seniors / Volunteers
- [ ] Care Staff view is active by default
- [ ] Seniors view has large text (18px+) and full-width buttons
- [ ] Volunteers view has the mission card, phase tracker, and badge row

**If a view looks wrong** → type a follow-up prompt, e.g.:
> *"The Seniors view buttons need to be taller — minimum 56px — and the text needs to be at least 18px"*

**If Stitch can't handle all 3 views** → start over using the focused prompts:
- Prompt B → Care Staff only
- Prompt C → Seniors only
- Prompt D → Volunteers only

---

## Step 3 — Export

Click **Export code** and download:

| File | Save to |
|---|---|
| `index.html` | `/ui/index.html` |
| `style.css` | `/ui/style.css` |
| `main.js` | `/ui/main.js` |

---

## Step 4 — Hand off to Claude Code

Open Claude Code in `/ui/` and run this prompt:

> *"Import tokens.css into the Stitch output and replace all hardcoded colour and font values with CSS variables from tokens.css"*

Claude Code will handle the rest.

---

## Quick reference

| Prompt | Use when |
|---|---|
| **A** | Starting fresh — generates all 3 views |
| **B** | Stitch struggled with Prompt A — Care Staff only |
| **C** | Stitch struggled with Prompt A — Seniors only |
| **D** | Stitch struggled with Prompt A — Volunteers only |
