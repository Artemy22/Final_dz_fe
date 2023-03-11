///<reference types="cypress"/>
import MainPage from "./pages/MainPage"
import AddressPage from "./pages/AddressPage"
import user from "../fixtures/user.json"

const mainPage = new MainPage()
const addressPage = new AddressPage()

export const inputFiller = (inputLocator, valueToEnter) => {
    cy.get(inputLocator).type(valueToEnter).should('have.value', valueToEnter)
}

export const goToLoginPageBasic = () => {
    cy.visit('/')
    cy.get('.close-dialog').click({ force: true })
    cy.get('.cc-btn').click({ force: true })
    cy.get('#navbarAccount').click()
    cy.get('#navbarLoginButton').click()
    cy.url().should('contain', 'http://juice-shop-sanitarskyi.herokuapp.com/#/login')
}

export const loginViaUI = (user) => {
    cy.visit('/')
    cy.get('#customer_menu_top').click()
    cy.get('[id="loginFrm_loginname"]').type(user.name)
    cy.get('[id="loginFrm_password"]').type(user.password)
    cy.get('[title="Login"]').click()
    cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
}

export const loginSilent = ((user) => {
    let csrfToken;
    let csrfInstance;
    cy.request('GET', '/index.php?rt=account/login')
        .then(responce => {
            let htmlResponse = document.createElement('html')
            // console.log(htmlResponse)
            htmlResponse.innerHTML = responce.body
            csrfToken = htmlResponse.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
            csrfInstance = htmlResponse.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
        })
        .then(() => {
            cy.request({
                method: 'POST',
                url: '/index.php?rt=account/login',
                body: {
                    csrftoken: csrfToken,
                    csrfinstance: csrfInstance,
                    loginname: user.name,
                    password: user.password
                },
                form: true
            })
        })
})

export const loginSilentBetter = () => {
    let token;
    cy.request({
        method: 'POST',
        url: '/rest/user/login',
        body: {
            csrftoken: csrfToken,
            csrfinstance: csrfInstance,
            loginname: user.name,
            password: user.password
        },
        form: true
    }).then(response => {
        token = response.body.token
        cy.setCookie('token', token)
        window.localStorage.setItem('token', token)
        window.sessionStorage.setItem('token', token)
    })
}

export const recFinder = (productTitleToFind) => {
    cy.get('mat-sidenav-content').then(elem => {
        if (elem.text().includes(`${productTitleToFind}`)) {
            cy.get(`mat-card:contains(${productTitleToFind}) button`).click()
        } else {
            cy.get('.mat-paginator-navigation-next').click()
            recFinder(productTitleToFind)
        }
    })
}

export const productFinder = (productTitleToFind) => {
    cy.get('.pull-right .pagination').find('li').then(elm => {
        //
        for (let i = 0; i < elm.length; i++) {
            cy.get(".prdocutname").then(($a) => {
                if ($a.text().includes(`${productTitleToFind}`)) {
                    cy.get(`[title="${productTitleToFind}"]`).click()
                    cy.log('***FOUND***')
                } else {
                    cy.get('.mat-paginator-navigation-next')
                }
            })
        }
    })
}
