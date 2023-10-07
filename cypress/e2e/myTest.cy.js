/// <reference types= "cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("Add_item",()=>{
  let RandomItemToSelect = Math.floor(Math.random() * 4);

  cy.get(".product-items")
    .find(".product-item")
    .eq(RandomItemToSelect)
    .click();

  let RandomSizeToSelect = Math.floor(Math.random() * 3);

  cy.get(".swatch-attribute-options")
    .find(".swatch-option")
    .eq(RandomSizeToSelect)
    .click();
  cy.get(".swatch-attribute.color > .swatch-attribute-options")
    .find(".swatch-option")
    .eq(0)
    .click();

  cy.get(".stock > span")
    .invoke("text")
    .then((theText) => {
      if (theText == "In stock") {
        cy.get("#product-addtocart-button").click();
      } else {
        alert("sorry this item is not there ");
      }
    });
  cy.wait(5000);
})


describe.only("Add random Item from certain category ", () => {
  it.only("add random item from men category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.wait(3000);



    cy.get("#ui-id-5").click();

    cy.Add_item()

  });
  it.only("add random item from women category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.wait(3000);

    cy.get("#ui-id-4").click();
cy.Add_item()
    
  });

  it.skip("add random item from gear category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.wait(3000);


    cy.get("#ui-id-6").click();

    
    let RandomItemToSelect = Math.floor(Math.random() * 4);

    cy.get(".product-items")
      .find(".product-item")
      .eq(RandomItemToSelect)
      .click();

    cy.get(".stock > span")
      .invoke("text")
      .then((theText) => {
        if (theText == "In stock") {
          cy.get("#product-addtocart-button").click();
        } else {
          alert("sorry this item is not there ");
        }
      });
    cy.wait(5000);
  });
});

describe.skip("Login Test Cases", () => {
  it(" login with correct user name and correct password", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9kZWlyZHJlLXJlbGF4ZWQtZml0LWNhcHJpLmh0bWw%2C/"
    );

    cy.get("#email").type("randomemail@gmail.com");
    cy.get("#pass").type("WEARETHEHEROS1234!@#$");
    cy.get("#send2").click();
  });

  it.skip("login with incorrect username and incorrect password", () => {});
});
