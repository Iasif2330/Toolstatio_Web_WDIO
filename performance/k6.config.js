export const options = {
  vus: 1, // virtual users
  duration: "1s",
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% requests < 500ms
    http_req_failed: ["rate<0.01"], // < 1% failure rate
  },
};

export const env = {
  BASE_URL: __ENV.BASE_URL || "https://ecom-api.toolstation.nl",
};
