<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <% String path = request.getContextPath();%>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="<%=path%>/static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/plugin/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/animate.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/global.min.css">
    <link rel="stylesheet" href="<%=path%>/static/assets/css/list.min.css">
</head>
<body>

<div id="main-wrap" class="animated fadeIn">
    <div class="main-title">
        <h1>列表的标题</h1>
        <div class="toolbar">
            <button class="layui-btn layui-btn-small do-action" data-type="doAdd" data-href="form.html">
                <a class="layui-icon" href="${pageContext.request.contextPath}/Goods/toadd" style="color: #e2e8f1">&#xe608;添加商品</a>
            </button>
        </div>
    </div>
    <hr>
    <div class="main-content">
        <!--<blockquote class="layui-elem-quote">这里可以写列表的说明，没有就删了。</blockquote>-->
        <!-- table的class里添加table-zebra样式可将表格改为斑马线样式 -->
        <table class="table-sort table-box dataTable"  border="1" cellspacing="0" text-align: center>
            <thead>
                <tr>
<%--                    <th><input type="checkbox" class="icheck"></th>--%>
                    <th>商品名称</th>
                    <th>商品编号</th>
                    <th>商品颜色</th>
                    <th>商品配置</th>
                    <th>商品价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody align="center">
                <c:forEach items="${glist.list}" var="g">
                    <tr>
                            <%--                    <td><input type="checkbox" name="uuid" class="icheck"></td>--%>
                        <td>${g.name}</td>
                        <td>${g.id}</td>
                        <td>${g.color}</td>
                        <td>${g.stylesize}</td>
                        <td>${g.price}</td>
                        <td>
                            <ul class="layui-nav" lay-filter="">
                                <li class="layui-nav-item">
                                    <a  class="layui-nav,layui-nav-item" href="${pageContext.request.contextPath}/Goods/toupdeta?id=${g.id}">修改</a>————
                                    <a class="layui-nav,layui-nav-item" href="${pageContext.request.contextPath}/Goods/delete?id=${g.id}">删除</a>
                                    <dl class="layui-nav-child">
                                    </dl>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </c:forEach>
                <tr>
                    <th colspan="6">
                        <c:if test="${glist.hasPreviousPage}">
                            <a href="${pageContext.request.contextPath}/Goods/getGoodsList/?pageNum=1">首页</a>
                            <a href="${pageContext.request.contextPath}/Goods/getGoodsList/?pageNum=${glist.prePage}">上一页</a>
                        </c:if>
                        <c:forEach items="${glist.navigatepageNums}" var="num">
                            <a href="${pageContext.request.contextPath}/Goods/getGoodsList/?pageNum=${num}">${num}</a>
                        </c:forEach>
                        <c:if test="${glist.hasNextPage}">
                            <a href="${pageContext.request.contextPath}/Goods/getGoodsList/?pageNum=${glist.nextPage}">下一页</a>
                            <a href="${pageContext.request.contextPath}/Goods/getGoodsList/?pageNum=${glist.pages}">尾页</a>
                        </c:if>
                        总页数:${glist.pages}页;
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script src="assets/plugin/layui/layui.js"></script>
<script src="assets/js/global.min.js"></script>
<script src="assets/js/list.min.js"></script>
</body>
</html>