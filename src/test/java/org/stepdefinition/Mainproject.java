package org.stepdefinition;
import io.cucumber.datatable.*;

import java.util.List;

import org.base.BaseClass;
import org.pojo.PojoClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Mainproject extends BaseClass {

	PojoClass f;

	

	@Given("To launch the browser and window maximise")
	public void to_launch_the_browser_and_window_maximise() throws InterruptedException {
		
		launchBrowser();
		 
		WindowMaximize();
	   
	}

	@When("To launch the amazon appliction url")
	public void to_launch_the_amazon_appliction_url() throws InterruptedException {
		launchUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
	    
	}

	@When("To pass valide username in email field")
	public void to_pass_valide_username_in_email_field(DataTable d) {
		f = new PojoClass();
		List<String> l = d.asList();
		passText(l.get(0), f.getEmail());
	   
	}

	@When("To click the continue button")
	public void to_click_the_continue_button() {
		f = new PojoClass();
	    clickBtn(f.getConBtn());
	   
	}

	@When("To pass the invalide password in password field")
	public void to_pass_the_invalide_password_in_password_field(DataTable d) throws InterruptedException {
		Thread.sleep(4000);
		f = new PojoClass();
		List<List<String>> l = d.asLists();
		passText(l.get(0).get(1), f.getPass());
		
	    
	}

	@When("To click the signin button")
	public void to_click_the_signin_button() {
		clickBtn(f.getSignInBtn());
	   
	}

	@Then("To close the entire browser")
	public void to_close_the_entire_browser() {
		closeEntireBrowser();
	 
	}



}
