import Page from '../webdriverio-helper/Page.js'

export default class Signup extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            title_testid: 'signup-title-selectbox-input',
            mr_option_testid: 'option-0-signup-title-selectbox',
            first_name_testid: 'signup-first-name-input-field',
            last_name_testid: 'signup-last-name-input-field',
            email_address_testid: 'signup-email-address-input-field',
            phone_number_testid: 'signup-mobile-number-input-field',
            password_testid: 'signup-password-input-field',
            street_testid: 'signup-address-form-Straat-input',
            house_number_testid: 'signup-address-form-Huisnummer-input',
            postcode_testid: 'signup-address-form-Postcode-input',
            place_testid: 'signup-address-form-Plaats-input',
            signup_btn_testid: 'signup-button',
            signin_link_testid: 'login-navigate-button',
            signin_heading_text_testid: 'signin-heading-text',
            email_validation_msg_testid: 'sign-up-email-validation-message',
            signup_heading_testid: 'signup-heading-text'
        }
        this.value = {
            registered_email: 'abhijeet-g001+1@webreinvent.com',
            email: 'demotest'+Date.now()+'@gmail.com',
            password: 'Abhijeet@22',
            first_name: 'Abhijeet',
            last_name: 'Ghosh',
            phone_number: '9999999999',
            street: 'Test',
            house_number: 'Test',
            place: 'Hoofddorp',
            postcode: '2131 DH'
        }
        this.params.page = {
            id: 'SU',
            name: 'Signup',
            url : this.base_url+'/register'
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Sign in" link on Sign Up page is functional or not',
                        expect: 'The "Sign in" link should be functional. It should open the Sign In page',
                        assert: this.base_url+'/login'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can register on the website using an already registered email address',
                        expect: 'The user should not be able to register with an email address that is already used for registration',
                        assert: 'Er bestaat al een account met dit e-mailadres. Log in met je bestaande account of reset je wachtwoord als je het vergeten bent'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can sign up using a valid, unregistered email or not',
                        expect: 'The user should be able to register by using a  is valid and unregistration email address'
                    }
                ]
            }
        ]
    }
}