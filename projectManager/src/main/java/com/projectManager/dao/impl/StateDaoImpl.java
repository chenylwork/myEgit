package com.projectManager.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;

import com.projectManager.dao.StateDao;
import com.projectManager.entity.State;
/**
 * 任务状态信息操作实现类
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 *
 */
public class StateDaoImpl implements StateDao{

	@Autowired
	private HibernateTemplate template;

	@Override
	public boolean add(State state) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				return session.save(state) != null;
			}
		});
	}

	@Override
	public boolean update(State state) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try {
					session.update(state);
					return true;
				} catch (HibernateException e) {
					e.printStackTrace();
					return false;
				}
			}
		});
	}

	@Override
	public boolean delete(State t) {
		return false;
	}

	@Override
	public State getDataByID(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<State> getAll() {
		return (List<State>) template.find("from State");
	}
	

}
