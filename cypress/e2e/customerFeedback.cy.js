///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'
import MainPage from "../support/pages/MainPage"
import { registerInterceptor } from "../support/helper"
import { captchaAnswerProvider } from "../support/helper"
import FeedbackPage from "../support/pages/FeedbackPage"




const loginPage = new LoginPage()
const mainPage = new MainPage()
const feedbackPage = new FeedbackPage()

describe('Feedbacks', () => {
  it('Happy flow', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user)
    registerInterceptor()
    mainPage.clickBurgerButton()
    mainPage.clickBurgerCustomerFeedbackOption()
    feedbackPage.theSubmitButtonDisabled()
    captchaAnswerProvider()
    feedbackPage.moveSliderRating()
    feedbackPage.leavingFeedbackComment("Art's comment")
    feedbackPage.clickTheSubmitButton()
    feedbackPage.successFeedback()
  })
})