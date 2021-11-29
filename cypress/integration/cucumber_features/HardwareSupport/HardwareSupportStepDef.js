/// <reference types="../../../support" />
///<reference types="Cypress" />
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { MathWorksHSPage } from "../../../support/PageObjects/MathWorksHSPage";
import { MathWorksHomePage } from "../../../support/PageObjects/MathWorksHomePage";
const hardwareSupportPage = new MathWorksHSPage();
const homepage = new MathWorksHomePage();
When('I navigate to hardware support page',()=>{

hardwareSupportPage.openHardwareSupportPage();
homepage.closeRecommendedDomainWindow();

})

Then('I validate hardware support page',()=>{
    hardwareSupportPage.validateHardwareSupportHeading();
})

When('I enter text in the search box',function(){

 hardwareSupportPage.getSearchboxInHS(this.data.searchTextInHardwareSupport)

})

When('I filter with matlab product category',function(){
    homepage.closeRecommendedDomainWindow();
    hardwareSupportPage.FilterByClickingProductList(this.data.productCategory)
})

Then('I validate the search results',function(){
    homepage.closeRecommendedDomainWindow();
    hardwareSupportPage.validateSearchResults(this.data.searchTextInHardwareSupport)
})

Then('I validate with the search count with the original count',function(){
   hardwareSupportPage.validateDisplayedResultsWithTheCount();
})

When('I enter invalid text in the search box',function(){
    hardwareSupportPage.enterInvalidTextInSearchBox(this.data.invalidInputInSearch)
})

Then('I validate search tips for Invalid search text',()=>{
    homepage.closeRecommendedDomainWindow();
  hardwareSupportPage.validateText()  
})