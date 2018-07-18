package com.projectManager.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.projectManager.dao.LevelDao;
import com.projectManager.entity.Level;
/**
 * 任务级别信息操作实现类
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 *
 */
@Repository("levelDao")
public class LevelDaoImpl implements LevelDao{
	
	@Autowired
	private HibernateTemplate template;
	@Override
	public boolean add(Level level) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				return session.save(level) != null;
			}
		});
	}

	@Override
	public boolean update(Level level) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try {
					session.update(level);
					return true;
				} catch (HibernateException e) {
					e.printStackTrace();
					return false;
				}
			}
		});
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Level> getAll() {
		return (List<Level>) template.find("from Level");
	}

	@Override
	public boolean delete(Level level) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				Query<?> query = session.createQuery("delete from Level where id = ?");
				query.setParameter(0, level.getId());
				return query.executeUpdate() > 0;
			}
		});
	}

	@Override
	public Level getDataByID(int id) {
		return null;
	}

}
