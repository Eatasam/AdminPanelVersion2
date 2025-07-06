/* ==== Test Created with Cypress Studio ==== */
it('LoginWithAssert.cy.js', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://dashkarageuat.azurewebsites.net/');
  cy.get('.btn-login').click();
  cy.get('.col-sm-10').click();
  cy.get('.ng-submitted > :nth-child(1) > .invalid-feedback').should('have.text', ' Email is required. ');
  cy.get('.password-container > .invalid-feedback').click();
  cy.get('.password-container > .invalid-feedback').should('have.text', ' Password is required. ');
  cy.get('#email').clear('demo@marn.com.sa');
  cy.get('#email').type('demo@marn.com.sa');
  cy.get('#password').type('Test@123');
  cy.get('#show-password').click();
  cy.get('.btn-login').click();
  /* ==== End Cypress Studio ==== */
});