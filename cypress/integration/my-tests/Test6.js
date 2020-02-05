/// <reference types="Cypress" />
/*
Form submits / fixtures
**/
var fixtureData = {}
describe('Trusum contact form', function(){       
    /*
    Login
    */
   before(function(){
    cy.fixture('myFixtures/ceo-contact-form').then(function(fixtureData){
        this.fixtureData = fixtureData
    })

    /*
    cy.visit('http://trusum-visions.dev-directory.com/ceo/', {
        auth: {
            username: 'trusum',
            password: 'develop'
        }
    })*/

    cy.visit('https://www.trusum.com/')

    cy.server()
    cy.route('POST','/contact-form.php').as('submitContactForm')

   })

   it('Contact Form',function(){
       
        //cy.get('.hero .openContactUsBtn').click()
        cy.clickContactButton('.hero .openContactUsBtn')
        
        
        cy.get('#contactForm input[name="first-name"]').type(this.fixtureData.firstName)
        cy.get('#contactForm input[name="last-name"]').type(this.fixtureData.lastName)
        cy.get('#contactForm input[name="email"]').type(this.fixtureData.email)
        cy.get('#contactForm input[name="phone"]').type(this.fixtureData.phone)
        cy.get('#contactForm textarea[name="message"]').type(this.fixtureData.message)

        cy.get('#contactForm button').click()
        
        
        //cy.get('#contactForm .form__message').should('not.have.text','API error. Please contact support.')
        //cy.get('#modalContact .pop-up__response p').should('have.text','Thanks for reaching out! We\'ll be in touch soon.')

        cy.wait('@submitContactForm').its('status').should('eq', 200)
    
        cy.get('@submitContactForm').should( (xhr) => {
            expect(xhr.requestBody).to.include('email')
            expect(xhr.requestHeaders).to.have.property('Content-Type')
            expect(xhr.responseBody).to.have.property('response').eq('Thanks for reaching out! We\'ll be in touch soon.')

        } )

        

    })


})