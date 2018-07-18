/*
* @Author: admin
* @Date:   2018-07-09 08:50:40
* @Last Modified by:   admin
* @Last Modified time: 2018-07-10 08:23:24
* 用于修改页面样式的js脚本
*/
function fieldBtnFun(field) {
	var errorNode = $("#error-message");
	// 空判断
	if(isEmpty(field)) {
		errorNode.val("请输入邮箱/手机号");
		show(errorNode);
		return;
	}
	// 错误判断
	if(!isEmail(field) && !isPhone(field)) {
		errorNode.val("请输入正确的邮箱/手机号");
		show(errorNode);
		return;
	}
	hidden($("#field-form"));
	// 已注册判断
	if(checkField(field) == "1") {
		show([$("#login-form"),$("#login-header")]);
		return;
	}
	show([$("#reister-header"),$("#register-btns")]);
	// 邮箱注册判断
	if(isEmail(field)) {
		$("#email").val(field);
		show($("#email-form"));
		return;
	}
	if(isPhone(field)) {
	}
}
/**
 * 注册方法
 * @returns
 */
function reisterBtnFun() {
	var userName = $("#userName").val();
	var password = $("#password").val();
	var entPassword = $("#entPassword").val();
	var userCheck = checkUserName(userName);
	var passCheck = checkPassword(password);
	var entPassCheck = checkEntPassword(password,entPassword);
	
	if(userCheck == 1 && passCheck == 1 && entPassCheck == 1) {
		reister();
	}
}
/**
 * 登录方法
 * @returns
 */
function loginBtnFun() {
	var userName = $("#login-field").val();
	var password = $("#login-password").val();
	if(isEmpty(userName) && isEmpty(password)) {
		alert("请填写完整登录信息");
		return;
	}
	if(checkField(userName) == "0") {
		show($("#error-login-userName"));
		return;
	}
	var fieldType = fieldTypeCheck(userName);
	var loginUser = login(fieldType,userName,password);
	if(loginUser != {}) {// 登录成功存入cookie（待完善）
		if(loginUser.state) { // 是否激活
			window.location.href = "index.jsp";
		} else {
			alert("该账号未激活！");
		}
	} else {
		show($("#error-login-password"));
	}
}
/**
 * 注册标识验证
 * @param field 标识类型
 * @param fieldValue 标识值
 * @returns 已存在 返回1 不存在 0 服务器异常 -1
 */
function checkField(field) {
	var fieldType = fieldTypeCheck(field);
	var url = "user/checkField";
	var data = {"fieldType":fieldType,"field":field};
	var result;
	$.ajax({
		type:"post",
		url:url,
		data:data,
		async:false,
		success:function(data){
			result = data;
		}
	});
	return result;
}
/**
 * 注册提交
 * @returns
 */
function reister() {
	var url = "user/register";
	var data = $("#email-form").serialize();
	$.post(url,data,function(result){
		if(result == "1") {
			hidden([$("#email-form"),$("#register-btns"),$("#reister-header")]);
			$("#login-header>h4").text("注册成功请激活后登录");
			show([$("#login-form"),$("#login-header")]);
		}else {
			alert("出错了！！！");
		}
	});
}
/**
 * 登录提交
 * @returns
 */
function login(fieldType,field,password) {
	var url = "user/login";
	var params = { 
			"fieldType":fieldType,
			"field":field,
			"password":password
	};
	var result = {};
	$.ajax({
		type:"post",
		url:url,
		data:params,
		async:false,
		success:function(data){
			if(data != "" && data != "[]") {
				result = eval('('+data+')');
			}
		},
	});
	return result;
}

/**
 * 判断是否为空
 * @returns boolean 是空 返回true 否则返回 false
 */
function isEmpty(value) {
	return value == "" ? true : false ;
}
/**
 * 判断是否是邮箱
 * @param email 需要验证的邮箱
 * @returns 是邮箱返回 true 否则返回 false
 */
function isEmail(email) {
	var reg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/); //正则表达式
	return reg.test(email);
}
/**
 * 判断是否是手机号
 * @param phone 需要验证的手机
 * @returns 是手机号返回 true 否则返回 false
 */
function isPhone(phone) {
	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	return myreg.test(phone) ? true : false;
}
/**
 * 注册类型判断
 * @param field
 * @returns
 */
function fieldTypeCheck(field) {
	return !/^[0-9]$/.test(field) ? "email" : "phone";
}
/**
 * 显示node
 * @param nodes
 * @returns
 */
function show(nodes){
	$.each(nodes,function(index,value){
	     $(nodes[index]).addClass("show");
	     $(nodes[index]).removeClass("hidden");
	});
}
/**
 * 隐藏node
 * @param nodes
 * @returns
 */
function hidden(nodes){
	$.each(nodes,function(index,value){
	     $(nodes[index]).addClass("hidden");
	     $(nodes[index]).removeClass("show");
	});
}
/**
 * 邮箱验证
 * @returns
 */
function checkEmail(email) {
	var isMail =  isEmail(email);
}
/**
 * 手机验证
 * @returns
 */
function checkPhone() {
	var isphone =  isEmail(email);
}
/**
 * 密码验证
 * @param password
 * @returns
 */
function checkPassword(password) {
	var error = $("#error-password");
	var reg = /^[a-zA-Z0-9_]{6,16}$/;
	if(isEmpty(password)) {
		error.val("请输入密码");
		show(error);
		return 0;
	}
	if(!reg.test(password)) {
		error.val("密码为6到16位（字母，数字，下划线）");
		show(error);
		return -1;
	}
	return 1;
}
/**
 * 用户名验证
 * @param userName
 * @returns
 */
function checkUserName(userName) {
	var error = $("#error-userName");
	var reg = /^[a-zA-Z0-9]{4,10}$/;
	if(isEmpty(userName)) {
		error.val("请输入名称");
		show(error);
		return 0;
	}
	if(!reg.test(userName)) {
		error.val("名称为4-10位字母或数字");
		show(error);
		return -1;
	}
	return 1;
}
/**
 * 确认密码检测
 * @param password
 * @param entPassword
 * @returns
 */
function checkEntPassword(password,entPassword){
	var error = $("#error-entPassword");
	if(password != entPassword) {
		show(error);
		return -1;
	}
	return 1;
}
/**
 * 返回编号类
 */
var code = {
	"SUCCESS":"1",
	"File":"0",
	"ERROR":"-1"
};
/**
 * 检查用户是否登录
 * @returns
 */
function check_login(){// 检查本地cookie是否有对应的登录信息（待完善）
	var id = $("#user_login_id").val();
	console.log("id = "+id);
	console.log(id == "" || id == null);
	if(id == "" || id == null) {
		window.location.href = "login.html";
	}
}
/**
 * 获取url参数
 * @param para
 * @returns
 */
function getUrl(para){
    var paraArr = location.search.substring(1).split('&');
    for(var i = 0;i < paraArr.length;i++){
        if(para == paraArr[i].split('=')[0]){
            return paraArr[i].split('=')[1];
        }
    }
    return '';
}
