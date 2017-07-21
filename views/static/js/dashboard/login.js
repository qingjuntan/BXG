/**
 * Created by 郯俊卿 on 2017/7/21.
 */
define(["jquery","cookie","form"],function($){
  $(function () {
    //获取表单提交事件
    $("form").submit(function () {
      $(this).ajaxSubmit({
        url: "/api/login",
        type: "post",
        //data:$(this).serialize(),
        success: function (data) {
          if (data.code == 200) {
            $.cookie("userInfo",JSON.stringify(data.result),{path:"/"});
            location.href = "/";
          }
        }
      })
      return false;
    })
  })
})