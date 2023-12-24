$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature.feature");
formatter.feature({
  "name": "To validate the login functionality of amazon application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login with valide username and invalide password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser and window maximise",
  "keyword": "Given "
});
formatter.match({
  "location": "Mainproject.to_launch_the_browser_and_window_maximise()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the amazon appliction url",
  "keyword": "When "
});
formatter.match({
  "location": "Mainproject.to_launch_the_amazon_appliction_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valide username in email field",
  "rows": [
    {
      "cells": [
        "8248053537",
        "sk@gmail.com",
        "row@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Mainproject.to_pass_valide_username_in_email_field(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d120.0.6099.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ROWTHIRAM\u0027, ip: \u0027192.168.195.63\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.129, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51209}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 18a9c0f6f1818be589473c45c906801c\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.passText(BaseClass.java:54)\r\n\tat org.stepdefinition.Mainproject.to_pass_valide_username_in_email_field(Mainproject.java:38)\r\n\tat ✽.To pass valide username in email field(src/test/resources/feature.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Mainproject.to_click_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass the invalide password in password field",
  "rows": [
    {
      "cells": [
        "Satho593",
        "Sathish@2001",
        "skrowthiram",
        "rowthiram"
      ]
    },
    {
      "cells": [
        "akash025",
        "5352626",
        "jikgikfk",
        "ganapathi"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Mainproject.to_pass_the_invalide_password_in_password_field(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "Mainproject.to_click_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mainproject.to_close_the_entire_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User to login functionality of amazon application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.step({
  "name": "User to launch the url of amazon application",
  "keyword": "When "
});
formatter.step({
  "name": "User to pass the username \"\u003cemaildatas\u003e\" in email feild",
  "keyword": "And "
});
formatter.step({
  "name": "User to click the continue button",
  "keyword": "And "
});
formatter.step({
  "name": "User to pass the password \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User to click the signin button",
  "keyword": "And "
});
formatter.step({
  "name": "User to close the entire browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "8248053537",
        "Sathish@2001"
      ]
    },
    {
      "cells": [
        "8667692283",
        "sathishkumar"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User to login functionality of amazon application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveandNagative.user_to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to launch the url of amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveandNagative.user_to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to pass the username \"8248053537\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_pass_the_username_in_email_feild(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d120.0.6099.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ROWTHIRAM\u0027, ip: \u0027192.168.195.63\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.129, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51233}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 254a949ca8c29adf6f39ee60a18d519b\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.passText(BaseClass.java:54)\r\n\tat org.stepdefinition.PositiveandNagative.user_to_pass_the_username_in_email_feild(PositiveandNagative.java:35)\r\n\tat ✽.User to pass the username \"8248053537\" in email feild(src/test/resources/feature.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User to click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_click_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to pass the password \"Sathish@2001\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_pass_the_password_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to click the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_click_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveandNagative.user_to_close_the_entire_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User to login functionality of amazon application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveandNagative.user_to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to launch the url of amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveandNagative.user_to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User to pass the username \"8667692283\" in email feild",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_pass_the_username_in_email_feild(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d120.0.6099.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ROWTHIRAM\u0027, ip: \u0027192.168.195.63\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 120.0.6099.129, chrome: {chromedriverVersion: 120.0.6099.109 (3419140ab66..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51331}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 796a0b0da2380559e379f9745f0a9e10\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.passText(BaseClass.java:54)\r\n\tat org.stepdefinition.PositiveandNagative.user_to_pass_the_username_in_email_feild(PositiveandNagative.java:35)\r\n\tat ✽.User to pass the username \"8667692283\" in email feild(src/test/resources/feature.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User to click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_click_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to pass the password \"sathishkumar\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_pass_the_password_in_password_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to click the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNagative.user_to_click_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User to close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveandNagative.user_to_close_the_entire_browser()"
});
formatter.result({
  "status": "skipped"
});
});