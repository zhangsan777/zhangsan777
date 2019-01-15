<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>地图组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-map-cont></az-right-map-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightMapCont from "./AzRightMapCont";
    export default {
        name: "AzRightMap",
      components: {AzRightMapCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"Figure\">\n" +
            "    <div class=\"Figureheader\">\n" +
            "      <h1>订单量</h1><span>(纯属虚构)</span>\n" +
            "    </div>\n" +
            "    <div  class=\"echarts\">\n" +
            "      <div :style=\"{height:'500px',width:'100%'}\" ref=\"myEchart\"></div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "  import echarts from '../../../node_modules/echarts/lib/echarts'\n" +
            "  require('echarts/map/js/china');// 引入中国地图数据\n" +
            "    export default {\n" +
            "        name: \"AzRightMapCont\",\n" +
            "      props: [\"userJson\"],\n" +
            "      data() {\n" +
            "        return {\n" +
            "          chart: null\n" +
            "        };\n" +
            "      },\n" +
            "      mounted() {\n" +
            "        this.chinaConfigure();\n" +
            "      },\n" +
            "      beforeDestroy() {\n" +
            "        if (!this.chart) {\n" +
            "          return;\n" +
            "        }\n" +
            "        this.chart.dispose();\n" +
            "        this.chart = null;\n" +
            "      },\n" +
            "      methods: {\n" +
            "        chinaConfigure() {\n" +
            "          let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置\n" +
            "          window.onresize = myChart.resize;\n" +
            "          myChart.setOption({ // 进行相关配置\n" +
            "            backgroundColor: \"#c6ddeb\",\n" +
            "            tooltip: {}, // 鼠标移到图里面的浮动提示框\n" +
            "            dataRange: {\n" +
            "              show: true,\n" +
            "              min: 0,\n" +
            "              max: 1000,\n" +
            "              text: ['High', 'Low'],\n" +
            "              realtime: true,\n" +
            "              calculable: true,\n" +
            "              color: ['orangered', 'yellow', 'lightskyblue']\n" +
            "            },\n" +
            "            geo: { // 这个是重点配置区\n" +
            "              map: 'china', // 表示中国地图\n" +
            "              roam: true,\n" +
            "              label: {\n" +
            "                normal: {\n" +
            "                  show: true, // 是否显示对应地名\n" +
            "                  textStyle: {\n" +
            "                    color: 'rgba(0,0,0,0.4)'\n" +
            "                  }\n" +
            "                }\n" +
            "              },\n" +
            "              itemStyle: {\n" +
            "                normal: {\n" +
            "                  borderColor: 'rgba(0, 0, 0, 0.2)'\n" +
            "                },\n" +
            "                emphasis: {\n" +
            "                  areaColor: null,\n" +
            "                  shadowOffsetX: 0,\n" +
            "                  shadowOffsetY: 0,\n" +
            "                  shadowBlur: 20,\n" +
            "                  borderWidth: 0,\n" +
            "                  shadowColor: 'rgba(0, 0, 0, 0.5)'\n" +
            "                }\n" +
            "              }\n" +
            "            },\n" +
            "            series: [{\n" +
            "              type: 'scatter',\n" +
            "              coordinateSystem: 'geo' // 对应上方配置\n" +
            "            },\n" +
            "              {\n" +
            "                name: '订单量', // 浮动框的标题\n" +
            "                type: 'map',\n" +
            "                geoIndex: 0,\n" +
            "                data: [{\n" +
            "                  \"name\": \"北京\",\n" +
            "                  \"value\": 1911\n" +
            "                }, {\n" +
            "                  \"name\": \"上海\",\n" +
            "                  \"value\": 598\n" +
            "                }, {\n" +
            "                  \"name\": \"黑龙江\",\n" +
            "                  \"value\": 170\n" +
            "                }, {\n" +
            "                  \"name\": \"内蒙古\",\n" +
            "                  \"value\": 261\n" +
            "                }, {\n" +
            "                  \"name\": \"湖南\",\n" +
            "                  \"value\": 200\n" +
            "                }, {\n" +
            "                  \"name\": \"四川\",\n" +
            "                  \"value\": 1534\n" +
            "                }, {\n" +
            "                  \"name\": \"新疆\",\n" +
            "                  \"value\": 1837\n" +
            "                }, {\n" +
            "                  \"name\": \"西藏\",\n" +
            "                  \"value\": 100\n" +
            "                }, {\n" +
            "                  \"name\": \"四川\",\n" +
            "                  \"value\": 1534\n" +
            "                }, {\n" +
            "                  \"name\": \"甘肃\",\n" +
            "                  \"value\": 1778\n" +
            "                }, {\n" +
            "                  \"name\": \"青海\",\n" +
            "                  \"value\": 380\n" +
            "                }, {\n" +
            "                  \"name\": \"云南\",\n" +
            "                  \"value\": 5\n" +
            "                }, {\n" +
            "                  \"name\": \"贵州\",\n" +
            "                  \"value\": 801\n" +
            "                }, {\n" +
            "                  \"name\": \"海南\",\n" +
            "                  \"value\": 234\n" +
            "                }, {\n" +
            "                  \"name\": \"广东\",\n" +
            "                  \"value\": 879\n" +
            "                }, {\n" +
            "                  \"name\": \"台湾\",\n" +
            "                  \"value\": 1582\n" +
            "                }, {\n" +
            "                  \"name\": \"广西\",\n" +
            "                  \"value\": 429\n" +
            "                }, {\n" +
            "                  \"name\": \"四川\",\n" +
            "                  \"value\": 1534\n" +
            "                }, {\n" +
            "                  \"name\": \"江西\",\n" +
            "                  \"value\": 1388\n" +
            "                }, {\n" +
            "                  \"name\": \"福建\",\n" +
            "                  \"value\": 1203\n" +
            "                }, {\n" +
            "                  \"name\": \"浙江\",\n" +
            "                  \"value\": 1314\n" +
            "                }, {\n" +
            "                  \"name\": \"重庆\",\n" +
            "                  \"value\": 70\n" +
            "                }, {\n" +
            "                  \"name\": \"陕西\",\n" +
            "                  \"value\": 1959\n" +
            "                }, {\n" +
            "                  \"name\": \"山西\",\n" +
            "                  \"value\": 1777\n" +
            "                }, {\n" +
            "                  \"name\": \"山东\",\n" +
            "                  \"value\": 203\n" +
            "                }, {\n" +
            "                  \"name\": \"江苏\",\n" +
            "                  \"value\": 662\n" +
            "                }, {\n" +
            "                  \"name\": \"河北\",\n" +
            "                  \"value\": 0\n" +
            "                }, {\n" +
            "                  \"name\": \"天津\",\n" +
            "                  \"value\": 1660\n" +
            "                }, {\n" +
            "                  \"name\": \"辽宁\",\n" +
            "                  \"value\": 305\n" +
            "                }, {\n" +
            "                  \"name\": \"吉林\",\n" +
            "                  \"value\": 1650\n" +
            "                }, {\n" +
            "                  \"name\": \"宁夏\",\n" +
            "                  \"value\": 157\n" +
            "                }, {\n" +
            "                  \"name\": \"云南\",\n" +
            "                  \"value\": 5\n" +
            "                }, {\n" +
            "                  \"name\": \"湖北\",\n" +
            "                  \"value\": 2987\n" +
            "                }, {\n" +
            "                  \"name\": \"安徽\",\n" +
            "                  \"value\": 973\n" +
            "                }]\n" +
            "              }\n" +
            "            ]\n" +
            "          })\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .Figure{\n"
+

"    padding: 20px 15px 60px;\n"
+

"    width: 100%;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .Figure::-webkit-scrollbar{\n"
+

"    display: none;\n"
+

"  }\n"
+

"  .Figureheader{\n"
+

"    padding-left: 480px;\n"
+

"  }\n"
+

"  .Figureheader h1{\n"
+

"    font-size: 26px;\n"
+

"    color: #438eb9;\n"
+

"    margin-bottom: 10px;\n"
+

"    float: left;\n"
+

"  }\n"
+

"  .Figureheader span{\n"
+

"    float: left;\n"
+

"    margin-top: 10px;\n"
+

"    margin-left: 10px;\n"
+

"  }\n"
+

"  .echarts{\n"
+

"    height: 600px;\n"
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
