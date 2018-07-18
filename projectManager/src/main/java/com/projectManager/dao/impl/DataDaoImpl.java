package com.projectManager.dao.impl;

import java.util.List;

import com.projectManager.dao.DataDao;

/**
 * 数据操作抽象类
 * @author chenyl
 * @Date 2018年7月12日
 * @Description  
 *
 */
public class DataDaoImpl<T> implements DataDao<T>{

	@Override
	public boolean add(Object t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Object t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Object t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public T getDataByID(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<T> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
