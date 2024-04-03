Feature: adding items to the cart example using Playwright and Cucumber

  Scenario: adding Sauce Labs Bolt T-Shirt to the cart
    Given I am on the homepage
    When I log in
    When I add the Sauce Labs Bolt T-Shirt to the cart
    Then the inventory item name of "Sauce Labs Bolt T-Shirt" should exist in the cart
