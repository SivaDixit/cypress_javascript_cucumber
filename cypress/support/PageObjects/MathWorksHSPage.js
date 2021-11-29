/// <reference types="Cypress"/>

export class MathWorksHSPage {

footerHardwareSupportLink = "a[href*='/hardware-support']";
headingHardwareSupport = "div.section_header_title *";   
searchboxHardwareSupport = "input#search";
selectOptionbyIndexInSearchBox = "a[role='option'] strong";
searchResultsLinks = "*.search_result_title a[href*='https://www.mathworks.com/hardware-support/']";
countMATLABproductCategory = "a[data-id='product:ML'] span.refine_category_count";
matlabProduct = "a[data-id='product:ML']";


openHardwareSupportPage(){

  cy.scrollToViewElement(this.footerHardwareSupportLink) 
  cy.clickElementBasedOnText(this.footerHardwareSupportLink,'Hardware Support')
}



validateHardwareSupportHeading(){
   
   cy.url().should('include','hardware-support')
   cy.verifyLabelText(this.headingHardwareSupport,'Hardware Support')

}

getSearchboxInHS(searchtext){

   cy.enterTextInInput(this.searchboxHardwareSupport,searchtext)
   cy.wait(2000)
   cy.waitAndSelectIndexElementBasedOnText(this.selectOptionbyIndexInSearchBox,0,searchtext)   

}

validateSearchResults(searchtext){
  cy.verifyTextInSearchResults(this.searchResultsLinks,searchtext)
}

FilterByClickingProductList(productName){
  cy.clickElementBasedOnText(this.matlabProduct,productName)
}

validateDisplayedResultsWithTheCount(){
   cy.ValidateCountInListElements(this.countMATLABproductCategory,this.searchResultsLinks)
}

enterInvalidTextInSearchBox(invalidValue){
   cy.typeAndEnterKey(this.searchboxHardwareSupport,invalidValue)
}

validateText(){
   cy.contains('Search tips:').should('be.visible')
}


}
