package com.projectManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.projectManager.dao.ProjectDao;
import com.projectManager.entity.Project;
import com.projectManager.service.ProjectService;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService{
	@Autowired
	private ProjectDao projectDao;
	@Autowired
	private Gson gson;

	@Override
	@Transactional(readOnly=false)
	public int changeData(Project project,int operation) {
		switch (operation) {
		case DELETE:
			return projectDao.delete(project.getId()) ? SUCCESS : FAIL;
		case SAVE:
			return projectDao.add(project) ? SUCCESS : FAIL;
		case UPDATE:
			return projectDao.update(project) ? SUCCESS : FAIL;
		default:
			return ERROR;
		}
	}
	@Override
	@Transactional(readOnly=true)
	public String getData(String... keys) {
		int size = keys.length;
		switch (size) {
		case 0:
			return gson.toJson(projectDao.getAll());
		case 1:
			return gson.toJson(projectDao.getProject("id", keys[0]));
		default:
			return "";
		}
	}
	@Override
	public String add(Project project) {
		this.changeData(project,SAVE);
		return gson.toJson(project);
	}

}
