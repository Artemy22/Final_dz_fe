///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'
import MainPage from "../support/pages/MainPage"

const loginPage = new LoginPage()
const mainPage = new MainPage()


describe('template spec', () => {
  it('passes', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user) 
    mainPage.clickAddToBasketButtonFirstGoods()
    mainPage.firstPositionAddedToBasket()
    mainPage.clickCheckoutButton()
  })
})