<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小米</title>
    <link rel="stylesheet" href="static/css/css.lunbo.css">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./static/css/小米css.css">
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
            <li>
                <a href="login.jsp">登录</a>
                <i>|</i>
            </li>
            <li>
                <a href="requst.jsp">注册</a>
                <i>|</i>
            </li>
            <li>
                <a href="">消息通知</a>
                <i></i>
            </li>
            <li class="shopping">
                <a href="shoppingcar.jsp">
                    <span class="iconfont">&#xe600;</span>
                    <span>购物车</span>
                    <span>(0)</span>

                </a>
                <div class="gouwuwenben">
                    购物车中还没有商品，赶紧选购吧！
                </div>
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
                <c:forEach items="${glist}" var="g3">
                    <li class="xiaomi">
                        <a class="aaa" href="">${c1.name}</a>
                        <div class="item">
                            <div class="item-sun">
                                <ul class="clear-fix">
                                    <c:forEach items="${c1.chinder}" var="c2">
                                        <c:forEach items="${c2.chinder}" var="c3">
                                            <li>
                                                <a href="">
                                                    <img src="static/pic/${c3.pic}">
                                                    <p>${c3.name}</p>
                                                    <p>${g3.price}</p>
                                                </a>
                                                <div class="youtiao">
                                                </div>
                                            </li>
                                        </c:forEach>
                                    </c:forEach>
                                </ul>
                            </div>
                        </div>
                    </li>
                </c:forEach>
            </c:forEach>
            <li class="fuwu">
                <a class="aaa" href="">服务</a>
            </li>
            <li class="shequ">
                <a  class="aaa" href="">社区</a>
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
                    <c:forEach items="${c2.chinder}" var="c3">
                        <div>
                            <img src="static/pic/${c3.pic}">
                            <a href="" style="text-decoration:none;color: #212121" >${c3.name}</a>
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
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&w=1533&h=150&f=webp&q=90" alt="">
    </div>
    <div class="toub">
        <div>手机</div>
        <div class="gengduo">
            <p>查看更多</p>
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
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
            <li>
                <a href=""> <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=250&h=250&f=webp&q=90"
                        alt="">
                </a>
                <b style="display: block;font-size: 14px;">Note 10 Pro</b>
                <p style="font-size: 12px;color: #333;margin: 15px 0;">天玑1100年度旗舰芯，VC液冷散热</p>
                <span style="font-size: 14px;color: #ff6700;">1699 元起</span>
            </li>
        </ul>
    </div>
    <div class="toub">
        <div>手机</div>
        <div class="gengduo">
            <p>查看更多</p>
            <p>></p>
        </div>
    </div>

    <div class="boox">
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/116fc43816b87192be4e67cf762e8da5.jpeg?thumb=1&w=234&h=300&f=webp&q=90"
                 alt="">
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbdabe36b2d630d57a015e6fb5eb3ea.jpg?thumb=1&w=234&h=300&f=webp&q=90"
                 alt="">
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                 alt="">
            <p class="lst1">小米全面屏电视65英寸 E65X</p>
            <p class="lst2">全面屏设计</p>
            <span class="lst3">299元</span>
            <s>3299元</s>
        </div>
        <div>
            <nav class="liis">
                <section>
                    <h3>小米米家空气净化器 2S</h3>
                    <p>699元</p>
                </section>
                <section>
                    <img src="https://i8.mifile.cn/v1/a1/d5a39c5e-28e7-f4c1-57fd-59933f26032b!100x100.jpg" alt="">
                </section>
            </nav>
            <nav class="liis">
                <section>
                    <h3>浏览更多</h3>

                </section>
                <section>
                    <svg t="1625491320667" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="8326" width="48" height="48">
                        <path
                                d="M48.614141 512.514586C48.614141 256.995556 256.478384 49.131313 512.003879 49.131313c255.51903 0 463.38198 207.864242 463.38198 463.383273 0 255.525495-207.864242 463.388444-463.38198 463.388444C256.478384 975.904323 48.614141 768.040081 48.614141 512.514586L48.614141 512.514586zM909.191758 512.514586c0-219.015758-178.173414-397.186586-397.186586-397.186586-219.020929 0-397.193051 178.172121-397.193051 397.186586 0 219.019636 178.172121 397.191758 397.193051 397.191758C731.018343 909.707636 909.191758 731.535515 909.191758 512.514586L909.191758 512.514586zM567.474424 701.247354l165.761293-163.939556c9.797818-9.667232 12.249212-23.964444 7.378747-35.979636-0.297374-0.757657-1.025293-1.353697-1.387313-2.085495-1.521778-3.075879-3.176727-6.156929-5.72897-8.737616-0.028444-0.029737-0.065939-0.029737-0.094384-0.065939-0.036202-0.029737-0.036202-0.067232-0.067232-0.100848L568.962586 325.510465c-12.907313-12.944808-33.857939-12.974545-46.796283-0.071111-6.491798 6.454303-9.733172 14.964364-9.733172 23.434343 0 8.442828 3.206465 16.914101 9.662061 23.368404l106.843798 107.177374L313.407354 479.419475c-18.302707 0-33.101576 14.828606-33.101576 33.096404 0 18.27297 14.797576 33.101576 33.101576 33.101576l317.287434 0-109.756768 108.56598c-6.556444 6.454303-9.830141 14.995394-9.830141 23.53002 0 8.409212 3.176727 16.818424 9.566384 23.272727C533.513051 713.990465 554.467556 714.121051 567.474424 701.247354L567.474424 701.247354zM567.474424 701.247354"
                                p-id="8327" fill="#FF6700"></path>
                    </svg>
                </section>
            </nav>
        </div>
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
<!-- <section class="section">

    <div class="section-leftbox">
        <ul class="leftbox-ul">
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>手机</span>
                    <span class="iconfont">&#xe630;</span>
                    <div class="yincangdiv">
                        <ul></ul>
                    </div>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>电视</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>笔记本 平板</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>家电</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>出行穿戴</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>智能 路由器</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>电源 配件</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>健康 儿童</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>耳机 音箱</span>
                    <span class="iconfont">&#xe630;</span>
                </a>
            </li>
            <li class="leftbox-ul-li">
                <a href="" class="leftbox-ul-li-a">
                    <span>生活 箱包</span>
                    <span class="iconfont">&#xe630;</span>

                </a>
            </li>

        </ul>
    </div>
    <div class="section-rightbox">
        <span></span>
        <div>
            <img src="" alt="">
        </div>
        <span></span>
    </div>
</section> -->
</body>

</html>