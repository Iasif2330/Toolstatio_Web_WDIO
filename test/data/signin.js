import Page from '../webdriverio-helper/Page.js'

export default class Signin extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            email_address_field_testid: 'signin-email-address-input-field',
            password_field_testid: 'signin-password-input-field',
            signin_btn_testid: "signin-signin-button",
            signout_btn_testid: "account-signout-button",
            email_validation_message_testid: 'signin-email-address-validation-message',
            invalid_credential_testid:'signin-invalid-credentials',
            password_field_validation_testid:'password-input-field-validation-message',
            validation_message_text: 'p*=Ongeldige inloggegevens',
            myaccount_heading_testid: 'myaccount-heading-text',
            branch_locator_btn_text: 'span=Select your nearest branch',
            release_notes_skip_button_text: 'button*= Skip',
            header_myaccount_btn_testid: 'header_header-link-logout',
            create_account_link_testid: 'signin-signup-link',
            signin_header_testid: 'signin-heading-text',
            signin_form_subtitle_testid: 'signin-sub-heading-text',
            signin_remember_me_checkbox_testid: 'checkbox-label',
            signin_forgot_password_link_testid: 'signin-forgot-password-link'
        }
        this.value = {
            email: 'abhijeet-g001+1@webreinvent.com',
            password: 'Abhijeet@123',
            unregistered_email: 'abhijeet@webreinvent.com',
            incorrect_password: 'Abhijeet@3',
            invalid_email: 'test123',
            account_url: "/account/home",
        }
        this.params.page = {
            id: 'SI',
            name: 'Signin',
            url : this.base_url+'/login'
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can sign into the website using valid credentials',
                        expect: 'The user should be able to sign in using valid credentials',
                        assert: {
                            expected_url_dashboard: this.base_url + '/account/home'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can sign out from an account or not',
                        expect: 'The user should be able to sign out from an account',
                        assert: {
                            expected_url_home: this.base_url + '/',
                            expected_url_dashboard: this.base_url + '/account/home'

                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can sign into the website using invalid email address',
                        expect: 'The user should not be able to sign in using invalid email address',
                        assert: {
                            invalid_creds_err_msg: 'Voer een geldig e-mailadres in.',
                            expected_url_signin: this.base_url + '/login'
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the user can sign into the website using unregistered email address',
                        expect: 'The user should not be able to sign in using unregistered email address',
                        assert: {
                            unregistered_email_err_msg: 'Ongeldige inloggegevens',
                            expected_url_signin: this.base_url + '/login'
                        }
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can sign into the website using incorrect password',
                        expect: 'The user should not be able to sign in using incorrect password',
                        assert: 'Ongeldige inloggegevens'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the "create one now" link is functional or not',
                        expect: 'The "create one now" link should be functional. It should open the "Sign Up" page',
                        assert: this.base_url+'/register'
                    }
                ]
            }
        ]
    }
}