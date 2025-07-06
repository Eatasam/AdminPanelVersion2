class LocationsPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('.btn-login').click();
  }

  openLocationsForm() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(4) > .dropdown-indicator').click();
    cy.get('#location > :nth-child(1) > .nav-link > .d-flex').click();
    cy.get('.btn-add').click();
  }

  fillLocationDetails({ name, code, email, phone, address, description, country }) {
    cy.get(':nth-child(1) > .form-control-input').clear().type(name);
    cy.get(':nth-child(2) > .form-control-input').clear().type(code);
    cy.get(':nth-child(3) > .form-control-input').clear().type(email);
    cy.wait(1000);
    cy.get(':nth-child(4) > .form-control-input').clear().type(phone);
    cy.get(':nth-child(5) > .form-control-input').clear().type(address);
    cy.get('#description').clear().type(description);
    cy.get('[name="country"]').select(country);
  }

  submit() {
    cy.scrollTo('top');
    cy.get('.btn-primary').click();
    // cy.get('.modal-footer > .btn-save').click(); // Uncomment if needed
  }
}

export default LocationsPage;