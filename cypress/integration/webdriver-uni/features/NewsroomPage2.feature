Feature: Access Newsroom page v2

    Scenario Outline: Check Newsroom page v2

        Given I access to '<portal>' page
        And Banner title is displayed correctly
        And Content paragraphs are displayed correctly
        And Content images are displayed correctly
        And Posted in tags are displayed correctly
        And Recent news items are displayed correctly
        And Subscribe to Mable news is displayed correctly

        Examples:
            | portal                                                                                          |
            | https://mable.com.au/newsroom/how-76-year-old-carol-found-her-gem-of-a-support-worker-on-mable/ |


