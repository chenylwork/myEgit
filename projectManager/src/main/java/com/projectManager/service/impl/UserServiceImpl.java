package com.projectManager.service.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projectManager.dao.UserDao;
import com.projectManager.entity.User;
import com.projectManager.service.UserService;
import com.projectManager.unit.CharUnit;
import com.projectManager.unit.EmailUtils;
import com.projectManager.unit.GenerateLinkUtils;



/**
 * 
 * @author chenyl
 * @Date 2018年7月5日
 * @Description  用户信息业务实现类
 *
 */
@Service("userService")
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;
	
	@Override
	@Transactional
	public int register(User user) {
		// 密码加密
//		user.setPassword(CharUnit.encodeByMD5(user.getPassword()));
//		try {
//			return userDao.add(user) ? 1 : 0;
//		} catch (Exception e) {
//			return -1;
//		}
		user.setCodeUrl(UUID.randomUUID().toString());
		// 注册用户
		if(checkUser("email", user.getEmail()) == 0) {
			user.setPassword(CharUnit.encodeByMD5(user.getPassword()));// 密码加密
			user.setState(false); // 刚注册默认是没有激活状态
			userDao.add(user);
		} else {
			return 0; // 用户已经注册
		}
		// 查看是否注册成功,为实体类赋值ID
		User findUser = userDao.findUserByEmail(user.getEmail());
		if(findUser != null) {
			user.setUserID(findUser.getUserID());
		} else {
			return -1; //注册失败
		}
		// 注册成功后，发送账户激活链接
		EmailUtils.sendAccountActivateEmail(user);
		return 1;
	}

	@Override
	@Transactional
	public int checkUser(String checkType, String checkValue) {
		try {
			return userDao.check(checkType, checkValue) ? 1 : 0;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}

	@Override
	@Transactional
	public User login(String type, String field, String password) {
		password = CharUnit.encodeByMD5(password);
		try {
			return userDao.chenKPassword(type, field, password);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	@Transactional
	public int activate(int id, String checkCode) {
		User user = userDao.findUserByID(id);
		// 验证激活码
		if(GenerateLinkUtils.verifyCheckcode(user,checkCode)) {
			return userDao.updateActivated(User.Activated,id) ? 1 : 0;
		}
		return 0;
	}

	
}
