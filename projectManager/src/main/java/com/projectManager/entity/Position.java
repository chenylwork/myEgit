package com.projectManager.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 用户职位信息类
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Entity
@Table(name="position")
public class Position {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id; // 职位编号
	private String name; // 职位名称
	
	public Position() {
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
