package com.projectManager.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.projectManager.dao.TaskDao;
import com.projectManager.entity.Task;
/**
 * 任务信息操作类
 * @author chenyl
 * @Date 2018年7月11日
 * @Description  
 *
 */
@Repository("taskDao")
public class TaskDaoImpl implements TaskDao {
	
	@Autowired
	private HibernateTemplate template;
	@Override
	public boolean save(Task task) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				return session.save(task) != null;
				
			}
		});
	}

	@Override
	public boolean update(Task task) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try {
					session.update(task);
					return true;
				} catch (HibernateException e) {
					e.printStackTrace();
					return false;
				}
			}
		});
	}

	@Override
	public boolean dalete(Task task) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				Query<?> query = session.createQuery("delete from Task where id = :id");
				query.setParameter("id", task.getId());
				return query.executeUpdate() > 0;
			}
		});
	}

	@Override
	public Task getTaskByTaskID(int taskID) {
		return template.execute(new HibernateCallback<Task>() {
			@Override
			@SuppressWarnings("unchecked")
			public Task doInHibernate(Session session) throws HibernateException {
				String hql = "from Task where id = ?";
				Query<Task> query = session.createQuery(hql);
				query.setParameter(0, taskID);
				return query.uniqueResult();
			}
		});
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Task> getTaskByProjectID(int projecID) {
		return (List<Task>) template.find("from Task where project.id = "+projecID);
	}

}
