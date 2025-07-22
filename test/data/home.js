import Page from '../webdriverio-helper/Page.js'

export default class Home extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            search_bar_placeholder: 'What do you want to buy?',
            product_suggestion_text: 'span=Bahco 228 Junior saw bracket',
            product_title_text: 'span=Bahco 228 junior zaagbeugel',
            branch_locator_btn_text: 'span=Select your nearest branch',
            track_order_btn_xpath: '//p[contains(text(),"Track Order")]/..//a',
            pro_card_btn_xpath: '//p[contains(text(),"Pro Card")]/..//a',
            store_nearby_btn_xpath: '//p[contains(text(),"Store Nearby")]/..//a',
            bulk_enquiry_btn_xpath: '//p[contains(text(),"Bulk Enquiry")]/..//a',
            header_signin_btn_testid: 'header_header-link-login',
            toolstation_logo_xpath: '//img[@alt="logo"]/../..//a',
            home_first_banner_para_text:'p*=UITVOEREN AAN A',
            consent_button_xpath: '//button[@id="onetrust-accept-btn-handler"]',
        }
        this.value = {
        }
        this.params.page = {
            id: 'HM',
            name: 'Home',
            url : this.base_url
        }
        this.groups = [
            {
                count: 1,
                name: 'Customer Support',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Track Order" button under the Customer Support section is functional or not',
                        expect: 'The "Track Order" button should be functional. It should open the "Order History" page',
                        assert: this.base_url+'/account/order-history'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "Pro Card" button under the Customer Support section is functional or not',
                        expect: 'The "Pro Card" button should be functional. It should open the "Pro Card" page',
                        assert: this.base_url+'/pro-card'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the "Store Nearby" button under the Customer Support section is functional or not',
                        expect: 'The "Store Nearby" button should be functional. It should open the "Branches" page',
                        assert: this.base_url+'/branches'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the "Bulk Enquiry" button under the Customer Support section is functional or not',
                        expect: 'The "Bulk Enquiry" button should be functional. It should open the "Help" page',
                        assert: this.base_url+'/contact-us'
                    }
                ]
            }
        ]
    }
}