package com.projectManager.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.projectManager.dao.ProjectDao;
import com.projectManager.entity.Project;

@Repository("projectDao")
public class ProjectDaoImpl implements ProjectDao{
	@Autowired
	private HibernateTemplate template;
	@Override
	public boolean add(Project project) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				return session.save(project) != null;
			}
		});
	}

	@Override
	public boolean update(Project project) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try {
					session.update(project);
					return true;
				} catch (HibernateException e) {
					e.printStackTrace();
					return false;
				}
			}
		});
	}

	@Override
	public boolean delete(int id) {
		return template.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try {
					Query<?> query = session.createQuery("delete from Project where id = ?");
					query.setParameter(0, id);
					return query.executeUpdate() > 0;
				} catch (HibernateException e) {
					e.printStackTrace();
					return false;
				}
			}
		});
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Project> getAll() {
		return (List<Project>) template.find("from Project");
	}

	@Override
	public Project getProject(String column, String value) {
		return template.execute(new HibernateCallback<Project>() {
			@SuppressWarnings("unchecked")
			@Override
			public Project doInHibernate(Session session) throws HibernateException {
				String hql = "from Project where "+column+" = ?";
				Query<Project> query = session.createQuery(hql);
				if(column == "id") {
					query.setParameter(0, Integer.parseInt(value));
				} else {
					query.setParameter(0, value);
				}
				return query.uniqueResult();
			}
		});
	}

}
