/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
      cy.visit('https://www.meineke.com/dictionary')
    })
  })

