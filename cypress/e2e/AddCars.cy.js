/// <reference types="cypress" />
import AddCarsPage from '../support/pageObjects/AddCarsPage';

// Utility functions for random data
function generateRandomText(length) {
  const characters = '123456';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomVIN() {
  const validCharacters = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
  let vin = '';
  for (let i = 0; i < 17; i++) {
    vin += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
  }
  return vin;
}

Cypress.on('uncaught:exception', (err) => {
  // Log the exception for debugging purposes
  // eslint-disable-next-line no-console
  console.log('Cypress detected uncaught exception: ', err);
  return false;
});

describe('Car Registration', () => {
  it('should allow a user to add a new car with valid details', function () {
    const addCarsPage = new AddCarsPage();

    cy.fixture('Credentials').then((data) => {
      addCarsPage.visit();
      addCarsPage.login(data.email, data.password);

      addCarsPage.openAddCarForm();

      const registrationNumber = generateRandomText(4);
      const vin = generateRandomVIN();

      addCarsPage.fillCarDetails({
        phone: '+966512345678',
        registrationNumber,
        make: 'BMW',
        year: '2001',
        engine: 'engine',
        capacity: '4 ltrs',
        code: '2345',
        vin
      });

      addCarsPage.submit();
      addCarsPage.assertCarAdded();
    });
  });

  it('should show required field errors when submitting empty form', function () {
    const addCarsPage = new AddCarsPage();

    cy.fixture('Credentials').then((data) => {
      addCarsPage.visit();
      addCarsPage.login(data.email, data.password);

      addCarsPage.openAddCarForm();
      addCarsPage.assertRequiredFieldErrors();
    });
  });
});