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

    firstPositionAddedToBasket(user) {
        cy.get('[routerlink="/basket"]').click()
        cy.get('h1').should('contain', `Your Basket (${user.email})`)
        cy.get('.mat-row :contains(Apple Juice (1000ml))')
            .should('exist')
            .and('be.visible')
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