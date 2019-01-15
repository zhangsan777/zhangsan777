<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>页面级组件</h1>
    </div>
    <div class="info-side">
      <h1>页面级分类组件</h1>
      <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-full-class-cont></az-right-full-class-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightFullClassCont from "./AzRightFullClassCont";
    export default {
        name: "AzRightFullClass",
      components: {AzRightFullClassCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"box\">\n" +
            "    <nav>\n" +
            "      <div class=\"nav_left\">\n" +
            "        <ul class=\"uls\">\n" +
            "          <li   v-for=\"(p,index) in see\" v-on:click=\"addClass(index)\" v-bind:class=\"{ lis:index==current}\"><a href=\"javascript:;\">{{p.title}}</a></li>\n" +
            "        </ul>\n" +
            "      </div>\n" +
            "      <div class=\"nav_right\">\n" +
            "        <div class=\"nav_box\">\n" +
            "          <a href=\"javascript:;\">{{see[current].cont}}</a>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "    </nav>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    export default {\n" +
            "      name: \"AzRightFullClassCont\",\n" +
            "      data() {\n" +
            "        return {\n" +
            "          current: 0,\n" +
            "          see: [{\n" +
            "            title:\"产品\",\n" +
            "            cont:\"选项一\"\n" +
            "          }, {\n" +
            "            title:\"产品\",\n" +
            "            cont:\"选项二\"\n" +
            "          },{\n" +
            "            title:\"产品\",\n" +
            "            cont:\"选项三\"\n" +
            "          }]\n" +
            "        }\n" +
            "      },\n" +
            "      methods:{\n" +
            "        addClass:function(index){\n" +
            "          this.current=index;\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .box{\n"
+

"    width:100%;\n"
+

"    -webkit-flex:1;\n"
+

"    overflow-y:auto;\n"
+

"    overflow-x: hidden;\n"
+

"    background-color: #fff;\n"
+

"  }\n"
+

"  nav{\n"
+

"    width: 100%;\n"
+

"    height: 100%;\n"
+

"    overflow: hidden;\n"
+

"  }\n"
+

"  .nav_left{\n"
+

"    width: 87px;\n"
+

"    height: 100%;\n"
+

"    background-color: #f4f4f4;\n"
+

"    float: left;\n"
+

"    display: -webkit-flex;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .nav_left .uls{\n"
+

"    display: inline-block;\n"
+

"    width: 87px;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .nav_left .uls li{\n"
+

"    display: block;\n"
+

"    width: 87px;\n"
+

"    height: 46px;\n"
+

"    border-bottom: 1px solid #ececec;\n"
+

"  }\n"
+

"  .nav_left .uls li a{\n"
+

"    display: block;\n"
+

"    width: 87px;\n"
+

"    height: 46px;\n"
+

"    line-height: 46px;\n"
+

"    text-align: center;\n"
+

"    font-size: 12px;\n"
+

"    float: left;\n"
+

"    color: #666666;\n"
+

"  }\n"
+

"  .uls .lis{\n"
+

"    display: block;\n"
+

"    width: 70px;\n"
+

"    background-color: #fff;\n"
+

"  }\n"
+

"  .nav_left .uls .lis a{\n"
+

"    color: #ff6600;\n"
+

"  }\n"
+

"  .nav_right{\n"
+

"    width: 287px;\n"
+

"    height: 100%;\n"
+

"    padding: 10px;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .nav_right{\n"
+

"    width: 287px;\n"
+

"    height: 100%;\n"
+

"    padding: 10px;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .nav_box{\n"
+

"    width: 270px;\n"
+

"    height: 100%;\n"
+

"    /* display: none; */\n"
+

"  }\n"
+

"  .nav_box a{\n"
+

"    display: block;\n"
+

"    width: 100%;\n"
+

"    height: 100px;\n"
+

"    font-size:20px;\n"
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
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
  }
</style>
