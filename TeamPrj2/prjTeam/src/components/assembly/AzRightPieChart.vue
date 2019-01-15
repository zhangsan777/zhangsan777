<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>饼状图组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-pie-chart-cont></az-right-pie-chart-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightPieChartCont from "./AzRightPieChartCont";
    export default {
        name: "AzRightPieChart",
      components: {AzRightPieChartCont},
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
          "      name: \"AzRightPieChartCont\",\n" +
          "      methods:{\n" +
          "        drawLine() {\n" +
          "          // 基于准备好的dom，初始化echarts实例\n" +
          "          let myChart = echarts.init(document.getElementById('histogram'))\n" +
          "          const data = [{\n" +
          "            value: 210,\n" +
          "            name: '绿色'\n" +
          "          }, {\n" +
          "            value: 150,\n" +
          "            name: '红色',\n" +
          "            selected: true\n" +
          "          }, {\n" +
          "            value: 110,\n" +
          "            name: '浅蓝'\n" +
          "          }]\n" +
          "\n" +
          "          myChart.setOption({\n" +
          "            title: {\n" +
          "              show: false,\n" +
          "            },\n" +
          "            series: [{\n" +
          "              name: '业务健康度',\n" +
          "              type: 'pie',\n" +
          "              hoverAnimation: false,\n" +
          "              avoidLabelOverlap: false,\n" +
          "              radius: [0, '74%'],\n" +
          "\n" +
          "              label: {\n" +
          "                normal: {\n" +
          "                  position: 'inner',\n" +
          "                  formatter: \"{c}\\n{b}\",\n" +
          "                  fontSize: 14,\n" +
          "                }\n" +
          "              },\n" +
          "              labelLine: {\n" +
          "                normal: {\n" +
          "                  show: false\n" +
          "                }\n" +
          "              },\n" +
          "              color: ['#9BD16F', '#D07070', '#82C5DC'],\n" +
          "              data: data\n" +
          "            }]\n" +
          "          });\n" +
          "        }\n" +
          "      },\n" +
          "      mounted(){\n" +
          "        this.drawLine();\n" +
          "      }\n" +
          "    }\n" +
          "</ script>\n"+
"\n"+
" <style scoped>\n"+
"  .TradingInformation{\n"
+

"    padding: 20px 15px 60px;\n"
+

"    width: 100%;\n"
+

"    overflow-y: auto;\n"
+

"  }\n"
+

"  .TradingInformation::-webkit-scrollbar{\n"
+

"    display: none;\n"
+

"  }\n"
+

"  #histogram{\n"
+

"    width: 1050px;\n"
+

"    height: 450px;\n"
+

"    overflow: hidden;\n"
+

"    border: 1px solid #ddd;\n"
+

"    padding-top:10px;\n"
+

"    padding-left: 50px;\n"
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
