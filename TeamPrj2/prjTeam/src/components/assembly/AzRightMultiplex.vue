<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>复用组件</h1>
      <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-multiplex-cont></az-right-multiplex-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightMultiplexCont from "./AzRightMultiplexCont";
    export default {
        name: "AzRightMultiplex",
      components: {AzRightMultiplexCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div>\n" +
            "    <div class=\"market\">\n" +
            "      <img src=\"../../../static/images/index_marketTit.png\" alt=\"\" class=\"marketTit\">\n" +
            "      <ul>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <p>共筑爱巢</p>\n" +
            "          <p>家具建材市场</p>\n" +
            "          <img src=\"../../../static/images/index_market1.jpg\" alt=\"\">\n" +
            "        </li>\n" +
            "      </ul>\n" +
            "\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightMultiplexCont\"\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .market{\n"
+

"    width:100%;\n"
+

"    background:white;\n"
+

"    margin-bottom:15px;\n"
+

"  }\n"
+

"  .market .marketTit{\n"
+

"    width:100%;\n"
+

"  }\n"
+

"  .market ul{\n"
+

"    display:flex;\n"
+

"    flex-wrap: wrap;\n"
+

"  }\n"
+

"  .market ul li{\n"
+

"    width:33.3%;\n"
+

"    height:130px;\n"
+

"    box-sizing: border-box;\n"
+

"    border-bottom:1px solid #f2f2f2;\n"
+

"  }\n"
+

"  .market ul li:nth-child(3n+1){\n"
+

"    border-right:1px solid #f2f2f2;\n"
+

"  }\n"
+

"  .market ul li:nth-child(3n-1){\n"
+

"    border-right:1px solid #f2f2f2;\n"
+

"  }\n"
+

"  .market ul li p:first-child{\n"
+

"    margin:2.5px 0 0 10px;\n"
+

"    font-size:16px;\n"
+

"    font-weight: 800;\n"
+

"    color:#333;\n"
+

"  }\n"
+

"  .market ul li p:nth-child(2){\n"
+

"    margin:2.5px 0 0 12.5px;\n"
+

"    font-size:12px;\n"
+

"    color:#999;\n"
+

"  }\n"
+

"  .market ul li img{\n"
+

"    width:80px;\n"
+

"    height:80px;\n"
+

"    margin:2.5px 22px 0;\n"
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
    width: 375px;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
  }
</style>
