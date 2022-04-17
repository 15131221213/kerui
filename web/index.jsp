<%--
  Created by IntelliJ IDEA.
  User: Crazy-ma
  Date: 2022/4/17
  Time: 14:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>小爱同学</title>
    <link rel="stylesheet" href="./css/1.css">
</head>
<body>
<!--头部开始-->
<div class="header">
    <div class="content">
        <div class="left">
            <ul>
                <li><a href="#">小米商城</a></li>
            </ul>
        </div>
        <div class="right">
            <div class="login">
                <ul>
                    <li><a href="login.jsp">登录</a></li>
                    <li>|</li>
                    <li><a href="requst.jsp">注册</a></li>
                </ul>
            </div>
            <div class="cart">
                <span><a href="shoppingcar.jsp" style="color: #b2b2b2;">购物车</a></span>
            </div>
        </div>
    </div>
</div>
<!--中间导航条开始-->
<div class="nav">
    <div class="logo">
        <h2>科瑞数码商城</h2>
    </div>
    <div class="nav_list">
        <ul>
            <li ><a href="#" >小米手机</a>
                <ul class="nav2">
                    <li><a href="#">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png">
                        <p class="p1">MIX FOLD小米折叠屏手机</p>
                        <p>9999元</p>
                    </a> </li>
                    <li><a href="#">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85e44ea2405ff8414148bbde7446b137.png">
                        <p class="p1">MIX FOLD小米折叠屏手机</p>
                        <p>9999元</p>
                    </a> </li>
                </ul>
            </li>
            <li><a href="#">Redmi 红米</a> </li>
            <li><a href="#">电视</a> </li>
            <li><a href="#">笔记本</a> </li>
            <li><a href="#">家电</a> </li>
            <li><a href="#">路由器</a> </li>
            <li><a href="#">智能硬件</a> </li>
            <li><a href="#">服务</a> </li>
            <li><a href="#">社区</a> </li>
        </ul>
    </div>
    <div class="search">
        <input type="text" placeholder="iqoo游戏手机"/>
        <i class="fa fa-search" aria-hidden="true"></i>
    </div>
</div>
<!--轮播图开始-->
<div class="banners">
    <div class="banner_list">
        <div class="layui-carousel" id="test1">
            <div carousel-item>
                <div>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg" >
                </div>
                <div><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793eebbee1dd569fe56a8aaf58f62452.jpg"></div>
                <div><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5e896d87c53a449509c14701673098bb.jpg"></div>
            </div>
        </div>
    </div>
    <div class="classify">
        <ul>
            <li>
                <a href="#">手机 电话卡 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                <div class="banner1">
                    <ul>
                        <li><a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png">小米MIX
                        </a> </li>
                        <li><a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png">小米MIX
                        </a> </li>
                        <li><a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png">小米MIX
                        </a> </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">电视 盒子 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"> 笔记本 显示器 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">家电 插线板 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">出行 穿戴 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">智能 路由器 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">电源 配件 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">健康 儿童 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">耳机 音响 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#">生活 箱包 <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </li>
        </ul>
    </div>
</div>
<!--ad开始-->
<div class="ad">
    <div class="ad_left">
        <p>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>话费充值</a>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>选购手机</a>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>话费充值</a>
        </p>
        <p>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>企业团购</a>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>F码通道</a>
            <a href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i><br>以旧换新</a>
        </p>
    </div>
    <div class="ad_right">
        <img src="images3/cheng.jpg">
        <img src="images3/hong.jpg">
        <img src="images3/lan.jpg">
    </div>
</div>
<!--Note9开始-->
<div class="note9">
    <div class="content">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg">

        <div class="middle">
            <h1>手机</h1>
            <h2>查看更多<i class="fa fa-angle-right" aria-hidden="true"></i></h2>
        </div>
        <div class="list">
            <div class="left">
                <a href="#">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg">
                </a>
            </div>
            <div class="right">
                <P> <ul>
                    <li><a href="#">
                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
                        <div class="memo">
                <p class="p1">Note 10 pro</p>
                <p class="p2">年度旗舰芯</p>
                <p class="p3">9999元起</p>
            </div>
            </a></li>
            <li><a href="#">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
                <div class="memo">
                    <p class="p1">Note 10 pro</p>
                    <p class="p2">年度旗舰芯</p>
                    <p class="p3">9999元起</p>
                </div>
            </a></li>
            <li><a href="#">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
                <div class="memo">
                    <p class="p1">Note 10 pro</p>
                    <p class="p2">年度旗舰芯</p>
                    <p class="p3">9999元起</p>
                </div>
            </a></li>
            <li><a href="#">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
                <div class="memo">
                    <p class="p1">Note 10 pro</p>
                    <p class="p2">年度旗舰芯</p>
                    <p class="p3">9999元起</p>
                </div>
            </a></li>
            </ul></P>
            <P class="pl2"> <ul>
                <li><a href="#">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
                    <div class="memo">
            <p class="p1">Note 10 pro</p>
            <p class="p2">年度旗舰芯</p>
            <p class="p3">9999元起</p>
        </div>
        </a></li>
        <li><a href="#">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
            <div class="memo">
                <p class="p1">Note 10 pro</p>
                <p class="p2">年度旗舰芯</p>
                <p class="p3">9999元起</p>
            </div>
        </a></li>
        <li><a href="#">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
            <div class="memo">
                <p class="p1">Note 10 pro</p>
                <p class="p2">年度旗舰芯</p>
                <p class="p3">9999元起</p>
            </div>
        </a></li>
        <li><a href="#">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg">
            <div class="memo">
                <p class="p1">Note 10 pro</p>
                <p class="p2">年度旗舰芯</p>
                <p class="p3">9999元起</p>
            </div>
        </a></li>
        </ul></P>
    </div>
</div>
</div>
</div>
<!--底部开始-->
<div class="foot">
    <h2>小爱同学出品</h2>
</div>
<script src="layui/layui.js"></script>
<script>
    layui.use('carousel', function(){
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#test1'
            ,width: '100%' //设置容器宽度
            ,height:'460px'
            ,arrow: 'always' //始终显示箭头
            //,anim: 'updown' //切换动画方式
            ,autoplay:true
        });
    });
</script>
</body>
</html>