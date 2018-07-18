package com.projectManager.dao.impl;

import java.util.List;

import com.projectManager.dao.BasicDao;

/**
 * 数据操作抽象类
 * 
 * @author chenyl
 * @Date 2018年7月11日
 * @Description
 *
 */
public class DaoImpl<T> implements BasicDao<T>{
	@Override
	public boolean add(T t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(T t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(T t) {
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
