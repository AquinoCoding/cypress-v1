// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("generateFixture", () => {
  const faker = require("faker-br");
  const { format } = require('date-fns');

  cy.writeFile("cypress.env.json", {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()+'@',
    cpf: faker.br.cpf(),
    dateOfBirth: format(faker.date.past(30), 'dd/MM/yyyy'),
    phoneNumber: faker.phone.phoneNumber(),
  });
});

Cypress.Commands.add("cookiesClose", () => {
  const cookiesClose = () => {
    // Validacao de existencia de mensagem de cookies
    cy.get("#onetrust-accept-btn-handler").should("exist").click();
  };
  cookiesClose();
});

// ****************** NATURA AMBIENTE DE COMANDOS ******************

Cypress.Commands.add("homePageRedirectNatura", () => {
  const homePageRedirectNatura = () => {
    cy.get(
      ".natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons"
    ).click();

    cy.contains("a", "Cadastrar-se").should("exist").click();
  };
  homePageRedirectNatura();
});

Cypress.Commands.add("cadastroNatura", () => {
  const cadastroNatura = () => {

    cy.get("input[name='firstName']").type(Cypress.env("firstName")); 

    cy.get("input[name='lastName']").type(Cypress.env("lastName"));

    cy.get("input[name='email']").type(Cypress.env("email"));

    cy.get("#receiveNewsLetter").click();

    cy.get("#password-field").type(Cypress.env("password"), {
      log: false,
    });

    cy.get("#confirmPassword-field").type(Cypress.env("password"), {
      log: false,
    });

    cy.get("input[name='cpf']").type(Cypress.env("cpf"));

    cy.get("input[name='dateOfBirth']").type(Cypress.env("dateOfBirth"));

    // Validacao de Generos
    cy.get(
      ".MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .natds59"
    ).click();
    cy.get(
      ".MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds59"
    ).click();
    cy.get(
      ".MuiFormGroup-root > :nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .natds59"
    ).click();

    cy.get("input[name='homePhone']").type(Cypress.env("phoneNumber"));

    cy.get("#acceptedterms").click();

    cy.get(".natds93 > .MuiButtonBase-root > .MuiButton-label").click();
  };

  cadastroNatura();
});

Cypress.Commands.add("logoutNatura", () => {
  const homePageRedirectNatura = () => {
    cy.get(
      ".natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons"
    ).click();

    cy.contains("span", "Sair").should("exist").click();
  };
  homePageRedirectNatura();
});

Cypress.Commands.add("loginNatura", () => {
  const loginNatura = () => {
    cy.visit("/login");

    cy.get("input[name='login']").type(Cypress.env("email"));

    cy.get("input[name='password']").type(Cypress.env("password-field"));

    cy.contains("span", "Entrar").should("exist").click();
  };
  loginNatura();
});

// ****************** AESOP AMBIENTE DE COMANDOS ******************

Cypress.Commands.add("homePageRedirectAesop", () => {
  const homePageRedirectAesop = () => {
    cy.get(
      ".natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons"
    ).click();

    cy.contains("a", "Cadastrar-se").should("exist").click();
  };
  homePageRedirectAesop();
});

Cypress.Commands.add("cadastroAesop", () => {
  const cadastroAesop = () => {
    cy.get("input[name='firstName']").type(Cypress.env("firstName"));

    cy.get("input[name='lastName']").type(Cypress.env("lastName"));

    cy.get("input[name='email']").type(Cypress.env("email"));

    cy.get("#password-field").type(Cypress.env("password"), {
      log: false,
    });

    cy.get("#confirmPassword-field").type(Cypress.env("password"), {
      log: false,
    });

    cy.get("input[name='cpf']").type(Cypress.env("cpf"));

    cy.get("input[name='dateOfBirth']").type(Cypress.env("dateOfBirth"));

    // Validacao de Generos

    cy.get(
      ".MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .natds72"
    ).click();

    cy.get(
      ":nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .natds72"
    ).click();

    cy.get(
      ":nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .natds72"
    ).click();

    cy.get("input[name='homePhone']").type(Cypress.env("phoneNumber"));

    cy.get("#receiveNewsLetter").click();

    cy.get("#infContOptIn").click();

    cy.get("#acceptedterms").click();

    cy.get(".natds81 > .MuiButtonBase-root > .MuiButton-label").click();
  };

  cadastroAesop();
});

Cypress.Commands.add("logoutAesop", () => {
  const homePageRedirectAesop = () => {
    cy.get(
      ".natds5 > .MuiButtonBase-root > .MuiIconButton-label > .material-icons"
    ).click();

    cy.contains("span", "Sair").should("exist").click();
  };
  homePageRedirectAesop();
});

Cypress.Commands.add("loginAesop", () => {
  const loginAesop = () => {
    cy.visit("/login");

    cy.get("input[name='login']").type(Cypress.env("email"));

    cy.get("input[name='password']").type(Cypress.env("password-field"));

    cy.contains("span", "Entrar").should("exist").click();
  };
  loginAesop();
});
