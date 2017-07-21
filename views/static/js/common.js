define(["jquery","template","cookie"],function($,template){
  //渲染头像和姓名
  $(function () {
    //判定是否在登录页面
    if (location.pathname != "/dashboard/login") {
      //判定用户是否登入
      if (!$.cookie("PHPSESSID")) {
        location.href = "/dashboard/login";
        return false;
      }
      var userInfo = JSON.parse($.cookie("userInfo"));
      var html = template("tpl1", userInfo);
      $("#profile").html(html);
    }

    //NProgress.start();
    //NProgress.done();
    //点击下拉功能
    $('.navs ul').prev('a').on('click', function () {
      $(this).next().slideToggle();
    });
  });
})
