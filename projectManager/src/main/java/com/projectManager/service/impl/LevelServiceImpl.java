package com.projectManager.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectManager.dao.LevelDao;
import com.projectManager.entity.Level;
import com.projectManager.service.LevelService;
@Service("levelService")
public class LevelServiceImpl implements LevelService{
	
	@Autowired
	private LevelDao levelDao;

	@Override
	public int changeData(Level t, int operation) {
		return 0;
	}

	@Override
	public String getData(String... keys) {
		return null;
	}

	@Override
	public List<Level> getAllLevel() {
		return levelDao.getAll();
	}

}
