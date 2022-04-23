<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
<head>
    <% String path = request.getContextPath();%>
    <meta charset="UTF-8">
<%--    <meta name="viewport" content="width=device-width, initial-scale=1.0">--%>
<%--    <meta http-equiv="X-UA-Compatible" content="ie=edge">--%>
    <title>科瑞数码商城详情</title>
    <style>
        body{
            background: #e2dede;

        }
        nav{
            width: 1330px;
            height: 40px;
            background: #333333;
            position: relative;
            margin: 0 auto;
        }
        nav  .ul11 li{
            float: left;
            border-right: solid 1px rgb(122, 122, 122);
            list-style: none;
            color: #b0b0b0;
            padding-right: 6px;
            padding-left: 6px;
            font-size: 12px;
        }
        nav .ul11{
            position: absolute;
            top: -5px;
            left: 62px;
        }
        nav .ul22 li{
            list-style: none;
            float: left;
            color: #b0b0b0;
            padding-right: 6px;
            padding-left: 6px;
            font-size: 12px;
            border-right: solid 1px rgb(122, 122, 122);
        }
        nav .ul22{
            position: absolute;
            top: -5px;
            right: 182px;
        }
        .shoppingcar{
            width: 120px;
            height: 40px;
            background: #424242;
            position: absolute;
            right: 43px;

        }
        .shoppingcar img{
            position: absolute;
            top: 16px;
            left: 16px;
        }
        .shoppingcar span{
            color: #b0b0b0;
            font-size: 12px;
            position: absolute;
            top: 14px;
            left: 40px;
            vertical-align: middle;
        }
        .shangpinfenlei{
            height: 100px;
            width: 1330px;
            background: rgb(255, 255, 255);
            margin: 0 auto;
            position: relative;
            border-bottom: #b0b0b0 1px solid;
        }
        .shangpinfenlei img{
            top: 22px;
            left: 63px;
            position: absolute
        }
        .shangpinfenlei ul{
            position: absolute;
            top:22px;
            left: 186px;
        }
        .shangpinfenlei li{
            font-size: 14px;
            list-style: none;
            color: #333333;
            float: left;
            margin-right: 20px;
        }
        .shangpinfenlei input{
            width: 143px;
            height: 44px;
            border: 1px #e0e0e0 solid;
            position: absolute;
            top: 25px;
            right:91px ;
            outline: none
        }
        .shangpinfenlei button{
            width: 50px;
            height: 48px;
            background: #ffffff url(static/images/find.jpg) no-repeat center;
            border: 1px #e0e0e0 solid;
            position: absolute;
            top: 25px;
            right: 43px;
        }
        input::placeholder{
            width: 70px;
            height: 18px;
            background: #eeeeee;
            margin-left: 56px;
            font-size: 12px;
            text-align: center;
        }
        .play{
            width: 1330px;
            height: 63px;
            background: #ffffff;
            position: relative;
            margin: 0 auto;
            box-shadow:  0px 5px 5px rgb(214, 213, 213);
        }
        .play p{
            font-size: 18px;
            color: #212121;
            left: 63px;
            top: 2px;
            position: absolute;
        }
        .play ul{
            right: 34px;
            top: 7px;
            position: absolute
        }
        .play li{
            list-style: none;
            float: left;
            color: #616161;
            font-size: 12px;
            width: 68px;
            border-right: 1px solid #e0e2e8;
            text-align: center;
        }
        .play .last1{
            border: none;
        }
        .goumai1{
            width: 1330px;
            height: 49px;
            margin: 0 auto;
        }
        .goumai{
            color: #333333;
            font-size: 12px;
            text-align: center;
            line-height: 49px;
        }
        .goumai a{
            color:#ff6700;
            font-size: 12px;
            text-decoration: none;
        }
        .goumai button{
            color: #ff6700;
            border: none;
            background: none;
            cursor: pointer;
        }
        main{
            height: 1501px;
            width: 1330px;
            background: #ffffff;
            margin: 0 auto;
            position: relative;
        }
        .left img{
            top: 77px;
            left: 146px;
            position: absolute;
        }
        .no1 .p1{
            font-size: 22px;
            color: #212121;
        }
        .no1 .p2{
            width: 600px;
            color: #b0b0b0;
            font-size: 14px;
        }
        .no1 .p3{
            font-size: 14px;
            color: #ff6700;
        }
        .no1 .p4x{
            color: #ff6700;
        }
        .no1{
            width: 600px;
            border-bottom: 1px solid #999999;
            position: absolute;
            top: 3px;
            right: 44px;
        }
        .no2{
            width: 604px;
            height: 102px;
            border: #e0e0e0 1px solid;
            background: #fafafa;
            position: absolute;
            top: 232px;
            right: 42px;
            box-sizing: border-box;
        }
        .no2 p{
            font-size: 14px;
            color: #333;
            top: 16px;
            left: 50px;
            position: absolute
        }
        .no2 p span{
            color: #ff6700;
        }
        .no2 img{
            position: absolute;
            top: 32px;
            left: 22px;
        }
        .no3{
            position: absolute;
            top: 360px;
            right: 349px;
        }
        .no3 .p1,.p3{
            font-size: 18px;
            color: #333;

        }
        .no3 .p2{
            line-height: 42px;

        }
        .no3 .p2 span{
            color: #e41f1f;
        }
        .no3 .p2,.p4{
            border: 1px solid #ff6700;
            color: #ff6700;
            width: 298px;
            height: 42px;
        }
        .no3 .p5,.p6{
            border: 1px solid #e0e0e0;
            color:#333;
            width: 298px;
            height: 42px;
        }
        .no3 .p5{
            top:147.5px;
            left:304px;
            position: absolute
        }
        .no3 .p4,.p5,.p6{
            line-height: 42px;
            text-align: center
        }
        .no4{
            width: 524px;
            height: 606px;
            position: absolute;
            top: 653px;
            left: 681px;
        }
        .pp1,.pp3{
            font-size: 18px;
            color: #333;
        }
        .pp2,.pp4{
            color: #ff6700;
            font-size: 12px;
        }
        .no4 .p1{
            font-size: 18px;
            color: #333;
        }
        .no4 .p2{
            color: #b0b0b0;
            font-size: 12px;
        }
        .no4 .p3{
            color: #757575;
            font-size: 12px;
        }
        .no4 .p3 a{
            color: #ff6700;
            text-decoration: none;
        }
        .ppp4{
            font-size: 14px;
            color: #757575;
        }
        .yiwai,.suiping,.baoxiu{
            width: 604px;
            height: 140px;
            border: 1px pink solid;
            position: relative;

        }
        .yiwai img{
            top: 32px;
            left: 83px;
            position: absolute;
        }
        .suiping img{
            top: 32px;
            left: 83px;
            position: absolute;
        }
        .baoxiu img{
            top: 32px;
            left: 83px;
            position: absolute;
        }
        .yiwai .p1{
            top: 12px;
            left: 141px;
            position: absolute
        }
        .suiping .p1{
            top: 12px;
            left: 141px;
            position: absolute

        }
        .baoxiu .p1{
            top: 12px;
            left: 141px;
            position: absolute

        }
        .yiwai .p2{
            top: 40px;
            left: 141px;
            position: absolute;
        }
        .suiping .p2{
            top: 40px;
            left: 141px;
            position: absolute;
        }
        .baoxiu .p2{
            top: 40px;
            left: 141px;
            position: absolute;
        }
        .yiwai .p3{
            bottom: 40px;
            left: 141px;
            position:absolute
        }
        .suiping .p3{
            bottom: 40px;
            left: 141px;
            position:absolute
        }
        .baoxiu .p3{
            bottom: 40px;
            left: 141px;
            position:absolute
        }
        .yiwai .ppp4{
            right: 20px;
            bottom: 34px;
            position: absolute;
        }
        .baoxiu .ppp4{
            right: 20px;
            bottom: 34px;
            position: absolute;
        }
        .suiping .ppp4{
            right: 20px;
            bottom: 34px;
            position: absolute;
        }
        .no4 .pp2{
            top: 8px;
            right: -80px;
            position: absolute;
        }
        .no4 .pp4{
            top: 368px;
            right: -80px;
            position: absolute;
        }
        .no4 .pp3{
            margin-top: 30px;
        }
        .huise{
            width: 606px;
            height: 138px;
            background: #f9f9fa;
            margin-top: 30px;
            position: relative;
        }
        .hui1{
            color: #616161;
            font-size: 14px;
            position: absolute;
            top: 30px;
            left: 30px;
        }
        .hui2{
            color: #616161;
            font-size: 14px;
            right: 31px;
            top: 30px;
            position: absolute;
        }
        .hui3{
            color:#ff6700;
            font-size: 24px;
            top: 60px;
            left: 30px;
            position: absolute;
        }
        .jiaru{
            background:#ff6700;
            color: white;
            width: 300px;
            height: 54px;
            text-align: center;
            line-height: 54px;
            position: absolute;
        }
        .xihuan{
            width: 142px;
            height: 54px;
            background: #b0b0b0;
            color: white;
            text-align: center;
            line-height: 54px;
            position: absolute;
            left: 313px;
            /* vertical-align: middle; */

        }
        .xihuan span{
            font-size: 20px;
        }
        .duigou{
            font-size: 12px;
            color: #c2b0b0;
            margin-top: 80px;
        }
        .duigou span{
            margin-right: 18px;
        }
        .duigou img{
            margin-right: 5px;
        }
        .xiamian{
            top: 1538px;
            position: absolute;
        }
        .jiage{
            width: 1326px;
            height: 188px;
            background: white;
            padding:60px 100px 0px ;
            box-sizing: border-box;
            letter-spacing: 2px;
            font-size: 14px;
            color: #b0b0b0
        }
        .jiage span{
            font-size: 18px;
            line-height: 30px;
            color: #333
        }

        .weixiu{
            height: 272px;
            width: 1330px;
            background: white;
            margin: 0 auto;
            margin-top: 356px;
            position: relative;
        }
        .weixiu li{
            color: #616161;
            list-style: none;
            float: left;
            border-right: #616161 1px solid;
            padding-right: 50px;
            padding-left: 50px;
            margin-top: 28px;

        }
        .weixiu img{
            margin-right: 8px;
            vertical-align: middle;
        }
        .weixiu li:nth-child(5){
            border-right: none;
        }
        .weixiu li :nth-child(1){
            margin-left: 20px;
        }
        .weixiu table{
            width: 1226px;
            height: 111px;
            background: #ffffff;
            position: absolute;
            top: 122px;
            left: 62px;
        }
        .weixiu table th{
            text-align: left;
            font-size: 14px;
            color: #424242;
            width: 160px;
            vertical-align: top;
        }
        .weixiu table td{
            font-size: 12px;
            color: #757575;
            text-align: left;
            vertical-align: bottom;
        }
        .weixiu table .th2{
            border-left: 1px #ff6700 solid;
            text-align: center;
            vertical-align: middle;
        }
        .weixiu table .p1{
            font-size: 16px;
            color: #ff6700;
            margin-bottom: 12px;
        }
        .weixiu table .p2{
            color: #616161;
            font-size: 12px;
            margin-bottom: 8px;
        }
        .weixiu table .p3{
            font-size: 12px;
            color: #ff6700;
            margin-top: 12px;
            border: #ff6700 1px solid;
            width: 118px;
            height: 28px;
            margin: 0 auto;
            padding-top: 3px;
            box-sizing: border-box
        }
        footer{
            width: 1330px;
            height: 200px;
            margin: 0 auto;
            position: relative;
            margin-top: -10px;
        }
        footer .logo2{
            position: absolute;
            top: 50px;
            left: 63px;
        }
        footer .ul1{
            top: 34px;
            left: 88px;
            position: absolute;
        }
        footer .ul1 li{
            list-style: none;
            border-right: 2px solid #b6b6b6;
            color: #757575;
            float: left;
            font-size: 12px;
            padding-left: 3px;
            padding-right: 3px;

        }
        footer .s1{
            top: 50px;
            left: 128px;
            position: absolute;
            color: #757575;
            font-size: 12px;
        }
        footer .s2{
            top: 70px;
            left: 128px;
            position: absolute;
            color: #757575;
            font-size: 12px;
        }
        footer .s3{
            top: 88px;
            left: 128px;
            position: absolute;
            color: #757575;
            font-size: 12px;
        }
        footer .s4{
            top: 106px;
            left: 128px;
            position: absolute;
            color: #757575;
            font-size: 12px;
        }
        .ul2 li{
            list-style: none;
            float: left;
            width: 90px;
        }
        .ul2{
            position: absolute;
            top: 125px;
            left: 128px;
        }
        .ul2 p{
            font-size: 12px;
            color: #757575;
            width: 48px;

        }
        .x1{
            position: absolute;
            top: -13px;
            left: 160px;
        }
        .x2{
            position: absolute;
            top: -13px;
            left: 248px;
        }
        .x3{
            position: absolute;
            top: -13px;
            left: 336px;
        }
        .x4{
            position: absolute;
            top: -13px;
            left: 436px;
        }
        .last{
            font-size: 18px;
            left: 542px;
            top: 190px;
            color: #b6b4b3;
            position: absolute;
        }
    </style>
