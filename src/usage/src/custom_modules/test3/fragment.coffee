
fragment = '
<div class="container-fluid" key="0.0">
    <div class="col-xs-12" c-key="0.0">
        <div class="container-fluid" key="0.0.0">
            <table class="table table-hover table-condensed table-bordered">
                <thead>
                    <tr>
                        <th style="width:1rem" data-column="columns_x"><input title="全选" type="checkbox"></th>
                        <th data-column="columns_0">姓名1</th>
                        <th data-column="columns_1">年龄22</th>
                        <th data-column="columns_2">性别3</th>
                        <th data-column="columns_3">生日4</th>
                        <th data-column="columns_4">操作5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" align="center">无数据</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="clearfix row" key="0.0.1">
            <form class="form-horizontal">
                <div class="container-fluid" c-key="0.0.1">
                    <div class="form-group" key="0.0.1.0"> <label class="col-sm-3 control-label">用户名</label>
                        <div class="col-sm-8"> <input type="text" class="form-control" name="username" placeholder="输入提示"> </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="container-fluid" key="0.1">
    <div class="btn-toolbar" c-key="0.1">
        <div class="btn-group " key="0.1.0"> <a class="btn btn-primary" key="0.1.0.0">按钮</a> </div>
        <div class="btn-group " key="0.1.1"> <a class="btn btn-primary" key="0.1.1.0">按钮</a><a class="btn btn-primary" key="0.1.1.1">按钮</a> </div>
        <div class="btn-group " key="0.1.2"> <a class="btn btn-primary" key="0.1.2.0">按钮</a><a class="btn btn-primary" key="0.1.2.1">按钮</a> </div>
        <div class="btn-group " key="0.1.3"> <a class="btn btn-primary" key="0.1.3.0">提交form啦</a> </div>
        <div class="btn-group " key="0.1.4"> <a class="btn btn-primary" key="0.1.4.0">TABLE测试</a><a class="btn btn-primary" key="0.1.4.1">按钮</a><a class="btn btn-primary" key="0.1.4.2">按钮</a> </div>
    </div>
</div>';
module.exports =()-> $(fragment).clone();