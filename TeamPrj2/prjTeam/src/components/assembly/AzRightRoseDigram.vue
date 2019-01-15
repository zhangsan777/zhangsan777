<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>玫瑰状图组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre v-highlight-a class="hljs"  >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-rose-diargm-cont></az-right-rose-diargm-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightRoseDiargmCont from "./AzRightRoseDiargmCont";
    export default {
        name: "AzRightRoseDigram",
      components: {AzRightRoseDiargmCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"TradingInformation\">\n" +
            "    <div id=\"histogram\"></div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "  let echarts = require('echarts/lib/echarts');\n" +
            "    export default {\n" +
            "        name: \"AzRightRoseDiargmCont\",\n" +
            "        methods:{\n" +
            "          drawLine() {\n" +
            "            // 基于准备好的dom，初始化echarts实例\n" +
            "            let myChart = echarts.init(document.getElementById('histogram'))\n" +
            "            myChart.setOption({\n" +
            "              \"tooltip\": {\n" +
            "                \"trigger\": \"item\",\n" +
            "                \"formatter\": \"{a}<br/>{b}:{c}人\"\n" +
            "              },\n" +
            "              \"title\": {\n" +
            "                \"text\": \"\",\n" +
            "                \"left\": \"center\",\n" +
            "                \"top\": 20,\n" +
            "                \"textStyle\": {\n" +
            "                  \"color\": \"#ccc\"\n" +
            "                }\n" +
            "              },\n" +
            "              \"calculable\": true,\n" +
            "              \"legend\": {\n" +
            "                \"icon\": \"circle\",\n" +
            "                \"x\": \"center\",\n" +
            "                \"y\": \"10%\",\n" +
            "                \"data\": [\n" +
            "                  \"新城区\",\n" +
            "                  \"碑林区\",\n" +
            "                  \"莲湖区\",\n" +
            "                  \"灞桥区\",\n" +
            "                  \"莲湖区\",\n" +
            "                  \"雁塔区\",\n" +
            "                  \"阎良区\",\n" +
            "                  \"临潼区\",\n" +
            "                  \"长安区\",\n" +
            "                  \"高陵区\"\n" +
            "\n" +
            "                ],\n" +
            "                \"textStyle\": {\n" +
            "                  \"color\": \"#000\"\n" +
            "                }\n" +
            "              },\n" +
            "              \"series\": [{\n" +
            "                \"name\": \"新注册人数\",\n" +
            "                \"type\": \"pie\",\n" +
            "                \"radius\": [\n" +
            "                  30,\n" +
            "                  75\n" +
            "                ],\n" +
            "                \"avoidLabelOverlap\": false,\n" +
            "                \"startAngle\": 0,\n" +
            "                \"center\": [\n" +
            "                  \"50.1%\",\n" +
            "                  \"58%\"\n" +
            "                ],\n" +
            "                \"roseType\": \"area\",\n" +
            "                \"selectedMode\": \"single\",\n" +
            "                \"label\": {\n" +
            "                  \"normal\": {\n" +
            "                    \"show\": true,\n" +
            "                    \"formatter\": \"{c}人\"\n" +
            "                  },\n" +
            "                  \"emphasis\": {\n" +
            "                    \"show\": true\n" +
            "                  }\n" +
            "                },\n" +
            "                \"labelLine\": {\n" +
            "                  \"normal\": {\n" +
            "                    \"show\": true,\n" +
            "                    \"smooth\": false,\n" +
            "                    \"length\": 20,\n" +
            "                    \"length2\": 10\n" +
            "                  },\n" +
            "                  \"emphasis\": {\n" +
            "                    \"show\": true\n" +
            "                  }\n" +
            "                },\n" +
            "                \"data\": [{\n" +
            "                  \"value\": 600,\n" +
            "                  \"name\": \"新城区\",\n" +
            "                  \"itemStyle\": {\n" +
            "                    \"normal\": {\n" +
            "                      \"color\": \"#f845f1\"\n" +
            "                    }\n" +
            "                  }\n" +
            "                },\n" +
            "                  {\n" +
            "                    \"value\": 370,\n" +
            "                    \"name\": \"碑林区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#ad46f3\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 100,\n" +
            "                    \"name\": \"莲湖区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#5045f6\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 400,\n" +
            "                    \"name\": \"灞桥区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#4777f5\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 530,\n" +
            "                    \"name\": \"莲湖区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#44aff0\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 620,\n" +
            "                    \"name\": \"雁塔区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#45dbf7\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 500,\n" +
            "                    \"name\": \"阎良区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#f6d54a\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 620,\n" +
            "                    \"name\": \"临潼区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#f69846\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 800,\n" +
            "                    \"name\": \"长安区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#ff4343\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  {\n" +
            "                    \"value\": 200,\n" +
            "                    \"name\": \"高陵区\",\n" +
            "                    \"itemStyle\": {\n" +
            "                      \"normal\": {\n" +
            "                        \"color\": \"#ff4343\"\n" +
            "                      }\n" +
            "                    }\n" +
            "                  }\n" +
            "                ]\n" +
            "              }]\n" +
            "            });\n" +
            "          }\n" +
            "        },\n" +
            "        mounted(){\n" +
            "          this.drawLine();\n" +
            "        }\n" +
            "    }\n" +
            " </ script > \n"+"" +
            "<style scoped>\n" +
            "  .TradingInformation{\n" +
            "    padding: 20px 15px 60px;\n" +
            "    width: 100%;\n" +
            "    overflow-y: auto;\n" +
            "  }\n" +
            "  .TradingInformation::-webkit-scrollbar{\n" +
            "    display: none;\n" +
            "  }\n" +
            "  #histogram{\n" +
            "    width: 1050px;\n" +
            "    height: 450px;\n" +
            "    overflow: hidden;\n" +
            "    border: 1px solid #ddd;\n" +
            "    padding-top:10px;\n" +
            "    padding-left: 50px;\n" +
            "  }\n" +
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
    color: #3a3a3a;
    height: 300px;
    overflow-y: scroll;
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
