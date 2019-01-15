<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>
          <div class="check">
            <input type="checkbox" class="input_check checkall">
            <label></label>
          </div>
        </th>
        <th>用户ID</th>
        <th>用户名</th>
        <th>积分</th>
        <th>浏览(条)</th>
        <th>购物(比)</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr class="odd">
        <td>
          <div class="check">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>4543232</td>
        <td>花海iatiant</td>
        <td><a href="javascript:;" class="jifen">45</a></td>
        <td><a href="javascript:;">11</a></td>
        <td><a href="javascript:;">45</a></td>
        <td>
          <a href="javascript:;" title="删除" class="btn btn-xs btn-warning">
            <img src="../../assets/img/res9.png">
          </a>
        </td>
      </tr>
      <tr class="even">
        <td>
          <div class="check">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>4543232</td>
        <td>梅毒</td>
        <td><a href="javascript:;" class="jifen">45</a></td>
        <td><a href="javascript:;">11</a></td>
        <td><a href="javascript:;">45</a></td>
        <td>
          <a href="javascript:;" title="删除" class="btn btn-xs btn-warning"><img src="../../assets/img/res9.png"></a>
        </td>
      </tr>
      <tr class="odd">
        <td>
          <div class="check">
            <input type="checkbox" class="input_check subcheck">
            <label></label>
          </div>
        </td>
        <td>4543232</td>
        <td>张小泉</td>
        <td><a href="javascript:;" class="jifen">245</a></td>
        <td><a href="javascript:;">131</a></td>
        <td><a href="javascript:;">45</a></td>
        <td>
          <a href="javascript:;" title="删除" class="btn btn-xs btn-warning"><img src="../../assets/img/res9.png"></a>
        </td>
      </tr>
      <tr class="even">
        <td>
          <div class="check"><input type="checkbox" class="input_check subcheck"><label></label></div>
        </td>
        <td>4577566</td>
        <td>花海iatiant</td>
        <td><a href="javascript:;" class="jifen">3434</a></td>
        <td><a href="javascript:;">3434</a></td>
        <td><a href="javascript:;">34</a></td>
        <td>
          <a href="javascript:;" title="删除" class="btn btn-xs btn-warning"><img src="../../assets/img/res9.png"></a>
        </td>
      </tr>
      </tbody>
    </table>
    <!-- 确定要删除吗 -->
    <div class="layui-layer-dialogpp drag" v-drag>
      <div class="layui-layer-titlep">信息</div>
      <span class="layui-layer-setwindp">
            <a href="javascript:;" class="layui-layer-closep closepp"><img src="../../assets/img/res8.png" alt=""></a>
        </span>
      <div class="layui-layer-paddingp">
        确定要删除吗?
      </div>
      <div class="layui-layer-btnp">
        <a href="javascript:;" class="layui-layer-btn6 deleteken">确定</a>
        <a href="javascript:;" class="layui-layer-btn7 shanqu">取消</a>
      </div>
    </div>
    <!-- 已删除 -->
    <div class="shanchu">
      <a href="#" class="shanchus">
        <img src="../../assets/img/res_l.png">
        <span>已删除！</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightMemberCont",
      directives:{
        drag(el,bindings){
          el.onmousedown = function(e){
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e){
              el.style.left = e.pageX - disx+'px';
              el.style.top = e.pageY - disy+'px';
            }
            document.onmouseup = function(){
              document.onmousemove = document.onmouseup = null;
            }
          }
        }
      },
      methods:{
        select(){
          $(".checkall")[0].onclick=function () {
            var ischecked= $(".checkall")[0].checked;
            // console.log(ischecked)
            for( let i=0;i<$(".subcheck").length;i++){
              $(".subcheck")[i].checked=ischecked;
            }
          }
        }
      },
      mounted() {
        this.select();
        //删除用户
        let lengthh = $(".btn-warning").length;
        let countt = 0;
        let indexs = "";
        $(".btn-warning").each(function () {
          $(this).attr({"indexs":countt});
          countt++;
        });
        $('.table tbody tr').each(function () {
          $(this).attr({"indexs":countt});
          countt++;
        });

        $('.btn-warning').click(function () {
          indexs = $(this).attr("indexs");
          $('.layui-layer-dialogpp').show();
          $('.layui-layer-shade').show();
          $('.deleteken').click(function () {
            $('.layui-layer-dialogpp').hide();
            $('.layui-layer-shade').hide();
            $('.table tbody tr').eq(indexs).hide();
            $('.shanchu').show();
            setInterval(function () {
              $('.shanchu').hide();
            },2000);
          })
          $('.shanqu').click(function () {
            $('.layui-layer-dialogpp').hide();
            $('.layui-layer-shade').hide();
          })
          $('.closepp').click(function () {
            $('.layui-layer-dialogpp').hide();
            $('.layui-layer-shade').hide();
          })
        })

        //积分获取记录
        $('.jifen').click(function () {
          $('.layui-layer-page').show();
          $('.layui-layer-shade').show();
        })
        //积分close
        $('.jiclose').click(function () {
          $('.layui-layer-page').hide();
          $('.layui-layer-shade').hide();
        })
      }
    }
