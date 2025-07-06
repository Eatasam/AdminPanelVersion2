class AddCustomerPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }

  openAddCustomerForm() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(5) > .dropdown-indicator').click();
    cy.get('#customer > :nth-child(1) > .nav-link > .d-flex > .nav-link-text').click();
    cy.get('.btn-add').click();
  }

  fillCustomerDetails({ fullName, email, phone, gender }) {
    cy.window().then((win) => {
      win.document.querySelector('#fullName').value = fullName;
    });
    cy.get('#fullName').type('testing');
    cy.get(':nth-child(1) > .form-control-input').type(email);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control-input').type(phone);
    cy.get(':nth-child(3) > .dropdown > .btn').click().type(gender);
  }

  submit() {
    cy.get('.btn-primary').click();
    cy.get('.modal-footer > .btn-save').click();
  }
}

export default AddCustomerPage;