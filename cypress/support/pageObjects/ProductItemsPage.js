class ProductItemsPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }

  openPackagesSection() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(3) > .dropdown-indicator').click();
    cy.get('#product > :nth-child(1) > .nav-link > .d-flex').click();
    cy.contains('Packages').should('be.visible');
  }

  addPackage({ englishName, nameOnReceipt, description, price }) {
    cy.get('.btn-add').click();
    cy.get('#english-name').clear().type(englishName);
    cy.get('#nameOnReceipt').clear().type(nameOnReceipt);

    cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .btn').click();
    cy.get(':nth-child(2) > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2)').click();
    cy.get(':nth-child(2) > .dropdown > .btn').click();
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2)').click();
    cy.get(':nth-child(3) > .form-select > .ng-select-container').click();
    cy.contains('Assalam').click();
    cy.get('#description').click().type(description);
    cy.get('#isOpenItem').click();
    cy.get('#price').click().type(price);
    cy.get('.btn-scan > img').click();
    cy.get('.mb-3 > .btn').click();
    cy.scrollTo('top');
  //  cy.get('.align-items-center > :nth-child(2) > button[_ngcontent-ng-cli-universal-c90=""]').click();
    cy.get('#save').click();
    cy.get('.modal-footer > .btn-save').click();
  }

  assertPackageExists(englishName) {
    cy.contains(englishName).should('exist');
  }
}

export default ProductItemsPage;