const cucumberHtmlReports = require("cucumber-html-reporter")

const options = {
    theme: 'hierarchy',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-htmlreport.html",
    openReportInBrowser: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "98",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
};

cucumberHtmlReports.generate(options);