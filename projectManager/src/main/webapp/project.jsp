<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>添加项目</title>
    <!-- bootstrap 文件-->
    <script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- bootstrap 文件-->
    <link rel="shortcut icon" href="favicon.ico">
    <script type="text/javascript" src="js/echarts.js"></script>

    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/bg.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/project.css">
    <script type="text/javascript" src="js/style.js"></script>
    <script type="text/javascript" src="js/project.js"></script>
    
    <!-- 时间插件-->
    <script src="js/laydate.js"></script> <!-- 改成你的路径 -->
    <script type="text/javascript">
    lay('#version').html('-v'+ laydate.v);
    laydate.render({ elem: '.timeBox',type: 'datetime'});
    </script>
</head>
<body>
 <div class="header bg-index-header">
    <div class="search-box fl">
        <span class="bg-search-logo fl" style="width: 35px; height: 35px;margin-left: 10px;"></span>
        <input type="text" name="" class="fl search-input" placeholder="搜索个人项目" >
    </div>
    <span class="fl add-btn">+</span>
    <ul class="home-box fr">
        <li><a href="">我的</a></li>
        <li><a href="">日历</a></li>
        <li style="border-right: none;"><a href="">${user.userName}</a></li>
    </ul>
</div>
<div class="nav project_bk">
    <div class="nav-header fl">
        <div>
            <a href="index.jsp" class="fl"><span>首页</span></a>
            <span class="fl arrow-right">></span>
            <a href="javascript:;" class="fl" title="项目名称"><span class="project-name"></span></a>
        </div>
    </div>
    <div class="nav-body fl">
        <ul class="nav nav-tabs">
            <li><a href="#task-panel" class="panel_trigger nav-tab" data-toggle="tab">任务</a></li>
            <!-- <li><a href="#dept" class="panel_trigger" data-toggle="tab">参与部门</a></li> -->
            <li><a href="#project-info-panel" class="panel_trigger nav-tab" data-toggle="tab">项目信息</a></li>
            <li><a href="#project-statistical-panel" class="panel_trigger nav-tab" data-toggle="tab">任务统计</a></li>
        </ul>
    </div>
    <div class="nav-footer fl">
        	<span class="fl">项目负责人：</span>
        	<span class="fl project-head-userName"></span>
    </div>
</div>
<div id="task-panel" class="panel task-panel" >
    <div class="tesk-list-panel">
        <ul class="task-list-box" id="task-list-box">
            
        </ul>
    </div>
</div>
<div id="project-info-panel" class="panel project-info-panel hidden" title="任务信息">
	<div class="project-info-box">
		<h3 class="project-info-header"><span class="project-name"></span></h3>
		<form class="project-info-body bs-example bs-example-form" id="project-update_form" role="form">
		     <div class="project-image">
             	<div class='project' data-toggle="modal" data-target="#image-cropper-panel">
					<img src='images/project-logo1.jpg'>
					<div class='progress progress-striped'>
						<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: 90%;'>
							<span class=''>90% 完成</span>
						</div>
					</div>
				</div>
			</div>
		     <div class="input-group">
		        <span class="input-group-addon">项目客户</span>
		        <input type="text" class="project-customer form-control" placeholder="twitterhandle">
		     </div>
		     <br>
		     <div class="input-group">
		        <span class="input-group-addon">项目类型</span>
		        <select name="category.id" id="project-info-category" class="project-category-id form-control">
		        	<option>项目类型</option>
		        </select>
		     </div>
		     <br>
		     <div class="input-group">
		        <span class="input-group-addon">项目开始时间</span>
		        <input type="text" name="opeTime" class="project-openTiem form-control">
		     </div>
		     <br>
		     <div class="input-group">
		        <span class="input-group-addon">项目计划结束时间</span>
		        <input type="text" name="planEndTime" class="project-planEndTime form-control" >
		     </div>
		     <br>
		     <div class="form-group">
		       <input type="button" value="保存" class="btn btn-primary form-control" >
		     </div>
		  </form>
		
	</div>
</div>
<div id="project-statistical-panel" class="panel project-panel hidden">
	<div class="col-xs-12 col-md-6" style="float: left;">
	<div class="" style="margin-left:50px;width:670px;height:50px;background:#6d87dd;color:#fff;text-align:center;">
	<h3 style="line-height:50px;">项目饼状图</h3></div> 
	<div id="zhu" style="margin-left:50px;width:670px;height:500px; border:1px solid #000;"></div>
