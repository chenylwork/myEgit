package com.projectManager.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.projectManager.entity.Project;
import com.projectManager.service.ProjectService;
@Controller("projectAction")
public class ProjectAction extends ActionSupport implements Action,ModelDriven<Project> {
	
	private static final long serialVersionUID = 5992847332696941338L;
	// action 对象模型
	private Project project = new Project();
	// 需要返回json数据信息时使用
	private String RESULT_DATA;
	@Autowired
	private ProjectService projectService;
	@Override
	public Project getModel() {
		return project;
	}
	
	public String getRESULT_DATA() {
		return RESULT_DATA;
	}

	public void setRESULT_DATA(String rESULT_DATA) {
		RESULT_DATA = rESULT_DATA;
	}

	/**
	 * 添加项目
	 * @Author chenyl
	 * @return
	 */
	public String save() {
		RESULT_DATA = projectService.add(project);
		return RESULT_DATA_CONFIG_VALUE;
	}
	/**
	 * 获取全部项目
	 * @Author chenyl
	 * @return
	 */
	public String getData() {
		RESULT_DATA = projectService.getData();
		System.out.println("************");
		return RESULT_DATA_CONFIG_VALUE;
	}
	public String getDataByID() {
		RESULT_DATA = projectService.getData(String.valueOf(project.getId()));
		return RESULT_DATA_CONFIG_VALUE;
	}

}
