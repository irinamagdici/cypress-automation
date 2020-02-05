/// <reference types="Cypress" />
/*
* meineke.com
*/

describe('Meineke.com Appointment Scheduler', function(){       
    /*
    Login
    */
   before(function(){
    cy.log('Log in')
    cy.visit('https://www.meineke.com/locations/ca/northridge-2093/')
   })

   it.skip('Store page: on-the-fly services select',function(){
    cy.get('.slick-track > .franchise-schedule-day-block').eq(0).as('dayBlock')
    
    /* Checkboxes and Hover */
    //trigger(mouseove)
    //trigger(mouseenter)

    cy.get('.slick-track > .franchise-schedule-day-block:nth-child(2) > .wrap-date-details input[type="checkbox"]').invoke('show').check({multiple:true})
    cy.get('.slick-track > .franchise-schedule-day-block:nth-child(2) > .wrap-date-details button').invoke('show').click()
    cy.get('.sc-store-services-list > div').should('have.length',3)
  
    //cy.get('input[type="checkbox"]').check()
    // checkboxes, radios - click or check
    //cy.get('selector').check()
    //cy.get('selector').check().should('be.checked').and('have.value','some-value') //chai test library - chai assertions
    //cy.get('selector').uncheck().should('not.be.checked')
    //cy.get('input[type="checkbox"]').check(['a','b']) //filter to check matched elements together

    /* dropdowns */

    /* cy.get('dropdown select element').select.should('be.selected','optionname') */
    //cy.should('be.selected')

    /* Popups 
    
    Web page with alert > cypress automatically OK's it to move further with the test
    
    */

    })

    it('UI - other elements', function(){
        //cy.visit('')
        cy.on('window:alert',(str) => {
            /* Mocha assertion */
            expect(str).to.equal('Confirm text ')
        })

        /* Mouse hover menus */

        cy.get('#meineke-menu .submenu-container').eq(1).invoke('show').click()
       
    })

})