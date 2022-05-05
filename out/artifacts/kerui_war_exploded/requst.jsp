<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>注册界面</title>
    <style>
                 * {
                         margin: 0;
                         padding: 0;
                     }

                 html {
                                    height: 100%;
                                    width: 100%;
                                    overflow: hidden;
                                    margin: 0;
                                    padding: 0;
                                    background: url(static/images/1.jpg) no-repeat 0px 0px;
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    -moz-background-size: 100% 100%;
                                }

                 body {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    height: 100%;
                                }

                 #loginDiv {
                                    width: 37%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 650px;
                                    background-color: rgba(75, 81, 95, 0.3);
                                    box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
                                    border-radius: 5px;
                                }

                 #name_trip {
                                    margin-left: 50px;
                                    color: red;
                                }

                 p,
                 .sexDiv {
                                    margin-top: 10px;
                                    margin-left: 20px;
                                    color: azure;
                                }

                 .sexDiv>input,
                 .hobby>input {
                                    width: 30px;
                                    height: 17px;
                                }

                 input,
                 select {
                                    margin-left: 15px;
                                    border-radius: 5px;
                                    border-style: hidden;
                                    height: 30px;
                                    width: 140px;
                                    background-color: rgba(216, 191, 216, 0.5);
                                    outline: none;
                                    color: #f0edf3;
                                    padding-left: 10px;
                                }

                 .button {
                                    border-color: cornsilk;
                                    background-color: rgba(100, 149, 237, .7);
                                    color: aliceblue;
                                    border-style: hidden;
                                    border-radius: 5px;
                                    width: 100px;
                                    height: 31px;
                                    font-size: 16px;
                                }

                 .introduce {
                                    margin-left: 110px;
                                }

                 .introduce>textarea {
                                    background-color: rgba(216, 191, 216, 0.5);
                                    border-style: hidden;
                                    outline: none;
                                    border-radius: 5px;
                                }

                 h1 {
                                    text-align: center;
                                    margin-bottom: 20px;
                                    margin-top: 20px;
                                    color: #f0edf3;
                                }

                 b {
                                     margin-left: 50px;
                                     color: #FFEB3B;
                                     font-size: 10px;
                                     font-weight: initial;
                                 }
             </style>
</head>
<body>
<form action="#" method="post">
    <form action="">
                     <h1>科瑞账号注册</h1>
                     <p>用户姓名:<input id="userNname" type="text" autofocus required><label id="name_trip"></label></p>
                     <p>用户密码:<input id="password" type="password" required><label id="password_trip"></label></p>
                     <p>确认密码:<input id="surePassword" type="password" required><label id="surePassword_trip"></label></p>
                     <p>
                         验证码:
                         <input id="email" type="email" required>
                         <label id="emil_trip"></label>
                     </p>
        <p style="text-align: center;">
            <input type="submit" class="button"  value="提交">
            <input type="reset" class="button" value="重置">
        </p>
</form>

</body>
</html>