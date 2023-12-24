package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoClass extends BaseClass {
	public PojoClass() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//input[@type='email']")
	private WebElement email;

	@FindBy(xpath = "//input[@type='submit']")
	private WebElement conBtn;

	@FindBy(id = "ap_password")
	private WebElement pass;

	@FindBy(xpath = "(//input[@type='submit'])[1]")
	private WebElement SignInBtn;

	public WebElement getEmail() {
		return email;
	}

	public WebElement getConBtn() {
		return conBtn;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getSignInBtn() {
		return SignInBtn;
	}
}
