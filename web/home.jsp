<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="static/assets/css/animate.min.css">
    <link rel="stylesheet" href="static/assets/css/global.min.css">
    <link rel="stylesheet" href="static/assets/css/home.min.css">
</head>
<body>

<div id="main-wrap" class="animated fadeIn">
    <blockquote class="layui-elem-quote">
        欢迎使用 M+后台管理系统模板，本模板基于layui，因此在使用前建议先查看layui文档，这对你很有帮助的。
        <p>layui文档地址：<a href="http://www.layui.com/doc/" target="_blank">http://www.layui.com/doc/</a></p>
    </blockquote>
    <blockquote class="layui-elem-quote">
        你可以在下面的Git仓库下载到本模板的完整代码：
        <p>
        【Github】<a href="https://github.com/zachlhb/mplus" target="_blank">https://github.com/zachlhb/mplus</a>
        </p>
        <p>
        【开源中国】<a href="http://git.oschina.net/lianghongbo/mplus" target="_blank">http://git.oschina.net/lianghongbo/mplus</a>
        </p>
    </blockquote>
    <blockquote class="layui-elem-quote layui-quote-nm">
        注：此页面仅为演示而设，并非系统主页，后面会专门设计主页样式。
    </blockquote>

    <fieldset class="layui-elem-field">
        <legend>更新日志</legend>
        <div class="layui-field-box">
            <fieldset class="layui-elem-field layui-field-title">
                <legend>2016-12-14</legend>
                <div class="layui-field-box">
                    <ul>
                        <li>1、更新layui版本到1.0.7；</li>
                        <li>2、更改列表页样式；</li>
                        <li>3、添加chosen下拉框组件，支持下拉搜索、多选，具体效果见表单页面。</li>
                    </ul>
                </div>
            </fieldset>
            <fieldset class="layui-elem-field layui-field-title">
                <legend>2016-11-23</legend>
                <div class="layui-field-box">
                    <ul>
                        <li>1、添加cropper图像裁剪模块；</li>
                        <li>2、添加个人设置页面；</li>
                        <li>3、修复了tab关闭的一个隐藏bug。</li>
                    </ul>
                </div>
            </fieldset>
            <fieldset class="layui-elem-field layui-field-title">
                <legend>2016-11-22</legend>
                <div class="layui-field-box">
                    <ul>
                        <li>1、更改页面title字体颜色；</li>
                        <li>2、更改layui自带组件为模板主色，如select下拉选中颜色、checkbox和radio的选中颜色等；</li>
                        <li>3、优化列表样式；</li>
                        <li>4、设在模板字体优先选择微软雅黑字体。</li>
                    </ul>
                </div>
            </fieldset>
            <fieldset class="layui-elem-field layui-field-title">
                <legend>2016-11-21</legend>
                <div class="layui-field-box">
                    <ul>
                        <li>1、优化tab栏样式；</li>
                        <li>2、优化子页面显示样式；</li>
                        <li>3、添加ECharts图表组件模块；</li>
                        <li>4、添加了动画效果，什么没有看到，去左侧打开页面就可以看到。</li>
                    </ul>
                </div>
            </fieldset>
            <fieldset class="layui-elem-field layui-field-title">
                <legend>2016-11-20</legend>
                <div class="layui-field-box">
                    <ul>
                        <li>1、修复了tab页关闭的bug；</li>
                        <li>2、列表添加了新增、批量删除按钮，批量删除按钮需要列表选择2条以上信息才会显示；</li>
                        <li>3、新增了通用模块common，用于封装一些常用操作；</li>
                        <li>4、新增模块sweetalert，具体效果可以查看列表的删除操作，其他方法也已经封装在common模块中了，以alert开头的就是;</li>
                        <li>5、稍微调了下自适应。</li>
                    </ul>
                </div>
            </fieldset>
        </div>
    </fieldset>
</div>

<script src="assets/plugin/layui/layui.js"></script>
<script src="assets/js/global.min.js"></script>

</body>
</html>