package com.projectManager.service;

import com.projectManager.entity.User;

/**
 * 
 * @author chenyl
 * @Date 2018年7月5日
 * @Description  用户信息操作业务接口
 *
 */
public interface UserService{
	/**
	 * 注册新用户
	 * @Author chenyl
	 * @param user 注册用户的信息对应的实体类
	 * @return int 成功 1，失败  0 ，异常 -1
	 */
	public int register(User user);
	/**
	 * 用户注册查重
	 * @Author chenyl
	 * @param checkType 查重类型
	 * @param checkValue 查重值
	 * @return int 存在  1，不存在  0 ，异常 -1
	 */
	public int checkUser(String checkType,String checkValue);
	/**
	 * 用户登录
	 * @Author chenyl
	 * @param type 登录标识类型
	 * @param field  标识值
	 * @param password 密码
	 * @return int 成功1 失败 0 异常 -1
	 */
	public User login(String type,String field,String password);
	/**
	 * 激活账号
	 * @Author chenyl
	 * @param id
	 * @param checkCode
	 * @return
	 */
	public int activate(int id,String checkCode);

}
