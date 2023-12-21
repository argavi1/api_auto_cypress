const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { 
    baseUrl: 'http://barru.pythonanywhere.com' 
  },
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
  },
});
