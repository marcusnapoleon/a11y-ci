



## Accessibility Pipeline - GitHub-Actions


[![CI/CD](https://img.shields.io/badge/CI%2FCD-Accessibility%20Pipeline-blue)](https://github.com/marcusnapoleon/a11y-ci/actions)
[![WCAG](https://img.shields.io/badge/WCAG-2.2%20AA-green)](https://www.w3.org/TR/WCAG22/)
[![Accessibility Score](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen)](https://developer.chrome.com/docs/lighthouse/accessibility/)
[![axe-core](https://img.shields.io/badge/axe--core-0%20violations-success)](https://github.com/dequelabs/axe-core)


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

- Inaccessible/ # Baseline broken version (main branch)
  - index.html
  - css/
    - style.css
  - .stylelintrc.json # CSS linting rules
  - README.md


### Branch Strategy

#### a11y-ci | Main :
- Inaccessible | Initial — Broken (2019 HTML/CSS) → 46 accessibility errors
  
#### cd-dev | Branch (remediations/progression) :
- Accessible | Final — Remediated (2026) → Fully WCAG 2.2 AA compliant → 0 accessibility errors
- Lint-30                            → First round of HTML/CSS fixes applied (~30%)
- Lint-75                            → Second round of HTML/CSS fixes applied (~75%)
- WCAG-20                            → WCAG 2.0 AA issues fixed
- WCAG-21                            → WCAG 2.1 AA issues fixed



---

## 🚀🚀 GitHub Actions Pipeline

The workflow runs on every pull request to `main`:

│  LINT (10s) │ → │ AXE (30s) │ → │ LIGHTHOUSE (60s) │

↓ ↓ ↓
HTML/CSS WCAG 2.0/2.1/2.2 Performance + Syntax Compliance Accessibility Score



### Pipeline Jobs

| Job | Tools | What It Checks |
|-----|-------|----------------|
| **Lint** | htmlhint, stylelint | HTML structure, CSS syntax, duplicate IDs, missing labels |
| **Axe** | axe-core | WCAG 2.0/2.1/2.2 compliance, ARIA attributes, color contrast |
| **Lighthouse** | Lighthouse | Performance, accessibility, best practices, SEO scoring |

### Automated PR Comments

When you open a pull request, the workflow automatically posts a comment with:

- 📊 **Lighthouse scores** (Performance, Accessibility, Best Practices, SEO)
- ✅ **Lint and axe-core pass/fail status**
- 📄 **Link to downloadable full report** (in Artifacts)

Example PR comment:
```markdown
## 📊 Lighthouse Scores
| Metric          | Score    |
|-----------------|----------|
| Performance     | 97/100   |
| Accessibility   | 100/100  |
| Best Practices  | 96/100   |
| SEO             | 100/100  |

### ✅ Accessibility Checks
- HTML Lint: Passed
- CSS Lint: Passed
- WCAG 2.0: Passed
- WCAG 2.1: Passed

### 📄 Full Report
Download the Lighthouse report from the **Artifacts** section below.
```

📚 Resources
- Web Content Accessibility Guidelines (WCAG) 2.2
- Lighthouse Documentation
- AXE-Core Rules
- GitHub Actions Documentation

📄 License
MIT

👤 Author
Marcus Napoleon O. Lising — Accessibility Automation Portfolio Project

Built as part of an accessibility remediation case study. Demonstrates CI/CD automation for WCAG compliance testing.




