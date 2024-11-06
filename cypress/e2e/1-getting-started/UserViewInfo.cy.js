/// <reference types="cypress" />

describe("Inicio sesion en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173/login");
  });

  it("Usuario ingresa sesion, verifica su informacion y actualiza su foto de perfil", () => {
    cy.get('h2[class="black font-bold text-3xl"]').contains("Bienvenido");

    cy.get("input[type=email]").type(`ana.patricia.ru@gmail.com`);
    cy.get("input[type=password]").type(`piwi2024`);
    cy.get("button[type=submit]").click();

    cy.get("a").contains("Perfil").click();
    cy.wait(3000);
    cy.get("Ir al Home").click();
  });
});
