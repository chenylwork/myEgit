package com.projectManager.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 * 任务级别对应类
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Entity
@Table(name="state")
public class State {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id; // 级别编号
	private String name; // 级别名称
	
	
	public State() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}
