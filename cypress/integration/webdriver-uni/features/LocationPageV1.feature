Feature: Access header

    Scenario Outline: Check Header

        Given I access to '<portal>' page
        And Banner title is displayed correctly in location page
        And Start Now button is displayed correctly in location page
        And Search results is displayed correctly in location page
        And Search result details is displayed correctly in location page
        And Support workers are displayed correctly in location page
        And How people are using Mable are displayed correctly in location page
        And How it works page is displayed correctly in location page
        And FAQ section is displayed correctly in location page
        And Our happy members section is displayed correctly


        Examples:
            | portal                                                        |
            | https://mable.com.au/find/support-workers/vic/melbourne/3000/ |           
            | https://mable.com.au/find/support-workers/nsw/sydney/2000/    |
            | https://mable.com.au/find/support-workers/sa/adelaide/5000/   |
            | https://mable.com.au/find/support-workers/qld/brisbane/4000/  |
            | https://mable.com.au/find/support-workers/wa/perth/6000/      |
            | https://mable.com.au/find/support-workers/nsw/newcastle/2300/ |
            | https://mable.com.au/find/support-workers/act/canberra/2600/  |
            | https://mable.com.au/find/support-workers/NT/Darwin/0800/     |
            | https://mable.com.au/find/support-workers/tas/Hobart/7000/    |



