package com.projectManager.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.projectManager.service.CategoryService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:applicationContext.xml", "classpath:applicationContext-bean.xml" })
public class MyTest {
	@Autowired
	private CategoryService categoryService;

	@Test
	public void myTest() {
		System.out.println(categoryService.getData());
	}

}
