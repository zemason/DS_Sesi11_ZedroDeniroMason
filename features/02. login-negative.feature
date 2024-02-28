@digital-skola @login
Feature:  Swag Labs - Login Positive

  @negative
  Scenario:  As a locked_out_user, I should get error message
    Given Zedro is on the login page 
    When Zedro login with "locked_out_user" credential
    Then Zedro should see error "Epic sadface: Sorry, this user has been locked out."

