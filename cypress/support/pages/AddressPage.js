///<reference types="cypress"/>
export default class AddressCreatePage {

    getAddAddNewAddressButton() {
        return cy.get('[routerlink="/address/create"]')
    }

    clickAddNewAddressButton() {
        this.getAddAddNewAddressButton().click()
    }

    getCountryInput() {
        return cy.get('#mat-input-3') //cy.get('#mat-error-9')
    }

    getNameInput() {
        return cy.get('#mat-input-4') //cy.get('#mat-error-10')
    }

    getMobileNumberInput() {
        return cy.get('#mat-input-5') //cy.get('#mat-error-8')
    }

    getZipCodeInput() {
        return cy.get('#mat-input-6') //cy.get('#mat-error-11')
    }

    getAddressInput() {
        return cy.get('#address') //cy.get('#mat-error-12')
    }

    getCityInput() {
        return cy.get('#mat-input-8')
    }

    getStateInput() {
        return cy.get('#mat-input-9')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    submitButtonActive() {
        this.getSubmitButton().should('not.be.disabled')
    }

    submitButtonDisabled() {
        this.getSubmitButton().should('be.disabled')
    }

    getContinueButton() {
        return cy.get('.btn-next')
    }
    continueButtonActive() {
        this.getContinueButton().should('not.be.disabled')
    }

    continueButtonDisabled() {
        this.getContinueButton().should('be.disabled')
    }
    selectFirstAddress() {
        this.continueButtonDisabled()
        cy.get('.mat-radio-container :first').click({ force: true })
        this.continueButtonActive()
        this.getContinueButton().click()
    }

    getContinueButtonDeliveryOptions() {
        return cy.get('.nextButton')
    }

    selectFirstDeliveryOption() {
        this.getContinueButtonDeliveryOptions().should('be.disabled')
        cy.get('mat-row:contains("One Day Delivery") .mat-radio-button').click()
        this.getContinueButtonDeliveryOptions().should('not.be.disabled')
        this.getContinueButtonDeliveryOptions().click()
    }

    addressCreatedValidated(user) {
        cy.url().should('equal', 'http://juice-shop-sanitarskyi.herokuapp.com/#/address/select')
        cy.get('.mat-card')
            .should('contain', 'Select an address')
            .and('contain', user.country)
            .and('contain', user.name)
            .and('contain', user.zipCode)
            .and('contain', user.address)
            .and('contain', user.city)
            .and('contain', user.state)
    }

    addNewAddressFlow(user) {
        this.clickAddNewAddressButton()
        this.submitButtonDisabled()
        this.getCountryInput().type(user.country)
        cy.get('#mat-error-9').should('not.exist')
        this.getNameInput().type(user.name)
        cy.get('#mat-error-10').should('not.exist')
        this.getMobileNumberInput().type(user.number)
        cy.get('#mat-error-8').should('not.exist')
        this.getZipCodeInput().type(user.zipCode)
        cy.get('#mat-error-11').should('not.exist')
        this.getAddressInput().type(user.address)
        cy.get('#mat-error-12').should('not.exist')
        this.getCityInput().type(user.city)
        cy.get('#mat-error-8').should('not.exist')
        this.getStateInput().type(user.state)
        this.submitButtonActive()
        this.getSubmitButton().click()
        this.addressCreatedValidated(user)
    }

    getAddNewCArdElement() {
        return cy.get('#mat-expansion-panel-header-0')
    }

    fillCardData(user) {
        this.getContinueButtonDeliveryOptions().should('be.disabled')
        this.getAddNewCArdElement().click()
        cy.get('#mat-input-10').type(user.cardName, { force: true })
        cy.get('#mat-input-11').type(999 + user.cardNumber, { force: true })
        //cy.get('#mat-input-5').click()
        cy.get('#mat-input-12').select('7')
        cy.get('#mat-input-13').select('2099')
        cy.get('#submitButton').click()
        cy.get('.mat-simple-snack-bar-content').should('exist').and('be.visible')
        cy.get('.mat-radio-inner-circle').click()
        this.getContinueButtonDeliveryOptions().should('not.be.disabled')
        this.getContinueButtonDeliveryOptions().click()
    }

    finishPayment(myGoods) {
        cy.get('#checkoutButton').should('be.visible').and('exist')
        cy.get('app-purchase-basket').should('contain', myGoods)
        cy.get('#checkoutButton').click()
        cy.get('app-order-completion.ng-star-inserted')
        .should('contain', 'Thank you for your purchase!')
        .and('contain', myGoods)
    }
}