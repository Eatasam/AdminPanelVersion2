/// <reference types="cypress" />
import AddCustomerPage from '../support/pageObjects/AddCustomerPage';

Cypress.on('uncaught:exception', () => false);

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomTextForEmail(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomPhoneNumber() {
  let phoneNumber = '5';
  for (let i = 0; i < 8; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return `+966${phoneNumber}`;
}

describe('Customer Management', () => {
  let addCustomerPage;
  let credentials;

  beforeEach(() => {
    addCustomerPage = new AddCustomerPage();
    cy.fixture('Credentials').then((data) => {
      credentials = data;
      addCustomerPage.visit();
      addCustomerPage.login(credentials.email, credentials.password);
    });
  });

  it('should add a new customer with random details', () => {
    cy.then(() => {
      const randomFullName = generateRandomText(10);
      const randomSuffix = generateRandomTextForEmail(2);
      const randomEmail = `demo@marn.com.${randomSuffix}`;
      const randomPhoneNumber = generateRandomPhoneNumber();

      addCustomerPage.openAddCustomerForm();
      addCustomerPage.fillCustomerDetails({
        fullName: randomFullName,
        email: randomEmail,
        phone: randomPhoneNumber,
        gender: 'female'
      });
      addCustomerPage.submit();
    });
  });
});