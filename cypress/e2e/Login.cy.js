/// <reference types="cypress" />

import HomePage from '../support/pageObjects/HomePage';

describe('User Authentication', () => {
  before(() => {
    // Prevent Cypress from failing the test when an uncaught exception occurs
    Cypress.on('uncaught:exception', (err) => {
      // Log the exception for debugging purposes
      // eslint-disable-next-line no-console
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });
  });

  it('should allow a user to log in with valid credentials', function () {
    cy.fixture('Credentials').then((data) => {
      const homepage = new HomePage();
        cy.visit('https://dashkarageuat.azurewebsites.net/login');
      homepage.login(data.email, data.password);
    });
  });
});