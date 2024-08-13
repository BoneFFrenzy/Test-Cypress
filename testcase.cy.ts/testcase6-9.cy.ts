describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("https://iwi.softr.app/public-iwi");
    });
    context ("search", () => {
      it("improvement", () => {
        cy.get('._1jehhsf3').type("")
      });
      it("issue", () => {
        cy.get('._1jehhsf3').type("")
      });
      it("want", () => {
        cy.get('._1jehhsf3').type("")
      });
      it("situation", () => {
        cy.get('._1jehhsf3').type("")
      });
  });
});