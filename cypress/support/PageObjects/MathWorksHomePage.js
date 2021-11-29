/// <reference types="Cypress"/>
/// <reference types="../" />
export class MathWorksHomePage{

 footer = "footer.bs-footer";
 selectCountry = "*#country-unselected-title";
 recommendedDomainBtn = "a#recommended_domain_button";
 selectCountryDomainClose = "button.close";
 
 validatePopUpWindow(expectedText){

   const text = cy.verifyLabelText(this.selectCountry,expectedText);
   cy.log(text);
 }

 closeRecommendedDomainWindow(){
   
   cy.customClick(this.selectCountryDomainClose)
  
}


}

