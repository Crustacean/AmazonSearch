$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/elkana.mbiti/eclipse-workspace/GitRDTest/src/test/java/Features/Enter.feature");
formatter.feature({
  "line": 1,
  "name": "login action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User has to successfully login to application",
  "description": "",
  "id": "login-action;user-has-to-successfully-login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Sign in to GitHub",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on the home",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_at_the_login_page()"
});
formatter.result({
  "duration": 15016848191,
  "status": "passed"
});
formatter.match({
  "location": "Steps.title_of_login_page_is_Sign_in_to_GitHub()"
});
formatter.result({
  "duration": 13178069,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 258260836,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2657150160,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_is_on_the_home()"
});
formatter.result({
  "duration": 208777794,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User has to successfully search for product on Amazon",
  "description": "",
  "id": "login-action;user-has-to-successfully-search-for-product-on-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is at the Amazon landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters search value Samsung",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "First result is four hundred dollars",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_at_the_Amazon_landing_page()"
});
formatter.result({
  "duration": 7509037626,
  "status": "passed"
});
formatter.match({
  "location": "Steps.title_of_login_page_is_Amazon_com_Online_Shopping_for_Electronics_Apparel_Computers_Books_DVDs_more()"
});
formatter.result({
  "duration": 106825439,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_search_value_Samsung()"
});
formatter.result({
  "duration": 1770805029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 3664367935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.first_result_is_four_hundred_dollars()"
});
formatter.result({
  "duration": 2571031083,
  "status": "passed"
});
});