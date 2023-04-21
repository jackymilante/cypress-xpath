Feature: Access Support workers page

    Scenario Outline: Check Support Workers page

        Given I access to '<portal>' page
        And Banner title is displayed in support worker page
        And Find a support worker button is displayed correctly in support worker page


  



        Examples:
            | portal                                |
            | https://mable.com.au/support-workers/ |
