// Cadastro

describe("Spec de cadastro Aesop", () => {
  context("Cadastro de Usuario Aesop", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Home page redirect", () => {
      // Home page redirect
      cy.homePageRedirectAesop();
    });

    it("Cadastro de Usuario", () => {
      cy.cookiesClose();

      // Cadastro de Usuario
      cy.visit("/cadastre-se");
      cy.cadastroAesop();
    });

    it("Logout", () => {
      // Efetuando o logout garanto que o
      // usuario foi criado com sucesso
      cy.logoutAesop();
    });
  });
});
