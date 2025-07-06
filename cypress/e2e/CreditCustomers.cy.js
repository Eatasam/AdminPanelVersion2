/// <reference types="cypress"/>
import CreditCustomersPage from '../support/pageObjects/CreditCustomersPage';

Cypress.on('uncaught:exception', () => false);

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomPhone() {
  return `+9665${Math.floor(10000000 + Math.random() * 90000000)}`;
}

describe('Credit Customers Management', () => {
  let creditCustomersPage;
  let credentials;

  beforeEach(() => {
    creditCustomersPage = new CreditCustomersPage();
    cy.fixture('Credentials').then((data) => {
      credentials = data;
      creditCustomersPage.visit();
      creditCustomersPage.login(credentials.email, credentials.password);
    });
  });

  it('should add a new credit customer with random details', () => {
    cy.then(() => {
      const randomName = generateRandomText(10);
      const randomEmail = `demo${generateRandomText(4)}@marn.sa.com`;
      const randomPhone = generateRandomPhone();

      creditCustomersPage.openCreditCustomersForm();
      creditCustomersPage.fillCreditCustomerDetails({
        name: randomName,
        email: randomEmail,
        phone: randomPhone
      });
    });
  });
});
