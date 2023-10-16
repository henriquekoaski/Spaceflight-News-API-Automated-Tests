const { I } = inject();
const Joi = require('joi');

var endpoint;

//Feature: Article
//Scenario: Get all articles
Given('I want to get all articles', () => {
  endpoint = '/v4/articles/';
});

When('I send a get request', () => {
  I.sendGetRequest(endpoint);
});

Then('I must receive all articles', () => {
  I.seeResponseCodeIs(200);

  const articleSchema = Joi.object({
    count: Joi.number().integer().required(),
    next: Joi.string().uri().required(),
    previous: Joi.string().allow(null),
    results: Joi.array().items(Joi.object({
      id: Joi.number().integer().required(),
      title: Joi.string().required(),
      url: Joi.string().uri().required(),
      image_url: Joi.string().uri().required(),
      news_site: Joi.string().required(),
      summary: Joi.string().allow(''),
      published_at: Joi.string().isoDate().required(),
      updated_at: Joi.string().isoDate().required(),
      featured: Joi.boolean().required(),
      launches: Joi.array().items(Joi.any()),
      events: Joi.array().items(Joi.any()),
    })).required(),
  });
  I.seeResponseMatchesJsonSchema(articleSchema);
});

//-----------------------------------------------------------

//Feature: Article
//Scenario: Get article by id
Given('I want to get article by id {int}', (id) => {
  endpoint = `/v4/articles/${id}/`;
});

When('I send a get request', () => {
  I.sendGetRequest(endpoint);
});

Then('I must receive the article', () => {
  I.seeResponseCodeIs(200);

  const articleSchema = Joi.object({
    id: Joi.number().integer().required(),
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    image_url: Joi.string().uri().required(),
    news_site: Joi.string().required(),
    summary: Joi.string().allow('').required(),
    published_at: Joi.string().isoDate().required(),
    updated_at: Joi.string().isoDate().required(),
    featured: Joi.boolean().required(),
    launches: Joi.array().items(Joi.any()).required(),
    events: Joi.array().items(Joi.any()).required(),
  });
  I.seeResponseMatchesJsonSchema(articleSchema);
  I.seeResponseContainsJson({
    id: 1
  });
});

//-----------------------------------------------------------

//Feature: Blog - Scenario: Get all blogs
Given('I want to get all blogs', () => {
    endpoint = '/v4/blogs/';
  });
  
  When('I send a get request', () => {
    I.sendGetRequest(endpoint);
  });
  
  Then('I must receive all blogs', () => {
    I.seeResponseCodeIs(200);
  
    const articleSchema = Joi.object({
      count: Joi.number().integer().required(),
      next: Joi.string().uri().required(),
      previous: Joi.string().allow(null),
      results: Joi.array().items(Joi.object({
        id: Joi.number().integer().required(),
        title: Joi.string().required(),
        url: Joi.string().uri().required(),
        image_url: Joi.string().uri().required(),
        news_site: Joi.string().required(),
        summary: Joi.string().allow(''),
        published_at: Joi.string().isoDate().required(),
        updated_at: Joi.string().isoDate().required(),
        featured: Joi.boolean().required(),
        launches: Joi.array().items(Joi.any()),
        events: Joi.array().items(Joi.any()),
      })).required(),
    });
    I.seeResponseMatchesJsonSchema(articleSchema);
  });


  //-----------------------------------------------------------

  //Feature:Info - Scenario: Get info
  Given('I want to get info', () => {
    endpoint = '/v4/info/';
  });
  
  When('I send a get request', () => {
    I.sendGetRequest(endpoint);
  });
  
  Then('I must receive the info', () => {
    I.seeResponseCodeIs(200);
  
    const infoSchema = Joi.object({
      version: Joi.string().required(),
      news_sites: Joi.array().items(Joi.string()).required(),
    })
  
    I.seeResponseMatchesJsonSchema(infoSchema);
  });