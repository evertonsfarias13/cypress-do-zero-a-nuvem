describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("Verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
  it("Preenche campos obrigatórios e envia op formulário", () => {
    const longText = Cypress._.repeat("abcdefghijklmnopqrstuvxz", 10); //usando uma função repeat vai repetir 10x o texto
    //o proprio cypress tem algumas funcoes, usando o Cypress junto
    cy.get("#firstName").as("fieldname").type("Ev");
    cy.get("@fieldname").should("have.value", "Ev"); //verifica valor que foi inputado

    cy.get("#lastName").as("fieldLastName").type("Farias");
    cy.get("@fieldLastName").should("have.value", "Farias");

    cy.get("#email").as("fieldEmail").type("everton.teste@gmail.com");
    cy.get("@fieldEmail").should("have.value", "everton.teste@gmail.com");

    cy.get("#open-text-area").as("feedbackField").type(longText, { delay: 0 }); // com delay 0 o texto é preenchido de forma imediata, mesmo q seja grande
    cy.get("@feedbackField").should("have.value", longText);

    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".success")
      .contains("Mensagem enviada com sucesso.")
      .should("be.visible");
  });
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    const longText = Cypress._.repeat("abcdefghijklmnopqrstuvxz", 10); //usando uma função repeat vai repetir 10x o texto
    //o proprio cypress tem algumas funcoes, usando o Cypress junto
    cy.get("#firstName").as("fieldname").type("Ev");
    cy.get("@fieldname").should("have.value", "Ev"); //verifica valor que foi inputado

    cy.get("#lastName").as("fieldLastName").type("Farias");
    cy.get("@fieldLastName").should("have.value", "Farias");

    cy.get("#email").as("fieldEmail").type("everton.teste@.com");

    cy.get("#open-text-area").as("feedbackField").type(longText, { delay: 0 }); // com delay 0 o texto é preenchido de forma imediata, mesmo q seja grande
    cy.get("@feedbackField").should("have.value", longText);

    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".error")
      .contains("Valide os campos obrigatórios!")
      .should("be.visible");

    cy.get("#email").as("fieldEmail").clear().type("everton.teste@gmail.com");
    cy.get("@fieldEmail").should("have.value", "everton.teste@gmail.com");
  });

  it("campo telefone continua vazio quando preenchido valor não numérico", () => {
    cy.get("#phone").type("abcde").should("have.text", "");
  });
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas nao é preenchido", () => {
    const longText = Cypress._.repeat("abcdefghijklmnopqrstuvxz", 10); //usando uma função repeat vai repetir 10x o texto
    //o proprio cypress tem algumas funcoes, usando o Cypress junto
    cy.get("#firstName").as("fieldname").type("Ev");
    cy.get("#lastName").as("fieldLastName").type("Farias");
    cy.get("#email").as("fieldEmail").type("everton.teste@gmail.com");
    cy.get("#open-text-area").as("feedbackField").type(longText, { delay: 0 }); // com delay 0 o texto é preenchido de forma imediata, mesmo q seja grande
    cy.get("#phone-checkbox").click();

    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".error").should("be.visible");
  });
  it("exibe mensagem de erro sem preencher os campos obrigatórios", () => {
    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".error").should("be.visible");
  });


  it("envia formulário com sucesso usandoS um comando customizado", () => {
    const data =  {   //criando um objeto data com todos os dados a serem preenchidos
      firstName: 'Everton',
      lastName: 'Farias',
      email: 'everton_12@hotmail.com',
      text: 'teste.'
    }

   cy.fillMandatoryFieldsAndSubmit(data) //iformando o data como parametro do comandoS

   cy.get('.success').should('be.visible')
  
  });

it('seleciona um produto (YouTube) por seu textob', () => {
  cy.get('#product')
    .select('YouTube')
    .should('have.value','youtube')

})

it('seleciona um produto (Blog) pelo seu índice', () => {
  cy.get('#product')
    .select(1)
    .should('have.value','blog')

})

it.only('marca o tipo de atendimento "feddback" ', () => {
  cy.get('input[type="radio"][value="feedback"]')
  .check()
  .should('be.checked')
    
})



});
