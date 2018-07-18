package com.projectManager.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.projectManager.entity.Level;
import com.projectManager.service.LevelService;
@Controller("levelAction")
public class LevelAction extends ActionSupport implements ModelDriven<Level>,Action{

	private static final long serialVersionUID = -6154093566272414777L;
	@Autowired
	private LevelService levelService;
	@Autowired
	private Gson gson;
	private String result;
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	private Level level;
	@Override
	public Level getModel() {
		// TODO Auto-generated method stub
		return level;
	}

	public String getLevelData() {
		result = gson.toJson(levelService.getAllLevel());
		return RESULT_DATA_CONFIG_VALUE;
	}
}
