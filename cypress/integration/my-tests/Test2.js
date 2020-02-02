/// <reference types="Cypress" />
/*
* Meineke.com - Make This My Meineke 
*/

describe('Meineke', function(){
    it('Make This My Meineke',function(){
        cy.visit('https://www.meineke.com/locations/ca/montebello/');
        cy.wait(5000);
        cy.get('[data-storeid="4034"]').contains('Make this my Meineke').click();
        cy.url().should('eq','https://www.meineke.com/locations/ca/lakewood-4034/');
        cy.get('.location-set').contains('MY MEINEKE').should('have.length',1);        
    })
    it('Print Coupon',function(){ 
        cy.visit('https://www.meineke.com/locations/ca/lakewood-4034/');
        cy.get('div.container div.row .coupon-item').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.attr('data-offer-title') === '$29.95 Synthetic Blend Package') {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).contains('Print').click();
            } 
        })
    })
})