<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="static/assets/plugin/layui/css/layui.css">
    <link rel="stylesheet" href="static/assets/plugin/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="static/assets/css/animate.min.css">
    <link rel="stylesheet" href="static/assets/css/global.min.css">
    <link rel="stylesheet" href="static/assets/css/list.min.css">
</head>
<body>

<div id="main-wrap" class="animated fadeIn">
    <div class="main-title">
        <h1>列表的标题</h1>
        <div class="toolbar">
            <button id="batch_delete_btn" class="layui-btn layui-btn-danger layui-btn-small do-action" style="display: none;" data-type="doBatchDelete">
                <i class="layui-icon">&#xe640;</i> 批量删除
            </button>
            <button class="layui-btn layui-btn-small do-action" data-type="doAdd" data-href="form.html">
                <i class="layui-icon">&#xe608;</i> 添加信息
            </button>
        </div>
    </div>
    <hr>
    <div class="main-content">
        <!--<blockquote class="layui-elem-quote">这里可以写列表的说明，没有就删了。</blockquote>-->
        <!-- table的class里添加table-zebra样式可将表格改为斑马线样式 -->
        <table class="table-sort table-box dataTable">
            <thead>
                <tr>
                    <th><input type="checkbox" class="icheck"></th>
                    <th>编号</th>
                    <th>名称</th>
                    <th>颜色</th>
                    <th>价格</th>
                    <th>配置</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">修改</a>————<a href="javascript:;">添加</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-check-circle" aria-hidden="true" style="font-size: 18px; color: green;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="uuid" class="icheck"></td>
                    <td>51458048c34ee30</td>
                    <td>admin</td>
                    <td>随風飞揚</td>
                    <td>326672861@qq.com</td>
                    <td>
                        <i class="fa fa-times-circle" aria-hidden="true" style="font-size: 18px; color: red;"></i>
                    </td>
                    <td>
                        <ul class="layui-nav" lay-filter="">
                            <li class="layui-nav-item">
                                <a href="javascript:;">操作</a>
                                <dl class="layui-nav-child">
                                    <dd><a href="javascript:;" class="do-action" data-type="doEdit" data-href="/form.html"><i class="layui-icon">&#xe642;</i> 编辑</a></dd>
                                    <dd><a href="javascript:;" class="do-action" data-type="doDelete" data-href="" data-value=""><i class="layui-icon">&#xe640;</i> 删除</a></dd>
                                </dl>
                            </li>
                        </ul>
                    </td>
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