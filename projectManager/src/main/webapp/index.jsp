<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <title>projectMG项目进度管理系统</title>
    <link rel="shortcut icon" href="favicon.ico">
    <!-- bootstrap 文件-->
    <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- bootstrap 文件-->
    <!-- 时间插件 -->
    <script src="js/laydate.js"></script>
	<!-- 时间插件-->
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/bg.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/project.css">
    
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/style.js"></script>
    <script type="text/javascript" src="js/project.js"></script>
</head>
<body style="background-color: #f5f5f5;">
<div class="header bg-index-header">
    <div class="search-box fl">
        <span class="bg-search-logo fl" style="width: 35px; height: 35px;margin-left: 10px;"></span>
        <input type="text" name="" class="fl search-input" placeholder="搜索个人项目" >
    </div>
    <span class="fl add-btn">+</span>
    <ul class="home-box fr">
        <li><a href="">我的</a></li>
        <li><a href="">日历</a></li>
        <li style="border-right: none;"><a href="">${session.user.userName}</a></li>
    </ul>
</div>
<div class="main">
    <div class="project-section" id="project-have">
        <div class="project-list-header"><span>项目列表</span></div>
        <ul class="project-list" id="project-have-list">
            <li class="project-box fl" data-toggle="modal" data-target="#project-add-panel">
                <div class="project new-project-btn" data-type="btn" id="new-project-btn">
                    <span>+</span>
                    <h3>创建新项目</h3>
                </div>
            </li>
        </ul>
    </div>
    <!--  
    <div class="project-section" id="project-involved">
        <div class="project-list-header"><span>我参与的项目</span></div>
        <ul class="project-list">
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo1.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo2.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo3.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl" style="margin-right: 0px;">
                <div class="project">
                    <img src="images/project-logo4.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl" style="margin-right: 0px;">
                <div class="project">
                    <img src="images/project-logo4.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
        </ul>
    </div>
    <div class="project-section" id="project-delete">
        <div class="project-list-header"><span>删除的项目</span></div>
        <ul class="project-list">
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo1.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo2.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl">
                <div class="project">
                    <img src="images/project-logo3.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl" style="margin-right: 0px;">
                <div class="project">
                    <img src="images/project-logo4.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
            <li class="project-box fl" style="margin-right: 0px;">
                <div class="project">
                    <img src="images/project-logo4.jpg">
                    <h3 class="project-header">项目名称</h3>
                </div>
            </li>
        </ul>
    </div>
-->
</div>
<!-- 添加项目模块 -->
<!-- 激活按钮需要配置 data-toggle="modal" data-target="#project-add-panel" -->
<div class="modal fade" id="project-add-panel" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" 
               aria-hidden="true" id="project_add_panel_exits">×
            </button>
            <h4 class="modal-title" id="myModalLabel">项目添加 </h4>
         </div>
         <form id="project-add-form" role="form" style="width: 95%; margin: 0 auto; margin-top: 15px;">
         	<input type="hidden" name="head.userID" value="${session.user.userID}" id="user_login_id"/>
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="项目名称">
            </div>
            <div class="form-group">
                <input type="text" name="customer" class="form-control" placeholder="客户名称" />
            </div>
            <div class="form-group">
                <input type="text" name="planEndTime" id="planEndTime" class="form-control demo-input" placeholder="交工日期" />
            </div>
            <div class="form-group">
                <select name="category.id" class="form-control" id="category-select">
                    <option value="">项目类型</option>
                </select>
            </div>
			<input type="text" id="project_add_error_message" class="bg-error-logo error error-message hidden" value="添加失败">
         </form>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="project_add_btn">添加</button>
         </div>
      </div>
   </div>
</div>
<!-- 添加项目模块 -->
<!-- 修改项目模块 -->
</body>
<script type="text/javascript">
	// 时间控件调用
	lay('#version').html('-v'+ laydate.v);
	laydate.render({
	  elem: '#planEndTime'
	  ,type: 'datetime'
	});
    $(function(){
    	check_login();
    	init_project_have_list("${id}"); // 填充我的项目
        project_animation("project"); // 添加项目动画
        project_addBtn_animation("new-project-btn");// 项目添加阿牛动画
        category_init_select("category-select","category-option"); // 填充项目类型信息
        $("#project_add_btn").click(function(){project_add("project-add-form");}); // 项目添加按钮方法
        
    });
</script>
</html>