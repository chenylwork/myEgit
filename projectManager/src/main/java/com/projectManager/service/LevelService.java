package com.projectManager.service;

import java.util.List;

import com.projectManager.entity.Level;

/**
 * 任务级别操作业务接口
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 *
 */
public interface LevelService extends Service<Level>{
	
	public List<Level> getAllLevel();

}
