Feature: Navigation examples using Playwright and Cucumber


  @navigation @example
  Scenario Outline: Navigate to <link> and verify title
    Given I am on the Ten10 homepage
    When I click on <link>

    # TODO Resolve issue with Headless mode - Perhaps change the website being used?
#    Then the page title contains '<title>'

    Examples:
      | link                | title                        |
      | Tech Academy        | Tech Academy                 |
      | Contact             | Contact                      |
      | Quality Engineering | Quality Engineering Services |
