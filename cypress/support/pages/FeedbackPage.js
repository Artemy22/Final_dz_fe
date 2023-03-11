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
        return cy.get('.mat-slider-thumb')
    }

    answerTheCaptcha(answer) {
        cy.get('#captchaControl').type(answer)
    }




}