/// <reference types="../../../support" />
///<reference types="Cypress" />
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { GoogleHomePage } from "../../../support/PageObjects/GoogleHomePage.js";
import { MathWorksHomePage } from "../../../support/PageObjects/MathWorksHomePage.js";
const googleHomePage = new GoogleHomePage();
const homePage = new MathWorksHomePage();
Given('I open google home page',()=>{

  cy.visit("https://www.google.com/")
  
   

})

When('I open Mathworks website from the google search page',function(){

   googleHomePage.getGoogleSearch(this.data.search,'search?q=mathworks');
   googleHomePage.openLink(this.data.mathworksWebsiteLink,'mathworks.com');
})

Then('I validate Mathworks website',function(){
   homePage.validatePopUpWindow('Select a Web');
   homePage.closeRecommendedDomainWindow();
})








