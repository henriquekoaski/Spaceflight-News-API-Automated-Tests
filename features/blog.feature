Feature: Blog

#As a reader of spaceflight news,
#I want to receive blogs,
#so that I can read them.

Scenario: Get all blogs
    Given I want to get all blogs
    When I send a get request
    Then I must receive all blogs