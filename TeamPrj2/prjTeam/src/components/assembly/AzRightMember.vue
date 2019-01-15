<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础组件</h1>
    </div>
    <div class="info-side">
      <h1>记录管理组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-member-cont></az-right-member-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightMemberCont from "./AzRightMemberCont";
    export default {
        name: "AzRightMember",
      components: {AzRightMemberCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div>\n" +
            "    <table class=\"table\">\n" +
            "      <thead>\n" +
            "      <tr>\n" +
            "        <th>\n" +
            "          <div class=\"check\">\n" +
            "            <input type=\"checkbox\" class=\"input_check checkall\">\n" +
            "            <label></label>\n" +
            "          </div>\n" +
            "        </th>\n" +
            "        <th>用户ID</th>\n" +
            "        <th>用户名</th>\n" +
            "        <th>积分</th>\n" +
            "        <th>浏览(条)</th>\n" +
            "        <th>购物(比)</th>\n" +
            "        <th>操作</th>\n" +
            "      </tr>\n" +
            "      </thead>\n" +
            "      <tbody>\n" +
            "      <tr class=\"odd\">\n" +
            "        <td>\n" +
            "          <div class=\"check\">\n" +
            "            <input type=\"checkbox\" class=\"input_check subcheck\">\n" +
            "            <label></label>\n" +
            "          </div>\n" +
            "        </td>\n" +
            "        <td>4543232</td>\n" +
            "        <td>花海iatiant</td>\n" +
            "        <td><a href=\"javascript:;\" class=\"jifen\">45</a></td>\n" +
            "        <td><a href=\"javascript:;\">11</a></td>\n" +
            "        <td><a href=\"javascript:;\">45</a></td>\n" +
            "        <td>\n" +
            "          <a href=\"javascript:;\" title=\"删除\" class=\"btn btn-xs btn-warning\">\n" +
            "            <img src=\"../../assets/img/res9.png\">\n" +
            "          </a>\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "      <tr class=\"even\">\n" +
            "        <td>\n" +
            "          <div class=\"check\">\n" +
            "            <input type=\"checkbox\" class=\"input_check subcheck\">\n" +
            "            <label></label>\n" +
            "          </div>\n" +
            "        </td>\n" +
            "        <td>4543232</td>\n" +
            "        <td>梅毒</td>\n" +
            "        <td><a href=\"javascript:;\" class=\"jifen\">45</a></td>\n" +
            "        <td><a href=\"javascript:;\">11</a></td>\n" +
            "        <td><a href=\"javascript:;\">45</a></td>\n" +
            "        <td>\n" +
            "          <a href=\"javascript:;\" title=\"删除\" class=\"btn btn-xs btn-warning\"><img src=\"../../assets/img/res9.png\"></a>\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "      <tr class=\"odd\">\n" +
            "        <td>\n" +
            "          <div class=\"check\">\n" +
            "            <input type=\"checkbox\" class=\"input_check subcheck\">\n" +
            "            <label></label>\n" +
            "          </div>\n" +
            "        </td>\n" +
            "        <td>4543232</td>\n" +
            "        <td>张小泉</td>\n" +
            "        <td><a href=\"javascript:;\" class=\"jifen\">245</a></td>\n" +
            "        <td><a href=\"javascript:;\">131</a></td>\n" +
            "        <td><a href=\"javascript:;\">45</a></td>\n" +
            "        <td>\n" +
            "          <a href=\"javascript:;\" title=\"删除\" class=\"btn btn-xs btn-warning\"><img src=\"../../assets/img/res9.png\"></a>\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "      <tr class=\"even\">\n" +
            "        <td>\n" +
            "          <div class=\"check\"><input type=\"checkbox\" class=\"input_check subcheck\"><label></label></div>\n" +
            "        </td>\n" +
            "        <td>4577566</td>\n" +
            "        <td>花海iatiant</td>\n" +
            "        <td><a href=\"javascript:;\" class=\"jifen\">3434</a></td>\n" +
            "        <td><a href=\"javascript:;\">3434</a></td>\n" +
            "        <td><a href=\"javascript:;\">34</a></td>\n" +
            "        <td>\n" +
            "          <a href=\"javascript:;\" title=\"删除\" class=\"btn btn-xs btn-warning\"><img src=\"../../assets/img/res9.png\"></a>\n" +
            "        </td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "    <!-- 确定要删除吗 -->\n" +
            "    <div class=\"layui-layer-dialogpp drag\" v-drag>\n" +
            "      <div class=\"layui-layer-titlep\">信息</div>\n" +
            "      <span class=\"layui-layer-setwindp\">\n" +
            "            <a href=\"javascript:;\" class=\"layui-layer-closep closepp\"><img src=\"../../assets/img/res8.png\" alt=\"\"></a>\n" +
            "        </span>\n" +
            "      <div class=\"layui-layer-paddingp\">\n" +
            "        确定要删除吗?\n" +
            "      </div>\n" +
            "      <div class=\"layui-layer-btnp\">\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn6 deleteken\">确定</a>\n" +
            "        <a href=\"javascript:;\" class=\"layui-layer-btn7 shanqu\">取消</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <!-- 已删除 -->\n" +
            "    <div class=\"shanchu\">\n" +
            "      <a href=\"#\" class=\"shanchus\">\n" +
            "        <img src=\"../../assets/img/res_l.png\">\n" +
            "        <span>已删除！</span>\n" +
            "      </a>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightMemberCont\",\n" +
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
            "      methods:{\n" +
            "        select(){\n" +
            "          $(\".checkall\")[0].onclick=function () {\n" +
            "            var ischecked= $(\".checkall\")[0].checked;\n" +
            "            // console.log(ischecked)\n" +
            "            for( let i=0;i<$(\".subcheck\").length;i++){\n" +
            "              $(\".subcheck\")[i].checked=ischecked;\n" +
            "            }\n" +
            "          }\n" +
            "        }\n" +
            "      },\n" +
            "      mounted() {\n" +
            "        this.select();\n" +
            "        //删除用户\n" +
            "        let lengthh = $(\".btn-warning\").length;\n" +
            "        let countt = 0;\n" +
            "        let indexs = \"\";\n" +
            "        $(\".btn-warning\").each(function () {\n" +
            "          $(this).attr({\"indexs\":countt});\n" +
            "          countt++;\n" +
            "        });\n" +
            "        $('.table tbody tr').each(function () {\n" +
            "          $(this).attr({\"indexs\":countt});\n" +
            "          countt++;\n" +
            "        });\n" +
            "\n" +
            "        $('.btn-warning').click(function () {\n" +
            "          indexs = $(this).attr(\"indexs\");\n" +
            "          $('.layui-layer-dialogpp').show();\n" +
            "          $('.layui-layer-shade').show();\n" +
            "          $('.deleteken').click(function () {\n" +
            "            $('.layui-layer-dialogpp').hide();\n" +
            "            $('.layui-layer-shade').hide();\n" +
            "            $('.table tbody tr').eq(indexs).hide();\n" +
            "            $('.shanchu').show();\n" +
            "            setInterval(function () {\n" +
            "              $('.shanchu').hide();\n" +
            "            },2000);\n" +
            "          })\n" +
            "          $('.shanqu').click(function () {\n" +
            "            $('.layui-layer-dialogpp').hide();\n" +
            "            $('.layui-layer-shade').hide();\n" +
            "          })\n" +
            "          $('.closepp').click(function () {\n" +
            "            $('.layui-layer-dialogpp').hide();\n" +
            "            $('.layui-layer-shade').hide();\n" +
            "          })\n" +
            "        })\n" +
            "\n" +
            "        //积分获取记录\n" +
            "        $('.jifen').click(function () {\n" +
            "          $('.layui-layer-page').show();\n" +
            "          $('.layui-layer-shade').show();\n" +
            "        })\n" +
            "        //积分close\n" +
            "        $('.jiclose').click(function () {\n" +
            "          $('.layui-layer-page').hide();\n" +
            "          $('.layui-layer-shade').hide();\n" +
            "        })\n" +
            "      }\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"\n"
+

"  input[type=\"text\"]{\n"
+

"    color: rgb(133, 133, 133);\n"
+

"    background-color: rgb(255, 255, 255);\n"
+

"    margin-left: 10px;\n"
+

"    line-height: 1.2;\n"
+

"    font-size: 14px;\n"
+

"    font-family: inherit;\n"
+

"    transition-duration: 0.1s;\n"
+

"    box-shadow: none !important;\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(213, 213, 213);\n"
+

"    border-image: initial;\n"
+

"    padding: 5px 4px;\n"
+

"    border-radius: 0px !important;\n"
+

"  }\n"
+

"  .search_style .search_content li .btn_search {\n"
+

"    height: 32px;\n"
+

"    line-height: 32px;\n"
+

"    font-family: \"Microsoft YaHei\";\n"
+

"    width: 60px;\n"
+

"    text-align: center;\n"
+

"    color: rgb(255, 255, 255);\n"
+

"    border-width: 0px;\n"
+

"    border-style: initial;\n"
+

"    border-color: initial;\n"
+

"    border-image: initial;\n"
+

"    border-radius: 3px;\n"
+

"    background: linear-gradient(rgb(59, 152, 214) 0px, rgb(25, 126, 193) 100%) repeat-x rgb(42, 139, 204) !important;\n"
+

"    background-repeat: repeat-x !important;\n"
+

"  }\n"
+

"  .border {\n"
+

"    height: 55px;\n"
+

"    line-height: 44px;\n"
+

"    margin-bottom: 20px;\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(221, 221, 221);\n"
+

"    border-image: initial;\n"
+

"    padding: 5px;\n"
+

"  }\n"
+

"  .border span {\n"
+

"    display: block;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .r_f {\n"
+

"    float: right;\n"
+

"    font-size: 14px;\n"
+

"  }\n"
+

"  .btn-danger{\n"
+

"    background-color: rgb(209, 91, 71);\n"
+

"    border-color: rgb(209, 91, 71);\n"
+

"  }\n"
+

"  .btn-danger:hover{\n"
+

"    background-color: #b74635;\n"
+

"  }\n"
+

"  .btn{\n"
+

"    display: inline-block;\n"
+

"    font-family: \"Microsoft YaHei\";\n"
+

"    cursor: pointer;\n"
+

"    vertical-align: middle;\n"
+

"    margin-right: 5px;\n"
+

"    position: relative;\n"
+

"    color: rgb(255, 255, 255) !important;\n"
+

"    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px !important;\n"
+

"    background-image: none !important;\n"
+

"    box-shadow: none !important;\n"
+

"    padding: 0 10px;\n"
+

"    border-style: solid;\n"
+

"    border-image: initial;\n"
+

"    transition: all 0.15s ease 0s;\n"
+

"    border-radius: 3px;\n"
+

"    margin-bottom: 0px;\n"
+

"    font-weight: normal;\n"
+

"    text-align: center;\n"
+

"    white-space: nowrap;\n"
+

"    user-select: none;\n"
+

"    margin-top: -5px;\n"
+

"  }\n"
+

"  .imgs{\n"
+

"    margin-bottom: 5px;\n"
+

"  }\n"
+

"  .row::before{\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"  }\n"
+

"  .row::after {\n"
+

"    display: table;\n"
+

"    content: \" \";\n"
+

"    clear: both;\n"
+

"  }\n"
+

"  .dataTables_wrapper .row:first-child {\n"
+

"    padding-top: 12px;\n"
+

"    padding-bottom: 12px;\n"
+

"  }\n"
+

"  .col-sm-6 {\n"
+

"    width: 50%;\n"
+

"    float: left;\n"
+

"    min-height: 1px;\n"
+

"    padding-right: 12px;\n"
+

"    padding-left: 12px;\n"
+

"  }\n"
+

"  .dataTables_wrapper label {\n"
+

"    display: inline-block;\n"
+

"    font-size: 13px;\n"
+

"    font-weight: normal;\n"
+

"    vertical-align: middle;\n"
+

"  }\n"
+

"  .dataTables_wrapper select {\n"
+

"    margin: 0px 4px 4px;\n"
+

"    width: 70px;\n"
+

"    height: 25px;\n"
+

"    padding: 2px 3px;\n"
+

"    line-height: 30px;\n"
+

"    color: rgb(133, 133, 133);\n"
+

"    background-color: rgb(255, 255, 255);\n"
+

"    border-radius: 0px;\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(213, 213, 213);\n"
+

"    outline: 0;\n"
+

"  }\n"
+

"  select option{\n"
+

"    padding: 3px 4px;\n"
+

"  }\n"
+

"  select:focus{\n"
+

"    border-color:#f59942;\n"
+

"  }\n"
+

"  .dataTables_filter {\n"
+

"    text-align: right;\n"
+

"  }\n"
+

"  .dataTables_wrapper label {\n"
+

"    display: inline-block;\n"
+

"    font-size: 13px;\n"
+

"    font-weight: normal;\n"
+

"  }\n"
+

"  input[type=\"search\"]{\n"
+

"    color: rgb(133, 133, 133);\n"
+

"    background-color: rgb(255, 255, 255);\n"
+

"    margin-left: 10px;\n"
+

"    line-height: 1.2;\n"
+

"    font-size: 14px;\n"
+

"    font-family: inherit;\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(213, 213, 213);\n"
+

"    padding: 5px 4px;\n"
+

"    outline: 0;\n"
+

"  }\n"
+

"  input[type=\"search\"]:focus{\n"
+

"    border-color:#f59942;\n"
+

"  }\n"
+

"  .dataTables_wrapper .row:first-child + .table {\n"
+

"    font-family: 新宋体;\n"
+

"    border-top: 1px solid rgb(221, 221, 221);\n"
+

"    border-bottom: 1px solid rgb(221, 221, 221);\n"
+

"  }\n"
+

"  .table{\n"
+

"    text-align: center;\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(221, 221, 221);\n"
+

"    border-image: initial;\n"
+

"    width: 100%;\n"
+

"    border-collapse: collapse;\n"
+

"    border-spacing: 0px;\n"
+

"    max-width: 100%;\n"
+

"    background-color: transparent;\n"
+

"  }\n"
+

"  thead {\n"
+

"    display: table-header-group;\n"
+

"    vertical-align: middle;\n"
+

"    border-color: inherit;\n"
+

"  }\n"
+

"  tr {\n"
+

"    display: table-row;\n"
+

"    vertical-align: inherit;\n"
+

"    border-color: inherit;\n"
+

"  }\n"
+

"  .table thead tr {\n"
+

"    color: rgb(112, 112, 112);\n"
+

"    font-weight: normal;\n"
+

"    background: repeat-x rgb(242, 242, 242);\n"
+

"    background-repeat: repeat-x;\n"
+

"  }\n"
+

"  .table thead tr th {\n"
+

"    vertical-align: middle;\n"
+

"    text-align: center;\n"
+

"    font-weight: bold;\n"
+

"    border-color: rgb(221, 221, 221);\n"
+

"    color: rgb(48, 126, 204);\n"
+

"  }\n"
+

"  .table thead tr th:hover{\n"
+

"    color: #307ecc!important;\n"
+

"  }\n"
+

"  .table > thead > tr > th {\n"
+

"    border-bottom-width: 1px;\n"
+

"  }\n"
+

"  .table > thead > tr > th{\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-image: initial;\n"
+

"  }\n"
+

"  .table thead > tr > th{\n"
+

"    line-height: 1.42857;\n"
+

"    padding: 8px;\n"
+

"  }\n"
+

"  .table thead tr th:first-child {\n"
+

"    border-left-color: rgb(221, 221, 221);\n"
+

"    width: 37px;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(2){\n"
+

"    width: 98px;\n"
+

"    background-image: linear-gradient(rgb(239, 243, 248) 0px, rgb(227, 231, 237) 100%);\n"
+

"    background-repeat: repeat-x;\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(3){\n"
+

"    width: 127px;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(4){\n"
+

"    width: 98px;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(5){\n"
+

"    width: 156px;\n"
+

"    color: rgb(112, 112, 112);\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(6){\n"
+

"    width: 156px;\n"
+

"    color: rgb(112, 112, 112);\n"
+

"    cursor: pointer;\n"
+

"  }\n"
+

"  .table thead tr th:nth-child(7){\n"
+

"    width: 347px;\n"
+

"  }\n"
+

"  .check{\n"
+

"    width: 18px;\n"
+

"    margin-left: 3px;\n"
+

"  }\n"
+

"  .input_check {\n"
+

"    opacity: 0;\n"
+

"    width: 18px;\n"
+

"    height: 18px;\n"
+

"    position: absolute;\n"
+

"  }\n"
+

"  .check label{\n"
+

"    display: inline-block;\n"
+

"    width: 18px;\n"
+

"    height: 18px;\n"
+

"    background: url(../../assets/img/res_wei.png) no-repeat;\n"
+

"    background-size: 18px 18px;\n"
+

"    margin-top: 2px;\n"
+

"  }\n"
+

"  .check .input_check:checked+label {\n"
+

"    background: url(../../assets/img/res_xuan.png)no-repeat;\n"
+

"    background-size: 18px 18px;\n"
+

"  }\n"
+

"  tbody {\n"
+

"    display: table-row-group;\n"
+

"    vertical-align: middle;\n"
+

"    border-color: inherit;\n"
+

"  }\n"
+

"  .table tbody tr td {\n"
+

"    overflow-wrap: break-word;\n"
+

"    word-break: break-all;\n"
+

"    vertical-align: middle;\n"
+

"    font-family: 新宋体;\n"
+

"    text-align: center;\n"
+

"  }\n"
+

"  .odd{\n"
+

"    background-color: rgb(249, 249, 249);\n"
+

"  }\n"
+

"  .even:hover{\n"
+

"    background-color: rgb(249, 249, 249);\n"
+

"  }\n"
+

"  .table>tbody>tr>td{\n"
+

"    border-width: 1px;\n"
+

"    border-style: solid;\n"
+

"    border-color: rgb(221, 221, 221);\n"
+

"    border-image: initial;\n"
+

"  }\n"
+

"  .table tbody > tr > td{\n"
+

"    line-height: 1.42857;\n"
+

"    padding: 8px;\n"
+

"  }\n"
+

"  .table tbody tr td a {\n"
+

"    color: rgb(255, 102, 0);\n"
+

"  }\n"
+

"  .table tbody tr td a:hover{\n"
+

"    text-decoration: underline;\n"
+

"  }\n"
+

"  .btn-warning{\n"
+

"    background-color: rgb(255, 183, 82);\n"
+

"    border-color: rgb(255, 183, 82);\n"
+

"  }\n"
+

"  .btn-warning:hover{\n"
+

"    background-color: #e59729;\n"
+

"  }\n"
+

"  .btn-xs {\n"
+

"    font-size: 12px;\n"
+

"    line-height: 1.5;\n"
+

"    border-width: 3px;\n"
+

"  }\n"
+

"  .NumberOfPages{\n"
+

"    padding-top: 12px;\n"
+

"    padding-bottom: 12px;\n"
+

"    margin: 0;\n"
+

"  }\n"
+

"  .numberpages{\n"
+

"    width:50%;\n"
+

"    float: left;\n"
+

"    min-height: 1px;\n"
+

"    padding-right: 12px;\n"
+

"    padding-left: 12px;\n"
+

"  }\n"
+

"  .numberpages div{\n"
+

"    font-size: 14px;\n"
+

"  }\n"
+

"  .pageright{\n"
+

"    text-align: right;\n"
+

"  }\n"
+

"  .pageright ul{\n"
+

"    margin: 0 12px;\n"
+

"    display: inline-block;\n"
+

"    padding-left: 0;\n"
+

"    border-radius: 4px;\n"
+

"  }\n"
+

"  .pageright ul>li{\n"
+

"    display: inline;\n"
+

"  }\n"
+

"  .pageright ul li>a{\n"
+

"    background-color: #f9f9f9;\n"
+

"    margin-left: 0;\n"
+

"    color: #999;\n"
+

"    margin: 0 -1px 0 0;\n"
+

"    border-width: 1px;\n"
+

"    border-radius: 0!important;\n"
+

"    height: 32px;\n"
+

"    line-height: 32px;\n"
+

"    padding: 0px 10px;\n"
+

"    text-align: center;\n"
+

"    float: left;\n"
+

"    border: 1px solid #ddd;\n"
+

"  }\n"
+

"  .prev,.next{\n"
+

"    cursor: not-allowed;\n"
+

"  }\n"
+

"  .pageright ul li a.active{\n"
+

"    background-color: #6faed9;\n"
+

"    border-color: #6faed9;\n"
+

"    color: #fff;\n"
+

"    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);\n"
+

"  }\n"
+

"  /* 遮罩层 */\n"
+

"  .layui-layer-shade{\n"
+

"    z-index: 1222;\n"
+

"    background-color: #000;\n"
+

"    opacity: 0.3;\n"
+

"    top: 79px;\n"
+

"    right: 0;\n"
+

"    width: 80%;\n"
+

"    height: 100%;\n"
+

"    position: fixed;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  /* 积分获取记录 */\n"
+

"  .layui-layer-page{\n"
+

"    z-index: 1223;\n"
+

"    width: 800px;\n"
+

"    height: 400px;\n"
+

"    position: fixed;\n"
+

"    top: 120px;\n"
+

"    left:430px;\n"
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

"    animation-fill-mode: both;\n"
+

"    animation-duration: .3s;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .layui-layer-title {\n"
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

"    cursor: move;\n"
+

"  }\n"
+

"  .layui-layer-setwin {\n"
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

"  .layui-layer-setwin a {\n"
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

"  }\n"
+

"  .layui-layer-content{\n"
+

"    height: 358px;\n"
+

"    overflow: auto;\n"
+

"  }\n"
+

"  .layui-layer-wrap{\n"
+

"    padding: 10px;\n"
+

"  }\n"
+

"  /* 确定要删除吗 */\n"
+

"  .layui-layer-dialogpp{\n"
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

"  .layui-layer-titlep{\n"
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

"  .layui-layer-setwindp{\n"
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

"  .layui-layer-closep{\n"
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

"  .layui-layer-paddingp{\n"
+

"    padding: 20px;\n"
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

"  .layui-layer-dialogpp .layui-layer-btnp{\n"
+

"    padding-top: 10px;\n"
+

"    text-align: center;\n"
+

"    padding: 0 10px 12px;\n"
+

"    pointer-events: auto;\n"
+

"  }\n"
+

"  .layui-layer-btnp .layui-layer-btn6 {\n"
+

"    border-color: #4898d5;\n"
+

"    background-color: #2e8ded;\n"
+

"    color: #fff;\n"
+

"  }\n"
+

"  .layui-layer-btnp a {\n"
+

"    display: inline-block;\n"
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

"    vertical-align: top;\n"
+

"  }\n"
+

"  /* 已删除 */\n"
+

"  .shanchu{\n"
+

"    position: fixed;\n"
+

"    z-index: 9999999;\n"
+

"    width: 178px;\n"
+

"    height: 64px;\n"
+

"    left: 53%;\n"
+

"    top: 46%;\n"
+

"    background-color: #fff;\n"
+

"    pointer-events: auto;\n"
+

"    border: 1px solid #d3d4d3;\n"
+

"    border-radius: 2px;\n"
+

"    line-height: 64px;\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .shanchus{\n"
+

"    display: block;\n"
+

"    width: 100%;\n"
+

"    height: 30px;\n"
+

"    margin-top: 16px;\n"
+

"    font-size: 12px;\n"
+

"    color: #393939;\n"
+

"  }\n"
+

"  .shanchu .shanchus img{\n"
+

"    display: block;\n"
+

"    width: 30px;\n"
+

"    height: 30px;\n"
+

"    margin-left: 15px;\n"
+

"    margin-right: 10px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .shanchu .shanchus span{\n"
+

"    display: block;\n"
+

"    float: left;\n"
+

"    height: 30px;\n"
+

"    line-height: 30px;\n"
+

"    font-size: 15px;\n"
+

"  }\n"
+

"  /*面包屑*/\n"
+

"  .bread{\n"
+

"    color: #333333;\n"
+

"  }\n"
+

"  .bread>*:hover{\n"
+

"    text-decoration: underline;\n"
+

"    color: blue;\n"
+

"  }\n"
+

"  .bread a {\n"
+

"    color: #333333;\n"
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
  }
</style>
