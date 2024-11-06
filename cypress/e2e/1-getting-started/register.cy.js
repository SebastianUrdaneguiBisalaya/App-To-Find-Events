/// <reference types="cypress" />

describe("Registro nuevo usuario en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173/trendingevents");
  });

  it("Me registro en la aplicacion de App for Events", () => {
    cy.wait(3000);
    cy.get('a[class="text-sm text-black hover:text-primary font-poppins text-center"]').contains("Sign Up").click();
    cy.get('h2[class="black font-bold text-3xl md:text-center text-left mb-4"]').contains("Crear Cuenta");

    cy.get("input[id=lastName]").type(`Usuario`);
    cy.get("input[id=firstName]").type(`Ejemplo`);

    cy.get("input[id=email]").type(`ejemplo@gmail.com`);

    cy.get("input[id=password]").type(`password2024`);
    cy.get("input[id=confirmPassword]").type(`password2024`);
    cy.get("button[type=submit]").click();
    cy.wait(2000);
    cy.visit("http://192.168.28.2:5173/login");

    cy.get("input[type=email]").type(`ejemplo@gmail.com`);
    cy.get("input[type=password]").type(`password2024`);
    cy.get("button[type=submit]").click();
    cy.wait(3000);
    cy.get("a").contains("Perfil").click();
    cy.wait(3000);
    cy.get("button").contains("Eliminar cuenta").click();
    cy.wait(1000);
    cy.get("div").contains("Proceder").first().click();
    cy.wait(3000);

    cy.visit("http://192.168.28.2:5173/login");

    cy.get("input[type=email]").type(`ejemplo@gmail.com`);
    cy.get("input[type=password]").type(`password2024`);
    cy.get("button[type=submit]").click();
    cy.wait(3000);
  });
});
