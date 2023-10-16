Feature: Info

#As a reader of spaceflight news,
#I want to receive info,
#so that I can read it.

Scenario: Get info
    Given I want to get info
    When I send a get request
    Then I must receive the info