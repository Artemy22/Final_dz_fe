///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import MainPage from "../support/pages/MainPage"
import AddressCreatePage from "../support/pages/AddressCreatePage"

const loginPage = new LoginPage()
const mainPage = new MainPage()
const addressCreatePage = new AddressCreatePage()

user.country = faker.address.country()
user.name = faker.internet.userName()
user.number = faker.datatype.number({ min: 1000000, max: 9999999999, precision: 1 })
user.zipCode = faker.datatype.number({ min: 10000, max: 99999, precision: 1 })
user.address = faker.address.streetAddress()
user.city = faker.address.city()
user.state = faker.address.state()

describe('template spec', () => {
  it('passes', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user) 
    mainPage.clickAddToBasketButtonFirstGoods()
    mainPage.firstPositionAddedToBasket(user)
    mainPage.clickCheckoutButton()
    addressCreatePage.addNewAddressFlow(user)
  })
})