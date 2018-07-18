package com.projectManager.dao;

import java.util.List;

import com.projectManager.entity.Category;

/**
 * 项目类型操作接口
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 * 
 */
public interface CategoryDao {
	/*
	 * 获取全部的信息
	 */
	public List<Category> getAll();
}
