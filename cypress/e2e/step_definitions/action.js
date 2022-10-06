import { When } from "@badeball/cypress-cucumber-preprocessor";


/**
 * @example The "produse" "link" should be visible
 * @summary Move mouse to element
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "produse", the name of the locator
 * @param locatorType {string} e.g "link", the category of the locator
 * @returns {Promise}
 */
function moveMouseToElement(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).trigger('click')
}
When(/^the user move mouse to "([^"]*)" "([^"]*)"$/, moveMouseToElement);


/**
 * @example
 * When the user click on the "Accept Cookie" "button"
 * @summary Click on a specific element
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "Accept Cookie", the name of the locator
 * @param locatorType {string} e.g "button", the category of the locator
 * @returns {Promise}
 */
function clickOnElement(locatorName, locatorType){
    cy.getElement(locatorName, locatorType).click()
}
When(/^the user click on "([^"]*)" "([^"]*)"$/, clickOnElement);
