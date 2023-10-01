/// <reference types= "cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    let itemsToSelect = ["Women", "Men", "Gear"];

    let RandomIndex = Math.floor(Math.random() * itemsToSelect.length);
    cy.log(RandomIndex + "@@@@@@@@@@@@@@@@@@@@@@@@@");
    cy.contains(itemsToSelect[RandomIndex]).click();

    // this is will let cypress to select second item and press on it 
    cy.get(".products-grid.grid").find("div.product-item-info").eq(1).click();

    // now you need to let cypress check if the text is "IN STOCK" then add to cart 
    // other alert msg that you can't add this item since we don't have it in the stock 



    

  });

  it('', () => {

    /// now you need to let cypress selecet randomly between men or women and then select any random item 
    // maybe the first , second , third , forth , and also for the color must be randomly selected  
    
  });
});
