<template>
  <div class="TradingInformation">
    <div id="histogram"></div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar');
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/markPoint');
  require('echarts/lib/component/legend');
  require('echarts/lib/component/toolbox');
    export default {
        name: "AzRightHistogramCont",
      methods:{
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('histogram'))
          // 绘制图表
          myChart.setOption({
            title : {
              text: '月购买订单交易记录',
              textStyle:{
                fontWeight:'normal',
                fontSize:16,
                color:'#6ccac9'
              },
              subtext: '纯属虚构',
              subtextStyle:{
                fontSize:12
              }
            },
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:['所有订单','待付款','已付款','代发货']
            },
            toolbox: {
              show : true,
              feature : {
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
              }
            },
            calculable : true,
            xAxis : [
              {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                splitLine:{show: true}//去除网格线
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:'所有订单',
                type:'bar',
                data:[120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200, 164, 133],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                color: "#2ec7c9"
              },
              {
                name:'待付款',
                type:'bar',
                data:[26, 59, 30, 84, 27, 77, 176, 1822, 487, 188, 60, 23],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                color:"#b7a3df"
              },
              {
                name:'已付款',
                type:'bar',
                data:[26, 59, 60, 264, 287, 77, 176, 122, 247, 148, 60, 23],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                color:"#5ab1ef"
              },
              {
                name:'代发货',
                type:'bar',
                data:[26, 59, 80, 24, 87, 70, 175, 1072, 48, 18, 69, 63],
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                color:"#ffb981"
              }
            ]
          });
        }
      },
      mounted(){
        this.drawLine();
      }
    }
</script>

<style scoped>
  .TradingInformation{
    padding: 20px 15px 60px;
    width: 100%;
    overflow-y: auto;
  }
  .TradingInformation::-webkit-scrollbar{
    display: none;
  }
  #histogram{
    width: 1050px;
    height: 450px;
    overflow: hidden;
    border: 1px solid #ddd;
    padding-top:10px;
    padding-left: 50px;
  }
</style>
