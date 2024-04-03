Feature: Login examples using Playwright and Cucumber


@only
  Scenario: Logging in to SauceDemo
    Given I am on the homepage
    When I log in
    Then the "Products" table is present
