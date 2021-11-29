declare namespace Cypress{

interface Chainable<Subject = any>{


    /**
     * @example 
     * cy.customClick
     */
      customClick(locator:string):Chainable<Subject>
      /**
       * 
       * @example
       * cy.ScrollToViewElement
       */
      scrollToViewElement(locator:string):Chainable<Subject>

      /**
       * @example
       * cy.EnterTextInInput
       *  */ 
       enterTextInInput(locator:string):Chainable<Subject>

       typeAndEnterKey(locator:string):Chainable<Subject>

       verifyLabelText(locator:string):Chainable<Subject>

       clickElementBasedOnText(locator:string):Chainable<Subject>
 
       waitAndSelectIndexElementBasedOnText(locator:string,index:number,text:string):Chainable<Subject>
       
       verifyTextInSearchResults(locator:string,expectedText:string):Chainable<Subject>

       ValidateCountInListElements(locator:string,originalCount:number):Chainable<Subject>
       
    }

}