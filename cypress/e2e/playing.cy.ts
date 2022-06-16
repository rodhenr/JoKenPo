/// <reference types="cypress" />

describe("jogando", () => {
  it("deve escolher um dos símbolos e conseguir obter um resultado válido", () => {
    cy.visit("/");
    cy.get('[data-cy="initial-game"]').should("be.visible");
    cy.get('[data-cy="rock"]').click();
    cy.get('[data-cy="result-player"]').should("be.visible");
    cy.get('[data-cy="result-computer"]').should("be.visible");
    cy.get('[data-cy="result-message"]').should("be.visible");
    cy.get('[data-cy="rounds"]').children().should("have.length", 2)
    cy.get('[data-cy="result-button"]').click();
    cy.get('[data-cy="initial-game"]').should("be.visible");
    cy.get('[data-cy="rock"]').click();
    cy.get('[data-cy="rounds"]').children().should("have.length", 3)
  });
});
