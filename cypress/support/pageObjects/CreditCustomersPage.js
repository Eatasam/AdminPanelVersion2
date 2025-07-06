class CreditCustomersPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }

  openCreditCustomersForm() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(5) > .dropdown-indicator').click();
    cy.get('#customer > :nth-child(2) > .nav-link > .d-flex > .nav-link-text').click();
    cy.get('.btn-add > .d-none').click();
  }

  fillCreditCustomerDetails({ name, email, phone }) {
    // Set random name directly in the input field
    cy.window().then((win) => {
      win.document.querySelector('#name').value = name;
    });
    cy.get('#name').type('na');
    cy.get(':nth-child(1) > .form-control-input').type(email);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-input').type(phone);
    cy.get('.align-items-center > :nth-child(2) > .btn').click();
  }

  submit() {
    cy.get('.align-items-center > :nth-child(2) > .btn').click();
  }
}

export default CreditCustomersPage;