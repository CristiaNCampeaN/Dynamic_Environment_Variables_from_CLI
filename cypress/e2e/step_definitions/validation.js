import { Then } from "@badeball/cypress-cucumber-preprocessor";


/**
 * @example The "produse" "link" should be visible
 * @summary Verify that a locator is displayed
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "produse", the name of the locator
 * @param locatorType {string} e.g "link", the category of the locator
 * @returns {Promise}
 */
function elementistVisible(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).should('be.visible')
}
Then(/^the "([^"]*)" "([^"]*)" should be visible$/, elementistVisible);
