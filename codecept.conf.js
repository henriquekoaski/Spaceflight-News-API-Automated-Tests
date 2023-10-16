exports.config = {
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.spaceflightnewsapi.net'
    },
    JSONResponse: {}
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  //tests: './*_test.js',
  name: 'spaceflight-news-api-automated-tests'
}