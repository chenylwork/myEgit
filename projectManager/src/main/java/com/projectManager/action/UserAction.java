package com.projectManager.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.projectManager.entity.User;
import com.projectManager.service.UserService;

/**
 * 用户操作action类
 * @author chenyl
 * @Date 2018年7月5日
 * @Description  
 *
 */
@Controller("userAction")
@Scope("prototype")
public class UserAction extends ActionSupport implements ModelDriven<User>,Action{

	private static final long serialVersionUID = -5025087655113791337L;
	/**
	 * 返回的数据
	 */
	private String result;
	/**
	 * 标识返回类型为数据
	 */
	private String DataReturnType = "data";
	/**
	 * 注册用户检测类型
	 */
	private String fieldType;
	/**
	 * 注册用户检测值
	 */
	private String field;
	

	private User user = new User();
	
	@Autowired
	private UserService userService;
	@Autowired
	private Gson gson;
	
	@Override
	public User getModel() {
		return user;
	}
	/**
	 * 注册用户
	 * @Author chenyl
	 * @return String
	 */
	public String register() {
		result = userService.register(user)+"";
		return DataReturnType;
	}
	/**
	 * 用户查重
	 * @Author chenyl
	 * @return
	 */
	public String checkField() {
		result = userService.checkUser(fieldType, field)+"";
		return DataReturnType;
				
	}
	// 登录
	public String login() {
		user = userService.login(fieldType, field, user.getPassword());
		if(user !=null) {
			ActionContext.getContext().getSession().put("user", user);
		}
		result = gson.toJson(user);
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 激活账户
	public String activate() {
		result = userService.activate(user.getUserID(), user.getCodeUrl())+"";
		return SUCCESS;
	}
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	public String getFieldType() {
		return fieldType;
	}
	public void setFieldType(String fieldType) {
		this.fieldType = fieldType;
	}
	public String getField() {
		return field;
	}
	public void setField(String field) {
		this.field = field;
	}

}
