import Page from '../webdriverio-helper/Page.js'

export default class Header extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            item_count_testid: 'trolley-item-count',
            toolstation_logo_testid: 'header-logo',
            header_deals_link_testid: 'header-link-content/deals/',
            save_list_btn_testid: 'header-save-list_header-link-save-list',
            electra_category_link_testid: 'category-list-option-4',
            saved_list_heading_text: 'h1*=lijst',
            save_list_heading_testid: 'saved-list-title',
            product_suggestion_xpath: '//a[@href="/bahco-228-junior-zaagbeugel/p99638"]',
            product_title_text: 'span=Bahco 228 junior zaagbeugel',
            category_suggestion_xpath: '(//span[contains(text(), "Schakelmateriaal")]/../../../../..//span[contains(text(), "Elektra")])[1]',
            higlights_heading_text: 'span*=Hoogtepunten',
            header_categories_link_testid: 'header-categories-text',
            electra_subcategory_installatiekabels_link_xpath: '//*[@href="/elektra/installatiekabels/c1266"]',
            electra_subcategory_installatiekabels_link_testid:'sub-category-option-1-list-1-label',
            power_tool_category_link_testid: 'category-list-option-3',
            power_tool_subcategory_link_findElementsByTestIdStartingWith: 'sub-category-option-',
            header_my_account_link_testid: 'header-auth_header-link-logout',
            header_signin_link_testid: 'header-auth_header-link-login',
            header_deals_link_xpath: '//a[@href="/deals"]',
            search_bar_placeholder: 'What do you want to buy?',
            search_field_testid: 'header-search-input-field',
            product_suggestion_text: 'span=Bahco 228 junior zaagbeugel',
            search_bar_testid: 'header-search-box',
            search_field_placeholder: 'Waar ben je naar op zoek?', 
            branch_locator_btn_text: 'span=Select your nearest branch',
            branch_locator_testid:'header-branch-text',
            toolstation_logo_testid: 'header-logo',
            language_toggle_btn_role: 'combobox',
            signin_btn_testid: 'header-auth_header-link-login',
            trolley_btn_testid: '_header-link-cart',
            french_language_option_arealabel: 'French (France)',
            saved_list_heading_text: 'h1*=Opgeslagen kluslijst',
            signout_btn_xpath: "//span[contains(text(),'Sign out')]/../..//button",
            header_brands_link_testid: 'header-brands-text',
            header_new_launch_link_xpath: '//span[@data-testid="header-brands-text"]/../../..//a[contains(text(), "Nieuwe lancering")]',
            header_procard_link_xpath: '//a[@href="/content/pro"]',
            header_procard_link_testid: 'header-link-content/pro',
            higlights_heading_text: 'span*=Hoogtepunten',
            explore_categories_link_testid: 'category-menu-explore-category-text',
            explore_categories_link_text: 'span=Explore Categories',
            schroeven_category_link_text: 'span*=Schroeven & Bevestigingsmiddelen',
            subcategory_link_testid: 'sub-category-option-2-span',
            my_account_header_link_testid: 'header-auth_header-link-logout',
            signin_header_link_testid: 'header_header-link-login',
            category_suggestion_xpath: '(//span[contains(text(), "Schakelmateriaal")]/../../../../..//span[contains(text(), "Elektra")])[1]',
            category_page_heading_testid: 'atom-title',
            brands_link_heading_text_testid: 'top-brand-menu-header',
            dewalt_brand_link_testid: 'brand-menu-link-to-brands-dewalt',
            bosch_brand_link_testid: 'brand-menu-link-to-brands-bosch',
            navbar_deals_href: '/deals',
            navbar_new_launch_href: '/new-launch',
            navbar_procard_href: '/pro-card',
            navbar_design_style_href: '/ui',
            navbar_deals_link_xpath: '//span[@data-testid="header-brands-text"]/../../..//a[contains(text(), "Aanbiedingen")]',
            navbar_new_launch_link_xpath: '//span[@data-testid="header-brands-text"]/../../..//a[contains(text(), "Nieuwe lancering")]',
            navbar_procard_link_xpath: '//span[@data-testid="header-brands-text"]/../../..//a[contains(text(), "Pro-Kaart")]',
            higlights_heading_text: 'span*=Hoogtepunten',
            explore_categories_link_testid: 'category-menu-explore-category-text',
            explore_categories_text_testid: 'category-menu-explore-category-text',
           // header_categories_link_testid: 'header-categories-text',
            subcategory_link_testid: 'sub-category-option-2-span',
            signin_header_link_testid: 'header_header-link-login', 
            category_page_heading_testid: 'heading-primary',
            brand_page_heading_testid: 'heading-primary',
            brands_link_heading_text_testid: 'top-brand-menu-header',
            uponor_brand_link_testid:'brand-menu-link-to-brands-uponor',
            dewalt_brand_link_testid: 'brand-menu-link-to-brands-dewalt',
            bosch_brand_link_testid: 'brand-menu-link-to-brands-bosch',
            schroeven_bevestigingsmiddelen_link_testid: 'category-list-option-2',
            search_productcode_testid: 'search-result-product-name-99638',
            search_category_testid: 'search-result-category-18',
            search_productname_xpath: '//p[@data-testid="search-result-product-name-99638"]/span/span',
            branch_modelview_btn_testid: 'branch-selector-modal_view-button',
            branch_searchbar_testid: 'branch-selector-modal-locality-autocomplete-autocomplete-input',
            branch_searchsuggestion_list_testids: 'branch-selector-modal-locality-autocomplete-li',
            resultfound_para_xpath: '//p[contains(.,"Gevonden resultaten")]',
            branch_searchresults_testids: 'branch-selector-modal-span',
            savebranch_btn_testid: 'branch-save',
            branch_switch_success_msg_testid: 'toast-content',
            deals_link_testid: 'category-list-option-1',
            deals_subcat_testid: 'sub-category-option-1-span',
            brands_image_starttestid: 'brand-menu-image-of-',

            
        }
        this.value = {
            email: 'abhijeet.kumarghosh+1@toolstation.com',
            password: 'Abhijeet@2',
            product_code: '99638',
            product_name: 'Bahco 228 junior zaagbeugel',
            category_name: 'Elektra'
        }
        this.params.page = {
            id: 'HD',
            name: 'Header',
            url : this.base_url
        }
        this.groups = [
            {
                count: 1,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the "Toolstation" logo button is clickable/functional',
                        expect: 'The "Toolstation" logo should be functional. It should open the "Homepage"'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the "Language" toggle button is functional',
                        expect: 'The "Language" toggle button should be functional',
                        assert: {
                            url: this.base_url+'/fr-FR',
                            style_guide_text: 'Guide de style'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the "Save List" button is functional',
                        expect: 'The "savelist" button should be functional. It should open the save lists section for the user',
                        assert: this.base_url+'/account/saved-lists'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the "Sign In" button is functional',
                        expect: 'The "Sign In" button should be functional. It should open the "Sign In" page',
                        assert: this.base_url+'/login'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the "Trolley" button is functional',
                        expect: 'The "Trolley" button should be functional. It should open the trolley page',
                        assert: this.base_url+'/trolley'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the "Categories" menu button added in the header section is functional',
                        expect: 'The "Categories" link should be functional. It should open a list of categories available',
                        assert: 'Ontdek categorieën'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the "Brands" menu button added in the header section is functional',
                        expect: 'The "Brands" menu button should be functional. It should open a list of brands available',
                        assert: 'Topmerken'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the "Deals" button added in the header section is functional',
                        expect: 'The "Deals" button should be functional. It should open the "Deals" page',
                        assert: this.base_url+'/content/deals/'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the "New Launch" button added in the header section is functional',
                        expect: 'The "New Launch" button should be functional. It should open the "New Launch" page',
                        assert: this.base_url+'/new-launch'
                    },
                    {
                        count: 2.1,
                        name: 'Verify if the "Pro Card" button added in the header section is functional',
                        expect: 'The "Pro Card" button should be functional. It should open the "Pro Card" page',
                        assert: this.base_url+'/content/pro'
                    }
                ]
            },
            {
                count: 2,
                name: 'Search Section',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can search for a specific product using a product code',
                        expect: 'The user should be able to search for a specific product using a product code',
                        assert: {
                            url: this.base_url+'/bahco-228-junior-zaagbeugel/p99638',
                            title: 'Bahco 228 junior zaagbeugel'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can search for a specific product using a product name.',
                        expect: 'The user should be able to search for a specific product using a product name',
                        assert: {
                            url: this.base_url+'/bahco-228-junior-zaagbeugel/p99638',
                            title: 'Bahco 228 junior zaagbeugel'
                        }
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can search for a specific category using a category name.',
                        expect: 'The user should be able to search for a specific category using the category name',
                        assert: {
                            url: this.base_url + '/elektra/c18',
                            heading: 'Elektra'
                        }
                    }
                ]
            }
        ]
    }
}