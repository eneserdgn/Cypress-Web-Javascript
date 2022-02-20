const cucumberHtmlReports = require("multiple-cucumber-html-reporter")

cucumberHtmlReports.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-htmlreport.html",
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
});