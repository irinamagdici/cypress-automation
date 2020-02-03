/// <reference types="Cypress" />
/*
* yoliamplify.com
*/

describe('YoliAmplify', function(){       
    /*
    Login
    */
   before(function(){
    cy.visit('/')
    cy.get('.navbar-login-form input[name="login"]').type('irina.odobescu@xivic.com')
    cy.get('.navbar-login-form input[name="password"]').type('Develop15*')
    cy.get('.navbar-login-form button[name="loginButton"]').click()
   })


    /*
    UI elements and iterating thru array
    */
   it('Go to programs page',function(){
        cy.get('h1.cushion-bottom-xs').should('have.text','Irina')
        cy.get('div.media').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            var programDescription = $el.find('.media-body > p').html();
           
            if ( programDescription.indexOf('Monday, November 4, 2019') > -1 ) {
                // wrap this element so we can
                // use cypress commands on it
                console.log('Yay, found the correct program: '+ programDescription);
                cy.wrap($el.find('.btn-primary')).click()
            }
        })
        cy.get('#prg-nav').contains('My Program').should('be.visible')
    })

    it.only('profile edit',function(){
        cy.visit('/ckcommon/myProfile/user_properties.asp')
        // checkboxes, radios - click or check
        cy.get('selector').check()
        /*
        cy.visit({
            url: 'http://localhost:3000/cgi-bin/newsletterSignup',
            method: 'POST',
            body: {
              name: 'George P. Burdell',
              email: 'burdell@microsoft.com'
            }
          })
        */
    })
})