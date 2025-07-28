import http from "k6/http";
import { check, sleep } from "k6";
import { options, env } from "../k6.config.js";
import { users } from "../data/signin.js";

export { options };

export default function () {
  const loginUrl = `${env.BASE_URL}/ecom/v1/customers/auth/login`;

  // Use the pre-login token for the initial login request
  const preLoginToken = "Sgdbg7qPk2oSsGJfEThqxKffTUn8";

  const loginParams = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${preLoginToken}`,
    },
  };

  const payload = JSON.stringify(users.valid);

  // Step 1: Login
  const loginRes = http.post(loginUrl, payload, loginParams);

  console.log(`Login status: ${loginRes.status}`);
  console.log(`Login response body: ${loginRes.body}`);

  check(loginRes, {
    "login status is 200": (r) => r.status === 200,
    "login returns token": (r) => !!r.json("data.token"),
  });

  if (loginRes.status !== 200) {
    console.error("Login failed, aborting test");
    return;
  }

  // Extract token and customer ID from login response
  const loginData = loginRes.json("data");
  const token = loginData.token;
  const customerId = loginData.id;

  // Step 2: Get active trolley for logged-in customer
  const trolleyUrl = `${env.BASE_URL}/ecom/v1/customers/${customerId}/trolleys/active`;

  const trolleyParams = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${preLoginToken}`, // **Static** token here (not fresh login token)
      "x-toolstation-customer-id": token, // Fresh login token here (JWT)
      Origin: "https://www.toolstation.nl",
      Referer: "https://www.toolstation.nl/",
    },
  };

  const trolleyRes = http.get(trolleyUrl, trolleyParams);

  console.log(`Trolley status: ${trolleyRes.status}`);
  console.log(`Trolley response body: ${trolleyRes.body}`);

  check(trolleyRes, {
    "trolley status is 200": (r) => r.status === 200,
  });

  sleep(1);
}
