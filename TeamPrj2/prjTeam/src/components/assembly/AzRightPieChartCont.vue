<template>
  <div class="TradingInformation">
    <div id="histogram"></div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
    export default {
      name: "AzRightPieChartCont",
      methods:{
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('histogram'))
          const data = [{
            value: 210,
            name: '绿色'
          }, {
            value: 150,
            name: '红色',
            selected: true
          }, {
            value: 110,
            name: '浅蓝'
          }]

          myChart.setOption({
            title: {
              show: false,
            },
            series: [{
              name: '业务健康度',
              type: 'pie',
              hoverAnimation: false,
              avoidLabelOverlap: false,
              radius: [0, '74%'],

              label: {
                normal: {
                  position: 'inner',
                  formatter: "{c}\n{b}",
                  fontSize: 14,
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              color: ['#9BD16F', '#D07070', '#82C5DC'],
              data: data
            }]
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
