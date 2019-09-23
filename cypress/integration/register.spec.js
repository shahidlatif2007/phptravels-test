/// <reference types="cypress" />

describe('Registration', () => {

    it('check default values for input fields', () => {
        cy.visit('https://www.phptravels.org/clientarea.php');

        cy.get('.top-nav > :nth-child(3) > a').click();

        cy.get('#inputFirstName').should('be.empty');
        cy.get('#inputLastName').should('be.empty');
        cy.get('#inputEmail').should('be.empty');
        cy.get('#inputCompanyName').should('be.empty');
        cy.get('#inputAddress1').should('be.empty');
        cy.get('#inputAddress2').should('be.empty');
        cy.get('#inputCity').should('be.empty');
        cy.get('#stateinput').should('be.empty');
        cy.get('#inputPostcode').should('be.empty');
        cy.get('#inputCountry').should('not.be.empty');
        cy.get('#customfield1').contains('None');
        cy.get('#customfield1').should('not.be.empty');

        cy.get('#customfield1').contains('Google');
        cy.get('#customfield1').contains('Bing');
        cy.get('#customfield1').contains('Other Search Engine');

        cy.get('#inputNewPassword1').should('be.empty');
        cy.get('#inputNewPassword2').should('be.empty');

        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('not.be.checked');

        
    });

    it('Check Signup', () => {
        const firstName = "Shahid";
        const lastName = "Latif";
        const emailAddress = "shahidlatifdeveloper@gmail.com";
        const address1 = "Lahore Pakistan";
        const address2 = "Ghaziabad";
        const city = "Lahore";
        const state = "Punjab";
        const postalCode = "54000";

        // filll input fields.
        cy.get('#inputFirstName').type(firstName);
        cy.get('#inputLastName').type(lastName);
        cy.get('#inputEmail').type(emailAddress);

        cy.get('#inputAddress1').type(address1);
        cy.get('#inputAddress2').type(address2);

        cy.get('#inputCountry').select('United States')

        cy.get('#inputCity').type(city);


        
        cy.get('#inputPostcode').type(postalCode);


        cy.get('#customfield1').select('Bing');

        cy.get('#stateinput',{timeout: 5000}).contains('Taxes').click();



        



    });
});