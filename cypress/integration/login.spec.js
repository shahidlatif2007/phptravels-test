/// <reference types="cypress" />

describe('Login Fields Validation', () => {
    
    it('check default fields values', () =>  {
        cy.visit('https://www.phptravels.org/clientarea.php');
        
        cy.get('#inputEmail').should('be.empty');
        cy.get('#inputPassword').should('be.empty');
        cy.get('label > input').should('not.be.checked');
        cy.get('.center-block > div > iframe').should('not.be.checked');
        cy.get('h1').contains('Login');
        
    });


});