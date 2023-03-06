const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'http://juice-shop-sanitarskyi.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
