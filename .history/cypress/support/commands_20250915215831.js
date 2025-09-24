Cypress.Commands.add("fillMandatoryFieldsAndSubmit", data => {
  cy.get("#firstName").as("fieldname").type(data.firstName);

  cy.get("#lastName").as("fieldLastName").type(data.lastName);
  cy.get("#email").as("fieldEmail").type(data.email);
  cy.get("#open-text-area").as("feedbackField").type(data.text);

  cy.get('button[type="submit"]').should("have.text", "Enviar").click();
});
