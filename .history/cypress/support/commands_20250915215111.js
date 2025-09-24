Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
 cy.get("#firstName").as("fieldname").type("Ev");
    cy.get("@fieldname").should("have.value", "Ev"); 

    cy.get("#lastName").as("fieldLastName").type("Farias");
    cy.get("@fieldLastName").should("have.value", "Farias");

    cy.get("#email").as("fieldEmail").type("everton.teste@gmail.com");
    cy.get("@fieldEmail").should("have.value", "everton.teste@gmail.com");

    cy.get("#open-text-area").as("feedbackField").type('teste'); 
    cy.get("@feedbackField").should("have.value", 'teste');

    cy.get('button[type="submit"]').should("have.text", "Enviar").click();




})
