describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("Verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
  it("Preenche campos obrigatórios e envia op formulário", () => {
    cy.get('#firstName')
    .as('fieldname')
    .type('Ev')
    cy.get('@fieldname')
    .should('have.value','Ev')
    cy.get('#lastName')
    .as('fieldLastName')
    .type('Farias')
    cy.get('@fieldLastName')
    .should('have.value','Farias')
    cy.get('#email')
    .as('fieldEmail')
    .click()
    cy.type('everton.teste@mail.com')
    cy.get('@fieldEmail')
    .should('have.value','everton.teste@mail.com')
  });
});
