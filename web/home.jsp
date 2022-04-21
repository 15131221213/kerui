<%--
  Created by IntelliJ IDEA.
  User: Crazy-ma
  Date: 2022/4/17
  Time: 14:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>科瑞数码商城</title>
    <style>*{
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-size: 12px;
    }
    /*头部样式开始*/
    .header{
        width: 100%;
        height: 40px;
        background-color: #333;
    }
    .header .content{
        margin: 0 auto;
        height: 40px;
        width: 1226px;
    }
    .header ul li{
        display: inline-block;
        margin-right: 3px;
    }
    .header ul li a {
        color: #b2b2b2;
        line-height: 40px;
    }
    .header ul li a:hover{
        color: white;
    }
    .header .left{
        float: left;
    }
    .header .right{
        float: right;
    }
    .header .right .login{
        float: left;
    }
    .header .cart{
        float: right;
        width:120px;
        background-color: #424242;
        color: #b0b0b0;
        position: relative;
    }
    .header .cart:hover{
        background-color: #fff;
        color: orange;
    }
    .header .cart:hover a{
        color: orange;
    }
    .cart a{
        color: #b2b2b2;
        line-height: 40px;
    }

    .cart_list{
        background-color: #fff;
        height: 100px;
        width: 300px;
        top:40px;
        position: absolute;
        right: 0;
        display: none;
        box-shadow: #b0b0b0 0 0 5px;
    }
    .cart:hover .cart_list{
        display: block;
        z-index: 12;
    }
    .down{
        position: relative;
    }
    .down_list{
        display: none;
        position: absolute;
        box-shadow: #b0b0b0 0 0 5px;
        left: -25px;

    }
    .down:hover .down_list{
        display: block;
    }
    /*中间导航栏样式*/
    .nav{
        width: 1226px;
        height: 100px;
        line-height: 100px;
        margin:  0 auto;
    }
    .logo{
        float: left;
        width: 400px;
        margin-top: 4px;
    }
    .nav_list{
        float: left;
        height: 100px;
    }
    .search{
        float: right;
        height: 100px;
    }
    .nav_list ul li{
        display: inline-block;
    }
    .nav_list ul li a{
        font-size: 16px;
        color: black;
    }
    .nav_list ul li a:hover{
        color: red;
    }
    .search input{
        border: 1px solid #e0e0e0;
        width: 245px;
        height: 50px;
        outline: none;
    }
    .search input:focus{
        border: 1px solid orange;
    }
    .search input:focus+i{
        border: 1px solid orange;
    }
    .search i{
        border: 1px solid #e0e0e0;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        position: relative;
        top: 2px;
        margin-left: -4px;
    }
    /*导航栏*/
    .nav2{
        font-size: 0;
        display: none;
        background-color: #fff;
        box-shadow: #b0b0b0 0 0 5px;
        width: 1226px;
        height: 200px;
        position: absolute;
        left: -234px;
    }
    .nav2 li{
        width: 204px;
        float: left;
        display: block;
        list-style-type: none;
        text-align: center;

    }
    .nav2 li img{
        width: 160px;
        height: 110px;
        display: block;
        margin-top: 30px;
        margin-bottom: 0;
    }
    .nav_list ul li:hover .nav2{
        display: block;
        z-index: 15;
    }
    .nav2 .p1{
        margin-top: -17px;
        height: 20px;
    }
    /*轮播图*/
    .banners{
        width: 1226px;
        height: 460px;
        position: relative;
        margin: 0 auto;

    }
    .banner1{
        width: 993px;
        height: 460px;
        border: 1px solid red;
        display: none;
        position: absolute;
        margin-left: 203px;
        margin-top: -59px;
        z-index: 11;
        background-color: #fff;
    }

    .banner1 ul li{
        width: 120px;
        position: relative;
        display: inline-block;
        margin-top:20px;
        margin-left: 30px;
        margin-bottom: 20px;
    }
    .classify .banner1  ul li a{
        color: black;
        font-size: 16px;
    }
    .banners .classify ul li:hover .banner1{
        display: block;
    }
    .banner_list{
        position: absolute;
        margin-left: 200px;
        width: 1029px;
    }
    .banner_list img{
        width: 1226px;
        height: 460px;
        display: block;
        position: absolute;
        top: 0;
        left: -90px;
    }
    .classify{
        position: absolute;
        top: 0;
        left: 0;
        background-color:slategray;
        width: 234px;
        height: 460px;
    }
    .classify ul{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .classify ul li{
        height: 43px;
        line-height: 43px;
        list-style-type: none;
        padding-left: 30px;
        padding-right: 30px;
    }
    .classify ul li:hover{
        background-color: orange;
    }
    .classify ul li .banner1 ul li:hover{
        background-color: white;
    }
    .classify ul li a img{
        width: 50px;
        height: 50px;
    }
    .classify ul li a{
        font-size: 14px;
        color: #fff;
    }
    .classify ul li a i{
        float: right;
        height: 43px;
        line-height: 43px;
    }
    /*ad样式开始*/
    .ad{
        margin: 0 auto;
        width: 1226px;
        height: 170px;
        font-size: 0;
    }
    .ad a{
        color: #b2b2b2;
        line-height: 20px;
    }
    .ad img{
        width: 321px;
        height: 170px;
        margin-left: 8px;
    }
    .ad_left{
        float: left;
        width: 234px;
        height: 170px;
        border: 1px solid red;
        margin-top: 10px;
        background-color: rgb(96,87,80);
    }
    .ad_right{
        float: right;
        margin-top: -171px;
    }
    .ad_left p{
        display:table;
        width: 100%;
        height: 85px;
    }
    .ad_left p a{
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        position: relative;
    }
    .ad_left p a i{
        font-size: 25px;
    }
    .ad_left p a:before{
        content: " ";
        background-color: #fff;
        height: 1px;
        width: 75px;
        position: absolute;
        top: 5px;
        left: 0;

    }
    .ad_left p a:after{
        content: " ";
        background-color: #fff;
        position: absolute;
        height: 75px;
        width: 1px;
        top: 1px;
        left: 5px;
    }
    /*note9开始*/
    .note9{
        width: 100%;
        height: 900px;
        background-color: rgb(228,228,228);
        margin-top: 30px;
    }
    .note9 .content{
        margin: 0 auto;
        width: 1226px;
        height: 170px;
        font-size: 0;
    }
    .note9 .content img{
        width: 1226px;
        margin-top: 30px;
    }
    .note9 .content .middle{
        position: absolute;
        margin-top: 30px;
        width: 1226px;
    }
    .note9 .content h1{
        font-size: 40px;
        float: left;
    }
    .note9 .content h2{
        display: inline-block;
        position: absolute;
        float: right;
        font-size: 40px;

        right: 0;
    }
    .list{
        position: absolute;
        margin-top: 70px;
    }
    .note9 .list .left a:hover{
        box-shadow: #b0b0b0 0 0 5px;
    }
    .list .left img{
        height: 614px;
        width: 234px;
    }
    .list .right{
        width: 990px;
        height: 614px;
        float: right;
        position: absolute;
        margin-top: -614px;
        margin-left: 234px;
    }
    .list .right img{
        width: 180px;
        height: 160px;
        position: absolute;
        margin-left: 25px;
    }

    .list ul li{
        display: inline-block;
        background-color:white;;
        width: 229px;
        height: 300px;
        margin-left: 14px;
    }
    .list .right .memo{
        position: absolute;
        margin-top: 200px;
        margin-left: 80px;
    }
    .p1{
        font-size: 14px;
        color: black;
    }
    .p2{
        font-size: 13px;
        color: #b2b2b2;
    }
    .p3{
        font-size: 14px;
        color: red;
    }
    .pl2{
        margin-top: 10px;
    }
    .note9 .right ul li:hover {
        box-shadow: #b0b0b0 0 0 5px;
    }
    .foot{
        width: 100%;
        height: 60px;
        background-color: white;
    }
    .foot h2{
        font-size: 20px;
        position: absolute;
        margin-left: 730px;
        line-height: 60px;
    }
    </style>
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
            <c:forEach items="${clist}" var="c1">
            <li ><a href="#" >${c1.name}</a>
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
            </c:forEach>
        </ul>
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
                <c:forEach items="${clist}" var="c1">
                    <li>
                        <a href="#">${c1.name}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        <div class="banner1">
<%--                            <ul>--%>
                            <c:forEach items="${c1.chinder}" var="c2">
                                <div>${c2.name}
                                    <ul>
                                        <c:forEach items="${c2.chinder}" var="c3">
                                            <li><a href="#"><img src="pic/b001.png">
<%--                                               ${c3.name}
                                            </a></li>
                                            <img src="pic/${c3.pic}">--%>
                                        </c:forEach>
                                    </ul>
                                </div>
                            </c:forEach>
<%--                        </ul>--%>
                    </div>
                    </li>
                </c:forEach>
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
            <h2><a href="list.jsp">更多>>></a></h2>
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