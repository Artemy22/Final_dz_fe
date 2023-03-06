///<reference types="cypress"/>
export default class LoginPage {

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButtonInAccountDropdown() {
        return cy.get('#navbarLoginButton');
    }

    getSubmitButton() {
        return cy.get('[title="Login"]');
    }


    getContinueSignUpButton() {
        return cy.get('[title="Continue"]');
    }

    getNotYetCustomer() {
        return cy.get('#newCustomerLink');
    }

    getLoginButton() {
        return cy.get('#loginButton');
    }

    getRememberMeCheckBox() {
        return cy.get('.mat-checkbox-layout')
    }

    getForgotYourPassword() {
        return cy.get('.forgot-pw')
    }

    getEmailInput() {
        return cy.get('#email')
    }

    getPasswordInput() {
        return cy.get('#password')
    }

    getVisiblePassword() {
        return cy.get('.mat-form-field-suffix')
    }

    getErrorProvidePassword() {
        return cy.get('#mat-error-1')
    }

    getErrorInvalidEmailOrPassword() {
        return cy.get('.error')
    }

    clickOnNotYetACustomer() {
        return this.getNotYetCustomer().click()
    }

    checkThereAreNoLoginErrors() {
        this.getErrorInvalidEmailOrPassword().should('not.exist')
        this.getErrorProvidePassword().should('not.exist')
    }

    loginButtonEnabled() {
        this.getLoginButton().should('not.be.disabled')
    }

    loginButtonDisabled() {
        this.getLoginButton().should('be.disabled')
    }

    loggedInTrue() {
        cy
            .get(".mat-drawer-content > :contains('Add to Basket')")
            .should('exist')
            .and('be.visible')
    }

    submitLoginForm(user) {
        this.getEmailInput().type(user.email)
        this.getPasswordInput().type(user.password);
        this.getRememberMeCheckBox().click()
        this.loginButtonEnabled()
        this.getLoginButton().click()
        this.loggedInTrue()
    }
}