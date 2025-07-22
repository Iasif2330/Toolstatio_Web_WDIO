import Page from '../webdriverio-helper/Page.js'

export default class Trolley extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            checkout_button_testid: 'trolley-continue-checkout-cta',
            trolley_button_testid: '_header-link-cart',
            quantity_selector_button_findElementsByTestIdEndingWith: '-quantity-control-increment',
            checkout_delivery_heading_testid: 'checkout-delivery-method-heading',
            checkout_delivery_subheading_testid: 'checkout-total-products-in-trolley-count',
            trolley_code_button_testid: 'trolley-code-share-cta',
            trolley_qr_text: 'p=Winkelwagen Code',
            product_link_findElementsByTestIdEndingWith: '-details-page-link-name',
            product_link_endtestid: '-details-page-link',
            save_later_regex:{
                start_testid: 'trolley-card-',
                end_testid: '-save-for-later-cta'
            },
            trolley_saveforlater_button_getElementByRegexTestid: '^trolley-card-\d{5}-save-for-later-cta$',
            save_list_header_testid: 'header-save-list_header-link-save-list',
            save_for_later_list_tab_xpath: "//button[.//span[text()='Bewaar voor later']]",
            change_pick_up_endtestid: '-channel-switch-cta',
            search_box_placeholder: 'Voer postcode of plaatsnaam in',
            location_dropdown_selector_testid: 'locality-autocomplete-li',
            dropdown_selection_testid: 'branch-selector-modal-span',
            save_button_testid: 'branch-save',
            collection_text_visible_testid: 'trolley-channel-nextdaycollection',
            change_to_delivery_findElementsByTestIdEndingWith: '-channel-switch-cta',
            delivery_text_visible_testid: 'trolley-channel-delivery',
            my_account_testid: 'header-auth_header-link-logout',
            log_out_testid: 'account-signout-button',
            delete_product_from_trolley_findElementsByTestIdEndingWith: '-remove-icon',
            confirm_delete_cta_testid: 'trolley-item-delete-confirmation-remove-cta',
            card_cantainer_findElementsByTestIdEndingWith: '-card-card-container',
            compare_product_findElementsByTestIdEndingWith: '-compare-checkbox-label',
            compare_all_product_findElementsByTestIdEndingWith: '-compare-button',
            compare_3_products_text: 'p=Vergelijk 3 producten',
            promocode_empty_text_box_testid: 'coupon-code-input',
            promocode_submit_button_xpath: "//button[@type='submit' and span[normalize-space(.)='Toepassen']]",
            success_message_promocode_testid:'trolley-promo-success-modal-descriptive-message',
            continue_cta_promocode_sucess_modal_testid: 'trolley-promo-success-modal-continue-cta',
            invalid_promocode_toast_message_testid: 'toast-body',
            trolley_code_copy_button_testid: 'trolley-code-copy-btn',
            trolley_code_text_testid: 'heading-primary',
            cancel_trolley_code_popup_xpath: '(//p[text()="Winkelwagen Code"]/../..//*[name()="svg"])[1]',
            click_collect_card_text: 'p=Vestiging Click & Collect',
            free_delivery_card_text: 'p=Gratis bezorging op',
            click_collect_testid: 'heading-primary',
            free_delivery_title_text: 'h1=Bezorgen van je Toolstation bestelling',
            cookies_button_text: 'button=Akkoord',
            trolley_promo_close_testid: 'trolley-promo-success-modal-close-icon',
            trolley_product_link_partialtestid: '-details-page-link',
            search_box__findElementsByTestIdEndingWith: 'autocomplete-input',
            location_dropdown_selector_findElementsByTestIdStartingWith: 'locality-autocomplete-li',
            plp_header_testid: 'heading-primary',
            trolley_heading_testid: 'heading-primary',
            card_item_count_testid: 'trolley-item-count',
            collection_section_heading_testid: 'trolley-channel-collection',
        }
        this.value = {
            searchbox: '1011 AB',
            promocode: 'EU505TS',
            promocodes: 'TS_2341',
            email: 'testautomation-t002@email.com',
            password: 'Test@1234',
        }
        this.params.page = {
            id: 'TR',
            name: 'Trolley',
            url : this.base_url+'/trolley'
        }
        this.groups = [

            {
                count: 1,
                name: 'Payment',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify that user is able to add product to trolley and then checkout.  ',
                        expect: 'User should be able to add product to trolley and then checkout and navigate to checkout page. ',
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            checkout_page: this.base_url+'/checkout',
                        }

                        
                    },
                    {
                        count: 1.2,
                        name: 'Verify that user is able to add product to trolley and then click on quantatity selector button of that product.  ',
                        expect: 'User should be able to add product to trolley and then click on quantatity selecter button of that product . ',
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                        }
                        
                    },
                    {
                        count: 1.3,
                        name: 'Verify that user is able to add product to trolley and then able to click on trolley code button.  ',
                        expect: 'User should be able to add product to trolley and then able to click on trolley code button and get the trolley code . ',
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            
                        }
                    },
                    {
                        count: 1.4,
                        name: 'Verify that user is able to add product to trolley and then able to move that product to save for later tab.  ',
                        expect: 'User should be able to add product to trolley and then able to move that product to save for later tab  . ',
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            save_list_page: this.base_url+'/account/saved-lists',
                        }
                    },
                    {
                        
                        count: 1.5,
                        name: 'Verify that user is able to add product to trolley and then able to switch that product for collection in store.  ',
                        expect: 'User should be able to add product to trolley and then able to switch that product for collection in store. ',
                        
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                        }

                    },
                    {
                        
                        count: 1.6,
                        name: 'Verify that user is able to add product to trolley and then able to switch that product for collection in store and then switch back to product for delivery.  ',
                        expect: 'User should be able to add product to trolley and then able to switch that product for collection in store and then switch back  to product for delivery. ',
                        
                        assert: {
                            trolley_page: this.base_url+'/trolley',
                        }

                    },
                    {

                        count: 1.7,
                        name: 'Verify that user is able to compare products when trolley is empty.',
                        expect: 'User should be able compare products when the trolley is empty.',

                        assert: {
                            trolley_page: this.base_url+'/trolley',
                        }
                    },
                    {
                        count: 1.8,
                        name: 'Verify that user is able to apply promocode sucessfully and checkout ',
                        expect: 'User should be able to apply promocode sucessfully and then checkout ',

                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            checkout_page: this.base_url+'/checkout',
                        }
                    },

                    {
                        count: 1.9,
                        name: 'Verify that user is not able to apply promo with invalid coupan code.',
                        expect: 'User should not be able to apply invalid promo coupan code . ',

                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            
                        }
                    },
                    {
                        
                        count: 2.1,
                        name: 'Verify that product remains in trolley after user logs out and logs in again',
                        expect: 'User should be able to see the previously added product in the trolley after re-login ande then sucessfully checkout',

                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            checkout_page: this.base_url+'/checkout',
                        }
                    },
                    {
                        
                        count: 2.2,
                        name: 'Verify the full journey of Trolley Code by opening the URL in another tab.',  
                        expect: 'User should be able to restore trolley contents using the Trolley Code in a new tab',  


                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            
                        }
                    },
                    {
                        
                        count: 2.3,
                        name: 'Verify that user is able to navigate to Click & Collect and Free Delivery options.',  
                        expect: 'User should be able to navigate to Click & Collect and Free Delivery options successfully.',  


                        assert: {
                            trolley_page: this.base_url+'/trolley',
                            click_collect_page: this.base_url+'/content/clickandcollect',
                            delivery_page: this.base_url+'/content/delivery',
                        }
                    },

                ]
            }

            
        ]
    }
}