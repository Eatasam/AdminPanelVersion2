/// <reference types="cypress" />
import LocationsPage from '../support/pageObjects/LocationsPage';

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

describe('Locations Management', () => {
  let locationsPage;

  beforeEach(() => {
    locationsPage = new LocationsPage();
    locationsPage.visit();
    locationsPage.login('demo@marn.com.sa', 'Test@123');
  });

  it('should add a new location with random details', () => {
    const randomName = generateRandomText(10);
    const randomCode = generateRandomText(20);
    const randomEmail = `a${generateRandomText(3)}@a.com`;
    const randomPhone = generateRandomPhone();
    const randomAddress = generateRandomText(10);

    locationsPage.openLocationsForm();
    locationsPage.fillLocationDetails({
      name: randomName,
      code: randomCode,
      email: randomEmail,
      phone: randomPhone,
      address: randomAddress,
      description: 'karage services',
      country: 'Saudi Arabia'
    });
    locationsPage.submit();
  });
});