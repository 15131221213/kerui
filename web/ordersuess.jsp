
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">

<head>
    <% String path = request.getContextPath();%>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的订单</title>
    <link rel="stylesheet" href="<%=path%>/static/css/shoppingcar.css">
</head>

<body>
    <div class="box">
        <header>
            <img src="images/logo.jpg" class="logo" alt="">
            <h2>我的订单</h2>


        </header>
        <div class="dingdan">
            <div class="touyingdianshi">

                <p class="name">订单号&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;配送状态</p>
                <p class="danjia">用户名</p>
                <p class="shuliang">总价</p>
                <p class="xiaoji">订单详情</p>

            </div>

            <c:forEach items="${ordersuess}" var="list">
                <div class="touyingdianshi">

                    <p class="name">${list.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正在发货中......</p>
                    <p class="danjia">${list.loginName}</p>
                    <p class="shuliang">${list.cost}</p>
                    <p class="xiaoji">订单详情</p>
                </div>
            </c:forEach>
        <div class="weixiu">
            <ul>
                <li><img src="images2/weixiu.jpg" alt="">预约维修服务</li>
                <li><img src="images2/tuihuo.jpg" alt="">7天无理由退货</li>
                <li><img src="images2/huanhuo.jpg" alt="">15天免费换货</li>
                <li><img src="images2/baoyou.jpg" alt="">满150元包邮</li>
                <li><img src="images2/shouhou.jpg" alt="">520余家售后网点</li>
            </ul>
            <table>
                <tr>
                    <th>帮助中心</th>
                    <th>服务支持</th>
                    <th>线下门店</th>
                    <th>关于小米</th>
                    <th>关注我们</th>
                    <th>特色服务</th>
                    <th rowspan="4" class="th2" colspan="2">
                        <p class="p1">400-100-5678</p>
                        <p class="p2">周一至周日8:00-18:00</p>
                        <p class="p2">(仅售市话费)</p>
                        <p class="p3"><img src="images2/kefu.jpg" alt="">联系客服</p>
                    </th>
                    <!-- <th>1</th> -->
                </tr>
                <tr>
                    <td>账户管理</td>
                    <td>售后政策</td>
                    <td>小米之家</td>
                    <td>了解小米</td>
                    <td>新浪微博</td>
                    <td>F码通道</td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                </tr>
                <tr>
                    <td>购物指南</td>
                    <td>自助服务</td>
                    <td>服务网点</td>
                    <td>加入小米</td>
                    <td>官方微信</td>
                    <td>礼物码</td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                </tr>
                <tr>
                    <td>订单操作</td>
                    <td>相关下载</td>
                    <td>授权体验店</td>
                    <td>投资者关系</td>
                    <td>联系我们</td>
                    <td>防伪查询</td>
                    <!-- <td></td> -->
                    <!-- <td></td> -->
                </tr>
            </table>

        </div>
        <footer>
            <img src="images/logo.jpg" alt="" class="logo2">
            <ul class="ul1">
                <li>小米商城</li>
                <li>MIUI</li>
                <li>米家</li>
                <li>米聊</li>
                <li>多看</li>
                <li>游戏</li>
                <li>路由器</li>
                <li>米粉卡</li>
                <li>政企服务</li>
                <li>小米天猫店</li>
                <li>隐私政策</li>
                <li>商城用户协议</li>
                <li>账号协议</li>
                <li>问题反馈</li>
                <li>廉政举报</li>
                <li>诚信合规</li>
                <li>Select Region</li>
            </ul>
            <p class="p1">&copy;mi.com京ICP证110507号京ICP备10046444号京公网安备11010802020134号京网文[2017]1530-131号</p>
            <p class="p2">(京）网械平台备字(2018）第OO005号互联网药品信息服务资格证(京)-非经营性-2014-0090营业执照医疗器械公告</p>
            <p class="p3">增值电信业务许可证网络食品经营备案(京）[2018] WLSPJYBAHF-12食品经营许可证</p>
            <p class="p4">违法和不良信息举报电话:185-0130-1238知识产权侵权投诉本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
           <ul class="ul2">
               <li><img src="images2/no1.jpg" alt=""></li>
               <li><img src="images2/no2.jpg" alt=""  class="no1"><p class="x1">诚信网站示范企业</p></li>
               <li><img src="images2/no3.jpg" alt="" class="no2"><p class="x2">可信网站信用评价</p></li>
               <li><img src="images2/no4.jpg" alt="" class="no3"><p class="x3">网上交易保障中心</p></li>
               <li><img src="images2/lvye.jpg" alt="" class="no4"><p class="x4">诚信经营放心消费</p></li>
           </ul>
           
            <p class="last">探索黑科技，小米为发烧而生!</p>
           
        </footer>
    </div>
</body>

</html>