</div>
<script type="text/javascript">
// 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('zhu'));
 var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
myChart.setOption(option);
</script>
<div class="right" style="float: left;">
	<div class="" style="margin-left:50px;width:650px;height:50px;background:#6d87dd;color:#fff;text-align:center;"><h3 style="line-height:50px;">项目柱状图</h3></div>
	<div id="zz" style="margin-left:50px;width:650px;height:500px; border:1px solid #000;float: left;"></div>
</div>
<script type="text/javascript">
var myChart = echarts.init(document.getElementById('zz'));
var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChart.setOption(option);
</script>
<div class="right" style="float: left;">
	<div class="" style="margin-left:120px;width:1200px;height:50px;background:#6d87dd;color:#fff;text-align:center;"><h3 style="line-height:50px;">项目折线图</h3></div>
	<div id="zx" style="margin-left:120px;width:1200px;height:500px; border:1px solid #000;float: left;"></div>
</div>
<script type="text/javascript">

var myChart = echarts.init(document.getElementById('zx'));
var option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChart.setOption(option);
</script>
	

</div>
<!-- 任务信息显示模块 -->
<!-- 激活按钮需要配置 data-toggle="modal" data-target="#project-add-panel" -->
<div class="modal fade" id="show-task-panel" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" 
               aria-hidden="true" id="project_add_panel_exits">×
            </button>
            <h4 class="modal-title task-name" id="myModalLabel"></h4>
         </div>
         <form id="project-add-form" role="form" style="width: 95%; margin: 0 auto; margin-top: 15px;">
            <div class="form-group">
                <input type="text" name="name" class="task-project-name form-control" placeholder="所属项目">
            </div>
            <div class="form-group">
                <input type="text" name="customer" class="task-openTime timeBox form-control demo-input" placeholder="创建时间" />
            </div>
            <div class="form-group">
                <input type="text" name="planEndTime" class="task-planEndTime timeBox form-control demo-input" placeholder="计划结束时间" />
            </div>
            <div class="form-group">
                <textarea name="" id="" cols="20" rows="5" class="task-describe form-control demo-input">任务描述信息</textarea>
            </div>
            <input type="text" id="project_add_error_message" class="bg-error-logo error error-message hidden" value="添加失败">
         </form>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="project_add_btn">保存</button>
         </div>
      </div>
   </div>
</div>
<!-- 任务信息显示模块 -->
<!-- 添加任务模块 -->
<!-- 激活按钮需要配置 data-toggle="modal" data-target="#project-add-panel" -->
<div class="modal fade" id="add-task-panel" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" 
               aria-hidden="true" id="project_add_panel_exits">×
            </button>
            <h4 class="modal-title" id="myModalLabel">添加新任务</h4>
         </div>
         <form id="task-add-form" role="form" style="width: 95%; margin: 0 auto; margin-top: 15px;">
            <input type="hidden" name="project.id" id="task-project" value="${param.id}"/>
            <input type="hidden" name="level.id" id="task-level" value=""/>
            <input type="hidden" name="state.id" id="task-state" value="1"/>
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="任务名称">
            </div>
            <div class="form-group">
                <input type="text" name="planEndTime" class="form-control timeBox demo-input" placeholder="计划结束时间" />
            </div>
            <div class="form-group">
                <textarea name="describe" id="" cols="20" rows="5" class="form-control demo-input">任务描述信息</textarea>
            </div>
            <input type="text" id="task_add_error_message" class="bg-error-logo error error-message hidden" value="添加失败">
         </form>
         <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="task_save_btn">保存</button>
         </div>
      </div>
   </div>
</div>
<!-- 添加任务模块 -->
<!-- 上传图片魔板 -->
<div class="modal fade" id="image-cropper-panel" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" 
               aria-hidden="true" id="project_add_panel_exits">×
            </button>
            <h4 class="modal-title" id="myModalLabel">项目图片选择</h4>
         </div>
         	<iframe src="pricher.html" width="580px" height="390px">
         		
         	</iframe>
          </div>
   </div>
</div>
<!-- 上传图片魔板 -->
</body>
<script type="text/javascript">
$(function(){
	task_list_load_fun("${param.id}");
});
</script>
</html>