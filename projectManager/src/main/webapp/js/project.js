/*
* @Author: admin
* @Date:   2018-07-09 08:50:40
* @Last Modified by:   admin
* @Last Modified time: 2018-07-10 23:10:15
* 用于项目模块操作的js脚本
*/
function project_list_load_fun() {
	
}
/**
 * 任务页面加载方法
 * @returns
 */
function task_list_load_fun(projectID) {
	init_task_list_box("task-list-box"); // 填充任务列表框
	init_task_list(projectID);// 填充任务列表
	init_project_info(projectID); // 填充任务信息
	$("#task_save_btn").click(function(){
		save_task_btn("task-add-form");
	});
    $(".panel_trigger").click(function(){
        var panel_id = $(this).attr("href");
        show_panel(panel_id); // 面板切换
    });
}


/**
 * 填充项目类型下拉框信息
 * @param selectID 下拉框ID
 * @param optionClass 下拉框选项class
 * @returns void
 */
function category_init_select(selectID,optionClass){
	var data = get_category_data();
	if(data == "" && data == "[]") {
		return;
	}
	var dataArray = eval('('+data+')');
	$("."+optionClass).remove();
	var initHtml = "";
	for(var i in dataArray) {
		initHtml += "<option value='"+dataArray[i].id+"' class='"+optionClass+"'>"+dataArray[i].name+"</option>"
	}
	$("#"+selectID).append(initHtml);
}
/**
 * 添加新项目
 * @returns
 */
function project_add(info_form_id){
	var data = $("#"+info_form_id).serializeJson();
	var project;
	if(data.name != "" && data.customer != "" && data.planEndTime != "" && data["category.id"] != "") {
		project = submit_project(info_form_id);
		if(project.id != "") {
			$('#project-add-panel').css("display","none");
			$(".modal-backdrop").remove();
			init_project(project);
			return;
		}
	}
	show($("#project_add_error_message"));
}
/**
 * 填充项目列表
 * @returns
 */
function init_project_list(project_list){
	console.log(project_list);
	for(var i in project_list) {
		init_project(project_list[i]);
	}
}
/**
 * 填充我拥有的项目信息
 * @returns
 */
function init_project_have_list(userID) {
	var project_list = get_project_data(userID);
	init_project_list(project_list);
}
/**
 * 填充项目信息
 * @returns
 */
function init_project(project) {
	var project_html = "<li class='project-box fl' id='project_"+project.id+"'>";
	project_html += "<div class='project' onclick='doProject("+project.id+")'>";
	project_html += "<img src='images/project-logo1.jpg'>";
	project_html += "<h3 class='project-header'>";
	project_html += "<span class='project-name fl'>"+project.name.substr(0,6)+"</span>";
	project_html += "<span class='icon icon-star fr'><a href=''></a></span>";
	project_html += "<span class='icon icon-edit fr'><a href='' rel='是不是'></a></span>";
	project_html += "</h3>";
	project_html += "<div class='progress progress-striped'>";
	project_html += "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 90%;'>";
	project_html += "<span class=''>90% 完成</span>";
	project_html += "</div>";
	project_html += "</div>";
	project_html += "</div>";
	project_html += "</li>";
	$("#project-have-list").prepend(project_html);
	project_animation("project");
    
}
/**
 * 跳转项目信息页
 * @param projectID
 * @returns
 */
function doProject(projectID) {
	window.location.href = "project.jsp?id="+projectID;
}
/**
 * 提交项目信息
 * @returns
 */
