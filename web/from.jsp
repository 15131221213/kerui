<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <% String path = request.getContextPath();%>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>开始使用Layui</title>
    <link rel="stylesheet" href="static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="static/assets/css/animate.min.css">
    <link rel="stylesheet" href="static/assets/css/global.min.css">
    <link rel="stylesheet" href="static/assets/css/form.min.css">
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
        <form class="layui-form" action="">
            <div class="layui-form-item">
                <label class="layui-form-label">商品名字</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="名字" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">颜色</label>
                <div class="layui-input-inline">
                    <input type="password" name="title" required lay-verify="required" placeholder="颜色" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">价格</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="价格" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">手机配置</label>
                <div class="layui-input-inline">
                    <input type="text" name="title" required  lay-verify="required" placeholder="手机配置" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">文本域</label>
                <div class="layui-input-block">
                    <textarea name="desc" placeholder="请输入内容" class="layui-textarea"></textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                    <a href="list.jsp" class="layui-btn layui-btn-primary do-action">返回列表</a>
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