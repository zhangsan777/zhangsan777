<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>头部组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-manage-header-cont></az-right-manage-header-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightManageHeaderCont from "./AzRightManageHeaderCont";
    export default {
        name: "AzRightManageHeader",
      components: {AzRightManageHeaderCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"conterheader\">\n" +
            "    <div class=\"contentheader\">\n" +
            "      <div class=\"chleft\">\n" +
            "        <img src=\"../../assets/img/resindexlogo.png\">\n" +
            "        <span>为你所想 为你所乐</span>\n" +
            "      </div>\n" +
            "      <div class=\"chright\">\n" +
            "        <ul>\n" +
            "          <router-link tag=\"li\" to=\"/AzIndex\" >\n" +
            "            <span class=\"iconfont\">&#xe695;</span>\n" +
            "            <p>首页</p>\n" +
            "          </router-link>\n" +
            "          <router-link tag=\"li\" to=\"/AzIndex\" >\n" +
            "            <span class=\"iconfont\">&#xe695;</span>\n" +
            "            <p>基本设置</p>\n" +
            "          </router-link>\n" +
            "          <router-link tag=\"li\" to=\"/AzIndex\" >\n" +
            "            <span class=\"iconfont\">&#xe695;</span>\n" +
            "            <p>订单管理</p>\n" +
            "          </router-link>\n" +
            "        </ul>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightManageHeaderCont\"\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .conterheader{\n"
+

"    height: 47px;\n"
+

"    width: 100%;\n"
+

"  }\n"
+

"  .contentheader{\n"
+

"    height:47px ;\n"
+

"    background: #2a3950;\n"
+

"    width: 100%;\n"
+

"  }\n"
+

"  .chleft{\n"
+

"    padding-left: 10px;\n"
+

"    float: left;\n"
+

"    width: 20%;\n"
+

"    height: 47px;\n"
+

"  }\n"
+

"  .chleft img{\n"
+

"    width: 30px;\n"
+

"    height: 30px;\n"
+

"    margin-top: 10px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .chleft span{\n"
+

"    font-size:18px ;\n"
+

"    color: #fff;\n"
+

"    line-height: 47px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .chright{\n"
+

"    float: right;\n"
+

"    width: 80%;\n"
+

"    background: #374760;\n"
+

"    height: 47px;\n"
+

"    color: #fff;\n"
+

"  }\n"
+

"  .chright ul{\n"
+

"    overflow: hidden;\n"
+

"  }\n"
+

"  .chright ul li{\n"
+

"    line-height: 1;\n"
+

"    width: 20%;\n"
+

"    text-align: center;\n"
+

"    border-left: 1px solid #27374e;\n"
+

"    height: 47px;\n"
+

"    cursor: pointer;\n"
+

"    padding-left: 46px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .chright ul li p{\n"
+

"    float: left;\n"
+

"    line-height: 47px;\n"
+

"  }\n"
+

"  .chright ul li span{\n"
+

"    float: left;\n"
+

"    line-height: 47px;\n"
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
