<template>
  <div class="TradingInformation">
    <div id="histogram"></div>
  </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    export default {
        name: "AzRightLineChartsCont",
        methods:{
          drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('histogram'))
            // 绘制图表
            var data_val=[2220, 1682, 2791, 3000, 4090, 3230, 2910],
              xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var data_val1=[0,0,0,0,0,0,0];
            myChart.setOption({
              backgroundColor:'#293042',
              grid:{
                left:10,
                top:'10%',
                bottom:20,
                right:'10%',
                containLabel:true
              },
              tooltip:{
                show:true,
                backgroundColor:'#384157',
                borderColor:'#384157',
                borderWidth:1,
                formatter:'{b}:{c}',
                extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
              },
              legend:{
                right:0,
                top:0,
                data:[''],
                textStyle:{
                  color :'#5c6076'
                }
              },
              title: {
                text: '',
                x:'4.5%',
                top: '1%',
                textStyle:{
                  color :'#5c6076'
                }
              },
              xAxis: {
                data: xAxis_val,
                boundaryGap:false,
                axisLine:{
                  show:false
                },
                axisLabel: {
                  textStyle: {
                    color: '#5c6076'
                  }
                },
                axisTick:{
                  show:false
                }
              },
              yAxis: {
                ayisLine:{
                  show:false
                },
                axisLabel: {
                  textStyle: {
                    color: '#5c6076'
                  }
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    color:'#2e3547'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#384157'
                  }
                }
              },

              series: [
                {
                  type: 'bar',
                  name:'linedemo',


                  tooltip:{
                    show:false
                  },
                  animation:false,
                  barWidth:1.4,
                  hoverAnimation:false,
                  data:data_val,
                  itemStyle:{
                    normal:{
                      color:'#f17a52',
                      opacity:0.6,
                      label:{
                        show:false
                      }
                    }
                  }
                },
                {
                  type: 'line',
                  name:'距离',

                  animation:false,
                  symbol:'circle',

                  hoverAnimation:false,
                  data:data_val1,
                  itemStyle:{
                    normal:{
                      color:'#f17a52',
                      opacity:0,
                    }
                  },
                  lineStyle:{
                    normal:{
                      width:1,
                      color:'#384157',
                      opacity:1
                    }
                  }
                },
                {
                  type: 'line',
                  name:'linedemo',
                  smooth:true,
                  symbolSize:10,
                  animation:false,
                  lineWidth:1.2,
                  hoverAnimation:false,
                  data:data_val,
                  symbol:'circle',
                  itemStyle:{
                    normal:{
                      color:'#f17a52',
                      shadowBlur: 40,
                      label:{
                        show:true,
                        position:'top',
                        textStyle:{
                          color:'#f17a52',

                        }
                      }
                    }
                  },
                  areaStyle:{
                    normal:{
                      color:'#f17a52',
                      opacity:0.08
                    }
                  }

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
