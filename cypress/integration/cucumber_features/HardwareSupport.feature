Feature: User search Toolbox products in Matlab Hardware Support

Scenario: User visits Mathworks website to search for toolbox products in hardware support page
Given I open google home page
When I open Mathworks website from the google search page
Then I validate Mathworks website
And I navigate to hardware support page
Then I validate hardware support page
And I enter text in the search box
Then I validate the search results


Scenario: user visits Mathworks website to search with toolbox keyword and filter out with matlab product
Given I open google home page
When I open Mathworks website from the google search page
Then I validate Mathworks website
And I navigate to hardware support page
Then I validate hardware support page
And I enter text in the search box
And I filter with matlab product category
And I validate with the search count with the original count

Scenario: user visits Mathworks website and search with invalid text which shows searching tips
Given I open google home page
When I open Mathworks website from the google search page
Then I validate Mathworks website
And I navigate to hardware support page
Then I validate hardware support page
And I enter invalid text in the search box
And I validate search tips for Invalid search text