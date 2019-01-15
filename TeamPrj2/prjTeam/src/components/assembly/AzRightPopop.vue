<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>弹出框组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" >
          <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-popop-cont></az-right-popop-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightPopopCont from "./AzRightPopopCont";
    export default {
        name: "AzRightPopop",
      components: {AzRightPopopCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"Payment\">\n" +
            "    <div class=\"defray_style\">\n" +
            "      <div class=\"border\">\n" +
            "          <span class=\"l_f\">\n" +
            "              <a href=\"#\" class=\"btn-primary\">\n" +
            "                  <img src=\"../../assets/img/res5.png\" alt=\"\">\n" +
            "                  &nbsp;添加支付方式\n" +
            "              </a>\n" +
            "          </span>\n" +
            "      </div>\n" +
            "\n" +
            "    </div>\n" +
            "    <div class=\"layui-anim drag\" v-drag>\n" +
            "      <div class=\"layui-layer-title\">添加支付方式</div>\n" +
            "      <div class=\"layui-layer-content\">\n" +
            "        <div class=\"add_payment_style\">\n" +
            "          <form class=\"payment_checkbox\">\n" +
            "            <ul class=\"payment_list\">\n" +
            "              <li>\n" +
            "                <div class=\"checks\">\n" +
            "                  <input type=\"checkbox\" class=\"input_check firstinput\">\n" +
            "                  <label></label>\n" +
            "                </div>\n" +
            "                <img src=\"../../assets/img/res-yinl.jpg\" alt=\"\">\n" +
            "              </li>\n" +
            "              <li>\n" +
            "                <div class=\"checks\">\n" +
            "                  <input type=\"checkbox\" class=\"input_check\">\n" +
            "                  <label></label>\n" +
            "                </div>\n" +
            "                <img src=\"../../assets/img/res-yibaozf.jpg\" alt=\"\">\n" +
            "              </li>\n" +
            "              <li>\n" +
            "                <div class=\"checks\">\n" +
            "                  <input type=\"checkbox\" class=\"input_check\">\n" +
            "                  <label></label>\n" +
            "                </div>\n" +
            "                <img src=\"../../assets/img/res-caifut.jpg\" alt=\"\">\n" +
            "              </li>\n" +
            "              <li>\n" +
            "                <div class=\"checks\">\n" +
            "                  <input type=\"checkbox\" class=\"input_check\">\n" +
            "                  <label></label>\n" +
            "                </div>\n" +
            "                <img src=\"../../assets/img/res-weixin.jpg\" alt=\"\">\n" +
            "              </li>\n" +
            "              <li>\n" +
            "                <div class=\"checks\">\n" +
            "                  <input type=\"checkbox\" class=\"input_check\">\n" +
            "                  <label></label>\n" +
            "                </div>\n" +
            "                <img src=\"../../assets/img/res-zhifb.jpg\" alt=\"\">\n" +
            "              </li>\n" +
            "            </ul>\n" +
            "            <div class=\"add_content\">\n" +
            "              <ul>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">支付名称</label>\n" +
            "                  <span>\n" +
            "                    <input type=\"text\" name=\"支付名称\">\n" +
            "                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">支持交易货币</label>\n" +
            "                  <span style=\"margin-left:10px;\">\n" +
            "                                        人民币\n" +
            "                                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">合作者身份</label>\n" +
            "                  <span>\n" +
            "                    <input type=\"text\" name=\"合作者身份\">\n" +
            "                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">交易安全校验码</label>\n" +
            "                  <span>\n" +
            "                    <input type=\"text\" name=\"交易安全校验码\">\n" +
            "                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">选择接口类型</label>\n" +
            "                  <span>\n" +
            "                  <select class=\"form-control\">\n" +
            "                      <option value=\"\">--选择接口类型--</option>\n" +
            "                      <option value=\"1\">使用标准双接口</option>\n" +
            "                      <option value=\"2\">使用担保交易接口</option>\n" +
            "                      <option value=\"3\">使用即时到帐交易接口</option>\n" +
            "                  </select>\n" +
            "              </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">支付费率</label>\n" +
            "                  <span>\n" +
            "                    <input type=\"text\" name=\"支付费率\">%\n" +
            "                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">排序</label>\n" +
            "                  <span>\n" +
            "                    <input type=\"text\" style=\"width: 80px;\" placeholder=\"0\">\n" +
            "                </span>\n" +
            "                </li>\n" +
            "                <li class=\"clearfix\">\n" +
            "                  <label class=\"label_name\">说明</label>\n" +
            "                  <span>\n" +
            "                    <textarea name=\"说明\" class=\"form-textarea\"></textarea>\n" +
            "                    <span style=\"margin-left:10px;\">\n" +
            "                        剩余字数:\n" +
            "                        <em class=\"sy\" style=\"color:red;\">200</em>\n" +
            "                        字\n" +
            "                    </span>\n" +
            "                </span>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "          </form>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "      <span class=\"layui-layer-setwin\">\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-min\"><cite></cite></a>\n" +
            "        <a href=\"javascript:;\" class=\"bigdivclose\"><img src=\"../../assets/img/res8.png\" alt=\"\"></a>\n" +
            "    </span>\n" +
            "      <div class=\"layui-layer-btn\">\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn0\">确定</a>\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn1\">取消</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <div class=\"layui-anims drag\" v-drag>\n" +
            "      <div class=\"layui-layer-titles\">添加支付方式</div>\n" +
            "      <span class=\"layui-layer-setwins\">\n" +
            "        <a href=\"javascript:;\" class=\"smalldiv\"><img src=\"../../assets/img/res_big.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"closediv\"><img src=\"../../assets/img/res8.png\"></a>\n" +
            "    </span>\n" +
            "    </div>\n" +
            "    <div class=\"layui-layer-shade\"></div>\n" +
            "    <div class=\"layui-layer-dialog\">\n" +
            "      <div class=\"layui-layer-titlea\">提示框</div>\n" +
            "      <span class=\"layui-layer-setwind\">\n" +
            "            <a href=\"javascript:;\" class=\"layui-layer-close1\"><img src=\"../../assets/img/res8.png\"></a>\n" +
            "        </span>\n" +
            "      <div class=\"layui-layer-padding\">\n" +
            "        <img src=\"../../assets/img/res_jing.png\">\n" +
            "        请选择所需要的支付方式！\n" +
            "      </div>\n" +
            "      <div class=\"layui-layer-btns\">\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn3\">确定</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <div class=\"layui-layer-dialog1\">\n" +
            "      <div class=\"layui-layer-titlea\">提示框</div>\n" +
            "      <span class=\"layui-layer-setwind\">\n" +
            "                <a href=\"javascript:;\" class=\"layui-layer-close1\"><img src=\"../../assets/img/res8.png\"></a>\n" +
            "            </span>\n" +
            "      <div class=\"layui-layer-padding\">\n" +
            "        <img src=\"../../assets/img/res_jing.png\">\n" +
            "        添加成功！\n" +
            "      </div>\n" +
            "      <div class=\"layui-layer-btns\">\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn3\">确定</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightPopopCont\",\n" +
            "      directives:{\n" +
            "        drag(el,bindings){\n" +
            "          el.onmousedown = function(e){\n" +
            "            var disx = e.pageX - el.offsetLeft;\n" +
            "            var disy = e.pageY - el.offsetTop;\n" +
            "            document.onmousemove = function (e){\n" +
            "              el.style.left = e.pageX - disx+'px';\n" +
            "              el.style.top = e.pageY - disy+'px';\n" +
            "            }\n" +
            "            document.onmouseup = function(){\n" +
            "              document.onmousemove = document.onmouseup = null;\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      },\n" +
            "      mounted() {\n" +
            "        //点击close使得div消失\n" +
            "        $(\".close\").click(function () {\n" +
            "          $('.alert_danger').hide();\n" +
            "        })\n" +
            "        //点击使得弹出框出现\n" +
            "        $(\".l_f\").click(function () {\n" +
            "          $('.layui-layer-shade').show();\n" +
            "          $('.layui-anim').show();\n" +
            "          $('.layui-layer-btn0').click(function () {\n" +
            "            $('.layui-layer-dialog').show();\n" +
            "            $('.layui-layer-dialog  .layui-layer-btn3').click(function () {\n" +
            "              $('.layui-layer-dialog').hide();\n" +
            "            })\n" +
            "          })\n" +
            "        })\n" +
            "        //点击input是使得div显示\n" +
            "        $('.firstinput').click(function () {\n" +
            "          $('.add_content').toggle();\n" +
            "          $('.layui-layer-btn0').click(function () {\n" +
            "            $('.layui-layer-dialog1').show();\n" +
            "            $('.layui-layer-dialog1  .layui-layer-btn3').click(function () {\n" +
            "              $('.layui-layer-dialog1').hide();\n" +
            "              $('.layui-layer-shade').hide();\n" +
            "              $('.layui-anim').hide();\n" +
            "              $('.layui-layer-dialog').hide();\n" +
            "            })\n" +
            "          })\n" +
            "        })\n" +
            "        //点击小化\n" +
            "        $('.layui-layer-min').click(function () {\n" +
            "          $('.layui-anim').hide();\n" +
            "          $('.layui-anims').show();\n" +
            "        })\n" +
            "        //点击放大\n" +
            "        $('.smalldiv').click(function () {\n" +
            "          $('.layui-anim').show();\n" +
            "          $('.layui-anims').hide();\n" +
            "        })\n" +
            "        //小化时点击closediv消失\n" +
            "        $('.closediv').click(function () {\n" +
            "          $('.layui-anims').hide();\n" +
            "          $('.layui-layer-shade').hide();\n" +
            "        })\n" +
            "        //普通模式时点击close使得div消失\n" +
            "        $('.bigdivclose').click(function () {\n" +
            "          $('.layui-anim').hide();\n" +
            "          $('.layui-layer-shade').hide();\n" +
            "        })\n" +
            "        //点击取消的时候div消失\n" +
            "        $('.layui-layer-btn1').click(function () {\n" +
            "          $('.layui-anim').hide();\n" +
            "          $('.layui-layer-shade').hide();\n" +
            "        })\n" +
            "      }\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .Payment{\n"
+

"    padding: 20px 15px 60px;\n"
+

"    width: 80%;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .Payment::-webkit-scrollbar{\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .defray_style{\n"
+

"    width: 100%;\n"
+

"  }\n"
+

"  .alert_danger{\n"
+

"    font-size: 14px;\n"
+

"    border-radius: 0;\n"
+

"    text-align: center;\n"
+

"    margin-top: 20px;\n"
+

"    color: #b94a48;\n"
+

"    background-color: #f2dede;\n"
+

"    border-color: #eed3d7;\n"
+

"    padding: 15px;\n"
+

"    margin-bottom: 20px;\n"
+

"    border: 1px solid transparent;\n"
+

"  }\n"
+

"  .alert_danger a{\n"
+

"    display: block;\n"
+

"    width: 12.5px;\n"
+

"    height: 16px;\n"
+

"    cursor: pointer;\n"
+

"    float: right;\n"
+

"    line-height: 1;\n"
+

"    color: #000;\n"
+

"  }\n"
+

"  .border{\n"
+

"    border: 1px solid #ddd;\n"
+

"    padding: 5px;\n"
+

"    height: 50px;\n"
+

"    line-height: 36px;\n"
+

"    margin-bottom: 20px;\n"
+

"  }\n"
+

"  .border:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .border:after {\n"
+

"    display: block;\n"
+

"    content: \".\";\n"
+

"    height: 0;\n"
+

"    visibility: hidden;\n"
+

"    clear: both;\n"
+

"    font-size: 0;\n"
+

"    line-height: 0;\n"
+

"  }\n"
+

"  .border .l_f{\n"
+

"    display: block;\n"
+

"    height: 100%;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .btn-primary{\n"
+

"    background-color: #428bca;\n"
+

"    padding: 3px 10px;\n"
+

"    display: inline-block;\n"
+

"    color: #FFF!important;\n"
+

"    border: 5px solid #428bca;\n"
+

"    cursor: pointer;\n"
+

"    vertical-align: middle;\n"
+

"    margin-right: 5px;\n"
+

"    border-radius: 3px;\n"
+

"    font-size: 14px;\n"
+

"    line-height: 1.428571429;\n"
+

"  }\n"
+

"  .defray_list{\n"
+

"    border: 1px solid #dddddd;\n"
+

"  }\n"
+

"  .defray_list:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .defray_list:after {\n"
+

"    display: block;\n"
+

"    content: \".\";\n"
+

"    height: 0;\n"
+

"    visibility: hidden;\n"
+

"    clear: both;\n"
+

"    font-size: 0;\n"
+

"    line-height: 0;\n"
+

"  }\n"
+

"  .type_title{\n"
+

"    padding-left: 20px;\n"
+

"    font-size: 18px;\n"
+

"    border-bottom: 1px solid #dddddd;\n"
+

"    background-image: linear-gradient(to bottom,#ffffff 0,#ededed 100%)!important;\n"
+

"    height: 40px;\n"
+

"    line-height: 40px;\n"
+

"    color: #333333;\n"
+

"    width: 100%;\n"
+

"  }\n"
+

"  .defray_content{\n"
+

"    margin: 5px;\n"
+

"  }\n"
+

"  .defray_content:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .defray_content:after {\n"
+

"    display: block;\n"
+

"    content: \".\";\n"
+

"    height: 0;\n"
+

"    visibility: hidden;\n"
+

"    clear: both;\n"
+

"    font-size: 0;\n"
+

"    line-height: 0;\n"
+

"  }\n"
+

"  .defray_info{\n"
+

"    width: 270px;\n"
+

"    font-size: 18px;\n"
+

"    border: 1px solid #dddddd;\n"
+

"    float: left;\n"
+

"    margin: 5px;\n"
+

"    text-align: center;\n"
+

"    height: 396px;\n"
+

"  }\n"
+

"  li{\n"
+

"    display: list-item;\n"
+

"    text-align: -webkit-match-parent;\n"
+

"  }\n"
+

"  .defray_name{\n"
+

"    height: 40px;\n"
+

"    line-height: 40px;\n"
+

"    background-color: #00a5e5;\n"
+

"    color: #ffffff;\n"
+

"  }\n"
+

"  .name_logo{\n"
+

"    height: 161px;\n"
+

"  }\n"
+

"  img{\n"
+

"    display: inline-block;\n"
+

"    vertical-align: middle;\n"
+

"  }\n"
+

"  .description{\n"
+

"    padding: 10px;\n"
+

"    font-size: 14px;\n"
+

"    color: #999;\n"
+

"    border-bottom: 1px solid #dddddd;\n"
+

"    text-align: left;\n"
+

"    height: 90px;\n"
+

"    line-height: 24px;\n"
+

"    overflow: hidden;\n"
+

"  }\n"
+

"  .select{\n"
+

"    padding: 10px 0px;\n"
+

"    border-bottom: 1px solid #dddddd;\n"
+

"  }\n"
+

"  .spans{\n"
+

"    font-size: 14px;\n"
+

"    position: relative;\n"
+

"  }\n"
+

"  .Checkbox {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox1 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck1 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck1 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck1:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .operating{\n"
+

"    padding: 10px 0px;\n"
+

"  }\n"
+

"  .btn-danger{\n"
+

"    padding: 3px 10px;\n"
+

"    display: inline-block;\n"
+

"    color: #FFF!important;\n"
+

"    background-image: none!important;\n"
+

"    border: 5px solid #d15b47;\n"
+

"    background-color: #d15b47;\n"
+

"    cursor: pointer;\n"
+

"    vertical-align: middle;\n"
+

"    margin-right: 5px;\n"
+

"    border-radius: 3px;\n"
+

"    font-size: 14px;\n"
+

"    line-height: 1.428571429;\n"
+

"    text-align: center;\n"
+

"  }\n"
+

"  .btn-success{\n"
+

"    padding: 3px 10px;\n"
+

"    display: inline-block;\n"
+

"    color: #FFF!important;\n"
+

"    border: 5px solid #87b87f;\n"
+

"    background-color: #87b87f;\n"
+

"    cursor: pointer;\n"
+

"    vertical-align: middle;\n"
+

"    margin-right: 5px;\n"
+

"    border-radius: 3px;\n"
+

"    font-size: 14px;\n"
+

"    line-height: 1.428571429;\n"
+

"    text-align: center;\n"
+

"  }\n"
+

"  .Checkbox2 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck2 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck2 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck2:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox3 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck3 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck3 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck3:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox4 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck4 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck4 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck4:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox5 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck5 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck5 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck5:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox6 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck6 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck6 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck6:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .Checkbox7 {\n"
+

"    position: absolute;\n"
+

"    visibility: hidden;\n"
+

"  }\n"
+

"  #myCheck7 + label{\n"
+

"    border-radius: 50%;\n"
+

"    border: 1px solid #b9b9b9;\n"
+

"    width: 19px;\n"
+

"    height: 19px;\n"
+

"    display: inline-block;\n"
+

"    text-align: center;\n"
+

"    vertical-align: middle;\n"
+

"    line-height: 20px;\n"
+

"    outline: 0;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  #myCheck7 + label:hover{\n"
+

"    border: 1px solid #f59942;\n"
+

"  }\n"
+

"  #myCheck7:checked + label:after{\n"
+

"    content:\"\\2714\";\n"
+

"    font-size: 12px;\n"
+

"    border-radius: 50%;\n"
+

"    width: 15px;\n"
+

"    height: 15px;\n"
+

"    background-color:#32a3ce;\n"
+

"    color: #32a3ce;\n"
+

"    position: absolute;\n"
+

"    top: 4px;\n"
+

"    left: 2px;\n"
+

"  }\n"
+

"  .btn-danger:hover{\n"
+

"    background-color: #b94a48;\n"
+

"  }\n"
+

"  .btn-primary:hover{\n"
+

"    background-color: #1b6aaa;\n"
+

"  }\n"
+

"  .btn-success:hover{\n"
+

"    background-color: #629b58;\n"
+

"  }\n"
+

"  .layui-layer-shade{\n"
+

"    z-index: 1222;\n"
+

"    background-color: #000;\n"
+

"    opacity: 0.3;\n"
+

"    position: fixed;\n"
+

"    top: 79px;\n"
+

"    right: 0;\n"
+

"    width: 80%;\n"
+

"    height: 100%;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-anim{\n"
+

"    position: fixed;\n"
+

"    z-index: 9999999;\n"
+

"    width: 830px;\n"
+

"    left: 30%;\n"
+

"    top: 15%;\n"
+

"    background-color: #fff;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-layer-title{\n"
+

"    cursor: move;\n"
+

"    padding: 0 80px 0 20px;\n"
+

"    height: 42px;\n"
+

"    line-height: 42px;\n"
+

"    border-bottom: 1px solid #eee;\n"
+

"    font-size: 14px;\n"
+

"    color: #333;\n"
+

"    overflow: hidden;\n"
+

"    background-color: #F8F8F8;\n"
+

"    border-radius: 2px 2px 0 0;\n"
+

"  }\n"
+

"  .layui-layer-setwin{\n"
+

"    position: absolute;\n"
+

"    right: 15px;\n"
+

"    top: 15px;\n"
+

"    font-size: 0;\n"
+

"    line-height: initial;\n"
+

"  }\n"
+

"  .layui-layer-setwin a{\n"
+

"    position: relative;\n"
+

"    width: 16px;\n"
+

"    height: 16px;\n"
+

"    margin-left: 10px;\n"
+

"    font-size: 12px;\n"
+

"    display: inline-block;\n"
+

"    vertical-align: top;\n"
+

"    color: #333;\n"
+

"  }\n"
+

"  .layui-layer-setwin .layui-layer-min cite {\n"
+

"    position: absolute;\n"
+

"    width: 14px;\n"
+

"    height: 2px;\n"
+

"    left: 0;\n"
+

"    top: 50%;\n"
+

"    margin-top: -1px;\n"
+

"    background-color: #2E2D3C;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  cite {\n"
+

"    font-style: normal;\n"
+

"  }\n"
+

"  .layui-layer-setwin a img{\n"
+

"    margin-bottom: 1px;\n"
+

"  }\n"
+

"  .payment_list{\n"
+

"    display: block;\n"
+

"    border: 1px solid #dddddd;\n"
+

"    padding: 10px;\n"
+

"    margin: 15px;\n"
+

"    width: 800px;\n"
+

"    height: 87px;\n"
+

"  }\n"
+

"  .payment_list:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .payment_list li{\n"
+

"    float: left;\n"
+

"    width: 150px;\n"
+

"    margin-bottom: 10px;\n"
+

"  }\n"
+

"  .checks{\n"
+

"    width: 18px;\n"
+

"    margin-right: 5px;\n"
+

"    margin-top: 14px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .input_check {\n"
+

"    opacity: 0;\n"
+

"    width: 20px;\n"
+

"    height: 20px;\n"
+

"    position: absolute;\n"
+

"  }\n"
+

"  .checks label{\n"
+

"    display: inline-block;\n"
+

"    width: 20px;\n"
+

"    height: 20px;\n"
+

"    background: url(../../assets/img/res_wei.png) no-repeat;\n"
+

"    background-size: 20px 20px;\n"
+

"    margin-top: 2px;\n"
+

"    margin-right: 13px;\n"
+

"  }\n"
+

"  .checks .input_check:checked+label {\n"
+

"    background: url(../../assets/img/res_xuan.png)no-repeat;\n"
+

"    background-size: 20px 20px;\n"
+

"  }\n"
+

"  .payment_list li img{\n"
+

"    display: inline-block;\n"
+

"    width: 120px;\n"
+

"    height: 55px;\n"
+

"  }\n"
+

"  .add_content{\n"
+

"    border: 1px solid #dddddd;\n"
+

"    padding: 10px;\n"
+

"    margin: 0px 15px;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .add_content:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .clearfix{\n"
+

"    display: block;\n"
+

"    margin-bottom: 10px;\n"
+

"    float: none;\n"
+

"    width: 100%;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .clearfix:before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .clearfix:after {\n"
+

"    display: block;\n"
+

"    content: \".\";\n"
+

"    height: 0;\n"
+

"    visibility: hidden;\n"
+

"    clear: both;\n"
+

"    font-size: 0;\n"
+

"    line-height: 0;\n"
+

"  }\n"
+

"  .label_name{\n"
+

"    float: left;\n"
+

"    width: 100px;\n"
+

"    text-align: right;\n"
+

"    height: 32px;\n"
+

"    line-height: 32px;\n"
+

"    vertical-align: middle;\n"
+

"    font-weight: normal;\n"
+

"    font-size: 14px;\n"
+

"  }\n"
+

"  .add_content .clearfix span{\n"
+

"    float: left;\n"
+

"    display: block;\n"
+

"    width: 500px;\n"
+

"    line-height: 32px;\n"
+

"    font-size: 14px;\n"
+

"  }\n"
+

"  input[type=\"text\"]{\n"
+

"    border-radius: 0!important;\n"
+

"    color: #858585;\n"
+

"    background-color: #fff;\n"
+

"    border: 1px solid #d5d5d5;\n"
+

"    padding: 5px 4px;\n"
+

"    margin-left: 10px;\n"
+

"    line-height: 1.2;\n"
+

"    font-size: 14px;\n"
+

"    font-family: inherit;\n"
+

"    outline: 0;\n"
+

"  }\n"
+

"  .add_content .clearfix span input:focus{\n"
+

"    border-color: #f59942;\n"
+

"  }\n"
+

"  .form-control{\n"
+

"    width: 300px;\n"
+

"    margin-left: 10px;\n"
+

"    padding: 4px 6px;\n"
+

"    height: 32px;\n"
+

"    box-shadow: none!important;\n"
+

"    color: #858585;\n"
+

"    background-color: #fff;\n"
+

"    border: 1px solid #d5d5d5;\n"
+

"    border-radius: 0;\n"
+

"    display: block;\n"
+

"    font-size: 14px;\n"
+

"    line-height: 1.428571429;\n"
+

"    vertical-align: middle;\n"
+

"    outline: 0;\n"
+

"  }\n"
+

"  .add_content .clearfix span select:focus{\n"
+

"    border-color: #f59942;\n"
+

"  }\n"
+

"  .form-textarea{\n"
+

"    width: 400px;\n"
+

"    height: 100px;\n"
+

"    resize: none;\n"
+

"    margin-left: 10px;\n"
+

"    border-radius: 0!important;\n"
+

"    color: #858585;\n"
+

"    background-color: #fff;\n"
+

"    border: 1px solid #d5d5d5;\n"
+

"    padding: 5px 4px;\n"
+

"    line-height: 1.2;\n"
+

"    font-size: 14px;\n"
+

"    font-family: inherit;\n"
+

"  }\n"
+

"  em{\n"
+

"    font-style: normal;\n"
+

"    font-size: 14px;\n"
+

"  }\n"
+

"  .layui-layer-btn{\n"
+

"    padding-top: 10px;\n"
+

"    text-align: center;\n"
+

"    padding: 0 10px 12px;\n"
+

"  }\n"
+

"  .layui-layer-btn a{\n"
+

"    height: 36px;\n"
+

"    line-height: 36px;\n"
+

"    margin: 0 6px;\n"
+

"    padding: 0 15px;\n"
+

"    border: 1px solid #dedede;\n"
+

"    background-color: #f1f1f1;\n"
+

"    color: #333;\n"
+

"    border-radius: 2px;\n"
+

"    font-weight: 400;\n"
+

"    cursor: pointer;\n"
+

"    text-decoration: none;\n"
+

"    display: inline-block;\n"
+

"    vertical-align: top;\n"
+

"    cursor: pointer;\n"
+

"    text-decoration: none;\n"
+

"  }\n"
+

"  .layui-layer-btn .layui-layer-btn0{\n"
+

"    border-color: #4898d5;\n"
+

"    background-color: #2e8ded;\n"
+

"    color: #fff;\n"
+

"  }\n"
+

"  .layui-anims{\n"
+

"    position: fixed;\n"
+

"    z-index: 9999999;\n"
+

"    width: 180px;\n"
+

"    height: 42px;\n"
+

"    left: 27%;\n"
+

"    top: 32%;\n"
+

"    background-color: #fff;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-layer-titles{\n"
+

"    padding: 0 80px 0 20px;\n"
+

"    height: 42px;\n"
+

"    line-height: 42px;\n"
+

"    border-bottom: 1px solid #eee;\n"
+

"    font-size: 14px;\n"
+

"    color: #333;\n"
+

"    overflow: hidden;\n"
+

"    white-space: nowrap;\n"
+

"    background-color: #F8F8F8;\n"
+

"    border-radius: 2px 2px 0 0;\n"
+

"  }\n"
+

"  .layui-layer-setwins{\n"
+

"    position: absolute;\n"
+

"    right: 15px;\n"
+

"    top: 15px;\n"
+

"    font-size: 0;\n"
+

"    line-height: initial;\n"
+

"  }\n"
+

"  .layui-layer-setwins a {\n"
+

"    position: relative;\n"
+

"    width: 16px;\n"
+

"    height: 16px;\n"
+

"    margin-left: 10px;\n"
+

"    font-size: 12px;\n"
+

"  }\n"
+

"  .layui-layer-setwins a img{\n"
+

"    margin-bottom: 8px;\n"
+

"  }\n"
+

"  .payment_checkbox{\n"
+

"    display: block;\n"
+

"    height:300px;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  /* 提示框 */\n"
+

"  .layui-layer-dialog{\n"
+

"    width: 260px;\n"
+

"    height: 154px;\n"
+

"    z-index: 9999999;\n"
+

"    margin: 0;\n"
+

"    padding: 0;\n"
+

"    background-color: #fff;\n"
+

"    box-shadow: 1px 1px 50px rgba(0,0,0,.3);\n"
+

"    border-radius: 2px;\n"
+

"    position: fixed;\n"
+

"    top: 150px;\n"
+

"    left: 50%;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-layer-dialog1{\n"
+

"    width: 260px;\n"
+

"    height: 154px;\n"
+

"    z-index: 9999999;\n"
+

"    margin: 0;\n"
+

"    padding: 0;\n"
+

"    background-color: #fff;\n"
+

"    box-shadow: 1px 1px 50px rgba(0,0,0,.3);\n"
+

"    border-radius: 2px;\n"
+

"    position: fixed;\n"
+

"    top: 150px;\n"
+

"    left: 50%;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-layer-titlea{\n"
+

"    cursor: move;\n"
+

"    padding: 0 80px 0 20px;\n"
+

"    height: 42px;\n"
+

"    line-height: 42px;\n"
+

"    border-bottom: 1px solid #eee;\n"
+

"    font-size: 14px;\n"
+

"    color: #333;\n"
+

"    overflow: hidden;\n"
+

"    text-overflow: ellipsis;\n"
+

"    white-space: nowrap;\n"
+

"    background-color: #F8F8F8;\n"
+

"    border-radius: 2px 2px 0 0;\n"
+

"  }\n"
+

"  .layui-layer-setwind{\n"
+

"    position: absolute;\n"
+

"    right: 15px;\n"
+

"    top: 13px;\n"
+

"    line-height: initial;\n"
+

"  }\n"
+

"  .layui-layer-close1{\n"
+

"    cursor: pointer;\n"
+

"    display: inline-block;\n"
+

"    vertical-align: top;\n"
+

"    width: 16px;\n"
+

"    height: 16px;\n"
+

"    margin-left: 10px;\n"
+

"    font-size: 12px;\n"
+

"  }\n"
+

"  .layui-layer-padding{\n"
+

"    padding: 20px 20px 20px 55px;\n"
+

"    text-align: left;\n"
+

"    line-height: 24px;\n"
+

"    word-break: break-all;\n"
+

"    font-size: 14px;\n"
+

"    overflow: auto;\n"
+

"  }\n"
+

"  .layui-layer-padding img{\n"
+

"    position: absolute;\n"
+

"    top: 60px;\n"
+

"    left: 15px;\n"
+

"    width: 30px;\n"
+

"    height: 30px;\n"
+

"    display: inline-block;\n"
+

"    vertical-align: top;\n"
+

"  }\n"
+

"  .layui-layer-btns{\n"
+

"    text-align: center;\n"
+

"    padding: 0 10px 12px;\n"
+

"    pointer-events: auto;\n"
+

"  }\n"
+

"  .layui-layer-btn3{\n"
+

"    border-color: #4898d5;\n"
+

"    background-color: #2e8ded;\n"
+

"    color: #fff;\n"
+

"    height: 36px;\n"
+

"    line-height: 36px;\n"
+

"    margin: 0 6px;\n"
+

"    padding: 0 15px;\n"
+

"    border: 1px solid #dedede;\n"
+

"    border-radius: 3px;\n"
+

"    font-weight: 400;\n"
+

"    cursor: pointer;\n"
+

"    text-decoration: none;\n"
+

"    display: inline-block;\n"
+

"    vertical-align: top;\n"
+

"  }\n"
+

"</style>\n"
        }
        }
    }
</script>

<style scoped>
  .right-cont{
    width: 100%;
    height: 100%;
  }
  .header-cont{
    width: 100%;
    height: 68px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .header-cont h1{
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 68px;
  }
  .info-side{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .info-side h1{
    font-size: 25px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side-cont{
    height: auto;
    background-color: hsla(0,0%,100%,.5);
    padding: 10px;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
  }
  .hljs{
    -ms-word-wrap: normal;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    height:300px;
    overflow-x: hidden;
    overflow-y: scroll;
    color: #3a3a3a;
  }
  .hljsl{
    width: 100%;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
    min-height: 200px;
    _height:200px;
  }
</style>
