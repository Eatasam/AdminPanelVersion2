class ProductPackagesPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }

  openPackagesTab() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(3) > .dropdown-indicator').click();
    cy.get('#product > :nth-child(1) > .nav-link > .d-flex').click();
    cy.get('#ex1-tab-3').click();
  }

  addNewPackage({ englishName, arabicName, description }) {
    cy.get('.btn-add').click();
    cy.get('#english-name').clear().type(englishName);
    cy.get('#arabic-name').clear().type(arabicName);
    cy.get('.form-select').click();
    cy.contains('1').click();
    cy.get('#exp-description').type(description);
    cy.get('.btn-save > .d-none').click();
  }

  addProductToPackage({ category, quantity, discount }) {
    cy.get('.p-4 > :nth-child(1) > .dropdown').click();
    cy.contains(category).click();
    cy.get('#quantity').click().type(quantity);
    if (discount) {
      cy.get('#discount').click().type(discount);
    }
    cy.get('#closeModal').click();
  }

  savePackage() {
    cy.get('.mb-3 > .btn').click();
    cy.get(':nth-child(4) > .btn > img').click();
    cy.scrollTo('top');
    cy.get('.card-body > .align-items-center > :nth-child(2) > .btn-save').click();
    cy.get('.modal-content > .modal-footer > .btn-save').click();
  }
}

export default ProductPackagesPage;