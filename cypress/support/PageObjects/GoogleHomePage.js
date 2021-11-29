/// <reference types="../" />
///<reference types="Cypress" />
export class GoogleHomePage{

 searchBox = 'input[name="q"]';
 getGoogleSearchButton = 'input[value="Google Search"]';



getGoogleSearch(inputText,queryParam){

cy.typeAndEnterKey(this.searchBox,inputText);   
cy.url().should('include',queryParam)

}



openLink(website,linkPartialText){

   const css_link = "a[href='"+website+"']"; 
   cy.customClick(css_link)
   cy.url().should('include',linkPartialText)

}




}
