package com.projectManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.projectManager.dao.CategoryDao;
import com.projectManager.entity.Category;
import com.projectManager.service.CategoryService;
/**
 * 项目类型业务操作实现类
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Service("categoryService")
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryDao categoryDao;
	@Autowired
	private Gson gson;
	@Override
	@Transactional
	public int changeData(Category t, int operation) {
		return 0;
	}
	@Override
	@Transactional(readOnly=true)
	public String getData(String... keys) {
		return gson.toJson(categoryDao.getAll());
	}

}
