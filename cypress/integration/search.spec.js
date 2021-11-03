context("Search", () => {
  it("Enters the landing page and tries to search for an adress with a cep", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("Input").type("81940080");
    cy.contains("Buscar pelo CEP").click();
    cy.contains("Toda a extensão");
  });
});
