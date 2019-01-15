<template>
 <div class="right-cont">
  <div class="header-cont">
    <h1>基础插件</h1>
  </div>
  <div class="info-side">
    <h1>底部组件</h1>
    <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
    <pre class="hljs">
        <code>{{link}}</code>
      </pre>
  </div>
  <div class="info-side">
    <h1>展示效果:</h1>
    <div class="hljsl">
      <az-right-footer-cont></az-right-footer-cont>
    </div>
  </div>
  </div>
</template>

<script>
    import AzRightFooterCont from "./AzRightFooterCont";
    export default {
        name: "AzRightFooter",
      components: {AzRightFooterCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div>\n" +
            "    <footer>\n" +
            "      <ul>\n" +
            "        <li>\n" +
            "          <img src=\"../../../static/images/index_footershouye.png\" alt=\"\">\n" +
            "          <p>首页</p>\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <img src=\"../../../static/images/index_footerss.png\" alt=\"\">\n" +
            "          <p>分类</p>\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <img src=\"../../../static/images/index_footerbq.png\" alt=\"\">\n" +
            "          <p>必抢清单</p>\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <img src=\"../../../static/images/index_footercart.png\" alt=\"\">\n" +
            "          <p>购物车</p>\n" +
            "        </li>\n" +
            "        <li>\n" +
            "          <img src=\"../../../static/images/index_footermy.png\" alt=\"\">\n" +
            "          <p>我的易购</p>\n" +
            "        </li>\n" +
            "      </ul>\n" +
            "    </footer>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightFooterCont\"\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" < style scoped>\n"+

"  footer{\n"
+

"    width:100%;\n"
+

"    height:49px;\n"
+

"    border-top: 1px solid #EEE;\n"
+

"    background:white;\n"
+

"    position:absolute;\n"
+

"    top:0;\n"
+

"  }\n"
+

"  footer ul{\n"
+

"    display:flex;\n"
+

"    width:100%;\n"
+

"    justify-content: space-around;\n"
+

"  }\n"
+

"  footer ul li{\n"
+

"    width:20%;\n"
+

"    position:relative;\n"
+

"  }\n"
+

"  footer ul li img{\n"
+

"    width:25px;\n"
+

"    height:25px;\n"
+

"    box-sizing: border-box;\n"
+

"    padding-top:6px;\n"
+

"    margin:0 auto;\n"
+

"  }\n"
+

"  footer ul li:first-child img{\n"
+

"    width:37px;\n"
+

"    height:37px;\n"
+

"    position:absolute;\n"
+

"    top: -13px;\n"
+

"    left: 19px;\n"
+

"  }\n"
+

"  footer ul li:first-child p{\n"
+

"    position:relative;\n"
+

"    bottom:-30px;\n"
+

"    color:#fa0;\n"
+

"  }\n"
+

"  footer ul li p{\n"
+

"    font-size:12px;\n"
+

"    color:#333;\n"
+

"    text-align: center;\n"
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
    background-color:pink;
    margin-bottom:.15rem;
    position: relative;
  }
</style>
