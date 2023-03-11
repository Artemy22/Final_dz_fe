///<reference types="cypress"/>
import LoginPage from "../support/pages/LoginPage"
import { goToLoginPageBasic } from "../support/helper"
import { recFinder } from "../support/helper"
import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import MainPage from "../support/pages/MainPage"
import AddressPage from "../support/pages/AddressPage"

const loginPage = new LoginPage()
const mainPage = new MainPage()
const addressPage = new AddressPage()

user.country = faker.address.country()
user.name = faker.internet.userName()
user.number = faker.datatype.number({ min: 1000000, max: 9999999999, precision: 1 })
user.zipCode = faker.datatype.number({ min: 10000, max: 99999, precision: 1 })
user.address = faker.address.streetAddress()
user.city = faker.address.city()
user.state = faker.address.state()
user.cardNumber = faker.datatype.number({ min: 1e15, max: 9.99e15, precision: 1 })
user.cardName = faker.finance.creditCardIssuer()


describe('template spec', () => {
  it('passes', () => {
    goToLoginPageBasic()
    loginPage.submitLoginForm(user)
    recFinder(mainPage.getMyGoods(), user)
    mainPage.positionAddedToBasket(user)
    mainPage.clickCheckoutButton()
    addressPage.addNewAddressFlow(user)
    addressPage.selectFirstAddress()
    addressPage.selectFirstDeliveryOption()
    addressPage.fillCardData(user)
    addressPage.finishPayment(mainPage.getMyGoods())
  
  })
})