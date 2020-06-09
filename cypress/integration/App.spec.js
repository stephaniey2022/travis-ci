describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
    it ('react form appears with textfield', () => {
        cy.visit ('/');
        cy.get('[data-cy=idocinput]').should('contain', 'Ex: A00367');
      });
  });