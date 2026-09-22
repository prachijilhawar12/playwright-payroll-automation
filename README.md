# Payroll QA Automation – Playwright

## Project Overview

QA automation project for a Payroll application using **Playwright with JavaScript**.

The project covers functional, negative, and edge-case scenarios and follows the **Page Object Model (POM)** framework.

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
* VS Code

## Project Structure

```text
playwrightAutomation/
│
├── pages/
│   ├── loginpage.js
|   ├──payrollpage.js
│
├── tests/
│   ├── automationScript-Positive.spec.js
|   ├── automationScript-Negative.spec.js
|    ├── automationScript-Edge.spec.js
|    └── loginPayrollApplication.spec.js
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Test Coverage

* Login validation
* Payroll calculation
* Positive scenarios
* Negative scenarios
* Edge/boundary scenarios
* Mandatory field validation
* Input validation

## Page Object Model

Page-specific locators and actions are maintained separately in:

```text
pages/
├── LoginPage.js
└── PayrollPage.js
```

POM improves **reusability, readability, and maintainability**.

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open HTML report:

```bash
npx playwright show-report
```

## Git Repository

Git is used for version control and GitHub is used to maintain the automation project.

## Future Scope

The framework can be enhanced in the future by adding:

* External test data using JSON or Excel
* API testing integration
* CI/CD pipeline integration
* Cross-browser execution
* Enhanced reporting


## Author

**Prachi Jilhawar**
QA Automation Engineer
