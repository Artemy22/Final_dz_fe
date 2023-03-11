///<reference types="cypress"/>

export default class FeedbackPage {

    customerFeedbackPageOpened() {
        cy.get('h1').should('contain', 'Customer Feedback')
    }

    getComment() {
        return cy.get('#comment')
    }

    getCharCounterValidator() {
        return cy.get('#mat-hint-1')
    }

    getSliderThumb() {
        return cy.get('.mat-slider-wrapper .mat-slider-thumb-container')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    moveSliderRating() {
        this.getSliderThumb()
            .invoke('attr', 'style', 'transform: translateX(0%);')
        cy.get('#rating')
            .invoke('attr', 'aria-valuenow', '5')
        cy.get('#rating')
            .invoke('attr', 'aria-valuetext', '5★')
            cy.wait(1000)
        cy.get('.mat-slider-thumb').click({force: true})
    }

    leavingFeedbackComment(comment) {
        this.getComment().type(comment)
    }

    theSubmitButtonDisabled() {
        this.getSubmitButton().should('be.disabled')
    }

    theSubmitButtonActive() {
        this.getSubmitButton().should('not.be.disabled')
    }

    clickTheSubmitButton() {
        this.theSubmitButtonActive()
        this.getSubmitButton().click()
    }

    successFeedback() {
        cy.get('#cdk-overlay-4:contains("Thank you so much for your amazing 5-star feedback!")')
        .should('exist')
        .and('be.visible')
    }

}