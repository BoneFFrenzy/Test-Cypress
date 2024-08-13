describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app");
    });
    context("Public sign in", () => {
        it("sign up test for home", () => {
            cy.get('#feedback-list > [data-block-version="5.1.0"] > ._15bqpe66 > ._15bqpe6h > :nth-child(2) > ._1ji6u3yv8 > ._16vlo1t0 > ._16vlo1t2 > ._1mqkc870 > .nw87ex8').click();
            cy.url().should('eq', 'https://iwi.softr.app/sign-up');
        });
        it("sign up test for public", () => {
            cy.get('[href="/public-iwi"] > .MuiBox-root').click();
            cy.get('._16vlo1t2 > ._1mqkc870 > [data-testid="button"]').click()
            cy.url().should('eq', 'https://iwi.softr.app/sign-up');
        });
        it("sign up test for contact", () => {
            cy.get('[href="/public-iwi"] > .MuiBox-root').click();
            cy.get('._16vlo1t2 > ._1mqkc870 > [data-testid="button"]').click()
            cy.url().should('eq', 'https://iwi.softr.app/sign-up');
        });
    });
});