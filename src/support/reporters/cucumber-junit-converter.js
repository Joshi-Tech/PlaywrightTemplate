/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
exports.__esModule = true;
const cucumber_to_junit_1 = require('cucumber-to-junit');
const fs = require('fs');
const converter = new cucumber_to_junit_1.CucumberConverter({
  markUndefinedAsFailed: true,
});

converter.convertToJunit('reports/cucumber-report.json', 'reports/cucumber-report.xml');

// There can be an odd unknown character in the XML report so we remove them all before uploading to Azure Devops
let cucumberReport = fs.readFileSync('reports/cucumber-report.xml', 'utf-8');
cucumberReport = cucumberReport.replace(/[^\w\s!@#$^&%*()+=\-[\]\\/{}|:<>?,.;"']/gim, '');
fs.writeFileSync('reports/cucumber-report.xml', cucumberReport, 'utf-8');
