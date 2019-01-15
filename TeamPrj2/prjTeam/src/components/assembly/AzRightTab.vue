<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>页面级组件</h1>
    </div>
    <div class="info-side">
      <h1>页面级类似tab切换组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" v-highlight-a>
          <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-tab-cont></az-right-tab-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightTabCont from "./AzRightTabCont";
    export default {
        name: "AzRightTab",
      components: {AzRightTabCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"one\">\n" +
            "    <div class=\"settingbox\">\n" +
            "      <!--点击设置msg的值  如果msg等于0，第一个a添加cur类名，如果msg等于1，第二个a添加cur类名，以此类推。\n" +
            "         添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->\n" +
            "      <div class=\"tab-tit\">\n" +
            "        <a href=\"javascript:;\" @click=\"msg=0\" :class=\"{'cur':msg===0}\">基本设置</a>\n" +
            "        <a href=\"javascript:;\" @click=\"msg=1\" :class=\"{'cur':msg===1}\">消息通知</a>\n" +
            "        <a href=\"javascript:;\" @click=\"msg=2\" :class=\"{'cur':msg===2}\">底部菜单</a>\n" +
            "        <a href=\"javascript:;\" @click=\"msg=3\" :class=\"{'cur':msg===3}\">其他设置</a>\n" +
            "      </div>\n" +
            "      <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。\n" +
            "          如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->\n" +
            "      <div class=\"tab-con\">\n" +
            "        <div v-show=\"msg===0\">\n" +
            "          <form>\n" +
            "            <label><span>*</span> 网站名称</label><input type=\"text\" placeholder=\"控制在25个字、50个字节以内\"/><br/>\n" +
            "            <label><span>*</span> 网站icon图标</label><input type=\"text\" placeholder=\"选择上传图标 ...\"/><input class=\"currentfile\" type=\"file\" accept=\"image/jpeg,image/x-png,image/gif\" /><label class=\"myfile\">choose file</label><br/>\n" +
            "            <label><span>*</span> 关键词</label><input type=\"text\" placeholder=\"5个左右,8汉字以内,用英文,隔开\"/><br/>\n" +
            "            <div class=\"btn\">\n" +
            "              <a href=\"javascript:;\" class=\"save btns\">保存</a>\n" +
            "              <a href=\"javascript:;\" class=\"cancel btns\">取消</a>\n" +
            "            </div>\n" +
            "          </form>\n" +
            "        </div>\n" +
            "        <div v-show=\"msg===1\">\n" +
            "          <span>暂时没有消息哦,有消息会通过短信提示您的~</span>\n" +
            "        </div>\n" +
            "        <div v-show=\"msg===2\">\n" +
            "          <span>顶部菜单课自行设置~</span>\n" +
            "        </div>\n" +
            "        <div v-show=\"msg===3\" class=\"threediv\">\n" +
            "          <label class=\"verticalalign\"><span>*</span> 屏蔽词</label><textarea></textarea>\n" +
            "          <div class=\"btn\">\n" +
            "            <a href=\"javascript:;\" class=\"save btns\">保存</a>\n" +
            "            <a href=\"javascript:;\" class=\"cancel btns\">取消</a>\n" +
            "          </div>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightTabCont\",\n" +
            "      data() {\n" +
            "        return {\n" +
            "          msg: 0\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "</ script>\n"+
" <style scoped>\n"+
"  .one{\n"
+

"    padding: 20px 15px 60px;\n"
+

"    width: 80%;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .one::-webkit-scrollbar{\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .settingbox{\n"
+

"    width:100%;\n"
+

"    background: #fff;\n"
+

"  }\n"
+

"  .tab-tit{\n"
+

"    font-size: 0;\n"
+

"    border-bottom: 1px solid rgb(221, 221, 221);\n"
+

"  }\n"
+

"  .tab-tit a{\n"
+

"    display: inline-block;\n"
+

"    padding: 8px 12px;\n"
+

"    line-height:1;\n"
+

"    font-size: 14px;\n"
+

"    text-align: center;\n"
+

"    text-decoration:none;\n"
+

"    background-color: rgb(249, 249, 249);\n"
+

"    color: rgb(153, 153, 153);\n"
+

"    margin-right: -1px;\n"
+

"    z-index: 11;\n"
+

"    border-radius: 0px !important;\n"
+

"    border: 1px solid rgb(221, 221, 221);\n"
+

"    border-bottom: none;\n"
+

"  }\n"
+

"  .tab-tit .cur{\n"
+

"    color: rgb(87, 99, 115);\n"
+

"    background-color: rgb(255, 255, 255);\n"
+

"    z-index: 12;\n"
+

"    line-height: 16px;\n"
+

"    margin-top: -1px;\n"
+

"    border-color: rgb(76, 143, 189) rgb(197, 208, 220) transparent;\n"
+

"    border-top: 2px solid rgb(76, 143, 189);\n"
+

"  }\n"
+

"  .tab-con div{\n"
+

"    padding: 16px 12px;\n"
+

"  }\n"
+

"  form label span{\n"
+

"    color: red;\n"
+

"    margin-top: 10px;\n"
+

"    vertical-align: middle;\n"
+

"  }\n"
+

"  label{\n"
+

"    width: 100px;\n"
+

"    display: inline-block;\n"
+

"    padding-top: 5px;\n"
+

"    padding-bottom: 5px;\n"
+

"  }\n"
+

"  .currentfile{\n"
+

"    opacity: 0;\n"
+

"    position: absolute;\n"
+

"    z-index: 999;\n"
+

"    margin-left: 20px;\n"
+

"  }\n"
+

"  .myfile{\n"
+

"    background:rgb(209, 91, 71) ;\n"
+

"    color: #fff;\n"
+

"    border-radius: 4px;\n"
+

"    padding:5px;\n"
+

"    text-align: center;\n"
+

"    margin-left: 20px;\n"
+

"  }\n"
+

"  input{\n"
+

"    width: 39%;\n"
+

"    padding: 5px 4px;\n"
+

"    margin-bottom: 20px;\n"
+

"    border:1px solid rgb(213, 213, 213);\n"
+

"    outline:none;\n"
+

"  }\n"
+

"  input:focus{\n"
+

"    border: 1px solid rgb(245, 153, 66);\n"
+

"  }\n"
+

"  textarea{\n"
+

"    width: 400px;\n"
+

"    height: 250px;\n"
+

"    resize:none;\n"
+

"    border:1px solid rgb(213, 213, 213);\n"
+

"    outline: none;\n"
+

"    margin-bottom: 15px;\n"
+

"  }\n"
+

"  textarea:focus{\n"
+

"    border: 1px solid rgb(245, 153, 66);\n"
+

"  }\n"
+

"  .verticalalign{\n"
+

"    vertical-align: top;\n"
+

"  }\n"
+

"  .btn{\n"
+

"    width: 80%;\n"
+

"    color: #fff;\n"
+

"    margin-left: 200px;\n"
+

"  }\n"
+

"  .btns{\n"
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

"    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px !important;\n"
+

"    background-image: none !important;\n"
+

"    box-shadow: none !important;\n"
+

"    padding: 3px 10px;\n"
+

"    border-width: 5px;\n"
+

"    border-style: solid;\n"
+

"    border-image: initial;\n"
+

"    transition: all 0.15s ease 0s;\n"
+

"    border-radius: 3px;\n"
+

"    color: #fff;\n"
+

"  }\n"
+

"  .save{\n"
+

"    background-color: rgb(66, 139, 202);\n"
+

"    border-color: rgb(66, 139, 202);\n"
+

"  }\n"
+

"  .save:hover{\n"
+

"    background-color: rgb(27, 106, 170);\n"
+

"    border-color: rgb(66, 139, 202);\n"
+

"  }\n"
+

"  .cancel{\n"
+

"    background-color: rgb(171, 186, 195);\n"
+

"    border-color: rgb(171, 186, 195);\n"
+

"  }\n"
+

"  .cancel:hover{\n"
+

"    background-color: rgb(139, 154, 163);\n"
+

"    border-color: rgb(171, 186, 195);\n"
+

"  }\n"
+

"  .verticalalign span{\n"
+

"    color: red;\n"
+

"    vertical-align: middle;\n"
+

"  }\n"
+

"  .threediv textarea{\n"
+

"    width:750px ;\n"
+

"    height: 200px;\n"
+

"  }\n"
+

"</style>"
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
    color: #3a3a3a;
    height:300px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .hljsl{
    width: 100%;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
  }
</style>
