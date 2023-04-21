const { defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      on('file:preprocessor', cucumber())
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://mable.com.au",
    specPattern: "cypress/**/*.{js,jsx,ts,tsx,feature}",
    experimentalModifyObstructiveThirdPartyCode: true,
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    viewportWidth: 1920, // the most suitable screen for the desktop website
    viewportHeight: 1080, // the most suitable screen for the desktop website

  },
});
