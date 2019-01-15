<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>基础插件</h1>
    </div>
    <div class="info-side">
      <h1>柱状图组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
       <az-right-histogram-cont></az-right-histogram-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightHistogramCont from "./AzRightHistogramCont";
    export default {
        name: "AzRightHistogram",
      components: {AzRightHistogramCont},
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
            "  // 引入柱状图组件\n" +
            "  require('echarts/lib/chart/bar');\n" +
            "  // 引入提示框和title组件\n" +
            "  require('echarts/lib/component/tooltip');\n" +
            "  require('echarts/lib/component/title');\n" +
            "  require('echarts/lib/component/markPoint');\n" +
            "  require('echarts/lib/component/legend');\n" +
            "  require('echarts/lib/component/toolbox');\n" +
            "    export default {\n" +
            "        name: \"AzRightHistogramCont\",\n" +
            "      methods:{\n" +
            "        drawLine() {\n" +
            "          // 基于准备好的dom，初始化echarts实例\n" +
            "          let myChart = echarts.init(document.getElementById('histogram'))\n" +
            "          // 绘制图表\n" +
            "          myChart.setOption({\n" +
            "            title : {\n" +
            "              text: '月购买订单交易记录',\n" +
            "              textStyle:{\n" +
            "                fontWeight:'normal',\n" +
            "                fontSize:16,\n" +
            "                color:'#6ccac9'\n" +
            "              },\n" +
            "              subtext: '纯属虚构',\n" +
            "              subtextStyle:{\n" +
            "                fontSize:12\n" +
            "              }\n" +
            "            },\n" +
            "            tooltip : {\n" +
            "              trigger: 'axis'\n" +
            "            },\n" +
            "            legend: {\n" +
            "              data:['所有订单','待付款','已付款','代发货']\n" +
            "            },\n" +
            "            toolbox: {\n" +
            "              show : true,\n" +
            "              feature : {\n" +
            "                dataView : {show: true, readOnly: false},\n" +
            "                saveAsImage : {show: true}\n" +
            "              }\n" +
            "            },\n" +
            "            calculable : true,\n" +
            "            xAxis : [\n" +
            "              {\n" +
            "                type : 'category',\n" +
            "                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],\n" +
            "                splitLine:{show: true}//去除网格线\n" +
            "              }\n" +
            "            ],\n" +
            "            yAxis : [\n" +
            "              {\n" +
            "                type : 'value'\n" +
            "              }\n" +
            "            ],\n" +
            "            series : [\n" +
            "              {\n" +
            "                name:'所有订单',\n" +
            "                type:'bar',\n" +
            "                data:[120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 164, 133],\n" +
            "                markPoint : {\n" +
            "                  data : [\n" +
            "                    {type : 'max', name: '最大值'},\n" +
            "                    {type : 'min', name: '最小值'}\n" +
            "                  ]\n" +
            "                },\n" +
            "                color: \"#2ec7c9\"\n" +
            "              },\n" +
            "              {\n" +
            "                name:'待付款',\n" +
            "                type:'bar',\n" +
            "                data:[26, 59, 30, 84, 27, 77, 176, 1822, 487, 188, 60, 23],\n" +
            "                markPoint : {\n" +
            "                  data : [\n" +
            "                    {type : 'max', name: '最大值'},\n" +
            "                    {type : 'min', name: '最小值'}\n" +
            "                  ]\n" +
            "                },\n" +
            "                color:\"#b7a3df\"\n" +
            "              },\n" +
            "              {\n" +
            "                name:'已付款',\n" +
            "                type:'bar',\n" +
            "                data:[26, 59, 60, 264, 287, 77, 176, 122, 247, 148, 60, 23],\n" +
            "                markPoint : {\n" +
            "                  data : [\n" +
            "                    {type : 'max', name: '最大值'},\n" +
            "                    {type : 'min', name: '最小值'}\n" +
            "                  ]\n" +
            "                },\n" +
            "                color:\"#5ab1ef\"\n" +
            "              },\n" +
            "              {\n" +
            "                name:'代发货',\n" +
            "                type:'bar',\n" +
            "                data:[26, 59, 80, 24, 87, 70, 175, 1072, 48, 18, 69, 63],\n" +
            "                markPoint : {\n" +
            "                  data : [\n" +
            "                    {type : 'max', name: '最大值'},\n" +
            "                    {type : 'min', name: '最小值'}\n" +
            "                  ]\n" +
            "                },\n" +
            "                color:\"#ffb981\"\n" +
            "              }\n" +
            "            ]\n" +
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
