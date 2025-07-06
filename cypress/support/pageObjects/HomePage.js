class HomePage {
    GoTo(url) {
      cy.visit(url); // Removed quotes to use the actual variable
    }
  
    login(email, password) {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('.btn-login').click();
    }
  }
  
  export default HomePage; // <-- Add this line to enable import
  