describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
    it ('react form appears with textfield', () => {
        cy.visit ('/');
        cy.get('[data-cy=idocinput]').should('contain', 'Ex: A00367');
      });
    it('clicking on submit data without typing in idoc number throws error', () => {
        cy.visit ('/');
        cy.get('[data-cy=submit]').click();
        cy.get('[data-cy=error]').should('contain' ,'IDOC Number is required.');
      });
  });