

This repository is a test automation suite which contains a basic Playwright-Cucumber framework,automating the Ten10 site. 

## Tooling

- Playwright
- Cucumber-js
- Typescript
- NPM
- Node
- Git
- Visual Studio Code

---

## Requirements

In order to contribute and run this project you will need to have the following installed:

- Node (installing Node will also install NPM)
- Visual Studio Code
- Git

### First time setup

Once the tools under the Requirements header has been downloaded follow these steps to complete first time setup:

1. Open CLI (Powershell or Command prompt)
2. Navigate to the directory which will house the repository
3. Clone the repository:  
   `git clone https://gitlab.thetestpeople.com/public-group/accelerators/playwright-cucumber-template/`
4. Checkout develop:  
   `git checkout develop`
5. Install the dependencies:  
   `npm install`
6. Install the playwright browsers:  
   `npx playwright install`

---

## Running Tests

### Default

To run all of the tests:

1. Open a CLI
2. Run: `npm run test`

### Specific

To run specific tests you must include the tags attached to the scenarios that are required to be run:

1. Open a CLI
2. Run: `npm run test -- --tags "<tag>"`

e.g. To run all of the smoke tests run: `npm run test -- --tags "@Smoke"`

### Debug

To run a test in debug mode you must:

1. Tag the scenario with `@only`
2. Open a CLI
3. Run: `npm run debug`

This will run a headful version of the test using Playwright's debugger

---

## Reporting

Once a test run has completed a two reports are generated in the `/reports` folder. The first report is a JSON report (cucumber-report.json) and the other is a HTML report (report.html).

The HTML report can be opened in a web browser by simply copy and pasting the full path of the report into the browser.

### Issue 

The tests passes headfully but not headlessly. Because of this reason, the then clause is commented out to stop test from failing in the ci environment. An issue is created for this to be fixed -

https://gitlab.thetestpeople.com/public-group/accelerators/accelerators-wiki/-/issues/16
