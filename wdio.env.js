import os from 'os';
import chromedriver from 'chromedriver';

class Env {
    constructor() {
            this.params = {
            debug: false,
            is_human: false,
            is_human_pause: 1000,
            small_pause: 2000,
            medium_pause: 5000,
            long_pause: 30000,
            env: null,
            current_os: null,
            log_level: 'error',
            base_url: 'https://www.toolstation.nl',
            disable_protection_string: "?builder.preview=true",
            version: null,
            chrome_driver_path: chromedriver.path,
            capabilities: [
                {
                    platformName: "mac",
                    browserName: 'chrome',
                    acceptInsecureCerts: true,
                    'goog:chromeOptions': {
                        args: [
                            '--disable-notifications', 
                            '--disable-geolocation',
                            '--disable-save-password-bubble',
                        ]
                    }
                },
            ]
        };

        this.detectOS();

        if(process.env.NODE_WDIO_IS_HUMAN){
        this.params.is_human = true;
        }
        if(process.env.NODE_WDIO_DEBUG){
            this.params.debug = true;
        }

        this.setCapabilities()

        if(this.params.debug === true){
            this.params.log_level = 'debug'
        }
    }
    //-------------------------------------------------
    setEnvironmentParams()
    {

        if(process.env.NODE_WDIO_BASE_URL){
            this.params.base_url = process.env.NODE_WDIO_BASE_URL
            return this.params;
        }

        switch(process.env.NODE_WDIO_APP_ENV){
            case 'develop':
                this.params.base_url = 'https://ts-eu24-develop.ventrox.com'
                break;
            case 'staging':
                this.params.base_url = 'https://ts-eu24-staging.ventrox.com'
                break;
            case 'production':
                this.params.base_url = 'https://www.toolstation.nl'
                break;
            default:
                break;
        }

        return this.params;
    }
    //-------------------------------------------------
    setCapabilities(){

        const osToUse = process.env.NODE_WDIO_OS || this.params.current_os;



        switch(osToUse){
            case 'mac':
                this.params.capabilities = [
                    {
                        platformName: "mac",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                        'goog:chromeOptions': {
                            args: [
                                '--disable-notifications', 
                                '--disable-geolocation',
                                '--disable-save-password-bubble',
                            ]
                        }
                    }, 
                    // {
                    //     platformName: "mac",
                    //     "appium:automationName": "Safari",
                    //     browserName: 'Safari'
                    // }
                ]
            break;
            case 'ios':
                this.params.capabilities = [
                    {
                        platformName: 'iOS',
                        browserName: 'Safari',
                        'appium:platformVersion': '17.0',
                        'appium:automationName': 'XCUITest'
                    }
                ]
        break;
            case 'android':
                this.params.capabilities = [
                    {
                        platformName: 'Android',
                        browserName: 'Chrome',
                        acceptInsecureCerts: true,
                        "appium:deviceName": "P7A34", //this should match with emulator name
                        'appium:automationName': 'UIAutomator2',
                    }
                ]
                break;
            case 'windows':
                this.params.capabilities = [
                    {
                        platformName: "windows",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }
                ]
                break;
            case 'linux':
                this.params.capabilities = [
                    /*{
                        platformName: "Linux",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }*/
                    {
                        browserName: 'chrome',   // or 'chromium'
                        'goog:chromeOptions': {
                            args: [
                                'no-sandbox',
                                'disable-dev-shm-usage',
                                'disable-infobars',
                                'headless',
                                'disable-gpu',
                                'window-size=1440,735',
                                'disable-extensions'
                            ]
                        }
                    }
                ]
                break;
        }
    }
    //-------------------------------------------------
    getCapabilities(){
        let capabilities = this.params.capabilities;
        if(this.params.is_human === false){

            for(let i in capabilities)
            {
                switch(capabilities[i].browserName)
                {
                    case 'chrome':
                        capabilities[i]['goog:chromeOptions'] = {
                            args: [
                                '--no-sandbox',
                                '--disable-dev-shm-usage',
                                '--disable-infobars',
                                '--headless',
                                '--disable-gpu',
                                '--window-size=1440,735',
                                '--disable-extensions'
                            ]
                        }
                    break;
                }
            }
        }
        return capabilities;
    }
    //-------------------------------------------------
    getParams () {
        this.params = this.setEnvironmentParams();
        this.params.capabilities = this.getCapabilities();

        console.log('params-->', this.params);

        return this.params;
    }
    //-------------------------------------------------
    detectOS() {
        const platform = os.platform();
        const release = os.release();

        switch (platform) {
            case 'darwin':
                this.params.current_os = 'mac';
                break;
            case 'win32':
                this.params.current_os = 'windows';
                break;
            case 'linux':
                if (release.toLowerCase().includes('android')) {
                    this.params.current_os = 'android';
                } else {
                    this.params.current_os = 'linux';
                }
                break;
            case 'ios':
            case 'iPadOS':
                this.params.current_os = 'ios';
                break;
            default:
                this.params.current_os = 'unknown';
        }
        console.log(`Detected OS: ${this.params.current_os}`);
    }
    //-------------------------------------------------
}
export default Env;