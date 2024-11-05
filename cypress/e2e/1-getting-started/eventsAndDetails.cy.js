/// <reference types="cypress" />

describe("Inicio sesion en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173");
  });

  it("Usuario revisa la lista de eventos y sus diferentes filtros", () => {
    cy.get("a").contains("ExploryQ").click();
    //    cy.visit("http://192.168.28.2:5173/trendingevents");
    cy.wait(4000);
    //Favoritos
    cy.get("a").find("button").first().click();
    cy.get("a").find("div").first().click();
    cy.wait(4000);
    cy.get("a").contains("Próximos Eventos").click();
    // cy.visit("http://192.168.28.2:5173/upcomingevents");
    cy.wait(4000);
    cy.get("a").find("div").first().click();
    cy.wait(4000);
    cy.get("a").contains("Eventos Esta Semana").click();
    //    cy.visit("http://192.168.28.2:5173/eventsthisweek");
    cy.wait(4000);
    cy.get("a").find("button").first().click();
    cy.get("a").find("div").first().click();
    cy.wait(4000);
  });
});
