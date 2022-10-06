Feature: Exemple

  Background:
    Given the user navigate to "Home Page"
    When the user click on "Accept Cookie" "button"



  Scenario: Simple scenario
    Then the "Produse" "Link" should be visible
    When the user move mouse to "Produse" "Link"
    Then the "Laptop Category" "Link" should be visible
    When the user move mouse to "Laptop Category" "Link"
    Then the "Laptop" "Link" should be visible

