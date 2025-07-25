import Page from '../webdriverio-helper/Page.js'
import Data from '../data/signin.js'
import Signup from '../data/signup.js'
import Header from '../data/header.js'
import Selector from '../webdriverio-helper/Selector.js'
import Asserts from '../webdriverio-helper/Asserts.js';
import Helper from '../webdriverio-helper/Helper.js';

let asserts = new Asserts();
let Sl = new Selector();
let helper = new Helper();
let data = new Data()
let header = new Header()
let signup = new Signup()

export default class SigninPage extends Page{
    constructor() {
        super();
        this.params.page.id = 'SI';
        this.params.page.name = 'SI';
        this.params.page.url = this.base_url; 
    }

    async open(){
        await browser.maximizeWindow();
        await super.open(this.params.page.url);
        await browser.pause(this.small_pause)
        await helper.acceptConsent()
    }

    async signinWithValidCreds(data, assert){
        await helper.waitForDisplayed(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await asserts.pauseIfHuman(this.small_pause/4)
        await Sl.testid(header.element.header_signin_link_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.signin_header_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(data.element.signin_header_testid), this.long_pause)
        await Sl.testid(data.element.signin_header_testid).click()
        await asserts.pauseIfHuman(this.small_pause/4)
        await helper.waitForDisplayed(Sl.testid(data.element.email_address_field_testid), this.long_pause)
        await Sl.testid(data.element.email_address_field_testid).setValue(data.value.email)
        await asserts.pauseIfHuman(this.small_pause/4)
        await helper.waitForDisplayed(Sl.testid(data.element.password_field_testid), this.long_pause)
        await Sl.testid(data.element.password_field_testid).setValue(data.value.password)
        await asserts.pauseIfHuman(this.small_pause/4)
        await helper.waitForClickable(Sl.testid(data.element.signin_btn_testid), this.long_pause)
        await asserts.pauseIfHuman(this.small_pause/4)
        await Sl.testid(data.element.signin_btn_testid).click()
        await helper.waitForDisplayed(Sl.testid(header.element.header_my_account_link_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(header.element.header_my_account_link_testid), this.long_pause)
        await Sl.testid(header.element.header_my_account_link_testid).click()
        await asserts.pauseIfHuman(this.small_pause/4)
        await helper.waitForUrl(this.base_url + data.value.account_url, this.long_pause)
        const dashboardURl = await browser.getUrl()
        expect(dashboardURl).toBe(assert.expected_url_dashboard)
    }

    async userLogoutAfterSignin(data, assert){
        if (await helper.isSignedIn()) {
            await helper.userLogout();
        }
        await this.signinWithValidCreds(data, assert)
        await helper.waitForDisplayed(Sl.testid(data.element.signout_btn_testid), this.medium_pause)
        await helper.waitForClickable(Sl.testid(data.element.signout_btn_testid), this.medium_pause)
        await asserts.pauseIfHuman(this.small_pause)
        await Sl.testid(data.element.signout_btn_testid).click()
        await browser.pause(this.small_pause)
        const homeURl = await browser.getUrl()
        expect(homeURl).toBe(assert.expected_url_home)
    }

    async singinWithInvalidCreds(data, assert){
    await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
    await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
    await Sl.testid(header.element.header_signin_link_testid).click()
    await helper.waitForDisplayed(Sl.testid(data.element.signin_header_testid), this.long_pause)
    await helper.waitForDisplayed(Sl.testid(data.element.email_address_field_testid), this.long_pause)
    await Sl.testid(data.element.email_address_field_testid).setValue(data.value.invalid_email)
    asserts.pauseIfHuman(this.small_pause)
    await helper.waitForDisplayed(Sl.testid(data.element.email_validation_message_testid), this.medium_pause)
    const err_msg = await Sl.testid(data.element.email_validation_message_testid).getText()
    await expect(err_msg).toBe(assert.invalid_creds_err_msg)
    const currentUrl = await browser.getUrl()
    await expect(currentUrl).toBe(assert.expected_url_signin)
    }

    async signinWithUnregisteredEmail(data, assert){
        await helper.waitForDisplayed(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await Sl.testid(header.element.header_signin_link_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.signin_header_testid), this.medium_pause)
        await helper.waitForClickable(Sl.testid(data.element.email_address_field_testid), this.medium_pause)
        await Sl.testid(data.element.email_address_field_testid).setValue(data.value.unregistered_email)
        await helper.waitForClickable(Sl.testid(data.element.password_field_testid), this.medium_pause)
        await Sl.testid(data.element.password_field_testid).setValue(data.value.password)
        await helper.waitForClickable(Sl.testid(data.element.signin_btn_testid), this.medium_pause)
        await Sl.testid(data.element.signin_btn_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.invalid_credential_testid), this.medium_pause)
        const err_msg = await Sl.testid(data.element.invalid_credential_testid).getText()
        expect(err_msg).toBe(assert.unregistered_email_err_msg)
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe(assert.expected_url_signin)
    }

    async signinUsingIncorrectPassword(data, assert){
        await helper.waitForDisplayed(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await Sl.testid(header.element.header_signin_link_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.signin_header_testid), this.medium_pause)
        await helper.waitForClickable(Sl.testid(data.element.email_address_field_testid), this.medium_pause)
        await Sl.testid(data.element.email_address_field_testid).setValue(data.value.email)
        await helper.waitForClickable(Sl.testid(data.element.password_field_testid), this.medium_pause)
        await Sl.testid(data.element.password_field_testid).setValue(data.value.incorrect_password)
        await helper.waitForClickable(Sl.testid(data.element.signin_btn_testid), this.medium_pause)
        await Sl.testid(data.element.signin_btn_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.invalid_credential_testid), this.medium_pause)
        const err_msg = await Sl.testid(data.element.invalid_credential_testid).getText()
        expect(err_msg).toBe(assert.incorrect_pwd__err_msg)
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe(assert.expected_url_signin)
    }

    async navigateToSignup(data, assert){
        await helper.waitForDisplayed(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await helper.waitForClickable(Sl.testid(header.element.header_signin_link_testid), this.long_pause)
        await Sl.testid(header.element.header_signin_link_testid).click()
        await helper.waitForDisplayed(Sl.testid(data.element.signin_header_testid), this.medium_pause)
        await helper.waitForDisplayed(Sl.testid(data.element.create_account_link_testid), this.medium_pause)
        await helper.waitForClickable(Sl.testid(data.element.create_account_link_testid), this.medium_pause)
        const createAcctext = await Sl.testid(data.element.create_account_link_testid).getText()
        await expect(createAcctext).toBe(assert.create_acc_text)
        await Sl.testid(data.element.create_account_link_testid).click()
        await helper.waitForDisplayed(Sl.testid(signup.element.signup_heading_testid), this.medium_pause)
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe(assert.expected_url_signup)
    }
  }

