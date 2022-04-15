<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小米首页</title>  
    <link rel="stylesheet" href="./css/firstpage.css">
</head>

<body>
    <div class="box1">
        <nav>
<%--            <span class="ul22">--%>
<%--                <a href="logon.jsp">登录</a>--%>
<%--                <a href="">注册</a>--%>
<%--                <a href="">消息通知</a>--%>
<%--            </span>--%>
            <ul class="ul22">
                <li><a href="record.jsp" style="color: #9d9d9d;text-decoration:none">登录</a></li>
                <li><a href="logon.jsp" style="color: #9d9d9d;text-decoration:none">注册</a></li>
<%--                <li><a href="logon.jsp"style="color: #9d9d9d">消息通知</a></li>--%>
            </ul>
            <div class="shoppingcar">
                <img src="images/shoppingcar.jpg" alt=""><span>购物车( 0 )</span>
            </div>
        </nav>
        <div class="shangpinfenlei">
			<br></b>
			&nbsp;&nbsp;&nbsp;&nbsp;<h2>科瑞数码商城</h2>
            <img src="images/kr.jpg" alt="" class="img1">
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
        <div class="lunbotu">
            <ul class="ul2">
                <li>手机 电话卡</li>
                <li>电视 盒子</li>
                <li>笔记本 平板</li>
                <li>家电 插线板</li>
                <li>出行 穿戴</li>
                <li>智能 路由器</li>
                <li>电源 配件</li>
                <li>健康 儿童</li>
                <li>耳机 音箱</li>
                <li>生活 箱包</li>
            </ul>
            <img src="images3/haibao.jpg" alt="" class="img1">
            <div class="hui6">
                <ul>
                    <li><img src="images3/phonehui.jpg" alt="">
                        <p>选购手机</p>
                    </li>
                    <li><img src="images3/liwuhui.jpg" alt="">
                        <p>企业团购</p>
                    </li>
                    <li class="none"><img src="images3/Fhui.jpg" alt="">
                        <p>F码通道</p>
                    </li>
                    <li><img src="images3/kahui.jpg" alt="">
                        <p>米粉卡</p>
                    </li>
                    <li><img src="images3/huanhui.jpg" alt="">
                        <p>以旧换新</p>
                    </li>
                    <li class="none"><img src="images3/huafeihui.jpg" alt="">
                        <p>话费充值</p>
                    </li>
                </ul>
                <img src="images3/cheng.jpg" alt="" class="cheng">
                <img src="images3/hong.jpg" alt="" class="hong">
                <img src="images3/lan.jpg" alt="" class="lan">
            </div>

        </div>
        <div class="xiaomishangou">
            <h2>小米闪购</h2>
            <button class="btn1"><</button>
            <button class="btn2">></button>
            <div class="div1">
                <p class="p1">18:00场</p>
                <img src="images3/shandian.jpg" alt="">
                <p class="p2">距离结束还有</p>
                <p class="p3"><span>00</span>:<span>19</span>:<span>09</span></p>
            </div>
            <div class="div2">
                <img src="images3/yujin.jpg" alt="">
                <p class="p11">最生活浴巾·Air 4条量贩装</p>
                <p class="p22">方便清洗 易晾干</p>
                <p class="p33"><span class="qian">99元</span><span class="hou"><del>280元</del></span></p>
            </div>
            <div class="div3">
                <img src="images3/shouhuan.jpg" alt="">
                <p class="p11">小米手环3 黑色</p>
                <p class="p22">全新OLED可触摸大屏</p>
                <p class="p33"><span class="qian">9.9元</span><span class="hou"><del>169元</del></span></p>
            </div>
            <div class="div4">
                <img src="images3/shoubiao.jpg" alt="">
                <p class="p11">米家石英表 灰色</p>
                <p class="p22">腕上的科技与美学</p>
                <p class="p33"><span class="qian">329元</span><span class="hou"><del>349元</del></span></p>
            </div>
            <div class="div5">
                <img src="images3/luyouqi.jpg" alt="">
                <p class="p11">小米路由器Pro 星空灰</p>
                <p class="p22">全新一代只能家庭中心</p>
                <p class="p33"><span class="qian">429元</span><span class="hou"><del>499元</del></span></p>
            </div>
        </div>
        <img src="images3/weinierzhan_03.jpg" alt="" class="weinierzhan">
    </div>
    <div class="box2">
        <div class="shoujibankuaier">
            <h2>手机</h2>
            <p class="quanbup">查看全部</p>
            <img src="images3/gugong.jpg" alt="">
            <ul class="ula">
                <li><img src="images3/p1.jpg" alt="">
                    <p class="p111">小米8 青春版 4GB+64GB</p>
                    <p class="p222">潮流镜面渐变色,2400万自拍旗舰</p>
                    <p class="p333"><span class="qian">429元</span><span class="hou"><del>499元</del></span></p>
                </li>
                <li><img src="images3/p2.jpg" alt="">
                    <p class="p111">小米Play</p>
                    <p class="p222">内置每月10GB高速流量,高颜值流光...</p>
                    <p class="p333">1099元</p>
                </li>
                <li><img src="images3/p3.jpg" alt="">
                    <p class="p111">小米8 SE 6GB+64GB</p>
                    <p class="p222">AI 超光感双摄,三星AMOLED屏幕</p>
                    <p class="p333"><span class="qian">1599元</span><span class="hou"><del>1999元</del></span></p>
                </li>
                <li><img src="images3/p4.jpg" alt="">
                    <p class="p111">小米MIX 2S 8GB+256GB</p>
                    <p class="p222">骁龙845年度旗舰处理器，艺术品般...</p>
                    <p class="p333"><span class="qian">3399元</span><span class="hou"><del>3999元</del></span></p>
                </li>
                <li><img src="images3/p5.jpg" alt="">
                    <p class="p111">小米6X 6GB+128GB</p>
                    <p class="p222">轻薄美观的拍照手机</p>
                    <p class="p333"><span class="qian">1499元</span><span class="hou"><del>1999元</del></span></p>
                </li>
                <li><img src="images3/p6.jpg" alt="">
                    <p class="p111">小米MAX3 4GB+64GB</p>
                    <p class="p222">&nbsp;</p>
                    <p class="p333"><span class="qian">1599元</span><span class="hou"><del>1699元</del></span></p>
                </li>
                <li><img src="images3/p7.jpg" alt="">
                    <p class="p111">红米6 Pro</p>
                    <p class="p222">高颜值大电量 红米旗舰</p>
                    <p class="p333"><span class="qian">999元</span><span class="hou"><del>1299元</del></span></p>
                </li>
                <li><img src="images3/p8.jpg" alt="">
                    <p class="p111">红米6A 2GB+16GB</p>
                    <p class="p222">&nbsp;</p>
                    <p class="p333"><span class="qian">549元</span><span class="hou"><del>599元</del></span></p>
                </li>
            </ul>
            <img src="images3/dianshitehui.jpg" alt="" class="dianshitehui">
        </div>
        <div class="jiadian">
            <h2>家电</h2>
            
            <ul class="k1">
                <li><img src="images3/jiadian1.jpg" alt=""></li>
                <li><img src="images3/jiadian2.jpg" alt="">
                    <p class="p111">米家互联网空调</p>
                    <p class="p222">1.5匹变频/高效制冷热/AI远程控制</p>
                    <p class="p333">2299元</p>
                </li>
                <li><img src="images3/jiadian3.jpg" alt="">
                    <p class="p111">米家互联网空调(一级能效)</p>
                    <p class="p222">米家互联网空调(一级能效)</p>
                    <p class="p333">2699元</p>
                </li>
                <li><img src="images3/jiadian4.jpg" alt="">
                    <p class="p111">15.6"笔记本 i5 4G MX110</p>
                    <p class="p222">&nbsp;</p>
                    <p class="p333"><span class="qian">3899元</span><span class="hou"><del>4199元</del></span></p>
                </li>
                <li><img src="images3/jiadian5.jpg" alt="">
                    <p class="p111">13.3"小米笔记本Air 四核i7 8G 2...</p>
                    <p class="p222">&nbsp;</p>
                    <p class="p333">5999元</p>
                </li>
                <li><img src="images3/jiadian6.jpg" alt=""></li>
                <li><img src="images3/jiadian7.jpg" alt="">
                    <p class="p111">米家空气净化器Pro</p>
                    <p class="p222">OLED 显示屏幕/激光颗粒物传感器</p>
                    <p class="p333">1499元</p>
                </li>
                <li><img src="images3/jiadian8.jpg" alt="">
                    <p class="p111">米家电水壶</p>
                    <p class="p222">一杯水,是一家人的安心</p>
                    <p class="p333">99元</p>
                </li>
                <li><img src="images3/jiadian9.jpg" alt="">
                    <p class="p111">米家LED吸顶灯</p>
                    <p class="p222">用光线，还原理想生活</p>
                    <p class="p333">399元</p>
                </li>
                <li class="li10">
                    <p class="text">小米净水器...</p>
                    <p class="jiage">1999元</p><img src="images3/jiadian10.jpg" alt="" class="jiadian10">
                </li>
                <li class="li11">
                    <p class="liulangengduo">浏览更多</p>
                    <p class="remen">热门</p><img src="images3/more.jpg" alt="">
                </li>
            </ul>
            <img src="images3/shoujin.jpg" alt="" class="shoujin">
            <div class="zhineng">
                    <h2>智能</h2>
                    <ul>
                            <li><img src="images3/zhineng1.jpg" alt=""></li>
                            <li><img src="images3/zhineng2.jpg" alt="">
                                <p class="p111">米兔积木机器人 履带机甲</p>
                                <p class="p222">履带底盘,智能操控,百变拼插</p>
                                <p class="p333">499元</p>
                            </li>
                            <li><img src="images3/zhineng3.jpg" alt="">
                                <p class="p111">米兔智能故事机</p>
                                <p class="p222">微信远程互动,智能语音交互</p>
                                <p class="p333">199元</p>
                            </li>
                            <li><img src="images3/zhineng4.jpg" alt="">
                                <p class="p111">米家骑记电助力折叠自行车</p>
                                <p class="p222">力矩传感电助力,折叠便携设计</p>
                                <p class="p333">2999元</p>
                            </li>
                            <li><img src="images3/zhineng5.jpg" alt="">
                                <p class="p111">米家多功能网关</p>
                                <p class="p222">米家智能配件控制中心</p>
                                <p class="p333">149元</p>
                            </li>
                            <li><img src="images3/zhineng6.jpg" alt=""></li>
                            <li><img src="images3/zhineng7.jpg" alt="">
                                <p class="p111">米兔积木矿山卡车</p>
                                <p class="p222">方向盘控制系统,翻斗升降系统</p>
                                <p class="p333">99元</p>
                            </li>
                            <li><img src="images3/zhineng8.jpg" alt="">
                                <p class="p111">米兔儿童电话手表2</p>
                                <p class="p222">AMOLED高清彩屏,6天超长续航</p>
                                <p class="p333">399元</p>
                            </li>
                            <li><img src="images3/zhineng9.jpg" alt="">
                                <p class="p111">米兔智能积木</p>
                                <p class="p222">动手又动脑,启发孩子创造力</p>
                                <p class="p333">199元</p>
                            </li>
                            <li class="li10">
                                <p class="text">小米净水器...</p>
                                <p class="jiage">1999元</p><img src="images3/zhineng10.jpg" alt="" class="zhineng10">
                            </li>
                            <li class="li11">
                                <p class="liulangengduo">浏览更多</p>
                                <p class="remen">酷玩</p><img src="images3/more.jpg" alt="">
                            </li>
                    </ul>
                    <img src="images3/xiaomibijiben.jpg" alt="" class="xiaomibijiben">
            </div>
            <div class="dapei">
                <h2>搭配</h2>
                <ul>
                        <li><img src="images3/dapei1.jpg" alt=""></li>
                        <li><img src="images3/dapei2.jpg" alt="">
                            <p class="p111">小米USB充电器快充版(18W)</p>
                            <p class="p222">29.9元</p>
                            <p class="p333">3.1万人评价</p>
                        </li>
                        <li><img src="images3/dapei3.jpg" alt="">
                            <p class="p111">小米AI音箱</p>
                            <p class="p222">299元</p>
                            <p class="p333">7.6万人评价</p>
                        </li>
                        <li><img src="images3/dapei4.jpg" alt="">
                            <p class="p111">小米移动电源3 20000mAh 高配版</p>
                            <p class="p222">199元</p>
                            <p class="p333">1716人评价</p>
                        </li>
                        <li><img src="images3/dapei5.jpg" alt="">
                            <p class="p111">新小米移动电源2(10000mAh)</p>
                            <p class="p222">79元</p>
                            <p class="p333">2.8万人评价</p>
                        </li>
                        <li><img src="images3/dapei6.jpg" alt=""></li>
                        <li><img src="images3/dapei7.jpg" alt="">
                            <p class="p111">小米移动电源2C(20000mAh)</p>
                            <p class="p222">129元</p>
                            <p class="p333">3.5万人评价</p>
                        </li>
                        <li><img src="images3/dapei8.jpg" alt="">
                            <p class="p111">小米无线充电器(通用快充版)</p>
                            <p class="p222">69元</p>
                            <p class="p333">4520人评价</p>
                        </li>
                        <li><img src="images3/dapei9.jpg" alt="">
                            <p class="p111">小米移动电源高配版(10000mAh</p>
                            <p class="p222">149元</p>
                            <p class="p333">3.3万人评价</p>
                        </li>
                        <li class="li10">
                            <p class="text">小米USB充...</p>
                            <p class="jiage">59元</p><img src="images3/dapei10.jpg" alt="" class="dapei10">
                        </li>
                        <li class="li11">
                            <p class="liulangengduo">浏览更多</p>
                            <p class="remen">热门</p><img src="images3/more.jpg" alt="">
                        </li>
                </ul>
                <img src="images3/diannuanqi.jpg" alt="" class="diannuanqi">
            </div>
            <div class="peijian">
                    <h2>配件</h2>
                    <ul>
                            <li><img src="images3/peijian1.jpg" alt=""></li>
                            <li><img src="images3/peijian2.jpg" alt="">
                                <p class="p111">小米8 标准钢化玻璃膜</p>
                                <p class="p222"><span class="qian">25元</span><span class="hou"><del>29元</del></span></p>
                                <p class="p333">8111人评价</p>
                            </li>
                            <li><img src="images3/peijian3.jpg" alt="">
                                <p class="p111">小米8 硅胶保护套</p>
                                <p class="p222"><span class="qian">39元</span><span class="hou"><del>49元</del></span></p>
                                <p class="p333">6511人评价</p>
                            </li>
                            <li><img src="images3/peijian4.jpg" alt="">
                                <p class="p111">小米 8 屏幕指纹版&小米 8 透明...</p>
                                <p class="p222">49元</p>
                                <p class="p333">1402人评价</p>
                            </li>
                            <li><img src="images3/peijian5.jpg" alt="">
                                <p class="p111">Mi MIX 2S 真皮保护套</p>
                                <p class="p222">99元</p>
                                <p class="p333">805人评价</p>
                            </li>
                            <li><img src="images3/peijian6.jpg" alt=""></li>
                            <li><img src="images3/peijian7.jpg" alt="">
                                <p class="p111">小米8青春版极简高透保护壳</p>
                                <p class="p222"><span class="qian">29元</span><span class="hou"><del>39元</del></span></p>
                                <p class="p333">788人评价</p>
                            </li>
                            <li><img src="images3/peijian8.jpg" alt="">
                                <p class="p111">小米 8 标准高透贴膜</p>
                                <p class="p222"><span class="qian">10元</span><span class="hou"><del>19元</del></span></p>
                                <p class="p333">4035人评价</p>
                            </li>
                            <li><img src="images3/peijian9.jpg" alt="">
                                <p class="p111">小米MIX 3 极简保护壳</p>
                                <p class="p222">49元</p>
                                <p class="p333">615人评价</p>
                            </li>
                            <li class="li10">
                                <p class="text">小米6X 极简...</p>
                                <p class="jiage">29元</p><img src="images3/dapei10.jpg" alt="" class="peijian10">
                            </li>
                            <li class="li11">
                                <p class="liulangengduo">浏览更多</p>
                                <p class="remen">热门</p><img src="images3/more.jpg" alt="">
                            </li>
                    </ul>
                    <img src="images3/gugongerji.jpg" alt="" class="gugongerji"> 
            </div>
            <div class="zhoubian">
                <h2>周边</h2>
                    <ul>
                            <li><img src="images3/zhoubian1.jpg" alt=""></li>
                            <li><img src="images3/zhoubian2.jpg" alt="">
                                <p class="p111">TS尼龙偏光太阳镜 米家定制灰色</p>
                                <p class="p222">199元</p>
                                <p class="p333">1.7万人评价</p>
                            </li>
                            <li><img src="images3/zhoubian3.jpg" alt="">
                                <p class="p111">米兔招财猫足金吊坠</p>
                                <p class="p222">888元</p>
                                <p class="p333">1562人评价</p>
                            </li>
                            <li><img src="images3/zhoubian4.jpg" alt="">
                                <p class="p111">90分轻薄无缝一体织鹅绒羽绒服...</p>
                                <p class="p222"><span class="qian">229元</span><span class="hou"><del>299元</del></span></p>
                                <p class="p333">5202人评价</p>
                            </li>
                            <li><img src="images3/zhoubian5.jpg" alt="">
                                <p class="p111">飞天猪米兔</p>
                                <p class="p222">49元</p>
                                <p class="p333">254人评价</p>
                            </li>
                            <li><img src="images3/zhoubian6.jpg" alt=""></li>
                            <li><img src="images3/zhoubian7.jpg" alt="">
                                <p class="p111">保温杯</p>
                                <p class="p222">99元</p>
                                <p class="p333">1.7万人评价</p>
                            </li>
                            <li><img src="images3/zhoubian8.jpg" alt="">
                                <p class="p111">米家飞天猪足金吊坠</p>
                                <p class="p222"><span class="qian">779元</span><span class="hou"><del>799元</del></span></p>
                                <p class="p333">149人评价</p>
                            </li>
                            <li><img src="images3/zhoubian9.jpg" alt="">
                                <p class="p111">贝医生巴氏牙刷(四色装)</p>
                                <p class="p222">39.99元</p>
                                <p class="p333">1.7万人评价</p>
                            </li>
                            <li class="li10">
                                <p class="text">8H乳胶弹簧...</p>
                                <p class="jiage">1599元</p><img src="images3/zhoubian10.jpg" alt="" class="zhoubian10">
                            </li>
                            <li class="li11">
                                <p class="liulangengduo">浏览更多</p>
                                <p class="remen">热门</p><img src="images3/more.jpg" alt="">
                            </li>
                    </ul>
                    <img src="images3/zhinengmensuo.jpg" alt="" class="zhinengmensuo">
            </div>
            <div class="weinituijian">
                <h2>为你推荐</h2>
                <ul>
                    <li><img src="images3/tuijian1.jpg" alt="">
                        <p class="p111">最生活浴巾·Air(1条装)</p>
                        <p class="p222">69元</p>
                        <p class="p333">30人评价</p>
                    </li>
                    <li><img src="images3/tuijian2.jpg" alt="">
                        <p class="p111">小米家庭影院</p>
                        <p class="p222">2099元</p>
                        <p class="p333">&nbsp;</p>
                    </li>
                    <li><img src="images3/tuijian3.jpg" alt="">
                        <p class="p111">FREETIE云弹减震运动鞋 男款</p>
                        <p class="p222">249元</p>
                        <p class="p333">945人评价</p></li>
                        
                    <li><img src="images3/tuijian4.jpg" alt="">
                        <p class="p111">悦恬每日水果燕麦</p>
                        <p class="p222">49元</p>
                        <p class="p333">30人评价</p>
                    </li>
                    <li><img src="images3/tuijian5.jpg" alt="">
                        <p class="p111">时怡中粮优选碧根果</p>
                        <p class="p222">49.9元</p>
                        <p class="p333">7人评价</p>
                    </li>
                </ul>
            </div>
            <div class="reping">
                <h2>热评产品</h2>
                <ul>
                    <li><img src="images3/reping1.jpg" alt="">
                        <p class="A1">东西真心不错,用过最好用的插线板,做工外观没得挑剔,3个USB接口很实用,充电快,建议不包邮的应该在...</p>
                        <p class="A2">来自 yinyin19891117 的评价</p>
                        <p class="A3">小米插线板<span class="A4">|</span><span class="A5">49元</span></p>
                    </li>
                    <li><img src="images3/reping2.jpg" alt="">
                        <p class="A1">外形简洁大方,可爱小米!全家人都在用小米的产品,真心不错,最主要的是性价比高。附图,给客服妹子一个大...</p>
                        <p class="A2">来自于 酸小妞~! 的评价</p>
                        <p class="A3">米家车载空气净化器(U...<span class="A4">|</span><span class="A5">49元</span></p>
                    </li>
                    <li><img src="images3/reping3.jpg" alt="">
                        <p class="A1">包装很让人感动,样式也很可爱,做出的饭全家人都爱吃,超爱五星!手机控制还是不太熟练,最主要是没有连接...</p>
                        <p class="A2">来自于 HZG 的评价</p>
                        <p class="A3">米家压力IH电饭煲<span class="A4">|</span><span class="A5">999元</span></p>
                    </li>
                    <li><img src="images3/reping4.jpg" alt="">
                        <p class="A1">非常好用,孩子使用防止沉迷于电话影响学习。做工很好,定位基本准确,通化清晰。如果加入时间显示就更完美...</p>
                        <p class="A2">来自 178576259 的评价</p>
                        <p class="A3">米兔定位电话<span class="A4">|</span><span class="A5">169元</span></p>
                    </li>
                </ul>
            </div>
            <div class="neirong">
                <h2>内容</h2>
                <ul><li class="l1">
                        <p class="b1">图书</p>
                        <p class="c1">哈利·波特与被诅咒的孩子</p>
                        <p class="c2">"哈利·波特"第八个故事中文版震撼来袭!特别彩排版剧本!</p>
                        <p class="c3">29.37元</p>
                        <img src="images3/nr1.jpg" alt="">
                    </li>
                    <li class="l2">
                        <p class="b2">MIUI 主题</p>
                        <p class="c1">LINE FRIENDS温暖圣诞...</p>
                        <p class="c2">超萌超可爱 LINE FRINEDS来袭~</p>
                        <p class="c3">&nbsp;</p>
                        <img src="images3/nr2.jpg" alt="">
                    </li>
                    <li class="l3">
                        <p class="b3">游戏</p>
                        <p class="c1">非人学园</p>
                        <p class="c2">脑洞大开的二次元竞技手游</p>
                        <p class="c3">&nbsp;</p>
                        <img src="images3/nr3.jpg" alt="">
                    </li>
                    <li class="l4">
                        <p class="b4">应用</p>
                        <p class="c1">2018金米奖</p>
                        <p class="c2">最优秀的应用和游戏</p>
                        <p class="c3">&nbsp;</p>
                        <img src="images3/nr4.jpg" alt="">
                    </li>
                   
                </ul>
            </div>
            <div class="shipin">
                <h2>视频</h2>
                <ul>
                    <li><img src="images3/shipin1.jpg" alt="">
                    <p class="m1">一团火</p>
                    <p class="m2">小米创业8年内部纪录片(手机篇)</p>
                    </li>
                    <li><img src="images3/shipin2.jpg" alt="">
                    <p class="m1">小米8,一部与众不同的手机</p>
                    <p class="m2">透明探索版,将科技与美学完美结合</p>
                    </li>
                    <li><img src="images3/shipin3.jpg" alt="">
                    <p class="m1">小米MIX 2S,一面科技 一面技术</p>
                    <p class="m2">艺术品般陶瓷机身,惊艳、璀璨</p>
                    </li>
                    <li><img src="images3/shipin4.jpg" alt="">
                    <p class="m1">生活中无处不在的小爱同学</p>
                    <p class="m2">一句话搞定手机复杂操作</p>
                    </li>
                    
                </ul>
            </div>
            
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
        <ul class="ulx">
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
       <ul class="ulxx">
           <li><img src="images2/no1.jpg" alt=""></li>
           <li><img src="images2/no2.jpg" alt=""  class="no11"><p class="x1">诚信网站示范企业</p></li>
           <li><img src="images2/no3.jpg" alt="" class="no22"><p class="x2">可信网站信用评价</p></li>
           <li><img src="images2/no4.jpg" alt="" class="no33"><p class="x3">网上交易保障中心</p></li>
           <li><img src="images2/lvye.jpg" alt="" class="no44"><p class="x4">诚信经营放心消费</p></li>
       </ul>
       </footer>
    </div>

</body>

</html>