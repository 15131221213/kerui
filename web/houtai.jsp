<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
    <% String path = request.getContextPath();%>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>M+ 后台管理系统模板</title>
    <link rel="stylesheet" href="<%=path%>/static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/plugin/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/global.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/index.min.css">
</head>
<body>

<div id="page-wrap">
    <div class="nav">
        <ul class="layui-nav layui-nav-tree layui-nav-side">
            <div class="user-info">
                <img src="assets/image/avater.png">
                <div>
                    <p>
                        admin
                        <a class="tab-open" href=";" data-href="profile.html" data-name="个人设置">
                            <i class="layui-icon" href><a href="index.jsp">&#xe642;</a> </i>
                            <span class="layui-hide">个人设置</span>
                        </a>
                    </p>
                    <p>超级管理员</p>
                </div>
                <div class="sign-out" data-type="signOut">
                    <a href="javascript:;"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
            <li class="layui-nav-item">
                <a id="go-dashboard" href="javascript:;"><i class="fa fa-tachometer" aria-hidden="true"></i>&nbsp;&nbsp;控制台</a>
            </li>
            <li class="layui-nav-item layui-nav-itemed">
                <a href="javascript:;"><i class="fa fa-file" aria-hidden="true"></i>&nbsp;&nbsp;页面</a>
                <dl class="layui-nav-child">
                    <dd><a class="tab-open" >登陆页</a></dd>
                    <dd><a class="tab-open" >表单</a></dd>
                    <dd><a class="tab-open" href="list.jsp" >列表</a></dd>
                    <dd><a class="tab-open" >个人设置</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item layui-nav-itemed">
                <a href="javascript:;"><i class="fa fa-plug" aria-hidden="true"></i>&nbsp;&nbsp;第三方组件</a>
                <dl class="layui-nav-child">
                    <dd><a class="tab-open" href="javascript:;" data-href="static/page/sweetalert.html" data-name="SweetAlert">SweetAlert</a></dd>
                    <dd><a class="tab-open" href="javascript:;" data-href="static/page/echarts.html" data-name="ECharts">ECharts</a></dd>
                    <dd><a class="tab-open" href="javascript:;" data-href="static/page/cropper.html" data-name="cropper">cropper</a></dd>
                    <dd><a class="tab-open" href="javascript:;" data-href="static/page/chosen.html" data-name="chosen">chosen</a></dd>
                </dl>
            </li>
        </ul>
    </div>

    <div id="page-content">
        <div class="top-bar">
            <div class="logo">
                M+ 后台管理系统模板
            </div>
            <div class="top-nav">
                <span class="layui-breadcrumb" lay-separator=" ">
                  <a href="javascript:;">
                      <i class="fa fa-eraser" aria-hidden="true"></i> 清除缓存
                  </a>
                  <a href="javascript:;" target="_blank">
                      <i class="fa fa-eye" aria-hidden="true"></i> 预览网站
                  </a>
                </span>
            </div>
        </div>
        <div class="page-main">
            <div class="layui-tab layui-tab-card page-tab" lay-filter="page-tab">
                <ul class="layui-tab-title">
                    <li class="layui-this">控制台</li>
                </ul>
                <div class="layui-tab-content">
                    <div class="layui-tab-item layui-show">
                        <iframe class="tab-main" src="<%=path%>/home.jsp"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 你的HTML代码 -->

<script src="assets/plugin/layui/layui.js"></script>
<script src="assets/js/global.min.js"></script>
<script src="assets/js/index.min.js"></script>
</body>
</html>