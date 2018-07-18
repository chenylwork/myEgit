package com.projectManager.dao;

import java.util.List;

import com.projectManager.entity.Project;

/**
 * 任务信息操作接口
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
public interface ProjectDao {
	/**
	 * 添加项目
	 * @Author chenyl
	 * @param project
	 * @return
	 */
	public boolean add(Project project);
	/**
	 * 修改项目信息
	 * @Author chenyl
	 * @param project
	 * @return
	 */
	public boolean update(Project project);
	/**
	 * 删除项目信息
	 * @Author chenyl
	 * @param id
	 * @return
	 */
	public boolean delete(int id);
	/**
	 * 获取全部项目
	 * @Author chenyl
	 * @return
	 */
	public List<Project> getAll();
	/**
	 * 获取项目信息
	 * @Author chenyl
	 * @param column
	 * @param value
	 * @return
	 */
	public Project getProject(String column,String value);
}
