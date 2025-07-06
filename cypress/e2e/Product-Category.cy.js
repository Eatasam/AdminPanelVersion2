/// <reference types="cypress" />

import ProductCategoryPage from '../support/pageObjects/ProductCategoryPage';

function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

Cypress.on('uncaught:exception', () => false);

describe('Product Category Management', () => {
  it('should add a new product category', () => {
    cy.fixture('Credentials').then((data) => {
      const productCategoryPage = new ProductCategoryPage();
      const name = generateRandomText(10);

      productCategoryPage.visit();
      productCategoryPage.login(data.email, data.password);
      productCategoryPage.openProductCategory();
      productCategoryPage.addCategory(name, 'car', 'testing', '1');

      // Assert the new category appears
      cy.contains(name).should('exist');
    });
  });
});