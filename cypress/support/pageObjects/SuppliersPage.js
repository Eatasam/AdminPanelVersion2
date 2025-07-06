class SuppliersPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type(password);
    cy.get('.btn-login').click();
  }

  openSuppliersTab() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(4) > .dropdown-indicator').click();
    cy.get(':nth-child(3) > .dropdown-indicator').click();
    cy.get('#product > :nth-child(2) > .nav-link > .d-flex > .nav-link-text').click();
    cy.get('#ex1-tab-2').click();
  }

  addSupplier(name, phone, email) {
    cy.get('.btn-add > .d-none').click();
    cy.get(':nth-child(1) > .form-control-input').clear().type(name);
    cy.get(':nth-child(2) > .form-control-input').clear().type(phone);
    cy.get(':nth-child(3) > .form-control-input').clear().type(email);
    cy.get('#notes').click();
    cy.get('.btn-primary').click();
    cy.get('.modal-footer > .btn-save').click();
  }
}

export default SuppliersPage;