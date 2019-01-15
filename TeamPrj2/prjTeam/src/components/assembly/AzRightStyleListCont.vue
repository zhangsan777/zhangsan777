<template>
<div class="management">
  <div class="select">
    <label>每页显示条数</label>
    <select>
      <option value="10">10</option>
      <option value="20">25</option>
      <option value="30">50</option>
      <option value="40">100</option>
    </select>
  </div>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>排序</th>
      <th>栏目名称</th>
      <th>等级</th>
      <th>说明</th>
      <th>添加时间</th>
      <th>状态</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>产品管理</td>
      <td>一级</td>
      <td>商城产品管理,包含产品列表,品牌列表,添加产品,添加品牌,分类管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>图片管理</td>
      <td>一级</td>
      <td>商城广告图片管理商城广告图片管理商城广告图片管理商城广告图片管理	</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>

        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>交易管理</td>
      <td>一级</td>
      <td>商城订单,交易信息,金额管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>

        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
      <td>一级</td>
      <td>支付管理</td>
      <td>商城订单,交易信息,金额管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>

        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>会员管理</td>
      <td>一级</td>
      <td>商城订单,交易信息,金额管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>

        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>6</td>
      <td>店铺管理</td>
      <td>一级</td>
      <td>商城订单,交易信息,金额管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>

        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>7</td>
      <td>消息管理</td>
      <td>一级</td>
      <td>商城订单,交易信息,金额管理</td>
      <td>2016-7-23</td>
      <td><span class="already">已启用</span></td>
      <td>
        <a href="javascript:;" class="btn btn-xs btn-success" title="启用"  @click="openMask"><img src="../../assets/img/dui.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-info" title="编辑"  @click="openMask"><img src="../../assets/img/resbian.png"></a>
        <a href="javascript:;" class="btn btn-xs btn-warning" title="删除"  @click="openMask"><img src="../../assets/img/resshan.png"></a>
      </td>
    </tr>
    </tbody>
  </table>
  <div class="NumberOfPages">
    <div class=numberpages>
      <div>第 1 到 7 条记录，共 7 条</div>
    </div>
    <div class="numberpages">
      <div class="pageright">
        <ul>
          <li><a href="javascript:;" class="prev">上一页</a></li>
          <li><a href="javascript:;" class="active">1</a></li>
          <li><a href="javascript:;" class="next">下一页</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "AzRightStyleListCont",
    data(){
      return{
        sendVal: false,
      }
    },
    methods:{
      openMask(index){
        this.sendVal = true;
      },
      clickCancel(){

      },
      clickDanger(){

      },
      clickConfirm(){

      },
      closeMask(){
        this.showMask = false;
      }
    }

  }
  </script>

  <style scoped>
  .management{
    padding: 20px 15px 60px;
    width: 100%;
    overflow-y: auto;
  }
  .management::-webkit-scrollbar{
    display: none;
  }
  .select{
    color: #696969;
    font-size: 14px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  select{
    height: 25px;
    padding: 2px 3px;
    margin: 0 4px;
    width: 70px;
    outline:none;
    color: #696969;
  }
  select:focus{
    border: 1px solid #f59942;
  }
  table{
    border-top: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    font-family: "新宋体";
    margin-bottom: 0;
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
  }
  table thead tr{
    color: #707070;
    font-weight: normal;
    background: #f2f2f2;
    background-repeat: repeat-x;
  }
  table thead tr th{
    width: 62px;
    vertical-align: middle;
    text-align: center;
    border-top: 0;
    color: #307ecc;
    border-color: #DDD;
    font-weight: bold;
    border-bottom-width: 1px;
    padding: 8px;
    line-height: 1.428571429;
    margin: 0px;
    outline: 0px;
  }
  th:first-child {
    border-left:1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  th:nth-child(3){
    border-left:1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  th:nth-child(5){
    border-left:1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  th:nth-child(7){
    border-left:1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  th:nth-child(8){
    border-right: 1px solid #ddd;
  }
  th:hover{
    color: #547ea8;
  }
  table tbody tr td{
    word-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
    font-family: "新宋体";
    text-align: center;
    border: 1px solid #ddd;
    padding: 8px;
    line-height: 1.428571429;
    margin: 0px;
    outline: 0px;
  }
  table tbody tr td:last-child{
    width: 150px;
  }
  table tbody tr:nth-child(2n+1){
    background: #f9f9f9;
  }
  table tbody tr:hover{
    background: #f2f2f2;
  }
  .already{
    font-size: 12px;
    line-height: 1.15;
    height: 20px;
    background-color: #82af6f;
    border-radius: 0;
    text-shadow: none;
    font-weight: normal;
    display: inline-block;
    padding: .2em .6em .3em;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
  }
  .btn-success, .btn-success:focus {
    background-color: #87b87f;
    border-color: #87b87f !important;
  }
  .btn-success:hover{
    background-color: #629b58;
    border-color: #87b87f;
  }
  .btn-xs {
    border-width: 3px;
    font-size: 12px;
    line-height: 1.5;
  }
  .btn {
    padding: 0px 8px;
    display: inline-block;
    font-family: "Microsoft YaHei";
    color: #FFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25) !important;
    background-image: none !important;
    border: 5px solid #FFF;
    box-shadow: none !important;
    transition: all ease .15s;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 3px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    margin-bottom: 0;
    text-align: center;
    white-space: nowrap;
    font-weight: normal;
  }
  .btn-info, .btn-info:focus {
    background-color: #6fb3e0;
    border-color: #6fb3e0;
  }
  .btn-info:hover{
    background-color: #4f99c6;
    border-color: #6fb3e0;
  }
  .btn-warning, .btn-warning:focus {
    background-color: #ffb752;
    border-color: #ffb752;
  }
  .btn-warning:hover{
    background-color: #e59729;
    border-color: #ffb752;
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
  </style>


<style scoped>
  .Payment{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .Payment::-webkit-scrollbar{
    display: none;
  }
  .defray_style{
    width: 100%;
  }
  .alert_danger{
    font-size: 14px;
    border-radius: 0;
    text-align: center;
    margin-top: 20px;
    color: #b94a48;
    background-color: #f2dede;
    border-color: #eed3d7;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }
  .alert_danger a{
    display: block;
    width: 12.5px;
    height: 16px;
    cursor: pointer;
    float: right;
    line-height: 1;
    color: #000;
  }
  .border{
    border: 1px solid #ddd;
    padding: 5px;
    height: 50px;
    line-height: 36px;
    margin-bottom: 20px;
  }
  .border:before{
    display: table;
    content: " ";
  }
  .border:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .border .l_f{
    display: block;
    height: 100%;
    float: left;
  }
  .btn-primary{
    background-color: #428bca;
    padding: 3px 10px;
    display: inline-block;
    color: #FFF!important;
    border: 5px solid #428bca;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.428571429;
  }
  .defray_list{
    border: 1px solid #dddddd;
  }
  .defray_list:before{
    display: table;
    content: " ";
  }
  .defray_list:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .type_title{
    padding-left: 20px;
    font-size: 18px;
    border-bottom: 1px solid #dddddd;
    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;
    height: 40px;
    line-height: 40px;
    color: #333333;
    width: 100%;
  }
  .defray_content{
    margin: 5px;
  }
  .defray_content:before{
    display: table;
    content: " ";
  }
  .defray_content:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .defray_info{
    width: 270px;
    font-size: 18px;
    border: 1px solid #dddddd;
    float: left;
    margin: 5px;
    text-align: center;
    height: 396px;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .defray_name{
    height: 40px;
    line-height: 40px;
    background-color: #00a5e5;
    color: #ffffff;
  }
  .name_logo{
    height: 161px;
  }
  img{
    display: inline-block;
    vertical-align: middle;
  }
  .description{
    padding: 10px;
    font-size: 14px;
    color: #999;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    height: 90px;
    line-height: 24px;
    overflow: hidden;
  }
  .select{
    padding: 10px 0px;
    border-bottom: 1px solid #dddddd;
  }
  .spans{
    font-size: 14px;
    position: relative;
  }
  .Checkbox {
    position: absolute;
    visibility: hidden;
  }
  #myCheck + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox1 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck1 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck1 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck1:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .operating{
    padding: 10px 0px;
  }
  .btn-danger{
    padding: 3px 10px;
    display: inline-block;
    color: #FFF!important;
    background-image: none!important;
    border: 5px solid #d15b47;
    background-color: #d15b47;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.428571429;
    text-align: center;
  }
  .btn-success{
    padding: 3px 10px;
    display: inline-block;
    color: #FFF!important;
    border: 5px solid #87b87f;
    background-color: #87b87f;
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.428571429;
    text-align: center;
  }
  .Checkbox2 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck2 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck2 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck2:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox3 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck3 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck3 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck3:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox4 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck4 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck4 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck4:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox5 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck5 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck5 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck5:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox6 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck6 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck6 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck6:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .Checkbox7 {
    position: absolute;
    visibility: hidden;
  }
  #myCheck7 + label{
    border-radius: 50%;
    border: 1px solid #b9b9b9;
    width: 19px;
    height: 19px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    outline: 0;
    cursor: pointer;
  }
  #myCheck7 + label:hover{
    border: 1px solid #f59942;
  }
  #myCheck7:checked + label:after{
    content:"\2714";
    font-size: 12px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color:#32a3ce;
    color: #32a3ce;
    position: absolute;
    top: 4px;
    left: 2px;
  }
  .btn-danger:hover{
    background-color: #b94a48;
  }
  .btn-primary:hover{
    background-color: #1b6aaa;
  }
  .btn-success:hover{
    background-color: #629b58;
  }
  .layui-layer-shade{
    z-index: 1222;
    background-color: #000;
    opacity: 0.3;
    position: fixed;
    top: 79px;
    right: 0;
    width: 80%;
    height: 100%;
    display: none;
  }
  .layui-anim{
    position: fixed;
    z-index: 9999999;
    width: 830px;
    left: 30%;
    top: 15%;
    background-color: #fff;
    display: none;
  }
  .layui-layer-title{
    cursor: move;
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
  }
  .layui-layer-setwin{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
  }
  .layui-layer-setwin a{
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
    display: inline-block;
    vertical-align: top;
    color: #333;
  }
  .layui-layer-setwin .layui-layer-min cite {
    position: absolute;
    width: 14px;
    height: 2px;
    left: 0;
    top: 50%;
    margin-top: -1px;
    background-color: #2E2D3C;
    cursor: pointer;
  }
  cite {
    font-style: normal;
  }
  .layui-layer-setwin a img{
    margin-bottom: 1px;
  }
  .payment_list{
    display: block;
    border: 1px solid #dddddd;
    padding: 10px;
    margin: 15px;
    width: 800px;
    height: 87px;
  }
  .payment_list:before{
    display: table;
    content: " ";
  }
  .payment_list li{
    float: left;
    width: 150px;
    margin-bottom: 10px;
  }
  .checks{
    width: 18px;
    margin-right: 5px;
    margin-top: 14px;
    float: left;
  }
  .input_check {
    opacity: 0;
    width: 20px;
    height: 20px;
    position: absolute;
  }
  .checks label{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../../assets/img/res_wei.png) no-repeat;
    background-size: 20px 20px;
    margin-top: 2px;
    margin-right: 13px;
  }
  .checks .input_check:checked+label {
    background: url(../../assets/img/res_xuan.png)no-repeat;
    background-size: 20px 20px;
  }
  .payment_list li img{
    display: inline-block;
    width: 120px;
    height: 55px;
  }
  .add_content{
    border: 1px solid #dddddd;
    padding: 10px;
    margin: 0px 15px;
    display: none;
  }
  .add_content:before{
    display: table;
    content: " ";
  }
  .clearfix{
    display: block;
    margin-bottom: 10px;
    float: none;
    width: 100%;
    height: 100%;
  }
  .clearfix:before{
    display: table;
    content: " ";
  }
  .clearfix:after {
    display: block;
    content: ".";
    height: 0;
    visibility: hidden;
    clear: both;
    font-size: 0;
    line-height: 0;
  }
  .label_name{
    float: left;
    width: 100px;
    text-align: right;
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
    font-weight: normal;
    font-size: 14px;
  }
  .add_content .clearfix span{
    float: left;
    display: block;
    width: 500px;
    line-height: 32px;
    font-size: 14px;
  }
  input[type="text"]{
    border-radius: 0!important;
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    margin-left: 10px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
    outline: 0;
  }
  .add_content .clearfix span input:focus{
    border-color: #f59942;
  }
  .form-control{
    width: 300px;
    margin-left: 10px;
    padding: 4px 6px;
    height: 32px;
    box-shadow: none!important;
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 0;
    display: block;
    font-size: 14px;
    line-height: 1.428571429;
    vertical-align: middle;
    outline: 0;
  }
  .add_content .clearfix span select:focus{
    border-color: #f59942;
  }
  .form-textarea{
    width: 400px;
    height: 100px;
    resize: none;
    margin-left: 10px;
    border-radius: 0!important;
    color: #858585;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    padding: 5px 4px;
    line-height: 1.2;
    font-size: 14px;
    font-family: inherit;
  }
  em{
    font-style: normal;
    font-size: 14px;
  }
  .layui-layer-btn{
    padding-top: 10px;
    text-align: center;
    padding: 0 10px 12px;
  }
  .layui-layer-btn a{
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
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    text-decoration: none;
  }
  .layui-layer-btn .layui-layer-btn0{
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
  }
  .layui-anims{
    position: fixed;
    z-index: 9999999;
    width: 180px;
    height: 42px;
    left: 27%;
    top: 32%;
    background-color: #fff;
    display: none;
  }
  .layui-layer-titles{
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    background-color: #F8F8F8;
    border-radius: 2px 2px 0 0;
  }
  .layui-layer-setwins{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 0;
    line-height: initial;
  }
  .layui-layer-setwins a {
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-setwins a img{
    margin-bottom: 8px;
  }
  .payment_checkbox{
    display: block;
    height:300px;
    overflow-y: auto;
  }
  /* 提示框 */
  .layui-layer-dialog{
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
  .layui-layer-dialog1{
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
  .layui-layer-titlea{
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
  .layui-layer-setwind{
    position: absolute;
    right: 15px;
    top: 13px;
    line-height: initial;
  }
  .layui-layer-close1{
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 12px;
  }
  .layui-layer-padding{
    padding: 20px 20px 20px 55px;
    text-align: left;
    line-height: 24px;
    word-break: break-all;
    font-size: 14px;
    overflow: auto;
  }
  .layui-layer-padding img{
    position: absolute;
    top: 60px;
    left: 15px;
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: top;
  }
  .layui-layer-btns{
    text-align: center;
    padding: 0 10px 12px;
    pointer-events: auto;
  }
  .layui-layer-btn3{
    border-color: #4898d5;
    background-color: #2e8ded;
    color: #fff;
    height: 36px;
    line-height: 36px;
    margin: 0 6px;
    padding: 0 15px;
    border: 1px solid #dedede;
    border-radius: 3px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    vertical-align: top;
  }
</style>

