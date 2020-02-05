/// <reference types="Cypress" />
/*
* Music Hill Slicing
*/

describe('Music Hill Ranch Slicing', function(){
    it('Async demo',function(){
        cy.visit('http://musichill:develop@musichill.dev-directory.com/slicing/');

        /*
        cy.visit('https://www.acme.com/', {
            auth: {
                username: 'wile',
                password: 'coyote'
            }
        })
        */
        
        /*
        const homeLink = cy.get('.main-nav ul li').contains('Home')
        cy.log(homeLink.text())
        */

       
       cy.get('.main-nav ul li').contains('Home').then(function(homeLink){
        cy.log( homeLink.text())
       })

       cy.get('.main-nav ul li').contains('Houses').focus().click()
       cy.url().should('include','/slicing/houses')
       
       console.log('Irina log 1')

       cy.get('.main-nav ul li').as('mainNav')
       cy.get('@mainNav').should('have.length',3)

       cy.log('Irina log 2')
    

       /*
       https://docs.cypress.io/api/utilities/$.html#Syntax
       */
       

       // visits http://example.com/users?page=1&admin=true
       /*
       cy.visit('http://example.com/users?page=1', {
            qs: { admin: true }
       })

       
       */
    })
})