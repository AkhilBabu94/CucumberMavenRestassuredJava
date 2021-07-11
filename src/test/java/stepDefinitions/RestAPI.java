package stepDefinitions;

import com.fasterxml.jackson.core.JsonProcessingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import impl.RestAPIImpl;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.awt.*;
import java.io.FileNotFoundException;
import java.sql.SQLException;

public class RestAPI {

    RestAPIImpl restAPIimpl = new RestAPIImpl();

    @Given("Get the JSON Response as POJO using GET method and validate total results displayed per page is (\\d+)")
    public void getJsonResponseAsPOJO(int ExpectedTotalValue){
        restAPIimpl.validateTotalResultValue(ExpectedTotalValue);
    }

    @Then("validate Expected support URL")
    public void validateExpectedSupportURL() {
        String expectedSupportURL = "https://reqres.in/#support-heading";
        restAPIimpl.validateExpectedSupportURLIs(expectedSupportURL);
    }

    @And("validate Expected forth user name is \"([^\"]*)\"")
    public void validateExceptedForthUserName(String forthUserName) {
        restAPIimpl.validateExceptedUserName(3,forthUserName);
    }

    @And("validate Expected pantone values of all users")
    public void validateExpectedPantoneValuesOfAllUsers() {
        restAPIimpl.validateExpectedPantoneValuesOfAllUsers();
    }

    @And("validate the name of the forth user as \"([^\"]*)\" if pantone value of fourth user is : \"([^\"]*)\"")
    public void validateTheNameOfTheForthUserAsIfPantoneValueOfFourthUserIs(String forthUser, String ForthUserPantoneValue) {
        restAPIimpl.validateForthUserNameIfPantoneValueOfFourthUserIsAsExpected(forthUser,ForthUserPantoneValue);
    }

    @Given("Get the Response using POST method and validate the status code is (\\d+)")
    public void getTheResponseUsingPOSTMethodAndValidateTheStatusCodeIs(int statusCode) {
        restAPIimpl.validateStatusCode(statusCode);
    }

    @Then("validate the content type is \"([^\"]*)\"")
    public void validateTheContentTypeIs(String contentType) {
        restAPIimpl.validateContentType(contentType);
    }

    @And("validate the name field from generated response is \"([^\"]*)\"")
    public void validateTheNameFieldFromGeneratedResponseIs(String ExpectedName) {
        restAPIimpl.validateTheNameFieldFromGeneratedResponse(ExpectedName);
    }

    @Given("Convert POJO to JSON")
    public void convertPOJOToJSON() throws JsonProcessingException {
        restAPIimpl.POJOToJSONResponse();
    }
}
