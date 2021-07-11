package impl;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.*;
import static MyRunner.TestRunner.test;

import java.util.*;

import static io.restassured.RestAssured.given;

public class RestAPIImpl{
    private String baseUrl = "https://reqres.in/";

//      To return the Response from get request as POJO
    public JsonResponse getJsonResponseAsPOJO() {
        RestAssured.baseURI=baseUrl;
        RequestSpecification request = given();
        Response response = request.get("api/unknown");
        JsonResponse jsonResponseAsPOJO = response.getBody().as(JsonResponse.class);
        return jsonResponseAsPOJO;
    }

//    To validate the total result value is as expected
    public void validateTotalResultValue(int ExpectedTotalValue){
        JsonResponse jsonResponse = getJsonResponseAsPOJO();
        System.out.println("Total result value is "+jsonResponse.getTotal());
        test.log(Status.INFO,"Total result value is "+jsonResponse.getTotal());
        Assert.assertEquals(jsonResponse.getTotal(),ExpectedTotalValue,"Excepted total results displayed per page is not as expected");
    }

//    To validate the support URL is as expected
    public void validateExpectedSupportURLIs(String expectedSupportURL){
        JsonResponse jsonResponse = getJsonResponseAsPOJO();
        System.out.println("Support URL value is "+jsonResponse.getSupport().getUrl());
        test.log(Status.INFO,"Support URL value is "+jsonResponse.getSupport().getUrl());
        Assert.assertEquals(jsonResponse.getSupport().getUrl(),expectedSupportURL,"Excepted support URL is not as expected");
    }

//    To validate the forth user name is as expected
    public void validateExceptedUserName(int userNameNumber,String UserName){
        JsonResponse jsonResponse = getJsonResponseAsPOJO();
        List<Data> data = jsonResponse.getData();
        System.out.println("User name is "+data.get(userNameNumber).getName());
        test.log(Status.INFO,"User name is "+data.get(userNameNumber).getName());
        Assert.assertEquals(data.get(userNameNumber).getName(),UserName,"Excepted forth username is not as expected");
    }

//    To validate the pantone values of all users are as expected
    public void validateExpectedPantoneValuesOfAllUsers(){
        List<String> ExpectedPantoneValues = Arrays.asList("15-4020", "17-2031", "19-1664", "14-4811", "17-1456", "15-5217");
        JsonResponse jsonResponse = getJsonResponseAsPOJO();
        List<String> AvailablePantoneValues = new ArrayList<>();
        for(int i=0;i<jsonResponse.getData().size();i++){
            AvailablePantoneValues.add(jsonResponse.getData().get(i).getPantone_value());
        }
        System.out.println("The pantone values of all users is "+AvailablePantoneValues.toString());
        test.log(Status.INFO,"The pantone values of all users is "+AvailablePantoneValues.toString());
        Assert.assertEquals(AvailablePantoneValues,ExpectedPantoneValues,"The expected pantone values are not as expected");
    }

//    To validate the forth user name only if pantone value of forth user is as expected
    public void validateForthUserNameIfPantoneValueOfFourthUserIsAsExpected(String ExpectedForthUser, String ExpectedForthUserPantoneValue){
        JsonResponse jsonResponse = getJsonResponseAsPOJO();
        String ForthUserPantoneValue = jsonResponse.getData().get(3).getPantone_value();
        System.out.println("Forth user name is "+jsonResponse.getData().get(3).getName());
        System.out.println("Forth user pantone value is "+ForthUserPantoneValue);
        test.log(Status.INFO,"Forth user name is "+jsonResponse.getData().get(3).getName());
        test.log(Status.INFO,"Forth user pantone value is "+ForthUserPantoneValue);
        if(ForthUserPantoneValue.equals(ExpectedForthUserPantoneValue)){
            Assert.assertEquals(jsonResponse.getData().get(3).getName(),ExpectedForthUser,"The forth user name is not as expected");
        }
    }

//    To return the response from POST request
    public Response getResponseFromPOSTRequest(){
        RestAssured.baseURI=baseUrl;
        HashMap<String,String> hashMap = new HashMap<>();
        hashMap.put("name","Akhil Babu");
        hashMap.put("Job","Consultant");
        Response response = given()
                                    .contentType(ContentType.JSON)
                                    .body(hashMap)
                            .when()
                                    .post("api/users");
        return response;
    }

//    To validate the status code is as expected
    public void validateStatusCode(int statusCode){
        System.out.println("The status code is "+getResponseFromPOSTRequest().getStatusCode());
        test.log(Status.INFO,"The status code is "+getResponseFromPOSTRequest().getStatusCode());
        Assert.assertEquals(getResponseFromPOSTRequest().getStatusCode(),statusCode,"The status code is not as expected");
    }

//    To validate the content type is as expected
    public void validateContentType(String contentType){
        System.out.println("The content type is "+getResponseFromPOSTRequest().getContentType());
        test.log(Status.INFO,"The content type is "+getResponseFromPOSTRequest().getContentType());
        Assert.assertTrue(getResponseFromPOSTRequest().getContentType().contains(contentType),"The content type is not as expected");
    }

//    To validate the name field is as expected
    public void validateTheNameFieldFromGeneratedResponse(String expectedName){
        String actualName = getResponseFromPOSTRequest().jsonPath().getString("name");
        System.out.println("The actual name is "+actualName);
        test.log(Status.INFO,"The actual name is "+actualName);
        Assert.assertEquals(actualName,expectedName,"The name from the response is not as expected");
    }

    public void POJOToJSONResponse() throws JsonProcessingException {
        JSONDATA jsondata = new JSONDATA();
        jsondata.setCompany("Genpact");
        jsondata.setLandline("040-3068-7140");
        jsondata.setEstablished_year("1997");

        List<String> domains = Arrays.asList("Healthcare","Insurance","Banking","Financial");
        jsondata.setDomains(domains);

        Location location = new Location();
        location.setLat(-38.383494);
        location.setLng(33.427362);
        jsondata.setLocation(location);

        BranchDetails branchDetails1 = new BranchDetails();
        branchDetails1.setName("Hyderabad");
        branchDetails1.setPhone("123456");
        BranchDetails branchDetails2 = new BranchDetails();
        branchDetails2.setName("Pune");
        branchDetails2.setPhone("789654");
        BranchDetails branchDetails3 = new BranchDetails();
        branchDetails3.setName("Noida");
        branchDetails3.setPhone("632589");

        List<BranchDetails> branchDetails = new ArrayList<>();
        branchDetails.add(branchDetails1);
        branchDetails.add(branchDetails2);
        branchDetails.add(branchDetails3);
        jsondata.setBranchdetails(branchDetails);

        jsondata.setWebsite("http://www.genpact.com");

        ObjectMapper objectMapper = new ObjectMapper();
        String str = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsondata);
        System.out.println("The JSON is as follows :"+str);
        test.log(Status.INFO,"The JSON is as follows :"+str);
    }

}