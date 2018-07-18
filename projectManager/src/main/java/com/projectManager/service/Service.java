package com.projectManager.service;

/**
 * 业务操作接口
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
public interface Service<T>{
	/**
	 *  保存操作标识
	 */
	public final static int SAVE = 0;
	/**
	 *  修改操作标识
	 */
	public final static int UPDATE = 1;
	/**
	 *  删除操作标识
	 */
	public final static int DELETE = -1;
	/**
	 * 操作成功标识
	 */
	public final static int SUCCESS = 1;
	/**
	 * 操作失败标识
	 */
	public final static int FAIL = 0;
	/**
	 * 操作异常标识
	 */
	public final static int ERROR = -1;
	
	/**
	 * 数据更改操作,包括保存添加、修改、删除操作,仅支持单条信息的操作
	 * @Author chenyl
	 * @param t  具体操作对象
	 * @param operation 操作标识
	 * @return 操作成功返回 SUCCESS 失败返回  FAIL 异常返回 ERROR
	 */
	public int changeData(T t,int operation);
	/**
	 * 获取数据信息
	 * @Author chenyl
	 * @param key 
	 * @return
	 */
	public String getData(String... keys);
}
