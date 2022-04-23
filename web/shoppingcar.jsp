<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>科瑞数码购物车</title>
    <link rel="stylesheet" href="static/css/shoppingcar.css">
</head>

<body>
    <div class="box">
        <header>
            <img src="images/logo.jpg" class="logo" alt="">
            <h2>我的购物车</h2>
            <p class="tip">温馨提示:产品是否购买成功,以最终下单为准哦,请尽快结算</p>
            <ul class="top">
                <li><a href="">2215512918</a></li>
                <li><a href="">&nbsp;&nbsp;我的订单</a></li>
            </ul>
        </header>
        <div class="dingdan">
            <div class="quanbu">
                <form action="" class="quanbu1">
                    <input type="checkbox" style="zoom:150%"><span>&nbsp;全选</span>
                </form>
                <p class="name">商品名称</p>
                <p class="danjia">单价</p>
                <p class="shuliang">数量</p>
                <p class="xiaoji">小计</p>
                <p class="caozuo">操作</p>
            </div>
            <div class="fenseshouji">
                <form action="">
                    <input type="checkbox" style="zoom:150%" class="kuang">
                    <img src="images2/pinkphone.jpg" alt="">
                    <p class="jieshao">小米6X 全网通版 6GB内存 64GB 樱花粉</p>
                    <p class="yuan1299">1299元</p>
                    <form action="">
                        <input type="button" value="－" class="jianbtn">
                        <input type="text" value="1" class="shuliangbtn">
                        <input type="button" value="+" class="jiabtn">
                    </form>
                    <p class="yuan1299o">1299元</p>
                    <button class="btnx">x</button>
                </form>
                <div class="daycard">
                    <img src="images2/onecard.jpg" alt="">
                    <p class="zengpin">赠品</p>
                    <p class="rizuka">米粉卡日租卡</p>
                    <p class="shuliang1">1</p>
                </div>
                <div class="yiwaibaoxian">
                    <button>+</button>
                    <p class="yiwaibaozhang">意外保障服务 179元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">了解意外保护></a></p>
                </div>
            </div>
            <div class="touyingdianshi">
                <input type="checkbox" style="zoom:150%" class="kuang">
                <img src="images2/touyingbaise.jpg" alt="">
                <p class="dianshijianjie">米家激光投影电视 150英寸 白色</p>
                <p class="yuan9499">9499元</p>
                <form action="">
                    <input type="button" value="－" class="jianbtn">
                    <input type="text" value="1" class="shuliangbtn">
                    <input type="button" value="+" class="jiabtn">
                </form>
                <p class="yuan9499o">9499元</p>
                <button class="btnx">x</button>
            </div>
            <div class="jiesuan">
                <p class="jixugouwu">继续购物&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p class="gong3">共 <span>3</span> 件商品,已选择 <span>3</span> 件</p>
                <p class="heji">合计:<span>10798</span>元</p>
                <div class="qujiesuan"><a href="">去结算</a></div>
            </div>

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