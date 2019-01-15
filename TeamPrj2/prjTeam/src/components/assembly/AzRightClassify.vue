<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>分类组件</h1>
      <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
      <pre class="hljs">
          <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-classify-cont></az-right-classify-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightClassifyCont from "./AzRightClassifyCont";
    export default {
        name: "AzRightClassify",
      components: { AzRightClassifyCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"classify\">\n" +
            "    <ul>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify1.png\" alt=\"\">\n" +
            "        <p>手机</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify2.png\" alt=\"\">\n" +
            "        <p>苏宁超市</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify3.png\" alt=\"\">\n" +
            "        <p>生活家电</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify4.png\" alt=\"\">\n" +
            "        <p>苏宁拼购</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify5.gif\" alt=\"\">\n" +
            "        <p>母婴玩具</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify6.png\" alt=\"\">\n" +
            "        <p>大聚惠</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify7.png\" alt=\"\">\n" +
            "        <p>赚钱</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify8.png\" alt=\"\">\n" +
            "        <p>领云钻</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify9.png\" alt=\"\">\n" +
            "        <p>苏宁家电</p>\n" +
            "      </li>\n" +
            "      <li>\n" +
            "        <img src=\"../../../static/images/index_classify10.png\" alt=\"\">\n" +
            "        <p>分类</p>\n" +
            "      </li>\n" +
            "    </ul>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightClassifyCont\"\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" < style scoped >\n"+
"  .classify{\n"
+

"    width:100%;\n"
+

"    background:white;\n"
+

"    margin-bottom:.15rem;\n"
+

"  }\n"
+

"  .classify ul{\n"
+

"    display:flex;\n"
+

"    justify-content: space-around;\n"
+

"    flex-wrap: wrap;\n"
+

"  }\n"
+

"  .classify ul li{\n"
+

"    width:75px;\n"
+

"    height:70px;\n"
+

"    text-align: center;\n"
+

"  }\n"
+

"  .classify ul li img{\n"
+

"    width:41px;\n"
+

"    height:41px;\n"
+

"    margin:12px 17px 0 17px;\n"
+

"  }\n"
+

"  .classify ul li p{\n"
+

"    font-size:12px;\n"
+

"    line-height:22px;\n"
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
    height:200px;
    background:white;
    margin-bottom:.15rem;
    position: relative;
  }
</style>
