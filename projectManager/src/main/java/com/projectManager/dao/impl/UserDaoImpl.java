package com.projectManager.dao.impl;

import org.hibernate.HibernateException;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.projectManager.dao.UserDao;
import com.projectManager.entity.User;

/**
 * 
 * @author chenyl
 * @Date 2018年7月5日
 * @Description  用户信息操作类
 *
 */
@Repository("userDao")
public class UserDaoImpl implements UserDao{
	@Autowired
	private HibernateTemplate hibernateTemplate;
	
	@Override
	public boolean add(User user) {
		return hibernateTemplate.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				try{
					session.save(user);
					return true;
				}catch(Exception e){
					return false;
				}
			}
		});
	}

	@Override
	public boolean check(String key, String value) {
		final String columnK = "".equals(key) ? "1" : key.replace(" ", "");
		final String columnV = "".equals(value) ? "1" : value.replace(" ", "");
		return hibernateTemplate.execute(new HibernateCallback<Boolean>() {
			@SuppressWarnings("unchecked")
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				String hql = "select count(userID) from User where "+columnK+" = ? ";
				Query<Long> query = session.createQuery(hql);
				query.setParameter(0, columnV);
				return query.uniqueResult() > 0;
			}
		});
	}

	@Override
	public User chenKPassword(String field,String column, String password) {
		return hibernateTemplate.execute(new HibernateCallback<User>() {
			@SuppressWarnings("unchecked")
			@Override
			public User doInHibernate(Session session) throws HibernateException {
				String hql = "from User where "+field+" = '"+column+"' and password = ?";
				Query<User> query = session.createQuery(hql);
				query.setParameter(0, password);
				System.out.println(query.uniqueResult()+"***"+password);
				return query.uniqueResult();
			}
		});
	}

	@Override
	public User findUserByEmail(String email) {
		return hibernateTemplate.execute(new HibernateCallback<User>() {
			@SuppressWarnings("unchecked")
			@Override
			public User doInHibernate(Session session) throws HibernateException {
				Query<User> query = session.createQuery("from User where email = ?");
				query.setParameter(0, email.replace(" ", ""));
				return query.uniqueResult();
			}
		});
	}

	@Override
	public User findUserByID(int id) {
		return hibernateTemplate.get(User.class, id);
	}

	@Override
	public boolean updateActivated(boolean state, int userID) {
		return hibernateTemplate.execute(new HibernateCallback<Boolean>() {
			@Override
			public Boolean doInHibernate(Session session) throws HibernateException {
				String hql = "update User set state = ? where userID = ?";
				Query<?> query = session.createQuery(hql);
				query.setParameter(0, state);
				query.setParameter(1, userID);
				return query.executeUpdate() > 0;
			}
		});
	}
	
}
