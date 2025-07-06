/// <reference types="cypress" />

import SuppliersPage from '../support/pageObjects/SuppliersPage';

describe('Suppliers Management', () => {
    it('should allow a user to add a new supplier', () => {
        const suppliersPage = new SuppliersPage();
        suppliersPage.visit();
        suppliersPage.login('demo@marn.com.sa', 'Test@123');
        suppliersPage.openSuppliersTab();
        suppliersPage.addSupplier('tes', '+966523124567', 'e@d.com');
        cy.get('.mb-2').should('have.text', ' Suppliers ');
    });
});