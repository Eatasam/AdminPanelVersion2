class ProductCategoryPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }
  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }
  openProductCategory() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(3) > .dropdown-indicator').click();
    cy.get('#product > :nth-child(1) > .nav-link > .d-flex').click();
    cy.get('#ex1-tab-2').click();
  }
  addCategory(name, alternateName, description, displayOrder) {
    cy.get('.btn-add').click();
    cy.get('#name').clear().type(name);
    cy.get('#alternateName').clear().type(alternateName);
    cy.get('#description').clear().type(description);
    cy.get('#displayOrder').clear().type(displayOrder);
    cy.scrollTo('top');
    cy.get('.btn-primary').click();
    cy.get('.modal-footer > .btn-save').click();
  }
}

export default ProductCategoryPage;