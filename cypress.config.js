const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    baseUrl: 'http://juice-shop-sanitarskyi.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
