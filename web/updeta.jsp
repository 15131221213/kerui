<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <% String path = request.getContextPath();%>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>开始使用Layui</title>
    <link rel="stylesheet" href="<%=path%>/static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/animate.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/global.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/form.min.css">
</head>
<body>

<div id="main-wrap" class="animated fadeIn">
    <div class="main-title">
        <h1>表单的标题</h1>
        <div class="toolbar">
            <!--此处可以添加标题右侧的工具按钮-->
        </div>
    </div>
    <hr>
    <div class="main-content">
        <!--<blockquote class="layui-elem-quote">这里可以写表单的填写说明，没有就删了。</blockquote>-->
        <form class="layui-form" action="${pageContext.request.contextPath}/Goods/update" enctype="multipart/form-data" method="post">
            <input type="hidden" name="id" value="${goods.id}">
            <div class="layui-form-item">
                <label class="layui-form-label">商品名字</label>
                <div class="layui-input-inline">
                    <input type="text" name="name" required  lay-verify="required" value="${goods.name}" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">颜色</label>
                <div class="layui-input-inline">
                    <input type="password" name="color" required lay-verify="required" value="${goods.color}" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">价格</label>
                <div class="layui-input-inline">
                    <input type="text" name="price" required  lay-verify="required" value="${goods.price}" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">手机配置</label>
                <div class="layui-input-inline">
                    <input type="text" name="stylesize" required  lay-verify="required" value="${goods.stylesize}" autocomplete="off" class="layui-input">
                </div>
            </div>
<%--            <div class="layui-form-item">--%>
<%--                <label class="layui-form-label">图片</label><img style="width: 100px;height: 100px" src="/kerui/uploads/2022-04-24/${goods.pic}">--%>
<%--                <div class="layui-input-inline">--%>
<%--                    <input type="file" name="picname" required  >--%>
<%--                </div>--%>
<%--            </div>--%>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                    <a href="${pageContext.request.contextPath}/Goods/getGoodsList" class="layui-btn layui-btn-primary do-action">返回列表</a>
                </div>
            </div>
        </form>
    </div>
</div>

<script src="static/assets/plugin/layui/layui.js"></script>
<script src="static/assets/js/global.min.js"></script>
<script src="static/assets/js/form.min.js"></script>
</body>
</html>