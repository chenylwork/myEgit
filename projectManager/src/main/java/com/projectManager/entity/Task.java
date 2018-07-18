package com.projectManager.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
/**
 * 项目任务信息表
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Entity
@Table(name="task")
public class Task {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id; // 任务编号
	private String name; // 任务名称
	@ManyToOne
	@JoinColumn(name="projectID")
	private Project project; // 任务所属项目
	private String openTime; // 任务布置时间
	private String planEndTime; // 任务计划结束时间
	private String actualEndTime; // 任务结束时间
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="levelID")
	private Level level; // 任务级别
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="stateID")
	private State state; // 任务状态
	@Column(name="describeInfo")
	private String describe; // 任务描述信息
	
	public Task() {
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
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public String getOpenTime() {
		return openTime;
	}
	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}
	public String getPlanEndTime() {
		return planEndTime;
	}
	public void setPlanEndTime(String planEndTime) {
		this.planEndTime = planEndTime;
	}
	public String getActualEndTime() {
		return actualEndTime;
	}
	public void setActualEndTime(String actualEndTime) {
		this.actualEndTime = actualEndTime;
	}
	public Level getLevel() {
		return level;
	}
	public void setLevel(Level level) {
		this.level = level;
	}
	public State getState() {
		return state;
	}
	public void setState(State state) {
		this.state = state;
	}
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	
	
	

}
