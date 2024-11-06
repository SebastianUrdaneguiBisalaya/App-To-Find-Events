/// <reference types="cypress" />

describe("Inicio sesion en mi aplicacion de App for Events", () => {
  beforeEach(() => {
    cy.visit("http://192.168.28.2:5173");
  });

  it("Usuario revisa la lista de eventos y sus diferentes filtros", () => {
    cy.get("a").contains("ExploryQ").click();
    cy.get("input[id=date-start]").type("2024-11-01");
    cy.get("input[id=date-end]").type("2024-11-18");
    cy.get("button[type=submit]").click();
    cy.wait(4000);
    cy.get("input[name=searchQuery]").type("Rock");
    cy.get("button[type=submit]").click();
    cy.wait(4000);
    //    cy.visit("http://192.168.28.2:5173/trendingevents");
    cy.get("a").contains("Próximos Eventos").click();
    cy.wait(4000);
    cy.get("input[id=date-start]").type("2024-11-01");
    cy.get("input[id=date-end]").type("2024-11-18");
    cy.get("button[type=submit]").click();
    cy.wait(4000);
    // cy.get("input[name=searchQuery]").type("Arte");
    cy.get("button[type=submit]").click();
    cy.wait(4000);

    // cy.visit("http://192.168.28.2:5173/upcomingevents");
    cy.wait(4000);
    cy.get("a").contains("Eventos Esta Semana").click();
    cy.wait(4000);
    cy.get("button").contains("Teatro").click();
    //    cy.visit("http://192.168.28.2:5173/eventsthisweek");
    cy.wait(4000);
  });
});
