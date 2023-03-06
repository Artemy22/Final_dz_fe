///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'


const loginPage = new LoginPage()

describe('template spec', () => {
  it('passes', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user)
  })
})