/// <reference types="cypress" />

describe("Registro nuevo usuario en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173/trendingevents");
  });

  it("Aparecera en pantalla la lista de eventos", () => {
    cy.get('div[class="flex justify-between"]').should("have.length", 5);

    cy.get('a[class="text-sm text-black hover:text-primary font-poppins text-center"]').contains("Sign Up").click();
    cy.get('h2[class="black font-bold text-3xl md:text-center text-left mb-4"]').contains("Crear Cuenta");

    cy.get("input[id=lastName]").type(`Rivas`);
    cy.get("input[id=firstName]").type(`Rivas`);

    cy.get("input[id=email]").type(`ana.patricia.ru@gmail.com`);

    cy.get("input[id=password]").type(`piwi2024`);
    cy.get("input[id=confirmPassword]").type(`piwi2024`);
    //cy.get('button[type=submit]').click();
  });
});
