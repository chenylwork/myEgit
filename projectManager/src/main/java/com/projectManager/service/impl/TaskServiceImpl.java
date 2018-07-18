package com.projectManager.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projectManager.dao.TaskDao;
import com.projectManager.entity.Task;
import com.projectManager.service.TaskService;
@Service("taskService")
public class TaskServiceImpl implements TaskService{
	@Autowired
	private TaskDao taskDao;

	@Override
	public int changeData(Task task, int operation) {
		switch (operation) {
		case SAVE:
			return taskDao.save(task) ? SUCCESS : FAIL ;
		case DELETE:
			return taskDao.dalete(task) ? SUCCESS : FAIL;
		case UPDATE:
			return taskDao.update(task) ? SUCCESS : FAIL;
		default:
			return ERROR;
		}
	}

	@Override
	public String getData(String... keys) {
		int paramLength = keys.length;
		if(paramLength == 1) {
			taskDao.getTaskByProjectID(Integer.parseInt(keys[0]));
		}
		return null;
	}

	@Override
	@Transactional(readOnly=true)
	public List<Task> getDataByProjrctID(int projectID) {
		return taskDao.getTaskByProjectID(projectID);
	}

	@Override
	@Transactional(readOnly=true)
	public List<Task> getDataByUserID(int userID) {
		return null;
	}

	@Override
	@Transactional(readOnly=true)
	public Task getDataByTaskID(int taskID) {
		return taskDao.getTaskByTaskID(taskID);
	}

	@Override
	@Transactional
	public Task addTask(Task task) {
		changeData(task,SAVE);
		return task;
	}
	@Override
	@Transactional
	public Task updateTask(Task task) {
		changeData(task,UPDATE);
		return task;
	}
	@Override
	@Transactional
	public int delete(Task task) {
		return changeData(task,DELETE);
	}
}
