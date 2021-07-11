$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RestAPI.feature");
formatter.feature({
  "line": 2,
  "name": "API automation feature",
  "description": "",
  "id": "api-automation-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@feature1"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Rest API GET request scenarios",
  "description": "",
  "id": "api-automation-feature;rest-api-get-request-scenarios",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Get the JSON Response as POJO using GET method and validate total results displayed per page is 12",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "validate Expected support URL",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate Expected forth user name is \"aqua sky\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate Expected pantone values of all users",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate the name of the forth user as \"aqua sky\" if pantone value of fourth user is : \"14-4811\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 96
    }
  ],
  "location": "RestAPI.getJsonResponseAsPOJO(int)"
});
formatter.result({
  "duration": 2488451100,
  "error_message": "com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException: Unrecognized field \"pantone_value\" (class impl.Data), not marked as ignorable (4 known properties: \"id\", \"year\", \"name\", \"color\"])\n at [Source: (String)\"{\"page\":1,\"per_page\":6,\"total\":12,\"total_pages\":2,\"data\":[{\"id\":1,\"name\":\"cerulean\",\"year\":2000,\"color\":\"#98B2D1\",\"pantone_value\":\"15-4020\"},{\"id\":2,\"name\":\"fuchsia rose\",\"year\":2001,\"color\":\"#C74375\",\"pantone_value\":\"17-2031\"},{\"id\":3,\"name\":\"true red\",\"year\":2002,\"color\":\"#BF1932\",\"pantone_value\":\"19-1664\"},{\"id\":4,\"name\":\"aqua sky\",\"year\":2003,\"color\":\"#7BC4C4\",\"pantone_value\":\"14-4811\"},{\"id\":5,\"name\":\"tigerlily\",\"year\":2004,\"color\":\"#E2583E\",\"pantone_value\":\"17-1456\"},{\"id\":6,\"name\":\"blue t\"[truncated 205 chars]; line: 1, column: 132] (through reference chain: impl.JsonResponse[\"data\"]-\u003ejava.util.ArrayList[0]-\u003eimpl.Data[\"pantone_value\"])\r\n\tat com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException.from(UnrecognizedPropertyException.java:62)\r\n\tat com.fasterxml.jackson.databind.DeserializationContext.handleUnknownProperty(DeserializationContext.java:834)\r\n\tat com.fasterxml.jackson.databind.deser.std.StdDeserializer.handleUnknownProperty(StdDeserializer.java:1093)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownProperty(BeanDeserializerBase.java:1477)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializerBase.handleUnknownVanilla(BeanDeserializerBase.java:1455)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:282)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:140)\r\n\tat com.fasterxml.jackson.databind.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:287)\r\n\tat com.fasterxml.jackson.databind.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:259)\r\n\tat com.fasterxml.jackson.databind.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:26)\r\n\tat com.fasterxml.jackson.databind.deser.SettableBeanProperty.deserialize(SettableBeanProperty.java:499)\r\n\tat com.fasterxml.jackson.databind.deser.impl.MethodProperty.deserializeAndSet(MethodProperty.java:101)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.vanillaDeserialize(BeanDeserializer.java:276)\r\n\tat com.fasterxml.jackson.databind.deser.BeanDeserializer.deserialize(BeanDeserializer.java:140)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper._readMapAndClose(ObjectMapper.java:3798)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper.readValue(ObjectMapper.java:2880)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper$readValue$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\r\n\tat io.restassured.internal.path.json.mapping.JsonPathJackson2ObjectDeserializer.deserialize(JsonPathJackson2ObjectDeserializer.groovy:46)\r\n\tat io.restassured.path.json.mapping.JsonPathObjectDeserializer$deserialize.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:127)\r\n\tat io.restassured.internal.mapping.Jackson2Mapper.deserialize(Jackson2Mapper.groovy:58)\r\n\tat io.restassured.mapper.ObjectMapper$deserialize.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:127)\r\n\tat io.restassured.internal.mapping.ObjectMapping.parseWithJackson2(ObjectMapping.groovy:238)\r\n\tat io.restassured.internal.mapping.ObjectMapping$parseWithJackson2$0.callStatic(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallStatic(CallSiteArray.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:196)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callStatic(AbstractCallSite.java:216)\r\n\tat io.restassured.internal.mapping.ObjectMapping.deserialize(ObjectMapping.groovy:59)\r\n\tat io.restassured.internal.mapping.ObjectMapping$deserialize.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsGroovyImpl.as(RestAssuredResponseOptionsGroovyImpl.groovy:226)\r\n\tat io.restassured.internal.RestAssuredResponseOptionsImpl.as(RestAssuredResponseOptionsImpl.java:169)\r\n\tat impl.RestAPIImpl.getJsonResponseAsPOJO(RestAPIImpl.java:26)\r\n\tat impl.RestAPIImpl.validateTotalResultValue(RestAPIImpl.java:32)\r\n\tat stepDefinitions.RestAPI.getJsonResponseAsPOJO(RestAPI.java:21)\r\n\tat ✽.Given Get the JSON Response as POJO using GET method and validate total results displayed per page is 12(RestAPI.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RestAPI.validateExpectedSupportURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aqua sky",
      "offset": 38
    }
  ],
  "location": "RestAPI.validateExceptedForthUserName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RestAPI.validateExpectedPantoneValuesOfAllUsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "aqua sky",
      "offset": 40
    },
    {
      "val": "14-4811",
      "offset": 88
    }
  ],
  "location": "RestAPI.validateTheNameOfTheForthUserAsIfPantoneValueOfFourthUserIs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Rest API POST request scenarios",
  "description": "",
  "id": "api-automation-feature;rest-api-post-request-scenarios",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Get the Response using POST method and validate the status code is 201",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "validate the content type is \"application/json\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "validate the name field from generated response is \"Akhil Babu\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 67
    }
  ],
  "location": "RestAPI.getTheResponseUsingPOSTMethodAndValidateTheStatusCodeIs(int)"
});
formatter.result({
  "duration": 1971141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "RestAPI.validateTheContentTypeIs(String)"
});
formatter.result({
  "duration": 1427188700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Akhil Babu",
      "offset": 52
    }
  ],
  "location": "RestAPI.validateTheNameFieldFromGeneratedResponseIs(String)"
});
formatter.result({
  "duration": 1128346000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Convert POJO to JSON",
  "description": "",
  "id": "api-automation-feature;convert-pojo-to-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Convert POJO to JSON",
  "keyword": "Given "
});
formatter.match({
  "location": "RestAPI.convertPOJOToJSON()"
});
formatter.result({
  "duration": 27805300,
  "status": "passed"
});
});