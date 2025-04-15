Feature: Shopping Cart Testing

    Scenario: User add an item to the shopping Cart
        Given User logins as "admin" in "qa" env
        Then Users add an item to cart and checks that is visible