package com.projectManager.dao.impl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.projectManager.dao.CategoryDao;
import com.projectManager.entity.Category;
/**
 * 项目类型操作实现类
 * @author chenyl
 * @Date 2018年7月9日
 * @Description  
 *
 */
@Repository("categoryDao")
public class CategoryDaoImpl implements CategoryDao{
	@Autowired
	private HibernateTemplate template;

	@Override
	public List<Category> getAll() {
		return template.execute(new HibernateCallback<List<Category>>() {

			@SuppressWarnings("unchecked")
			@Override
			public List<Category> doInHibernate(Session session) throws HibernateException {
				return session.createQuery("from Category").list();
			}
		});
	}

}
