///<reference types="cypress"/>
export default class MainPage {

    getAddToBasketButtonFirstGoods() {
        return cy.get('.mat-card.mat-focus-indicator > :eq(1)')
    }
    clickAddToBasketButtonFirstGoods() {
        this.getAddToBasketButtonFirstGoods().click()
        cy.get('#cdk-overlay-3 .mat-snack-bar-container')
            .should('exist')
            .and('be.visible')
    }

    getMyGoods() {
        return 'Quince Juice (1000ml)'
    }

    positionAddedToBasket(user) {
        cy.wait(2000)
        cy.get('[routerlink="/basket"]').click()
        cy.wait(1000)
        cy.get('h1').should('contain', `Your Basket (${user.email})`)
        cy.get(`.mat-row :contains(${this.getMyGoods()})`)
            .should('exist')
            .and('be.visible')
    }

    getBurgerButton() {
        return cy.get('[aria-label="Open Sidenav"]')
    }

    clickBurgerButton() {
        this.getBurgerButton().click()
    }

    getBurgerCustomerFeedbackOption() {
        return cy.get('[routerlink="/contact"]')
    }

    clickBurgerCustomerFeedbackOption() {
        this.getBurgerCustomerFeedbackOption().click()
    }

    getCheckoutButton() {
        return cy.get('#checkoutButton')
    }
    clickCheckoutButton() {
        this.getCheckoutButton().click()
        cy.url().should('equal', 'http://juice-shop-sanitarskyi.herokuapp.com/#/address/select')
    }

    getAddNewAddressButton() {
        return cy.get('div.ng-star-inserted .mat-focus-indicator')
    }

    clickAddNewAddressButton() {
        this.getAddNewAddressButton().click()
        cy.url().should('equal', 'http://juice-shop-sanitarskyi.herokuapp.com/#/address/create')
    }







}