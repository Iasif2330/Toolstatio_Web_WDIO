// import Signin from "../data/signin.js";
// import SigninPage from "../pageobject/signin.page.js";

// let Data = new Signin();
// let Page = new SigninPage();
// let params = Data.params;
// let inputs;

// params.group = Data.groups[0];
// describe(Page.groupId(params), function () {
//   this.retries(2);

//   params.test = Data.groups[0].tests[0];
//   it.only(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[0];
//     await Page.open();
//     await Page.signinWithValidCreds(Data, inputs.assert);
//   });

//   params.test = Data.groups[0].tests[1];
//   it(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[1];
//     await Page.open();
//     await Page.userLogoutAfterSignin(Data, inputs.assert);
//   });

//   params.test = Data.groups[0].tests[2];
//   it(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[2];
//     await Page.open();
//     await Page.singinWithInvalidCreds(Data, inputs.assert);
//   });

//   params.test = Data.groups[0].tests[3];
//   it(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[3];
//     await Page.open();
//     await Page.signinWithUnregisteredEmail(Data, inputs.assert);
//   });

//   params.test = Data.groups[0].tests[4];
//   it(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[4];
//     await Page.open();
//     await Page.signinUsingIncorrectPassword(Data, inputs.assert);
//   });

//   params.test = Data.groups[0].tests[5];
//   it(Page.testId(params), async () => {
//     inputs = Data.groups[0].tests[5];
//     await Page.open();
//     await Page.navigateToSignup(Data, inputs.assert);
//   });
// });

// Refactored version which loops through the test file

import Signin from "../data/signin.js";
import SigninPage from "../pageobject/signin.page.js";

let Data = new Signin();
let Page = new SigninPage();
let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), function () {
  this.retries(2);

  // Flexible test actions with correct parameters
  const testActions = [
    () => Page.signinWithValidCreds(Data, inputs.assert),
    () => Page.userLogoutAfterSignin(Data, inputs.assert),
    () => Page.singinWithInvalidCreds(Data, inputs.assert),
    () => Page.signinWithUnregisteredEmail(Data, inputs.assert),
    () => Page.signinUsingIncorrectPassword(Data, inputs.assert),
    () => Page.navigateToSignup(Data, inputs.assert),
    () => Page.navigateToForgotPassword(Data, inputs.assert),
  ];

  Data.groups[0].tests.forEach((test, index) => {
    const testFn = testActions[index];
    if (!testFn) return;

    it(Page.testId({ ...params, test }), async () => {
      inputs = test;
      await Page.open();
      await testFn(); // Call the wrapper
    });
  });
});
