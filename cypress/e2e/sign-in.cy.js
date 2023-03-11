///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'


const loginPage = new LoginPage()

describe('template spec', () => {
  it('Happy flow', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user)
  })

  it('Wrong email flow', () => {
    goToLoginPageBasic()
    loginPage.signInWrongEmail(user)
  })

  it('Empty email', () => {
    goToLoginPageBasic()
    loginPage.signInEmptyEmail(user)
  })

  it('Empty password', () => {
    goToLoginPageBasic()
    loginPage.signInEmptyPassword(user)
  })

  it('Wrong password flow', () => {
    goToLoginPageBasic()
    loginPage.signInWrongPassword(user)
  })
})