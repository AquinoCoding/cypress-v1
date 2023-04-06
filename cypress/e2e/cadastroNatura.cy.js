// Cadastro

describe("Spec de cadastro Natura", () => {
  context("Cadastro de Usuario Natura", () => {
    beforeEach(() => {
      cy.visit("/");

      //cy.generateFixture()
    });

    it("Home page redirect", () => {
      // Home page redirect
      cy.homePageRedirectNatura();
    });

    it("Cadastro de Usuario", () => {
      // Fechamendo modal cookies
      cy.cookiesClose();

      // Cadastro de Usuario
      cy.visit("/cadastre-se");
      cy.cadastroNatura();
    });

    it("Logout", () => {
      // Efetuando o logout garanto que o
      // usuario foi criado com sucesso
      cy.logoutNatura();
    });
  });
});
