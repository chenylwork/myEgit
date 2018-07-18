package com.projectManager.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.projectManager.service.CategoryService;

/**
 * 项目类型操作action
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Controller("categoryAction")
public class CategoryAction extends ActionSupport implements Action{

	private static final long serialVersionUID = -77427935239565124L;
	@Autowired
	private CategoryService categoryService;
	// 需要返回json数据信息时使用
	private String RESULT_DATA;
	
	public String getRESULT_DATA() {
		return RESULT_DATA;
	}

	public void setRESULT_DATA(String RESULT_DATA) {
		this.RESULT_DATA = RESULT_DATA;
	}

	public String getData() {
		RESULT_DATA = categoryService.getData();
		return RESULT_DATA_CONFIG_VALUE;
	}

}
