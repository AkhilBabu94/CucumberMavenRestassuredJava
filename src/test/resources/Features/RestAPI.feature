@feature1
Feature: API automation feature

    Scenario: Rest API GET request scenarios
      Given Get the JSON Response as POJO using GET method and validate total results displayed per page is 12
      Then validate Expected support URL
      And validate Expected forth user name is "aqua sky"
      And validate Expected pantone values of all users
      And validate the name of the forth user as "aqua sky" if pantone value of fourth user is : "14-4811"

    Scenario: Rest API POST request scenarios
      Given Get the Response using POST method and validate the status code is 201
      Then validate the content type is "application/json"
      And validate the name field from generated response is "Akhil Babu"

    Scenario: Convert POJO to JSON
      Given Convert POJO to JSON