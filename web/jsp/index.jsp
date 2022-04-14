<%--
  Created by IntelliJ IDEA.
  User: Crazy-ma
  Date: 2022/4/10
  Time: 12:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <a href="${pageContext.request.contextPath}/user/toadd">添加</a>
    <form>
        <table width="500px" align="center" border="1" cellspacing="0">
            <tr>
                <th>ID</th>
                <th>账户</th>
                <th>余额</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            <c:forEach items="${pg.list}" var="u">
                <tr>
                    <th>${u.id}</th>
                    <th>${u.username}</th>
                    <th>${u.money}</th>
                    <th>${u.gender}</th>
                    <th><a href="${pageContext.request.contextPath}/user/toUpdate?id=${u.id}">修改</a>||
                        <a href="${pageContext.request.contextPath}/user/deleteUser?id=${u.id}">删除</a> </th>
                </tr>
            </c:forEach>
            <tr>
                <th colspan="5">
                    <c:if test="${pg.hasPreviousPage}">
                        <a href="${pageContext.request.contextPath}/user/getList/?pageNum=1">首页</a>
                        <a href="${pageContext.request.contextPath}/user/getList/?pageNum=${pg.prePage}">上一页</a>
                    </c:if>
                    <c:forEach items="${pg.navigatepageNums}" var="num">
                        <a href="${pageContext.request.contextPath}/user/getList/?pageNum=${num}">${num}</a>
                    </c:forEach>
                    <c:if test="${pg.hasNextPage}">
                        <a href="${pageContext.request.contextPath}/user/getList/?pageNum=${pg.nextPage}">下一页</a>
                        <a href="${pageContext.request.contextPath}/user/getList/?pageNum=${pg.pages}">尾页</a>
                    </c:if>
                    总页数:${pg.pages}页;
                </th>
            </tr>
        </table>
    </form>
  </body>
</html>
