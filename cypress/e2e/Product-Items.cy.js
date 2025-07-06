/// <reference types="cypress" />
import 'cypress-xpath';
import ProductItemsPage from '../support/pageObjects/ProductItemsPage';

Cypress.on('uncaught:exception', (err) => {
  console.log('Cypress detected uncaught exception: ', err);
  return false;
});

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

describe('Product Items Management', () => {
  it('should add a package and assert it by name', () => {
    const productItemsPage = new ProductItemsPage();
    const englishName = generateRandomText(10);
    const nameOnReceipt = generateRandomText(10);

    productItemsPage.visit();
    productItemsPage.login('demo@marn.com.sa', 'Test@123');
    productItemsPage.openPackagesSection();
    productItemsPage.addPackage({
      englishName,
      nameOnReceipt,
      description: 'testing description',
      price: '10'
    });
    productItemsPage.assertPackageExists(englishName);
  });
});