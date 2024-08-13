describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app");
    });
    context("Signing up for the website manually", () => {
        it("Missing information", () => {
            cy.get('.css-19bx4c8').click()
            cy.get('form > .MuiButtonBase-root').click(
            
            )
        });
        it("Inputed info yes on daily reminder", () => {
            cy.get('.css-19bx4c8').click()
            cy.get('#user-accounts3-Name-0--103968752').type("Brandon James Dinh")
            cy.get('#user-accounts3-Email-1-2006984670').type("blue1234567890!@gmail.com")
            cy.get('#user-accounts3-password-2--2131095806').type("blue1234567890!")
            cy.get('.MuiSelect-select').select('Yes') // Select yes on the drop down menu
            cy.get('#terms_and_privacy').click()
            cy.get('form > .MuiButtonBase-root').click()
            cy.url().should('eq', 'https://iwi.softr.app/');
        });
        it("Inputed info no on daily reminder", () => {
            cy.get('.css-19bx4c8').click()
            cy.get('#user-accounts3-Name-0--103968752').type("one two three")
            cy.get('#user-accounts3-Email-1-2006984670').type("blue123456789@gmail.com")
            cy.get('#user-accounts3-password-2--2131095806').type("blue1234567890!")
            cy.get('.MuiSelect-select').click()
            cy.get('.MuiList-root > [tabindex="-1"] > div').click()
            cy.get('#terms_and_privacy').click()
            cy.get('form > .MuiButtonBase-root').click()
            cy.url().should('eq', 'https://iwi.softr.app/');
        });
    });
});  