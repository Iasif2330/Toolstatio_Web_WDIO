import Page from '../webdriverio-helper/Page.js'

export default class Procard extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            procard_withcredit_btn_xpath: '//*[@href="/pro-card/application"]',
            procard_withoutcredit_btn_xpath: '//*[@href="/pro-card/application/zero-account"]',
            signup_link_testid: 'signin-signup-link',
            without_credit_radio_btn_xpath: '//label[contains(., "Without Credit")]/..//input',
            age_verification_checkbox_testid: 'procard-verify-age-checkbox-input',
            terms_and_condition_checkbox_testid: 'pro-card-terms-accepted-invisible-overlay',
            accept_termsandConditions_button_xpath: '(//*[@data-testid="atom-button"])[2]',
            modal_accept_terms_button_testid: 'proCard-modal-terms-accept-button',
            start_application_btn_testid: 'procard-start-button',
            company_kvk_field_testid: 'pro-card-application-company-details-commerce-number-input',
            company_name_field_placeholder: 'Company Name',
            select_company_radio_testid: {
                startswith: 'pro-card-application-company-list-radio-button-',
                endswith: '-label'
            },
            next_btn_testid: 'pro-card-form-bottom-bar-next-button',
            main_account_holder_field_testid: 'pro-card-application-authorized-person-name-input',
            campany_account_holder_field_testid: 'pro-card-application-bank-details-account-holder-name-input',
            iban_field_testid: 'pro-card-application-bank-details-iban-input',
            company_information_personal_radio_testid: 'pro-card-application-bank-details-radio-button-Personal',
            summary_title_xpath: '(//*[@data-testid="molecule-alert-div"])[1]',
            agreement_form_bank_dropdown_xpath: '//*[@name="bic"]',
            agreement_form_continue_btn_xpath: '//button[contains(text(), "Ga verder" )]',
            agreement_accept_checkbox_id: 'email',
            agreement_form_continue_link_xpath: '//a[contains(text(), "Ga verder" )]',
            contract_test_radio_btn_id: 'mock',
            contract_submit_btn_xpath: '//button[contains(., "Tekenen")]',
            approve_mock_btn_attribute: {
                attribute: 'data-tid',
                value: 'approve'
            },
            procard_thankyou_message_xpath: '//h1[contains(., "Thank")]',
            go_back_to_account_btn_xpath: '//span[contains(text(), "Go back to your account")]/../..//a',
            accept_cookie_button_xpath: '//button[@id="onetrust-accept-btn-handler"]',
            signin_header_cta_testid: 'header-auth_header-link-login',
            header_home_logo_testid: 'checkout-layout-header-toolstation-logo',
            header_my_account_testid: 'header-auth_header-link-logout',
            my_account_procard_nav_testid: 'account-pro-card-link',
            my_account_procard_apply_button_xpath: '//*[text()="Toepassen"]',
            header_procard_link_testid: 'header-link-content/pro',
            request_procard_cta_xpath: '(//*[@href="/content/pro-kaart-keuze"])[2]',
            withoutcredit_card_image_testid: 'my-account-pro-card-user-card-image',
            withoutcredit_user_name_on_card_xpath: '(//*[@data-testid="my-account-pro-card-user-card-name"])[2]'
        }
        this.value = {
            kvk_number: 17078445,
            account_holder_name: 'Robert Feight',
            iban_number: 'NL24ABNA6224410976',
            mobile_number: 928374652,
            country: 'NEDERLAND',
            bank: 'ASN',
            with_credit_application_complete_end_url: 'https://toolstation.twikey.com/flow/contract/3514',
            without_credit_application_complete_end_url: '/pro-card/application/complete',
            with_credit_application_start_end_url: '/pro-card/application',
            without_credit_application_start_end_url: '/pro-card/application/zero-account',
        }
        this.params.page = {
            id: 'PC',
            name: 'Procard',
            url : this.base_url + '/pro-card'
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the sign up process for \'PRO Card with Credit\' using valid details and credentials',
                        expect: 'The user should be able to sign up for the \'PRO Card with Credit\' using valid details and credentials',
                        
                    },
                    {
                        count: 1.2,
                        name: 'Verify the sign up process for \'PRO Card without Credit\' using valid details and credentials',
                        expect: 'The user should be able to sign up for the \'PRO Card without Credit\' using valid details and credentials',
                    },
                    {
                        count: 1.3,
                        name: 'Verify the sign-up process for \'PRO Card\' without credit first, followed by with credit, using valid details and credentials',
                        expect: 'The user should be able to sign up for the \'PRO Card\' without credit and then with credit using valid details and credentials',
                    },                    
                ]
            }
        ]
    }
}