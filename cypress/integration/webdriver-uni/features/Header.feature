Feature: Access header

    Scenario Outline: Check Header

        Given I access to '<portal>' page
        And Header menu is displayed correctly
        And Navigation menus are displayed correctly
        And Navigation sub-menus are displayed correctly

        Examples:
            | portal                |
            | https://mable.com.au/ |


