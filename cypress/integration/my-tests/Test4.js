/// <reference types="Cypress" />
/*
* yoliamplify.com
*/

describe('YoliAmplify', function(){       
    /*
    Login
    */
   before(function(){
    cy.log('Log in')
    cy.visit('/')  // set www.yoliamplify.com as base url
    cy.get('form[name="loginForm"] input[name="login"]').type('irina.odobescu@xivic.com')
    cy.get('.navbar-login-form input[name="password"]').type('Develop15*')
    cy.get('.navbar-login-form button[name="loginButton"]').click()
   })


    /*
    UI elements and iterating thru array
    */
   it('Go to programs page',function(){
       
        cy.get('.container div:nth-child(1)').contains('Edit my profile...').click()     
    })

   it.skip('Go to programs page',function(){
       
        cy.get('h1.cushion-bottom-xs').should('have.text','Irina')
        cy.log('Logged in')
        
        cy.get('div.media').each(  ($el, index, $list)    => {
            // $el is a wrapped jQuery element
            var programDescription = $el.find('.media-body > p').text();
           
            if ( programDescription.indexOf('Monday, November 4, 2019') > -1 ) {
                // wrap this element so we can
                // use cypress commands on it
                console.log('Yay, found the correct program: '+ programDescription);
                cy.wrap($el.find('.btn-primary')).click()
            }
        })

        cy.get('#prg-nav').contains('My Program').should('be.visible')
        
    })


})