function submit_project(submit_form_id) {
	var params = $("#"+submit_form_id).serialize();
	var result = {};
	$.ajax({
		url:"project/save",
		type:"post",
		data:$("#"+submit_form_id).serialize(),
		async:false,
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/**
 * 获取全部项目类别信息数据信息
 * @returns
 */
function get_category_data() {
	var resultData;
	$.ajax({
		url:"category/getData",
		data:{},
		async:false,
		success:function(result){
			resultData = result;
		},
	});
	return resultData;
}
/**
 * 根据项目id获取项目信息
 * @returns
 */
function get_project_By_id(projectID) {
	var resultData = {};
	$.ajax({
		url:"project/getDataByID",
		data:{"id":projectID},
		async:false,
		success:function(data){
			resultData = (data!="" && data!="[]") ? eval('('+data+')') : resultData;
		},
	});
	return resultData;
}
/**
 * 填充任务信息
 * @param 任务编号
 * @returns
 */
function init_project_info(projectID) {
	var project = get_project_By_id(projectID);
	init_value("project",project);
	category_init_select("project-info-category"); // 填充任务信息中任务类型列表
}
/**
 * 递归填充数据信息，信息将被填充到name参数对应的类元素节点下
 * 例：name=project object={key1:value1,key2:value2}
 * 填充规则为：类class为 project-key1 的text值和value将被赋值为 value1
 * @param name 类标记名称
 * @param object 赋值对象	
 * @returns
 */
function init_value(name,object,parent) {
	parent = (parent != "" && parent != null) ? (parent+" ") : "";
	for(var key in object) {
		//var findNode = parent+name+"-"+key;
		if(object[key] instanceof Object) {
			init_value(name+"-"+key,object[key]);
		} else {
			var findNode = parent+"."+name+"-"+key;
			console.log("*********元素选取为"+findNode+"*********");
			//console.log(name+"-"+key+"="+object[key]);
			$(findNode).text(object[key]);
			$(findNode).val(object[key]);
		}
	}
}
/**
 * 获取全部项目信息
 * @returns
 */
function get_project_data(params) {
	var resultData = {};
	$.ajax({
		url:"project/getData",
		data:{},
		async:false,
		success:function(data){
			resultData = (data!="" && data!="[]") ? eval('('+data+')') : resultData;
		},
	});
	return resultData;
}
/******* 任务信息操作start ********/
/**
 * 保存操作
 */
function save_task_btn(info_form_id) {
	var data = $("#"+info_form_id).serializeJson();
	if(data.name != "" && data.planEndTime) {
		task = submit_task(info_form_id);
		if(task.id != "") {
			$('#add-task-panel').css("display","none");
			$(".modal-backdrop").remove();
			init_task(task);
			return;
		}
	}
}
/**
 * 任务状态修改
 * @param state
 * @returns
 */
function update_task_state(taskID,state) {
	var newTaskData = submit_update_task_state(taskID,state);
	var taskNode = $("#task-"+taskID);
	var parentNode = taskNode.parent();
	if(newTaskData != {}) {
		taskNode.find(".task-state").css("borderColor","#a6a6a6");
		parentNode.append(taskNode.remove());
	}
}
/**
 * 提交任务状态修改
 * @param state
 * @returns
 */
function submit_update_task_state(taskID,state) {
	var result = {};
	$.ajax({
		url:"task/updateState",
		data:{"id":taskID,"state.id":state},
		type:"post",
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		}
	});
	return result;
}
/**
 * 添加任务按钮事件
 * @param level
 * @returns
 */
function add_task_btn(level) {
	$("#task-level").val(level); // 修改任务级别
}

/**
 * 填充任务类别列表
 * @returns
 */
function init_task_list_box(boxID) {
	var dataArray = get_level_data();
	var initHtml = "";
	for(var i in dataArray) {
		var level = dataArray[i];
		initHtml += "<li id='task-list-level-"+level.id+"' class='task-list project_bk fl'>";
		initHtml += "<h3 class='task-header'>";
		initHtml += "<span class='fl'>"+level.name+"</span>";
		initHtml += "<span class='fr add-btn' title='添加任务' onclick='add_task_btn("+level.id+")' data-toggle='modal' data-target='#add-task-panel'>+</span>";
		initHtml += "</h3>";
		initHtml += "</li>";
	}
	$("#"+boxID).html(initHtml);
}
/**
 * 填充任务列表
 * @param projectID
 * @returns
 */
function init_task_list(projectID) {
	var task_list = get_task_data(projectID);
	if(task_list != {}) {
		for(var i in task_list) {
			init_task(task_list[i]);
		}
	}
}
/**
 * 添加任务信息
 * @param task
 * @returns
 */
function init_task(task) {
	var state = task.state.id;
	var newStateID = (state == 1) ? 3 : 1 ;
	var initHtml = "<div class='task' id='task-"+task.id+"'>";
	initHtml += "<span class='task-state task-state-"+state+" fl address' title='完成任务' onclick='update_task_state("+task.id+","+newStateID+")'></span>";
	initHtml += "<span class='task-name fl address' onclick='show_task_info("+task.id+")' data-toggle='modal' data-task='"+task.id+"' data-target='#show-task-panel'>"+task.name+"</span>";
	initHtml += "<span class='task-remove fr address' title='删除任务' onclick='task_delete("+task.id+")'>X</span>";
	initHtml += "</div>";
	$("#task-list-level-"+task.level.id).append(initHtml);
}
/**
 * 查看任务信息
 * @param taskID
 * @returns
 */
function show_task_info(taskID) {
	var data = get_task_data_By_Id(taskID);
	if(data != {}) {
		init_value("task",data,"#show-task-panel");
	}
}
/**
 * 获取任务信息
 * @param taskID
 * @returns
 */
function get_task_data_By_Id(taskID) {
	var result = {};
	$.ajax({
		url:"task/getTaskByID",
		type:"get",
		data:{"id":taskID},
		async:false,
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/**
 * 提交任务信息
 * @param submit_form_id
 * @returns
 */

function submit_task(submit_form_id) {
	var result = {};
	$.ajax({
		url:"task/save",
		type:"post",
		data:$("#"+submit_form_id).serialize(),
		async:false,
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/**
 * 获取任务信息
 * @returns
 */
function get_task_data(projectID) {
	var result = {};
	$.ajax({
		url:"task/getTaskData",
		type:"post",
		data:{"project.id":projectID},
		async:false,
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/**
 * 任务删除
 * @returns
 */
function task_delete(taskID) {
	var isGo = confirm("确定删除该任务？");
	var data = submit_delete_task(taskID);
	if(data == "1") {
		$("#task-"+taskID).remove();
	} else {
		alert("删除失败");
	}
}
/**
 * 提交任务删除
 * @param taskID
 * @returns
 */
function submit_delete_task(taskID) {
	var result;
	$.ajax({
		url:"task/delete",
		type:"post",
		data:{"id":taskID},
		async:false,
		success:function(data){
			result = data;//(data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/**
 * 获取全部任务级别信息
 * @returns
 */
function get_level_data() {
	var result = {};
	$.ajax({
		url:"level/getLevelData",
		type:"post",
		data:{},
		async:false,
		success:function(data){
			result = (data!="" && data!="[]") ? eval('('+data+')') : result;
		},
	});
	return result;
}
/******* 任务信息操作end ********/


/******* 共用功能start ********/
/**
 * 
 * 表单对象序列化为json对象
 */
(function($){  
	$.fn.serializeJson=function(){  
		var serializeObj={};  
		var array=this.serializeArray();  
		var str=this.serialize();  
		$(array).each(function(){  
			if(serializeObj[this.name]){  
				if($.isArray(serializeObj[this.name])){  
					serializeObj[this.name].push(this.value);  
				}else{  
					serializeObj[this.name]=[serializeObj[this.name],this.value];  
				}  
			}else{  
				serializeObj[this.name]=this.value;   
			}  
		});  
		return serializeObj;  
	};  
})(jQuery);
/******* 共用功能end ********/

/**************项目页面动画效果脚本*/


/**
 * 显示面板方法
 */
function show_panel(panelID) {
	$(".panel").removeClass("show");
	$(".panel").addClass("hidden");
	$(""+panelID).addClass("show");
	$(""+panelID).removeClass("hidden");
}
