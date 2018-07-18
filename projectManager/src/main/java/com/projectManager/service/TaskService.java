package com.projectManager.service;

import java.util.List;

import com.projectManager.entity.Task;

public interface TaskService extends Service<Task>{
	
	public Task addTask(Task task);
	
	public Task updateTask(Task task);
	
	public int delete(Task task);
	
	public List<Task> getDataByProjrctID(int projectID);
	
	public List<Task> getDataByUserID(int userID);
	
	public Task getDataByTaskID(int taskID);

}
