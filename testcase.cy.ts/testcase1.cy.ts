describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("https://iwi.softr.app");
  });

  context("First Time Visit", () => {
    it("URL should be correct", () => {
      cy.url().should('eq', 'https://iwi.softr.app/public-iwi');
    });
    it("URL should be have sign up", () => {
      cy.get('.css-19bx4c8').click()
      cy.get('.sw-font-size-2xl').contains("Sign Up")
      cy.get('.css-15d81ep').contains("Sign up with Google")
    });
  });
});