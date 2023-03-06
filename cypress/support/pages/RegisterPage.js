///<reference types="cypress"/>

export default class RegisterPage {

    getTitleShouldHaveUserRegistration() {
        return cy.get('h1')
    }

    getEmailInput() {
        return cy.get('#emailControl')
    }

    getPasswordInput() {
        return cy.get('#passwordControl')
    }


    getRepeatPasswordInput() {
        return cy.get('#repeatPasswordControl')
    }

    getPasswordAdvice() {
        return cy.get('.mat-slide-toggle-bar')
    }

    getSecurityQuestionDropDown() {
        return cy.get('.mat-select-arrow')
    }

    getSecurityAnswerInput() {
        return cy.get('#securityAnswerControl')
    }

    getSequrityQuestion() {
        return cy.get('#mat-option-3')
    }

    passwordIsStrong() {
        cy.get(".mat-card-content > :contains('contains at least 8')").should('exist').and('be.visible')
        cy.get('[color="warn"]').should('not.exist')
    }

    getRegisterSaveButton() {
        return cy.get('#registerButton')
    }

    signUpFlow(user) {
        this.getTitleShouldHaveUserRegistration().should('contain', 'User Registration')
        this.getEmailInput().type(user.email)
        this.getPasswordInput().type(user.password)
        this.getRepeatPasswordInput().type(user.password)
        this.getPasswordAdvice().click()
        this.passwordIsStrong()
        this.getSecurityQuestionDropDown().click()
        this.getSequrityQuestion().click()
        this.getSecurityAnswerInput().type(user.securityAnswer)
        this.getRegisterSaveButton().click()
        cy.url().should('equal', 'http://juice-shop-sanitarskyi.herokuapp.com/#/login')
    }
}