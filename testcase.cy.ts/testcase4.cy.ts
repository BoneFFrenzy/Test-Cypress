describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app");
    });
    context("First Time Visit", () => {
        it("Google email sign in", () => {
            cy.get('.css-19bx4c8').click()
            cy.get('.css-15d81ep').click()
        });
    });
});  