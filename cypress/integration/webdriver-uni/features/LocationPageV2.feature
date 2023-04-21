Feature: Access header

    Scenario Outline: Check Header

        Given I access to '<portal>' page
        And Banner title is displayed correctly in location page
        And Banner description is displayed correctly in location page
        And Sign up now button is displayed correctly in location page
        And Browse area header is displayed correctly in location page
        And Browse area description is displayed correctly in location page
        And Browse area description list of links are displayed correctly in location page
        And Join Mable section is displayed correctly in location page
        And Support workers section header is displayed correctly in location page
        And Support workers are displayed correctly in location page
        And When you need us section is displayed correctly



        Examples:
            | portal                                                        |
            | https://mable.com.au/find-support-workers/nsw-blue-mountains/ |           


