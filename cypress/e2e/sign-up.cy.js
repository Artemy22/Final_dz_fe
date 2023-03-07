///<reference types="cypress"/>

import { goToLoginPageBasic } from "../support/helper"
import RegisterPage from "../support/pages/RegisterPage"
import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import LoginPage from "../support/pages/LoginPage"

user.email = faker.internet.email()
user.password = faker.internet.password()+"1!"
user.securityAnswer = faker.internet.faker.internet.password()+"answer"

var registerPage = new RegisterPage()
var loginPage = new LoginPage()

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    goToLoginPageBasic()
    loginPage.clickOnNotYetACustomer()
    console.log(user)
    registerPage.signUpFlow(user)
  })
})