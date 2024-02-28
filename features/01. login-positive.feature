@digital-skola @login
Feature:  Swag Labs - Login

  @positive
  Scenario:  As a standard_user, I want to log in succesfully
    Given Zedro is on the login page
    When Zedro login with "standard_user" credential
    Then Zedro should see home page

