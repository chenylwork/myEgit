package com.projectManager.dao;

import com.projectManager.entity.User;

/**
 * 
 * @author chenyl
 * @Date 2018年7月5日
 * @Description  用户信息操作接口
 *
 */
public interface UserDao {
	/**
	 * 
	 * @Author chenyl
	 * @param user 需要添加的User 对象
	 * @return Boolean
	 */
	public boolean add(User user);
	/**
	 * 用户查重
	 * @Author chenyl
	 * @param key 需要查重的字段名称
	 * @param value 需要查重的字段值
	 * @return boolean 存在返回 true 不存在返回 false
	 */
	public boolean check(String key, String value);
	/**
	 * 根据标识判断密码是否正确 主要用于登录
	 * @Author chenyl
	 * @param field 判断标识  邮箱、手机号等
	 * @param column 标识列
	 * @param password 密码
	 * @return boolean 密码正确 true 错误 0
	 */
	public User chenKPassword(String field,String column,String password);
	/**
	 * 根据邮箱判断是否已注册
	 * @Author chenyl
	 * @param email
	 * @return 
	 */
	public User findUserByEmail(String email);
	/**
	 * 根据用户id查询用户
	 * @Author chenyl
	 * @param id
	 * @return 
	 */
	public User findUserByID(int id);
	/**
	 * 修改用户激活状态
	 * @Author chenyl
	 * @param state
	 * @param userID
	 * @return
	 */
	public boolean updateActivated(boolean state,int userID);

}
