/// <reference types="Cypress" />
/*
Form submits / fixtures
**/
var fixtureData = {}
describe('Meineke.com Appointment Scheduler', function(){       
    /*
    Login
    */
   before(function(){
    cy.fixture('myFixtures/ceo-contact-form').then(function(fixtureData){
        this.fixtureData = fixtureData
    })
    
    cy.visit('http://trusum-visions.dev-directory.com/ceo/', {
        auth: {
            username: 'trusum',
            password: 'develop'
        }
    })
   })

   it('Contact Form',function(){
        cy.get('.conference .openContactUsBtn').click()
        cy.get('#contactForm input[name="user-name"]').type(this.fixtureData.firstName)
        cy.get('#contactForm input[name="user-last-name"]').type(this.fixtureData.lastName)
        cy.get('#contactForm input[name="email"]').type(this.fixtureData.email)
        cy.get('#contactForm input[name="tel"]').type(this.fixtureData.phone)
        cy.get('#contactForm textarea[name="first-name"]').type(this.fixtureData.message)

        cy.get('#contactForm button').click()
        cy.get('#contactForm .form__message').should('have.text','Thank you, we will be in touch soon.')
    })


})