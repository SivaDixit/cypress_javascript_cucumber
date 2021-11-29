// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("customClick",(locator)=>{
 try{

    cy.get(locator).click()
 }
catch(error){
     throw e
}

});

Cypress.Commands.add("typeAndEnterKey",(locator,text)=>{

  try{
     const Textenter = text + "{enter}"
     cy.get(locator).type(Textenter)
  } 
  catch(err){
     throw e
  }
});

Cypress.Commands.add("scrollToViewElement",(locator)=>{
try{

   cy.get(locator).scrollIntoView()

}
catch(err){
   throw e;
}
});

Cypress.Commands.add("enterTextInInput",(locator,text)=>{
try{

   cy.get(locator).type(text)

}
catch(err){

}

})

Cypress.Commands.add("verifyLabelText",(locator,expectedText)=>{
 try{
  cy.get(locator).each(($e1)=>{

   const text = $e1.text()
   cy.log(text)
   expect(text.includes(expectedText)).to.be.true
   

  })

}
catch(err){
  throw err;
}

})


Cypress.Commands.add("clickElementBasedOnText",(locator,label_text)=>{

   try{ 
    cy.get(locator).contains(label_text).click()
   }
   catch(err){

   }

})

Cypress.Commands.add("waitAndSelectIndexElementBasedOnText",(locator,index,text)=>{

   try{
    cy.get(locator).as('ele')
   
    


    cy.get('@ele').eq(index).contains(text).click()

   }
   catch(err){
      throw err;
   }
})

Cypress.Commands.add("verifyTextInSearchResults",(locator,expectedtext)=>{

   try{
        var foo;
    cy.get(locator).each((ele,index,list)=>{
      
      const text = ele.text().toLowerCase();
      if(text.includes(expectedtext)){
         foo = true;
      }
      else{
         foo = false;
      }   
      expect(foo).to.true;
    })  
      
   }
   catch(err){
      throw err;
   }

})

Cypress.Commands.add("ValidateCountInListElements",(locator,links)=>{
  
   try{
       var foo;
     cy.get(locator).each((ele,index,list)=>{
      
       foo = parseInt(ele.text())

      cy.log(foo)
      cy.wait(2000)
      cy.get(links).should('have.length',foo)   
   
   })
       
          
         
         
       

      

   }
   catch(err){
    throw err;
   }
})