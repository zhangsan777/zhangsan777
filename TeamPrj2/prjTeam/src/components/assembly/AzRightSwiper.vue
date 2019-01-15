<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>左右轮播组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
       <az-right-banner></az-right-banner>
      </div>
    </div>
    <div class="info-side">
      <h1>上下轮播组件</h1>
      <p>例：复制下列代码到所需页面(需要将px布局改为rem布局既可)</p>
      <pre class="hljs">
        <code>{{link1}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-classify-cont-up></az-right-classify-cont-up>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightBanner from "./AzRightBanner";
    import AzRightClassifyContUp from "./AzRightClassifyContUp";
    export default {
        name: "AzRightSwiper",
      components: {AzRightClassifyContUp, AzRightBanner},
      data(){
          return{
            "link":"<template>\n" +
              "  <div class=\"banner\">\n" +
              "    <div class=\"swiper-container\">\n" +
              "      <div class=\"swiper-wrapper\">\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner1.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner2.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner3.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner4.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner5.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner6.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner7.jpg\" alt=\"\"/></div>\n" +
              "        <div class=\"swiper-slide\"><img src=\"../../../static/images/index_banner8.jpg\" alt=\"\"/></div>\n" +
              "      </div>\n" +
              "      <!-- 如果需要分页器 -->\n" +
              "      <div class=\"swiper-pagination\"></div>\n" +
              "    </div>\n" +
              "  </div>\n" +
              "</template>\n" +
              "\n" +
              "<script>\n" +
              "  import Swiper from \"swiper\"\n" +
              "    export default {\n" +
              "        name: \"AzRightBanner\",\n" +
              "      mounted() {\n" +
              "        new Swiper(\".swiper-container\", {\n" +
              "          direction: 'horizontal',\n" +
              "          autoplay: {\n" +
              "            disableOnInteraction: false\n" +
              "          },\n" +
              "          loop: true,\n" +
              "          pagination: {\n" +
              "            el: \".swiper-pagination\"\n" +
              "          }\n" +
              "        });\n" +
              "      },\n" +
              "    }\n" +
              "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .banner{\n"
+

"    width:100%;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .swiper-container{\n"
+

"    width:100%;\n"
+

"    height: 100%;\n"
+

"    overflow: hidden;\n"
+

"    position:relative;\n"
+

"  }\n"
+

"  .swiper-wrapper{\n"
+

"    width:100%;\n"
+

"    height:100%;\n"
+

"    display:flex;\n"
+

"    flex:0;\n"
+

"  }\n"
+

"  .swiper-slide{\n"
+

"    width:375px;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .swiper-slide img{\n"
+

"    width:375px;\n"
+

"    height: 100%;\n"
+

"  }\n"
+

"  .swiper-pagination{\n"
+

"    bottom: -16px;\n"
+

"    left: -3px;\n"
+

"  }\n"
+

"</style>\n",
            "link1":"<template>\n" +
              "  <div>\n" +
              "    <div class=\"marquee\">\n" +
              "      <img src=\"../../../static/images/index_headerline.png\" alt=\"\">     \n" +
              "      <div class=\"marquee_box\">               \n" +
              "        <ul class=\"marquee_list\" :class=\"{marquee_top:animate}\">                       \n" +
              "          <li :key=index v-for=\"(item,index) in marqueeList\">\n" +
              "            <span class=\"hot\">{{item.type}}</span>\n" +
              "            <span class=\"inCon\">{{item.name}}</span>\n" +
              "          </li>       \n" +
              "        </ul>\n" +
              "              \n" +
              "      </div>\n" +
              "    </div>\n" +
              "  </div>\n" +
              "</template>\n" +
              "\n" +
              "<script>\n" +
              "    export default {\n" +
              "        name: \"AzRightClassifyContUp\",\n" +
              "      data() {\n" +
              "        return {\n" +
              "          animate: false,\n" +
              "          marqueeList: [\n" +
              "            {\n" +
              "              type:'热议',\n" +
              "              name: 'OPPO K1惊喜来袭，将2018进行到底'\n" +
              "            },\n" +
              "            {\n" +
              "              type:'热议',\n" +
              "              name: '选葡萄酒有诀窍，“3个P”原则是关键'\n" +
              "            },\n" +
              "            {\n" +
              "              type:'热议',\n" +
              "              name: '不同材质的笔袋、笔盒，你知道多少？'\n" +
              "            },\n" +
              "            {\n" +
              "              type:'热议',\n" +
              "              name: '诱人黑科技华为Mate20，世界顶级拍照'\n" +
              "            },\n" +
              "          ],\n" +
              "        }\n" +
              "      },\n" +
              "      created() {\n" +
              "        setInterval(this.showMarquee, 3000)\n" +
              "      },\n" +
              "      methods: {\n" +
              "        showMarquee: function () {\n" +
              "          this.animate = true;\n" +
              "          setTimeout(() => {\n" +
              "            this.marqueeList.push(this.marqueeList[0]);\n" +
              "            this.marqueeList.shift();\n" +
              "            this.animate = false;\n" +
              "          }, 1500)\n" +
              "        },\n" +
              "      }\n" +
              "    }\n" +
              "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .marquee {\n"
+

"    color: #3A3A3A;\n"
+

"    display: flex;\n"
+

"    width: 100%;\n"
+

"    height: 55px;\n"
+

"    background: #fff;\n"
+

"    box-sizing: border-box;\n"
+

"    overflow: hidden;\n"
+

"    font-size: 14px;\n"
+

"    position:relative;\n"
+

"  }\n"
+

"  .marquee img{\n"
+

"    width:35px;\n"
+

"    height:35px;\n"
+

"    position:relative;\n"
+

"    top: 7px;\n"
+

"    left: 14px;\n"
+

"  }\n"
+

"  .marquee_box {\n"
+

"    display: block;\n"
+

"    position: relative;\n"
+

"    width: 100%;\n"
+

"    overflow: hidden;\n"
+

"    height: 55px;\n"
+

"    padding-left:10px;\n"
+

"  }\n"
+

"\n"
+

"  .marquee_list {\n"
+

"    display: block;\n"
+

"    position: absolute;\n"
+

"    top: 0;\n"
+

"    left: 0;\n"
+

"    padding-left:20px;\n"
+

"  }\n"
+

"\n"
+

"  .marquee_top {\n"
+

"    transition: all 2s;\n"
+

"    margin-top: -55px;\n"
+

"  }\n"
+

"\n"
+

"  .marquee_list li {\n"
+

"    width:100%;\n"
+

"    height: 55px;\n"
+

"    font-size: 12px;\n"
+

"    display: flex;\n"
+

"    justify-content: space-around;\n"
+

"  }\n"
+

"\n"
+

"  .marquee_list li span {\n"
+

"    display: block;\n"
+

"  }\n"
+

"\n"
+

"  .marquee_list li .inCon {\n"
+

"    width:80%;\n"
+

"    overflow: hidden;\n"
+

"    text-overflow: ellipsis;\n"
+

"    white-space: nowrap;\n"
+

"    font-size:13px;\n"
+

"    color:#000;\n"
+

"    line-height: 55px;\n"
+

"  }\n"
+

"  .marquee_list li .hot {\n"
+

"    border: 1px solid #f60;\n"
+

"    border-radius: 4px;\n"
+

"    font-size: 10px;\n"
+

"    color: #F60;\n"
+

"    width:  26px;\n"
+

"    height: 12px;\n"
+

"    box-sizing: border-box;\n"
+

"    text-overflow: ellipsis;\n"
+

"    white-space: nowrap;\n"
+

"    text-align: center;\n"
+

"    line-height: 12px;\n"
+

"    margin-top:20px;\n"
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
    height:185px;
    background:white;
    margin-bottom:.15rem;
  }
</style>
