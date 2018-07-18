package com.projectManager.service;

import com.projectManager.entity.Project;

/**
 * 项目业务操作接口
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
public interface ProjectService extends Service<Project>{
	
	public String add(Project project);
	

}
