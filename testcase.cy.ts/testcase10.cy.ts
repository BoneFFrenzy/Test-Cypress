describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app/sign-in");
    });
    context("", () => {
        it("", () => {
          cy.get('#user-accounts3-email-295327962').type("brandonjdinh06@gmail.com")
          cy.get('#user-accounts3-password--1816740707').type("123456789!")
          cy.get('form > .MuiButtonBase-root').click()
        });
    });
});