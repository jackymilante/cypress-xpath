Feature: Access header

    Scenario Outline: Check Header

        Given I access to '<portal>' page
        And Footer sub-menus are displayed correctly

        Examples:
            | portal                |
            | https://mable.com.au/ |


