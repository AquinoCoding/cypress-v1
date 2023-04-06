const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://www.natura.com.br/",
    baseUrl: "https://www.aesop.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
