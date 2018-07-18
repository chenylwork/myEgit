package com.projectManager.dao;

import java.util.List;

/**
 * 基本数据操作接口
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 * @param <T>
 */
public interface BasicDao<T> {
	/**
	 * 添加信息
	 * @Author chenyl
	 * @param level
	 * @return
	 */
	public boolean add(T t);
	/**
	 * 修改信息
	 * @Author chenyl
	 * @param level
	 * @return
	 */
	public boolean update(T t);
	/**
	 * 删除信息
	 * @Author chenyl
	 * @param t
	 * @return
	 */
	public boolean delete(T t);
	/**
	 * 根据id获取信息
	 * @Author chenyl
	 * @param id
	 * @return
	 */
	public T getDataByID(int id);
	/**
	 * 获取全部信息
	 * @Author chenyl
	 * @return
	 */
	public List<T> getAll();

}
