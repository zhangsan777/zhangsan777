<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>顶部组件</h1>
      <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
          <az-right-header-cont></az-right-header-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightHeaderCont from "./AzRightHeaderCont";
    export default {
        name: "AzRightHeader",
      components: {AzRightHeaderCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div>\n" +
            "    <header>\n" +
            "      <img src=\"../../../static/images/index_feilei.png\" alt=\"\"/>\n" +
            "      <a href=\"JavaScript:;\" class=\"sousuo\">新年换新每满199减60</a>\n" +
            "      <a href=\"JavaScript:;\" class=\"reg\">登录</a>\n" +
            "    </header>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "        name: \"AzRightHeaderCont\"\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  header {\n"
+

"    width: 100%;\n"
+

"    height: 44px;\n"
+

"    display: flex;\n"
+

"    justify-content: space-between;\n"
+

"    background: rgba(255, 192, 0, 0);\n"
+

"    line-height: 44px;\n"
+

"    position: absolute;\n"
+

"    top: 0;\n"
+

"    box-sizing: border-box;\n"
+

"    padding: 10px;\n"
+

"    z-index: 99999;\n"
+

"  }\n"
+

"\n"
+

"  header img {\n"
+

"    width: 22px;\n"
+

"    height: 35px;\n"
+

"    padding-top: 6px;\n"
+

"  }\n"
+

"\n"
+

"  header .sousuo {\n"
+

"    display: block;\n"
+

"    width: 281px;\n"
+

"    height: 36px;\n"
+

"    border-radius: 16px;\n"
+

"    font-size: 13px;\n"
+

"    color: #999;\n"
+

"    background: rgba(255, 255, 255, 0.8);\n"
+

"    margin-top: 4px;\n"
+

"    padding-left: 30px;\n"
+

"    box-sizing: border-box;\n"
+

"    line-height: 36px;\n"
+

"  }\n"
+

"\n"
+

"  header .reg {\n"
+

"    display: block;\n"
+

"    font-size: 14px;\n"
+

"    color: #fff;\n"
+

"    line-height: 44px;\n"
+

"  }\n"
+

"</style>\n"
        } }
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
