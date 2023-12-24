package org.stepdefinition;

import org.base.BaseClass;
import org.pojo.PojoClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PositiveandNagative extends BaseClass {

	PojoClass f;

	@Given("User to launch the browser and maximise the window")
	public void user_to_launch_the_browser_and_maximise_the_window() throws InterruptedException {
	    Thread.sleep(4000);
		launchBrowser();
		 Thread.sleep(4000);
		WindowMaximize();

	}

	@When("User to launch the url of amazon application")
	public void user_to_launch_the_url_of_amazon_application() throws InterruptedException {
		Thread.sleep(3000);
		launchUrl(
				"https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");

	}

	@When("User to pass the username {string} in email feild")
	public void user_to_pass_the_username_in_email_feild(String em) throws InterruptedException {
		f = new PojoClass();
		Thread.sleep(5000);
		passText(em, f.getEmail());

	}

	@When("User to click the continue button")
	public void user_to_click_the_continue_button() {
		f = new PojoClass();
		clickBtn(f.getConBtn());

	}

	@When("User to pass the password {string} in password field")
	public void user_to_pass_the_password_in_password_field(String pass) throws InterruptedException {
		f = new PojoClass();
		Thread.sleep(5000);
		passText(pass, f.getPass());

	}

	@When("User to click the signin button")
	public void user_to_click_the_signin_button() {
		f = new PojoClass();
		clickBtn(f.getSignInBtn());

	}

	@Then("User to close the entire browser")
	public void user_to_close_the_entire_browser() {
		closeEntireBrowser();

	}
}
