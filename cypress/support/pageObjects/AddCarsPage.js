class AddCarsPage {
  visit() {
    cy.visit('https://dashkarageuat.azurewebsites.net/login');
  }

  login(email, password) {
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type(password);
    cy.get('.btn-login').click();
  }


  assertRequiredFieldErrors() {
cy.get('[type="submit"]').click();
    cy.get(':nth-child(2) > .col-lg-10 > .card > .card-body > .row > .col-12 > :nth-child(3) > .invalid-feedback')
      .should('have.text', ' Phone Number is required. ');
    cy.get(':nth-child(3) > .col-lg-10 > .card > .card-body > .row > :nth-child(1)').click();
    cy.get(':nth-child(3) > .col-lg-10 > .card > .card-body > .row > :nth-child(1) > :nth-child(3) > .invalid-feedback')
      .should('have.text', ' Registration Number is required. ');
    cy.get(':nth-child(8) > :nth-child(3) > .invalid-feedback').click();
    cy.get(':nth-child(8) > :nth-child(3) > .invalid-feedback')
      .should('have.text', ' VIN Number is required. ');
  }


  openAddCarForm() {
    cy.get('.navbar-toggler-humburger-icon').click();
    cy.get(':nth-child(5) > .dropdown-indicator').click();
    cy.get('#customer > :nth-child(3)').click();
    cy.get('.btn-add > .d-none').click();
  }

  fillCarDetails({ phone, registrationNumber, make, year, engine, capacity, code, vin }) {
    cy.get(':nth-child(2) > .col-lg-10 > .card > .card-body > .row > .col-12 > .form-control-input')
      .type(phone);

    // Set registration number
    cy.window().then((win) => {
      win.document.querySelector(
        ':nth-child(3) > .col-lg-10 > .card > .card-body > .row > :nth-child(1) > .form-control-input'
      ).value = registrationNumber;
    });
    cy.get(':nth-child(3) > .col-lg-10 > .card > .card-body > .row > :nth-child(1) > .form-control-input')
      .type('-RET');

    cy.get('#makeID').select(make).should('contain', make);
    cy.get('#year').select(year);

    cy.get(':nth-child(5) > .form-control-input').type(engine);
    cy.get(':nth-child(6) > .form-control-input').type(capacity);
    cy.get(':nth-child(7) > .form-control-input').click().type(code);

    cy.get(':nth-child(8) > .form-control-input').clear().type(vin);
  }

  submit() {
    cy.get('[type="submit"]').click()
    cy.get('.modal-footer > .btn-save').click();
  }

  assertCarAdded() {
    cy.get('.mb-2').should('have.text', ' Cars ');
  }
}

export default AddCarsPage;