Feature: Access mable portal

    Scenario Outline: Check Newsroom page v1

        Given I access to '<portal>' page
        And Banner title is displayed correctly
        And Date format is displayed correctly
        And Content paragraphs are displayed correctly
        And Content images are displayed correctly
        And Event items are displayed correctly
        And Posted in tags are displayed correctly
        And Recent news items are displayed correctly
        And State filter list are displayed correctly
        And Subscribe to Mable news is displayed correctly

        Examples:
            | portal                                                                                    |
            | https://mable.com.au/newsroom/mables-guide-to-events-for-older-australians-february-2023/ |


