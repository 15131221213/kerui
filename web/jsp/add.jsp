<%--
  Created by IntelliJ IDEA.
  User: Crazy-ma
  Date: 2022/4/12
  Time: 9:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="${pageContext.request.contextPath}/user/add" method="post" >
            账户<input type="text" name="username"/><br>
            密码<input type="password" name="password"/><br>
            余额<input type="number" name="money"/><br>
            性别<input type="text" name="gender"/><br>
            <input type="submit"/>
    </form>
</body>
</html>
