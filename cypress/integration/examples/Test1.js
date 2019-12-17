/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true);
      cy.visit('https://www.meineke.com/dictionary');
      cy.get('#dictionary-search').type("fuel");
      cy.wait(2000);
      cy.get('#dictionary > .btn').click();
      cy.get('.dictionary-item').should('have.length',4);
      cy.get('body').find('.dictionary-item').should('have.length',4);
      cy.get('body').find('.dictionary-item').eq(1).find('h2').should('have.text','Fuel Pumps');
    })
  })

