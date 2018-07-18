package com.projectManager.interceptor;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
/**
 * 用户是否登录拦截器
 * @author chenyl
 * @Date 2018年7月10日
 * @Description  
 *
 */
public class LoginIntercepter extends AbstractInterceptor{

	private static final long serialVersionUID = -4547303442809355141L;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		ActionContext invocationContext = invocation.getInvocationContext();
		Map<String,Object> session = invocationContext.getSession();
		System.out.println("************"+session.containsKey("user"));
		if(session.containsKey("user")) {
			return invocation.invoke();
		}
//		return Action.LOGIN;
		return invocation.invoke();
	}

}
