<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小米</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/css.lunbo.css">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/小米css.css">
    <style>
        @font-face {
            font-family: 'iconfont';
            /* Project id 2678005 */
            src: url('https://at.alicdn.com/t/font_2678005_uwyqwpi5nsj.woff2?t=1626360893830') format('woff2'),
            url('https://at.alicdn.com/t/font_2678005_uwyqwpi5nsj.woff?t=1626360893830') format('woff'),
            url('https://at.alicdn.com/t/font_2678005_uwyqwpi5nsj.ttf?t=1626360893830') format('truetype');
        }

        .iconfont {
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -webkit-text-stroke-width: 0.2px;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
</head>

<body>
<div class="nav-box">
    <nav class="nav-top">
        <ul class="left clear-fix">
            <li>
                <a href="#">科瑞数码商城</a>
                <i>|</i>
            </li>
        </ul>
        <ul class="right clear-fix">
            <li >
                <c:choose>
                    <c:when test="${loguser!=null}">
                        <a href="#">${loguser.loginame}</a>
                        <i>|</i>
                        <a href="${pageContext.request.contextPath}/user/logout">退出</a></c:when>
                    <c:otherwise> <a href="${pageContext.request.contextPath}/login.jsp">登录</a></c:otherwise>
                </c:choose>
                <i>|</i>
            </li>
            <li>
                <a href="${pageContext.request.contextPath}/requst.jsp">注册</a>
                <i>|</i>
            </li>
            <c:if test="${loguser!=null&&loguser.isadmin==true}">
                <li>
                    <a href="${pageContext.request.contextPath}/houtai.jsp">后台管理</a>
                    <i></i>
                </li>
            </c:if>

            <li class="shopping">
                <a href="${pageContext.request.contextPath}/shopping/getItems">
                    <span class="iconfont">&#xe600;</span>
                    <span>购物车</span>
                    <span>(${cartsize})</span>
                </a>
                <c:choose>
                    <c:when test="${cartsize==0}">
                        <div class="gouwuwenben">
                            购物车中还没有商品，赶紧选购吧！
                        </div>
                    </c:when>
                    <c:otherwise>
                        <div class="gouwuwenben">
                            您已添加${cartsize}件商品，现在结算另赠小礼品一份！
                        </div>
                    </c:otherwise>
                </c:choose>

            </li>
        </ul>
    </nav>
</div>
<!-- 以上是灰色导航栏标签 -->
<header class="header">
    <div class="header-box">
        <div class="logo">
            <%--            <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">--%>
        </div>
        <ul class="shangpin clear-fix">
            <c:forEach items="${clist}" var="c1">
                <li class="xiaomi">
                    <a class="aaa" href="">${c1.name}</a>
                    <div class="item">
                        <div class="item-sun">
                            <ul class="clear-fix">
                                <c:forEach items="${c1.goodsList}" var="g3">
                                    <c:forEach items="${c1.chinder}" var="c2">
                                        <c:forEach items="${c2.chinder}" var="c3">
                                            <li>
                                                <a href="">
                                                    <img src="${pageContext.request.contextPath}/static/pic/${c3.pic}">
                                                    <p>${c3.name}</p>u
                                                    <p>${g3.price}</p>
                                                </a>
                                                <div class="youtiao">
                                                </div>
                                            </li>
                                        </c:forEach>
                                    </c:forEach>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </li>
            </c:forEach>
            <li class="fuwu">
                <a class="aaa" href="">服务</a>
            </li>
            <li class="shequ">
                <a class="aaa" href="">社区</a>
            </li>
        </ul>
        <div class="sousuo">
            <input type="text" placeholder="&nbsp;&nbsp;&nbsp;手表">
            <a href="">
                <div class="fangdajingbox">
                    <span style="font-size: 18px;" class="iconfont">&#xe6a0;</span>
                </div>
            </a>
        </div>
    </div>
</header>
<!-- 以上是headerlogo部分标签 -->
<div class="bgi">
    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c3e97686468231f3f78048d7f2b7fdc.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
         alt="">
    <ul class="sssss">
        <c:forEach items="${clist}" var="c1">
        <li class="lii">${c1.name}
            <span class="iconfont">&#xe630;</span>
            <div class="liii">
                <c:forEach items="${c1.chinder}" var="c2">
                <div>
                    <img src="${pageContext.request.contextPath}/static/pic/${c2.pic}">
                    <a href="" style="text-decoration:none;color: #212121">${c2.name}</a>
                </div>
                <c:forEach items="${c2.chinder}" var="c3">
                <div>
                    <img src="${pageContext.request.contextPath}/static/pic/${c3.pic}">
                    <a href=""
                       style="text-decoration:none;color: #212121">${c3.name}</a>
                </div>
                </c:forEach>
                </c:forEach>
                </c:forEach>

    </ul>
</div>
<!-- 以上轮播区 -->

<section>
    <div class="hhz">
        <div class="onn1">
            <ul>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
                         alt="">
                    <span>话费充值</span>
                </li>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
                         alt="">
                    <span>小米秒杀</span>
                </li>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
                         alt="">
                    <span>服务中心</span>
                </li>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
                         alt="">
                    <span>保障服务</span>
                </li>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
                         alt="">
                    <span>以旧华新</span>
                </li>
                <li>
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
                         alt="">
                    <span>F码通道</span>
                </li>
            </ul>
        </div>
        <div class="onn">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340"
                 alt="">
        </div>
        <div class="onn">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340"
                 alt="">
        </div>
        <div class="onn">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340"
                 alt="">
        </div>
    </div>
</section>

<main>
    <div class="dantupian">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&w=1533&h=150&f=webp&q=90"
             alt="">
    </div>
    <c:forEach items="${clist}" var="c1" varStatus="i">
    <c:if test="${i.index<2}">
    <div class="toub">
        <div>${c1.name}</div>
        <div class="gengduo">
            <div>查看更多</div>
            <p>></p>
        </div>
    </div>
    <div class="bex">
        <div class="lage">
            <a href="">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=293&h=768&f=webp&q=90"
                     alt="">
            </a>
        </div>
        <ul class="shouj">
                        <c:forEach items="${c1.goodsList}" var="g" varStatus="i">
                            <c:if test="${i.index<8}">
                                <li>
                                    <a href="${pageContext.request.contextPath}/Goods/getGoods?id=${g.id}"> <img src="${pageContext.request.contextPath}/static/pic/${g.pic}"></a>
                                    <b style="display: block;font-size: 14px;">${g.name}</b>
                                    <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                                    <span style="font-size: 14px;color: #ff6700;">${g.price}</span>
                                </li>
                            </c:if>
                    </c:forEach>
        </ul>
        </c:if>
        </c:forEach>
    </div>
    <div class="dantupian">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
             alt="">
    </div>
    <div class="toub">
        <div>视频</div>
        <div class="gengduo">

            <p>&nbsp;&nbsp;查看全部&nbsp;&nbsp;</p>

        </div>
    </div>
    <div class="ship">
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                 alt="">
            <p>2021年春季新品发布会第一场</p>
            <svg t="1625493447711" class="ico" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="8648" width="30" height="30">
                <path
                        d="M512 917.333333a405.333333 405.333333 0 1 1 405.333333-405.333333 405.333333 405.333333 0 0 1-405.333333 405.333333z m0-768a362.666667 362.666667 0 1 0 362.666667 362.666667A362.666667 362.666667 0 0 0 512 149.333333z"
                        p-id="8649" fill="#ff6700"></path>
                <path
                        d="M440.96 677.76l-53.333333-30.72V376.32l53.333333-30.933333 234.666667 135.466666v61.44z m-10.666667-55.466667l10.666667 6.186667 192-110.72v-12.373333l-192-110.72-10.666667 6.186666z"
                        p-id="8650" fill="#ff6700"></path>
            </svg>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                 alt="">
            <p>2021年春季新品发布会第一场</p>
            <svg t="1625493447711" class="ico" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="8648" width="30" height="30">
                <path
                        d="M512 917.333333a405.333333 405.333333 0 1 1 405.333333-405.333333 405.333333 405.333333 0 0 1-405.333333 405.333333z m0-768a362.666667 362.666667 0 1 0 362.666667 362.666667A362.666667 362.666667 0 0 0 512 149.333333z"
                        p-id="8649" fill="#ff6700"></path>
                <path
                        d="M440.96 677.76l-53.333333-30.72V376.32l53.333333-30.933333 234.666667 135.466666v61.44z m-10.666667-55.466667l10.666667 6.186667 192-110.72v-12.373333l-192-110.72-10.666667 6.186666z"
                        p-id="8650" fill="#ff6700"></path>
            </svg>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                 alt="">
            <p>2021年春季新品发布会第一场</p>
            <svg t="1625493447711" class="ico" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="8648" width="30" height="30">
                <path
                        d="M512 917.333333a405.333333 405.333333 0 1 1 405.333333-405.333333 405.333333 405.333333 0 0 1-405.333333 405.333333z m0-768a362.666667 362.666667 0 1 0 362.666667 362.666667A362.666667 362.666667 0 0 0 512 149.333333z"
                        p-id="8649" fill="#ff6700"></path>
                <path
                        d="M440.96 677.76l-53.333333-30.72V376.32l53.333333-30.933333 234.666667 135.466666v61.44z m-10.666667-55.466667l10.666667 6.186667 192-110.72v-12.373333l-192-110.72-10.666667 6.186666z"
                        p-id="8650" fill="#ff6700"></path>
            </svg>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90"
                 alt="">
            <p>2021年春季新品发布会第一场</p>
            <svg t="1625493447711" class="ico" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="8648" width="30" height="30">
                <path
                        d="M512 917.333333a405.333333 405.333333 0 1 1 405.333333-405.333333 405.333333 405.333333 0 0 1-405.333333 405.333333z m0-768a362.666667 362.666667 0 1 0 362.666667 362.666667A362.666667 362.666667 0 0 0 512 149.333333z"
                        p-id="8649" fill="#ff6700"></path>
                <path
                        d="M440.96 677.76l-53.333333-30.72V376.32l53.333333-30.933333 234.666667 135.466666v61.44z m-10.666667-55.466667l10.666667 6.186667 192-110.72v-12.373333l-192-110.72-10.666667 6.186666z"
                        p-id="8650" fill="#ff6700"></path>
            </svg>
        </div>
    </div>
</main>
<footer>
    <div class="footer1">
        <div>预约维修服务</div>
        <div>7天无理由退货</div>
        <div>15天免费换货</div>
        <div>满69包邮</div>
        <div>520余家售后网点</div>
    </div>
    <div class="footer2">
        <table>
            <tr>
                <th>帮助中心</th>
                <th>服务支持</th>
                <th>线下门店</th>
                <th>关于小米</th>
                <th>关注我们</th>
                <th>特色服务</th>
            </tr>
            <tr>
                <td>账户管理</td>
                <td>售后政策</td>
                <td>小米之家</td>
                <td>了解小米</td>
                <td>新浪微博</td>
                <td>F 码通道</td>

            </tr>
            <tr>
                <td>购物指南</td>
                <td>自助服务</td>
                <td>服务网点</td>
                <td>加入小米</td>
                <td>官方微信</td>
                <td>礼物码</td>

            </tr>
            <tr>
                <td>订单操作</td>
                <td>相关下载</td>
                <td>授权体验店</td>
                <td>投资者关系</td>
                <td>联系我们</td>
                <td>防伪查询</td>

            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>企业社会责任</td>
                <td>公益基金会</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>廉洁举报</td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <div>
            <p class="foot1">
                400-100-5678
            </p>
            <p class="foot2">
                8:00-18:00（仅收市话费）
            </p>
            <p class="foot3">
                人工客服
            </p>
            <p class="foot4">
                关注小米：
            </p>
        </div>
    </div>
</footer>
<footer class="bottom">
    <footer class="bottom1">
        <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
        <div>
            <p>小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈
                | Select Location</p>
            <p>北京互联网法院法律服务工作站 | 中国消费者协会 | 北京市消费者协会</p>

            <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
            <p>
                （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
            <p>
                增值电信业务许可证 网络食品经营备案 京食药网食备202010048 食品经营许可证</p>
            <p>
                违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
            <p>
                TRUSTe Privacy Certification 诚信网站 可信网站 诚信经营 放心消费</p>


        </div>

    </footer>
    <div class="zuixiaimg">
        <span>
            <img src="https://i1.mifile.cn/f/i/17/site/truste.png" alt="">
        </span>
        <span>
            <img src="https://i1.mifile.cn/f/i/17/site/truste.png" alt="">
        </span>
        <span>
            <img src="https://xyt.xinchacha.com/img/icon/icon3.png" alt="">
        </span>
        <span>
            <img src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png" alt="">
        </span>
        <span>
            <img src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/2157a7cf01e2537ee2a69be2d1d821ff.png" alt="">
        </span>
    </div>
</footer>
<div class="meihao">
    <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png" alt="">
</div>
<div class="nianx">
    <ul>
        <li>
            <p class="imgg1"></p>
            <p>手机APP</p>

        </li>
        <li>
            <p class="imgg2"></p>
            <p>个人中心</p>
        </li>
        <li>
            <p class="imgg3"></p>
            <p>售后服务</p>

        </li>
        <li>
            <p class="imgg4"></p>
            <p>人工客服</p>
        </li>
        <li>
            <p class="imgg5"></p>
            <p>购物车</p>
        </li>
    </ul>


</div>
</body>

</html>