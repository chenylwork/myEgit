/*
* @Author: admin
* @Date:   2018-07-09 08:50:40
* @Last Modified by:   admin
* @Last Modified time: 2018-07-09 09:42:25
* 用于修改页面样式的js脚本
*/
function project_animation(className){
    $("."+className).hover(
        function(){
            $(this).animate({"marginTop":"0px"},50);
        },
        function(){
            $(this).animate({"marginTop":"10px"},50);
        }
    );
}
function project_addBtn_animation(id){
    $("#"+id).hover(
        function(){
            $(this).find("span").css({"backgroundColor":"#3da8f5"});
            $(this).find("h3").css({"color":"#3da8f5"});
        },
        function() {
            $(this).find("span").css({"backgroundColor":"#a6a6a6"});
            $(this).find("h3").css({"color":"#a6a6a6"});
        }
    );
}
