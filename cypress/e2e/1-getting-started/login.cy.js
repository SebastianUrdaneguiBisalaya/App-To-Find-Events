/// <reference types="cypress" />

describe("Inicio sesion en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173/trendingevents");
  });

  it("Inicio de sesion en la aplicacion de Eventos", () => {
    cy.get('div[class="flex justify-between"]').should("have.length", 5);

    cy.get('h2[class="black font-bold text-3xl"]').contains("Bienvenido");

    cy.get("input[type=email]").type(`ana.patricia.ru@gmail.com`);
    cy.get("input[type=password]").type(`piwi2024`);
    cy.get("button[type=submit]").click();
    cy.wait(3000);
    cy.get("a").contains("Logout").click();
  });
});
