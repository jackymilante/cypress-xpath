Feature: Access Provide Support page

    Scenario Outline: Check Provide support page

        Given I access to '<portal>' page
        And Banner title is displayed correctly in provide support page
        And Banner description is displayed correctly in provide support page
        And Sign up now button is displayed correctly in provide support page
        And Why Mable section is displayed correctly in provide support page
        And Benefits you get from booking clients on Mable section is displayed correctly in provide support page
        And Boost your earnings section is displayed correctly in provide support page
        And Payments FAQs section is displayed correctly in provide support page
        And Service you can offer section is displayed correctly in provide support page
        And How to sign up to Mable section is displayed correctly in provide support page

  



        Examples:
            | portal                                |
            | https://mable.com.au/provide-support/ |
