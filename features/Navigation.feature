Feature: Navigation examples using Playwright and Cucumber


    @navigation @example
    Scenario Outline: Navigate to <link> and verify title
        Given I am on the Ten10 homepage
        When I click <link>
        Then The title matches '<title>'

        Examples:
            | link                  | title                                 |
            | Tech Academy          | Tech Academy - Ten10                  |
            | Contact               | Contact - Ten10                       |
            | Quality Engineering   | The Application Process - Apply Today |