</script>

<style scoped>

  input[type="text"]{
    color: rgb(133, 133, 133);
    background-color: rgb(255, 255, 255);
    margin-left: 10px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    transition-duration: 0.1s;
    box-shadow: none !important;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(213, 213, 213);
    border-image: initial;
    padding: 5px 4px;
    border-radius: 0px !important;
  }
  .search_style .search_content li .btn_search {
    height: 32px;
    line-height: 32px;
    font-family: "Microsoft YaHei";
    width: 60px;
    text-align: center;
    color: rgb(255, 255, 255);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 3px;
    background: linear-gradient(rgb(59, 152, 214) 0px, rgb(25, 126, 193) 100%) repeat-x rgb(42, 139, 204) !important;
    background-repeat: repeat-x !important;
  }
  .border {
    height: 55px;
    line-height: 44px;
    margin-bottom: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    padding: 5px;
  }
  .border span {
    display: block;
    height: 100%;
  }
  .r_f {
    float: right;
    font-size: 14px;
  }
  .btn-danger{
    background-color: rgb(209, 91, 71);
    border-color: rgb(209, 91, 71);
  }
  .btn-danger:hover{
    background-color: #b74635;
  }
  .btn{
    display: inline-block;
    font-family: "Microsoft YaHei";
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    color: rgb(255, 255, 255) !important;
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px !important;
    background-image: none !important;
    box-shadow: none !important;
    padding: 0 10px;
    border-style: solid;
    border-image: initial;
    transition: all 0.15s ease 0s;
    border-radius: 3px;
    margin-bottom: 0px;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    user-select: none;
    margin-top: -5px;
  }
  .imgs{
    margin-bottom: 5px;
  }
  .row::before{
    display: table;
    content: " ";
  }
  .row::after {
    display: table;
    content: " ";
    clear: both;
  }
  .dataTables_wrapper .row:first-child {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .col-sm-6 {
    width: 50%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .dataTables_wrapper label {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
    vertical-align: middle;
  }
  .dataTables_wrapper select {
    margin: 0px 4px 4px;
    width: 70px;
    height: 25px;
    padding: 2px 3px;
    line-height: 30px;
    color: rgb(133, 133, 133);
    background-color: rgb(255, 255, 255);
    border-radius: 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(213, 213, 213);
    outline: 0;
  }
  select option{
    padding: 3px 4px;
  }
  select:focus{
    border-color:#f59942;
  }
  .dataTables_filter {
    text-align: right;
  }
  .dataTables_wrapper label {
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
  }
  input[type="search"]{
    color: rgb(133, 133, 133);
    background-color: rgb(255, 255, 255);
    margin-left: 10px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(213, 213, 213);
    padding: 5px 4px;
    outline: 0;
  }
  input[type="search"]:focus{
    border-color:#f59942;
  }
  .dataTables_wrapper .row:first-child + .table {
    font-family: 新宋体;
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  .table{
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0px;
    max-width: 100%;
    background-color: transparent;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .table thead tr {
    color: rgb(112, 112, 112);
    font-weight: normal;
    background: repeat-x rgb(242, 242, 242);
    background-repeat: repeat-x;
  }
  .table thead tr th {
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
    border-color: rgb(221, 221, 221);
    color: rgb(48, 126, 204);
  }
  .table thead tr th:hover{
    color: #307ecc!important;
  }
  .table > thead > tr > th {
    border-bottom-width: 1px;
  }
  .table > thead > tr > th{
    border-width: 1px;
    border-style: solid;
    border-image: initial;
  }
  .table thead > tr > th{
    line-height: 1.42857;
    padding: 8px;
  }
  .table thead tr th:first-child {
    border-left-color: rgb(221, 221, 221);
    width: 37px;
  }
  .table thead tr th:nth-child(2){
    width: 98px;
    background-image: linear-gradient(rgb(239, 243, 248) 0px, rgb(227, 231, 237) 100%);
    background-repeat: repeat-x;
    cursor: pointer;
  }
  .table thead tr th:nth-child(3){
    width: 127px;
  }
  .table thead tr th:nth-child(4){
    width: 98px;
  }
  .table thead tr th:nth-child(5){
    width: 156px;
    color: rgb(112, 112, 112);
    cursor: pointer;
  }
  .table thead tr th:nth-child(6){
    width: 156px;
    color: rgb(112, 112, 112);
    cursor: pointer;
  }
  .table thead tr th:nth-child(7){
    width: 347px;
  }
  .check{
    width: 18px;
    margin-left: 3px;
  }
  .input_check {
    opacity: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }
  .check label{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../assets/img/res_wei.png) no-repeat;
    background-size: 18px 18px;
    margin-top: 2px;
  }
  .check .input_check:checked+label {
    background: url(../../assets/img/res_xuan.png)no-repeat;
    background-size: 18px 18px;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .table tbody tr td {
    overflow-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
    font-family: 新宋体;
    text-align: center;
  }
  .odd{
    background-color: rgb(249, 249, 249);
  }
  .even:hover{
    background-color: rgb(249, 249, 249);
  }
  .table>tbody>tr>td{
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
  }
  .table tbody > tr > td{
    line-height: 1.42857;
    padding: 8px;
  }
  .table tbody tr td a {
    color: rgb(255, 102, 0);
  }
  .table tbody tr td a:hover{
    text-decoration: underline;
  }
  .btn-warning{
    background-color: rgb(255, 183, 82);
    border-color: rgb(255, 183, 82);
  }
  .btn-warning:hover{
    background-color: #e59729;
  }
  .btn-xs {
    font-size: 12px;
    line-height: 1.5;
    border-width: 3px;
  }
  .NumberOfPages{
    padding-top: 12px;
    padding-bottom: 12px;
    margin: 0;
  }
  .numberpages{
    width:50%;
    float: left;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .numberpages div{
    font-size: 14px;
  }
  .pageright{
    text-align: right;
  }
  .pageright ul{
    margin: 0 12px;
    display: inline-block;
    padding-left: 0;
    border-radius: 4px;
  }
  .pageright ul>li{
    display: inline;
  }
  .pageright ul li>a{
    background-color: #f9f9f9;
    margin-left: 0;
    color: #999;
    margin: 0 -1px 0 0;
    border-width: 1px;
    border-radius: 0!important;
    height: 32px;
    line-height: 32px;
    padding: 0px 10px;
    text-align: center;
    float: left;
    border: 1px solid #ddd;
  }
  .prev,.next{
    cursor: not-allowed;
  }
  .pageright ul li a.active{
    background-color: #6faed9;
    border-color: #6faed9;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
  }
  /* 遮罩层 */
  .layui-layer-shade{
    z-index: 1222;
    background-color: #000;
    opacity: 0.3;
    top: 79px;
    right: 0;
    width: 80%;
    height: 100%;
    position: fixed;
    display: none;
  }
  /* 积分获取记录 */
  .layui-layer-page{
    z-index: 1223;
    width: 800px;
    height: 400px;
    position: fixed;
    top: 120px;
    left:430px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    animation-fill-mode: both;
    animation-duration: .3s;
    display: none;
  }
  .layui-layer-title {
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
    cursor: move;
  }
  .layui-layer-setwin {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
  }
  .layui-layer-setwin a {
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
    display: inline-block;
  }
  .layui-layer-content{
    height: 358px;
    overflow: auto;
  }
  .layui-layer-wrap{
    padding: 10px;
  }
  /* 确定要删除吗 */
  .layui-layer-dialogpp{
    width: 260px;
    height: 154px;
    z-index: 9999999;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    border-radius: 2px;
    position: fixed;
    top: 150px;
    left: 50%;
    display: none;
  }
  .layui-layer-titlep{
    cursor: move;
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
  }
  .layui-layer-setwindp{
    position: absolute;
    right: 15px;
    top: 13px;
    line-height: initial;
  }
  .layui-layer-closep{
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-paddingp{
    padding: 20px;
    line-height: 24px;
    word-break: break-all;
    font-size: 14px;
    overflow: auto;
  }
  .layui-layer-dialogpp .layui-layer-btnp{
    padding-top: 10px;
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btnp .layui-layer-btn6 {
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-layer-btnp a {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    margin: 0 6px;
    padding: 0 15px;
    border: 1px solid #dedede;
    background-color: #f1f1f1;
    color: #333;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    vertical-align: top;
  }
  /* 已删除 */
  .shanchu{
    position: fixed;
    z-index: 9999999;
    width: 178px;
    height: 64px;
    left: 53%;
    top: 46%;
    background-color: #fff;
    pointer-events: auto;
    border: 1px solid #d3d4d3;
    border-radius: 2px;
    line-height: 64px;
    display: none;
  }
  .shanchus{
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 16px;
    font-size: 12px;
    color: #393939;
  }
  .shanchu .shanchus img{
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
    float: left;
  }
  .shanchu .shanchus span{
    display: block;
    float: left;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  /*面包屑*/
  .bread{
    color: #333333;
  }
  .bread>*:hover{
    text-decoration: underline;
    color: blue;
  }
  .bread a {
    color: #333333;
  }
</style>
