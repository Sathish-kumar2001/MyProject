Feature: To validate the login functionality of amazon application

Scenario: To validate login with valide username and invalide password

Given To launch the browser and window maximise 

When  To launch the amazon appliction url

And  To pass valide username in email field
|8248053537|sk@gmail.com|row@gmail.com| 

And To click the continue button

And To pass the invalide password in password field
|Satho593|Sathish@2001|skrowthiram|rowthiram|
|akash025|5352626|jikgikfk|ganapathi|
And To click the signin button

Then To close the entire browser




Scenario Outline: User to login functionality of amazon application

Given User to launch the browser and maximise the window

When User to launch the url of amazon application

And User to pass the username "<emaildatas>" in email feild

And User to click the continue button

And User to pass the password "<passworddatas>" in password field 

And User to click the signin button

Then User to close the entire browser



Examples:


|emaildatas    |passworddatas|
|8248053537    |Sathish@2001 |
|8667692283    |sathishkumar |














