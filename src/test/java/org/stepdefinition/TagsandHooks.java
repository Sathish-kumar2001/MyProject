package org.stepdefinition;

import org.base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TagsandHooks extends BaseClass {

	@Before(order = 1, value = "@smoke")
	private void precondition1() {
		launchBrowser();

		System.out.println("max the window");

	}

	@Before(order = 2)
	private void precondition2() {
		System.out.println("precondition2");
		WindowMaximize();

	}

	@Before(order = 3, value = "@smoke")
	private void precondition3() {

	}

	@After
	private void postcondition4() {
		System.out.println("Take screenshot of scenario");

	}

	@After
	private void postcondition3() {
		closeEntireBrowser();
		System.out.println("close the entire browser");
	}
}