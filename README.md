



## Accessibility pipeline using AXE-Core

# a11y-ci | Main :
- Initial — Broken (2019 HTML/CSS)    → 46 accessibility errors
  
# cd-dev | Branch (feature/progression) :
- Lint-30                             → First round of HTML/CSS fixes applied (~30%)
- Lint-75                             → Second round of HTML/CSS fixes applied (~75%)
- WCAG 2.0                            → WCAG 2.0 AA issues fixed
- WCAG 2.1                            → WCAG 2.1 AA issues fixed
- Final — Remediated (2026)           → Fully WCAG 2.2 AA compliant

  
# a11y-ci — Accessibility Pipeline with GitHub Actions

[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Accessibility%20Pipeline-blue)](https://github.com/marcusnapoleon/a11y-ci/actions)
[![WCAG](https://img.shields.io/badge/WCAG-2.2%20AA-green)](https://www.w3.org/TR/WCAG22/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen)](https://developer.chrome.com/docs/lighthouse/overview/)

Automated accessibility testing pipeline using **Lighthouse**, **axe-core**, and **HTML/CSS linting**. Demonstrates progressive remediation from 46 accessibility errors to full WCAG 2.2 AA compliance.

---

## 📋 Project Overview

This project showcases a complete accessibility remediation workflow:

- **Baseline** — A broken HTML/CSS form with 46 accessibility errors
- **Progressive Fixes** — Three remediation stages (Lint-30, Lint-75, WCAG 2.0/2.1)
- **Final Result** — Fully WCAG 2.2 AA compliant with 100/100 Lighthouse accessibility score
- **CI/CD Automation** — GitHub Actions pipeline that tests every pull request

### Accessibility Standards Covered

| Standard | Tool | Status |
|----------|------|--------|
| WCAG 2.0 AA | axe-core | ✅ Pass |
| WCAG 2.1 AA | axe-core | ✅ Pass |
| WCAG 2.2 AA | axe-core | ✅ Pass |
| HTML Structure | htmlhint | ✅ Pass |
| CSS Quality | stylelint | ✅ Pass |

---

## 🏗️ Repository Structure
a11y-ci/
├── Inaccessible/ # Baseline broken version (main branch)
│ ├── index.html
│ └── css/style.css
├── .stylelintrc.json # CSS linting rules
└── README.md


### Branch Strategy

| Branch | Purpose |
|--------|---------|
| **main** | Broken baseline (`Inaccessible/`) — shows initial state |
| **cd-dev** | Fixed versions — all remediation folders |

### Remediation Folders (cd-dev branch)

| Folder | Description |
|--------|-------------|
| `Lint-30/` | First round of HTML/CSS fixes (~30% improvement) |
| `Lint-75/` | Second round of HTML/CSS fixes (~75% improvement) |
| `wcag-2.0/` | WCAG 2.0 AA issues fixed |
| `wcag-2.1/` | WCAG 2.1 AA issues fixed |
| `Accessible/` | Final version — fully WCAG 2.2 AA compliant |

---

## 🚀🚀 GitHub Actions Pipeline

The workflow runs on every pull request to `main`:

┌─────────┐   ┌─────────┐   ┌────────────┐
│  LINT   | → │   AXE   │ → │ LIGHTHOUSE │
│ (10s)   │   |  (30s)  │   │   (60s)    │
└─────────┘   └─────────┘   └────────────┘

↓ ↓ ↓
HTML/CSS WCAG 2.0/2.1/2.2 Performance + Syntax Compliance Accessibility Score


### Pipeline Jobs

| Job | Tools | What It Checks |
|-----|-------|----------------|
| **Lint** | htmlhint, stylelint | HTML structure, CSS syntax, duplicate IDs, missing labels |
| **Axe** | axe-core | WCAG 2.0/2.1/2.2 compliance, ARIA attributes, color contrast |
| **Lighthouse** | Lighthouse | Performance, accessibility, best practices, SEO scoring |

### Automated PR Comments

Each pull request receives an automatic comment with:
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Lint and axe-core pass/fail status
- Link to downloadable full HTML report

---

## 📊 Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Accessibility Score** | 68/100 | **100/100** | +32 |
| **WCAG Violations** | 46 | **0** | -100% |
| **Performance** | 65/100 | **97/100** | +32 |
| **Best Practices** | 72/100 | **96/100** | +24 |
| **SEO** | 70/100 | **100/100** | +30 |

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/) | Performance & accessibility scoring |
| [axe-core](https://github.com/dequelabs/axe-core) | WCAG compliance testing |
| [htmlhint](https://htmlhint.com/) | HTML structure validation |
| [stylelint](https://stylelint.io/) | CSS linting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automation |

---

## 🧪 Running Locally

### Prerequisites
- Node.js (v20+)
- npm

### Install Tools
```bash
npm install -g lighthouse @axe-core/cli htmlhint stylelint stylelint-config-standard


# Start local server
npx serve . -p 8080 &

# Run Lighthouse
lighthouse http://localhost:8080/Accessible/ --output=html --output-path=report.html

# Run axe-core
npx axe http://localhost:8080/Accessible/

# Run HTML lint
htmlhint "Accessible/**/*.html"

# Run CSS lint
stylelint "Accessible/**/*.css"


📝 Case Study Highlights
Key Insights
Linting catches 74% of issues — Basic HTML/CSS structure fixes resolved 34 of 46 errors before running axe-core.

Manual testing is essential — Screen reader testing (NVDA, VoiceOver) and keyboard navigation identified issues automation couldn't.

Progressive remediation works — Lint-30 → Lint-75 → WCAG 2.0 → WCAG 2.1 → WCAG 2.2 created a clear improvement path.

Testing Methods Used
Type	Tools
Automated	Lighthouse, axe-core, WAVE, ARC Toolkit
Manual	NVDA (Windows), VoiceOver (iOS), keyboard navigation, zoom testing (200%)
📚 Resources
Web Content Accessibility Guidelines (WCAG) 2.2

Lighthouse Documentation

axe-core Rules

GitHub Actions Documentation

📄 License
MIT

👤 Author
Marcus Napoleon — Accessibility Portfolio Project

Built as part of an accessibility remediation case study. Demonstrates CI/CD automation for WCAG compliance testing.




