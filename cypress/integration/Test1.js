/// <reference types="Cypress" />
/*
*  Simple asserts on Meineke.com > Dictionary page
*/
describe('Meineke', function() {
    it('Dictionary Page', function() {
      expect(true).to.equal(true);
      cy.visit('https://www.meineke.com/dictionary/');
      cy.get('#dictionary-search').type("fuel");
      cy.wait(1000);
      cy.get('#dictionary > .btn').click();
      cy.get('.dictionary-item').should('have.length',4);
      cy.get('body').find('.dictionary-item').should('have.length',4);
      cy.get('body').find('.dictionary-item').eq(1).find('h2').should('have.text','Fuel Pumps');
    })
  })