</head>

<body>
    <nav>
        <ul class="ul11">
            <a href="${pageContext.request.contextPath}/index.jsp" style="text-decoration:none;color:#e2e8f1;">科瑞数码商城</a>
        </ul>
        <ul class="ul22">
            <li>登录</li>
            <li>注册</li>
            <li>消息通知</li>
        </ul>
        <div class="shoppingcar">
            <img src="images/shoppingcar.jpg" alt=""><span>购物车( 0 )</span>
        </div>
    </nav>
    <div class="shangpinfenlei">
        <img src="images/logo.jpg" alt="">
        <ul>
            <li>全部商品分类</li>
            <li>小米手机</li>
            <li>红米</li>
            <li>电视</li>
            <li>笔记本</li>
            <li>家电</li>
            <li>新品</li>
            <li>路由器</li>
            <li>智能硬件</li>
            <li>服务</li>
            <li>社区</li>
        </ul>
        <input type="text" placeholder="红米Note 7" placeholder="小米8">
        <button></button>
    </div>
    <div class="play">
        <p>小米Play</p>
        <ul>
            <li>概述</li>
            <li>图集</li>
            <li>参数</li>
            <li>F码通道</li>
            <li class="last1">用户评价</li>
        </ul>
    </div>

    <main>
        <div class="left">
            <img src="<%=path%>/static/pic/${goods.pic}" style="width: 500px;height: 500px" alt="">
        </div>
        <aside>
            <div class="no1">
                <p class="p1">小米Play</p>
                <p class="p2">内置每月10GB高速流量/高颜值流光渐变色/5.84"小水滴全面屏/后置1200万 AI 双摄/八核高性能处理器</p>
                <p class="p3">小米自营</p>
                <p class="p4x">${goods.price}元</p>
            </div>
            <div class="no2"><img src="images/dizhi.jpg" alt="">
                <p>北京&nbsp;&nbsp; 北京市&nbsp;&nbsp; 东城区&nbsp;&nbsp; 永定门外街道&nbsp;&nbsp; <span>修改</span><br><span>有现货</span></p>
            </div>
            <div class="no3">
                <p class="p1">版本</p>
                <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${goods.stylesize}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${goods.price}</span></p>
                <p class="p3">颜色</p>
                <p class="p4">&nbsp;&nbsp;&nbsp;${goods.color}</p>
            </div>
            <div class="no4">
                <p class="pp1">选择小米提供的意外保护</p>
                <p class="pp2">了解意外保护 ></p>
                <div class="yiwai">

                    <img src="images/baohu.jpg" alt="">
                    <p class="p1">意外保障服务</p>
                    <p class="p2">手机意外碎屏/进水/碾压等损坏</p>
                    <p class="p3"><input type="checkbox">我已阅读<a href="">服务条款</a> | <a href="">常见问题</a></p>
                    <p class="ppp4">99元</p>

                </div>
                <div class="suiping">
                    <img src="images/baohu.jpg" alt="">
                    <p class="p1">碎屏保障服务</p>
                    <p class="p2">手机意外碎屏</p>
                    <p class="p3"><input type="checkbox">我已阅读<a href="">服务条款</a> | <a href="">常见问题</a></p>
                    <p class="ppp4">59元</p>
                </div>
                <p class="pp3">选择小米提供的延长保修</p>
                <p class="pp4">了解延长保修 ></p>
                <div class="baoxiu">
                    <img src="images/baohu.jpg" alt="">
                    <p class="p1">延长保修服务</p>
                    <p class="p2">厂保延长一年，性能故障免费维修</p>
                    <p class="p3"><input type="checkbox">我已阅读<a href="">服务条款</a> | <a href="">常见问题</a></p>
                    <p class="ppp4">29元</p>
                </div>
                <div class="huise">
                    <p class="hui1">${goods.name}+${goods.stylesize}+${goods.color}</p>
                    <p class="hui2">${goods.price}</p>
                    <p class="hui3">总计：${goods.price}</p>
                </div>
                <p class="jiaru">加入购物车</p>
                <p class="xihuan"><span>❤</span>&nbsp;&nbsp;喜欢</p>
                <p class="duigou"><span><img src="images/dui.jpg" alt="">小米自营</span><span><img src="images/dui.jpg" alt="">小米发货</span><span><img src="images/dui.jpg" alt="">7天无理由退货</span><span><img src="images/dui.jpg" alt="">运费说明</span></p>
            </div>
            <div class="xiamian">
            <h2>价格说明</h2>
            <p class="jiage"><span>划线价︰</span>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价、建议零售价等)或该商品在小米商城/小米有品/天猫小米官方旗舰店曾经展示过的销售价;由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致,该价格仅供您参考。</p>
        </div>
        </aside>
    </main>
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
        <p class="s1">&copy;mi.com京ICP证110507号京ICP备10046444号京公网安备11010802020134号京网文[2017]1530-131号</p>
        <p class="s2">(京）网械平台备字(2018）第OO005号互联网药品信息服务资格证(京)-非经营性-2014-0090营业执照医疗器械公告</p>
        <p class="s3">增值电信业务许可证网络食品经营备案(京）[2018] WLSPJYBAHF-12食品经营许可证</p>
        <p class="s4">违法和不良信息举报电话:185-0130-1238知识产权侵权投诉本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
       <ul class="ul2">
           <li><img src="images2/no1.jpg" alt=""></li>
           <li><img src="images2/no2.jpg" alt=""  class="no11"><p class="x1">诚信网站示范企业</p></li>
           <li><img src="images2/no3.jpg" alt="" class="no22"><p class="x2">可信网站信用评价</p></li>
           <li><img src="images2/no4.jpg" alt="" class="no33"><p class="x3">网上交易保障中心</p></li>
           <li><img src="images2/lvye.jpg" alt="" class="no44"><p class="x4">诚信经营放心消费</p></li>
       </ul>
       </footer>
</body>

</html>