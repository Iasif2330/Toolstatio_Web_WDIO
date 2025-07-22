import Signin from "../data/signin.js";
import SigninPage from "../pageobject/signin.page.js";
import Asserts from "../webdriverio-helper/Asserts.js";

let Data = new Signin();
let Page = new SigninPage();
let params = Data.params;
let inputs;

params.group = Data.groups[0];
describe(Page.groupId(params), () => {
    
    params.test = Data.groups[0].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open();
        await Page.signinWithValidCreds(Data, inputs.assert)
    })

    params.test = Data.groups[0].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[1];
        await Page.open();
        await Page.userLogoutAfterSignin(Data, inputs.assert)
    })

    params.test = Data.groups[0].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open();
        await Page.singinWithInvalidCreds(Data, inputs.assert)
    })
})
