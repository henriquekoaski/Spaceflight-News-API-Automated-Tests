Feature: Article

#As a reader of spaceflight news,
#I want to receive articles,
#so that I can read them.
 
Scenario: Get all articles
    Given I want to get all articles
    When I send a get request
    Then I must receive all articles

Scenario: Get article by id
    Given I want to get article by id 1
    When I send a get request
    Then I must receive the article
