describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app/");
    });
    context ("Adding records without logging in", () => {
        it(" A user who is not logged in", () => {
          cy.get('#tasks-list > [data-block-version="5.1.0"] > ._15bqpe66 > ._15bqpe6h > :nth-child(2) > ._1ji6u3yv8 > ._16vlo1t0 > ._16vlo1t2 > ._1mqkc870 > [data-testid="button"]')
          .click()
          cy.location("pathname").should("equal", "Sign Up")
        });

    });
});