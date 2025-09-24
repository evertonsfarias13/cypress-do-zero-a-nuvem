
describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("Verifica o título da aplicação", () => {
    

    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
  it("Preenche campos obrigatórios e envia op formulário", () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvxz',10)
    cy.get('#firstName')
    .as('fieldname')
    .type('Ev')
    cy.get('@fieldname')
    .should('have.value','Ev') //verifica valor que foi inputado

    cy.get('#lastName')
    .as('fieldLastName')
    .type('Farias')
    cy.get('@fieldLastName')
    .should('have.value','Farias')

    cy.get('#email')
    .as('fieldEmail')
    .type('everton.teste@gmail.com')
    cy.get('@fieldEmail')
    .should('have.value','everton.teste@gmail.com')

    cy.get('#open-text-area')
    .as('feedbackField')
    .type(longText) // com delay 0 o texto é preenchido de forma imediata
    cy.get('@feedbackField')
    .should('have.value', longText) 

    cy.get('button[type="submit"]')
    .should('have.text','Enviar')
    .click()
    cy.get('.success')
    .contains('Mensagem enviada com sucesso.')
    .should('be.visible')
  });
});
