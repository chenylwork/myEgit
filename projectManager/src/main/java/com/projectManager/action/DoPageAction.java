package com.projectManager.action;

import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
@Controller("doPageAction")
public class DoPageAction extends ActionSupport implements Action{

	private static final long serialVersionUID = 9005023821748017542L;
	
	public String index() {
		return INDEX;
	}
	public String login() {
		return LOGIN;
	}

}
