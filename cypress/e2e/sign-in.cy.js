///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'
import { faker } from "@faker-js/faker"
import RegisterPage from "../support/pages/RegisterPage"


const loginPage = new LoginPage()
const registerPage = new RegisterPage()

user.email = faker.internet.email()
user.password = faker.internet.password()+"1!"

describe('sign in', () => {
  it('Happy flow', () => {
    goToLoginPageBasic()
    loginPage.clickOnNotYetACustomer()
    registerPage.signUpFlow(user)
    loginPage.submitLoginFormForFaker(user.email, user.password)
  })

  it('Wrong email flow', () => {
    goToLoginPageBasic()
    loginPage.signInWrongEmail(user.password)
  })

  it('Empty email', () => {
    goToLoginPageBasic()
    loginPage.signInEmptyEmail()
  })

  it('Empty password', () => {
    goToLoginPageBasic()
    loginPage.signInEmptyPassword()
  })

  it('Wrong password flow', () => {
    goToLoginPageBasic()
    loginPage.signInWrongPassword(user.email)
  })
})