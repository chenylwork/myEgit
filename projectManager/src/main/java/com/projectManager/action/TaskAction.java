package com.projectManager.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.projectManager.entity.Task;
import com.projectManager.service.TaskService;
@Controller("taskAction")
public class TaskAction extends ActionSupport implements ModelDriven<Task>,Action{
	
	private static final long serialVersionUID = 6469717310222217604L;
	@Autowired
	private TaskService taskService;
	private Task task = new Task();
	@Autowired
	private Gson gson;
	private String result;
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	@Override
	public Task getModel() {
		return task;
	}
	// 添加任务
	public String save() {
		result = gson.toJson(taskService.addTask(task));
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 删除任务操作
	public String delete() {
		result = taskService.delete(task)+"";
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 获取全部任务
	public String getTaskData() {
		result = gson.toJson(taskService.getDataByProjrctID(task.getProject().getId()));
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 获取任务信息
	public String getTaskByID() {
		result = gson.toJson(taskService.getDataByTaskID(task.getId()));
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 修改任务
	public String update() {
		result = gson.toJson(taskService.updateTask(task));
		return RESULT_DATA_CONFIG_VALUE;
	}
	// 修改任务状态
	public String updateState() {
		int stateID = task.getState().getId();
		task = taskService.getDataByTaskID(task.getId());
		task.getState().setId(stateID); // 修改状态码
		result = gson.toJson(taskService.updateTask(task));
		return RESULT_DATA_CONFIG_VALUE;
	}

}
