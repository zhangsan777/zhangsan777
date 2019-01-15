<template>
  <div class="Payment">
    <div class="defray_style">
      <div class="border">
          <span class="l_f">
              <a href="#" class="btn-primary">
                  <img src="../../assets/img/res5.png" alt="">
                  &nbsp;添加支付方式
              </a>
          </span>
      </div>

    </div>
    <div class="layui-anim drag" v-drag>
      <div class="layui-layer-title">添加支付方式</div>
      <div class="layui-layer-content">
        <div class="add_payment_style">
          <form class="payment_checkbox">
            <ul class="payment_list">
              <li>
                <div class="checks">
                  <input type="checkbox" class="input_check firstinput">
                  <label></label>
                </div>
                <img src="../../assets/img/res-yinl.jpg" alt="">
              </li>
              <li>
                <div class="checks">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
                <img src="../../assets/img/res-yibaozf.jpg" alt="">
              </li>
              <li>
                <div class="checks">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
                <img src="../../assets/img/res-caifut.jpg" alt="">
              </li>
              <li>
                <div class="checks">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
                <img src="../../assets/img/res-weixin.jpg" alt="">
              </li>
              <li>
                <div class="checks">
                  <input type="checkbox" class="input_check">
                  <label></label>
                </div>
                <img src="../../assets/img/res-zhifb.jpg" alt="">
              </li>
            </ul>
            <div class="add_content">
              <ul>
                <li class="clearfix">
                  <label class="label_name">支付名称</label>
                  <span>
                    <input type="text" name="支付名称">
                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">支持交易货币</label>
                  <span style="margin-left:10px;">
                                        人民币
                                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">合作者身份</label>
                  <span>
                    <input type="text" name="合作者身份">
                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">交易安全校验码</label>
                  <span>
                    <input type="text" name="交易安全校验码">
                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">选择接口类型</label>
                  <span>
                  <select class="form-control">
                      <option value="">--选择接口类型--</option>
                      <option value="1">使用标准双接口</option>
                      <option value="2">使用担保交易接口</option>
                      <option value="3">使用即时到帐交易接口</option>
                  </select>
              </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">支付费率</label>
                  <span>
                    <input type="text" name="支付费率">%
                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">排序</label>
                  <span>
                    <input type="text" style="width: 80px;" placeholder="0">
                </span>
                </li>
                <li class="clearfix">
                  <label class="label_name">说明</label>
                  <span>
                    <textarea name="说明" class="form-textarea"></textarea>
                    <span style="margin-left:10px;">
                        剩余字数:
                        <em class="sy" style="color:red;">200</em>
                        字
                    </span>
                </span>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <span class="layui-layer-setwin">
        <a href="javascript:;" class="layui-layer-min"><cite></cite></a>
        <a href="javascript:;" class="bigdivclose"><img src="../../assets/img/res8.png" alt=""></a>
    </span>
      <div class="layui-layer-btn">
        <a href="javascript:;" class="layui-layer-btn0">确定</a>
        <a href="javascript:;" class="layui-layer-btn1">取消</a>
      </div>
    </div>
    <div class="layui-anims drag" v-drag>
      <div class="layui-layer-titles">添加支付方式</div>
      <span class="layui-layer-setwins">
        <a href="javascript:;" class="smalldiv"><img src="../../assets/img/res_big.png"></a>
        <a href="javascript:;" class="closediv"><img src="../../assets/img/res8.png"></a>
    </span>
    </div>
    <div class="layui-layer-shade"></div>
    <div class="layui-layer-dialog">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
            <a href="javascript:;" class="layui-layer-close1"><img src="../../assets/img/res8.png"></a>
        </span>
      <div class="layui-layer-padding">
        <img src="../../assets/img/res_jing.png">
        请选择所需要的支付方式！
      </div>
      <div class="layui-layer-btns">
        <a href="javascript:;" class="layui-layer-btn3">确定</a>
      </div>
    </div>
    <div class="layui-layer-dialog1">
      <div class="layui-layer-titlea">提示框</div>
      <span class="layui-layer-setwind">
                <a href="javascript:;" class="layui-layer-close1"><img src="../../assets/img/res8.png"></a>
            </span>
      <div class="layui-layer-padding">
        <img src="../../assets/img/res_jing.png">
        添加成功！
      </div>
      <div class="layui-layer-btns">
        <a href="javascript:;" class="layui-layer-btn3">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightPopopCont",
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
      mounted() {
        //点击close使得div消失
        $(".close").click(function () {
          $('.alert_danger').hide();
        })
        //点击使得弹出框出现
        $(".l_f").click(function () {
          $('.layui-layer-shade').show();
          $('.layui-anim').show();
          $('.layui-layer-btn0').click(function () {
            $('.layui-layer-dialog').show();
            $('.layui-layer-dialog  .layui-layer-btn3').click(function () {
              $('.layui-layer-dialog').hide();
            })
          })
        })
        //点击input是使得div显示
        $('.firstinput').click(function () {
          $('.add_content').toggle();
          $('.layui-layer-btn0').click(function () {
            $('.layui-layer-dialog1').show();
            $('.layui-layer-dialog1  .layui-layer-btn3').click(function () {
              $('.layui-layer-dialog1').hide();
              $('.layui-layer-shade').hide();
              $('.layui-anim').hide();
              $('.layui-layer-dialog').hide();
            })
          })
        })
        //点击小化
        $('.layui-layer-min').click(function () {
          $('.layui-anim').hide();
          $('.layui-anims').show();
        })
        //点击放大
        $('.smalldiv').click(function () {
          $('.layui-anim').show();
          $('.layui-anims').hide();
        })
        //小化时点击closediv消失
        $('.closediv').click(function () {
          $('.layui-anims').hide();
          $('.layui-layer-shade').hide();
        })
        //普通模式时点击close使得div消失
        $('.bigdivclose').click(function () {
          $('.layui-anim').hide();
          $('.layui-layer-shade').hide();
        })
        //点击取消的时候div消失
        $('.layui-layer-btn1').click(function () {
          $('.layui-anim').hide();
          $('.layui-layer-shade').hide();
        })
      }
    }
</script>

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
