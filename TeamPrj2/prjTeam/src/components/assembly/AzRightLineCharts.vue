<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>折线图组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-line-charts-cont></az-right-line-charts-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightLineChartsCont from "./AzRightLineChartsCont";
    export default {
        name: "AzRightLineCharts",
      components: {AzRightLineChartsCont},
      data(){
        return{
          "link":"<template>\n" +
            "  <div class=\"TradingInformation\">\n" +
            "    <div id=\"histogram\"></div>\n" +
            "  </div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "    let echarts = require('echarts/lib/echarts');\n" +
            "    export default {\n" +
            "        name: \"AzRightLineChartsCont\",\n" +
            "        methods:{\n" +
            "          drawLine() {\n" +
            "            // 基于准备好的dom，初始化echarts实例\n" +
            "            let myChart = echarts.init(document.getElementById('histogram'))\n" +
            "            // 绘制图表\n" +
            "            var data_val=[2220, 1682, 2791, 3000, 4090, 3230, 2910],\n" +
            "              xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n" +
            "            var data_val1=[0,0,0,0,0,0,0];\n" +
            "            myChart.setOption({\n" +
            "              backgroundColor:'#293042',\n" +
            "              grid:{\n" +
            "                left:10,\n" +
            "                top:'10%',\n" +
            "                bottom:20,\n" +
            "                right:'10%',\n" +
            "                containLabel:true\n" +
            "              },\n" +
            "              tooltip:{\n" +
            "                show:true,\n" +
            "                backgroundColor:'#384157',\n" +
            "                borderColor:'#384157',\n" +
            "                borderWidth:1,\n" +
            "                formatter:'{b}:{c}',\n" +
            "                extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'\n" +
            "              },\n" +
            "              legend:{\n" +
            "                right:0,\n" +
            "                top:0,\n" +
            "                data:[''],\n" +
            "                textStyle:{\n" +
            "                  color :'#5c6076'\n" +
            "                }\n" +
            "              },\n" +
            "              title: {\n" +
            "                text: '',\n" +
            "                x:'4.5%',\n" +
            "                top: '1%',\n" +
            "                textStyle:{\n" +
            "                  color :'#5c6076'\n" +
            "                }\n" +
            "              },\n" +
            "              xAxis: {\n" +
            "                data: xAxis_val,\n" +
            "                boundaryGap:false,\n" +
            "                axisLine:{\n" +
            "                  show:false\n" +
            "                },\n" +
            "                axisLabel: {\n" +
            "                  textStyle: {\n" +
            "                    color: '#5c6076'\n" +
            "                  }\n" +
            "                },\n" +
            "                axisTick:{\n" +
            "                  show:false\n" +
            "                }\n" +
            "              },\n" +
            "              yAxis: {\n" +
            "                ayisLine:{\n" +
            "                  show:false\n" +
            "                },\n" +
            "                axisLabel: {\n" +
            "                  textStyle: {\n" +
            "                    color: '#5c6076'\n" +
            "                  }\n" +
            "                },\n" +
            "                splitLine:{\n" +
            "                  show:true,\n" +
            "                  lineStyle:{\n" +
            "                    color:'#2e3547'\n" +
            "                  }\n" +
            "                },\n" +
            "                axisLine: {\n" +
            "                  lineStyle: {\n" +
            "                    color: '#384157'\n" +
            "                  }\n" +
            "                }\n" +
            "              },\n" +
            "\n" +
            "              series: [\n" +
            "                {\n" +
            "                  type: 'bar',\n" +
            "                  name:'linedemo',\n" +
            "\n" +
            "\n" +
            "                  tooltip:{\n" +
            "                    show:false\n" +
            "                  },\n" +
            "                  animation:false,\n" +
            "                  barWidth:1.4,\n" +
            "                  hoverAnimation:false,\n" +
            "                  data:data_val,\n" +
            "                  itemStyle:{\n" +
            "                    normal:{\n" +
            "                      color:'#f17a52',\n" +
            "                      opacity:0.6,\n" +
            "                      label:{\n" +
            "                        show:false\n" +
            "                      }\n" +
            "                    }\n" +
            "                  }\n" +
            "                },\n" +
            "                {\n" +
            "                  type: 'line',\n" +
            "                  name:'距离',\n" +
            "\n" +
            "                  animation:false,\n" +
            "                  symbol:'circle',\n" +
            "\n" +
            "                  hoverAnimation:false,\n" +
            "                  data:data_val1,\n" +
            "                  itemStyle:{\n" +
            "                    normal:{\n" +
            "                      color:'#f17a52',\n" +
            "                      opacity:0,\n" +
            "                    }\n" +
            "                  },\n" +
            "                  lineStyle:{\n" +
            "                    normal:{\n" +
            "                      width:1,\n" +
            "                      color:'#384157',\n" +
            "                      opacity:1\n" +
            "                    }\n" +
            "                  }\n" +
            "                },\n" +
            "                {\n" +
            "                  type: 'line',\n" +
            "                  name:'linedemo',\n" +
            "                  smooth:true,\n" +
            "                  symbolSize:10,\n" +
            "                  animation:false,\n" +
            "                  lineWidth:1.2,\n" +
            "                  hoverAnimation:false,\n" +
            "                  data:data_val,\n" +
            "                  symbol:'circle',\n" +
            "                  itemStyle:{\n" +
            "                    normal:{\n" +
            "                      color:'#f17a52',\n" +
            "                      shadowBlur: 40,\n" +
            "                      label:{\n" +
            "                        show:true,\n" +
            "                        position:'top',\n" +
            "                        textStyle:{\n" +
            "                          color:'#f17a52',\n" +
            "\n" +
            "                        }\n" +
            "                      }\n" +
            "                    }\n" +
            "                  },\n" +
            "                  areaStyle:{\n" +
            "                    normal:{\n" +
            "                      color:'#f17a52',\n" +
            "                      opacity:0.08\n" +
            "                    }\n" +
            "                  }\n" +
            "\n" +
            "                }\n" +
            "              ]\n" +
            "            });\n" +
            "          }\n" +
            "        },\n" +
            "        mounted(){\n" +
            "          this.drawLine();\n" +
            "\n" +
            "        }\n" +
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
