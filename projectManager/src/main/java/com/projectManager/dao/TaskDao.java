package com.projectManager.dao;

import java.util.List;

import com.projectManager.entity.Task;

/**
 * 任务信息操作接口
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 *
 */
public interface TaskDao {
	/**
	 * 添加新任务
	 * @Author chenyl
	 * @param task
	 * @return
	 */
	public boolean save(Task task);
	/**
	 * 修改任务信息
	 * @Author chenyl
	 * @param task
	 * @return
	 */
	public boolean update(Task task);
	/**
	 * 删除项目
	 * @Author chenyl
	 * @param task
	 * @return
	 */
	public boolean dalete(Task task);
	/**
	 * 根据任务编号获取任务信息
	 * @Author chenyl
	 * @param taskID
	 * @return
	 */
	public Task getTaskByTaskID(int taskID);
	/**
	 * 根据项目编号查询任务
	 * @Author chenyl
	 * @param projecID
	 * @return
	 */
	public List<Task> getTaskByProjectID(int projecID);

}
