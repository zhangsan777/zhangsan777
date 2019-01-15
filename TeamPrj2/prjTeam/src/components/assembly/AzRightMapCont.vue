<template>
  <div class="Figure">
    <div class="Figureheader">
      <h1>订单量</h1><span>(纯属虚构)</span>
    </div>
    <div  class="echarts">
      <div :style="{height:'500px',width:'100%'}" ref="myEchart"></div>
    </div>
  </div>
</template>

<script>
  import echarts from '../../../node_modules/echarts/lib/echarts'
  require('echarts/map/js/china');// 引入中国地图数据
    export default {
        name: "AzRightMapCont",
      props: ["userJson"],
      data() {
        return {
          chart: null
        };
      },
      mounted() {
        this.chinaConfigure();
      },
      beforeDestroy() {
        if (!this.chart) {
          return;
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods: {
        chinaConfigure() {
          let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
          window.onresize = myChart.resize;
          myChart.setOption({ // 进行相关配置
            backgroundColor: "#c6ddeb",
            tooltip: {}, // 鼠标移到图里面的浮动提示框
            dataRange: {
              show: true,
              min: 0,
              max: 1000,
              text: ['High', 'Low'],
              realtime: true,
              calculable: true,
              color: ['orangered', 'yellow', 'lightskyblue']
            },
            geo: { // 这个是重点配置区
              map: 'china', // 表示中国地图
              roam: true,
              label: {
                normal: {
                  show: true, // 是否显示对应地名
                  textStyle: {
                    color: 'rgba(0,0,0,0.4)'
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                  areaColor: null,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            series: [{
              type: 'scatter',
              coordinateSystem: 'geo' // 对应上方配置
            },
              {
                name: '订单量', // 浮动框的标题
                type: 'map',
                geoIndex: 0,
                data: [{
                  "name": "北京",
                  "value": 1911
                }, {
                  "name": "上海",
                  "value": 598
                }, {
                  "name": "黑龙江",
                  "value": 170
                }, {
                  "name": "内蒙古",
                  "value": 261
                }, {
                  "name": "湖南",
                  "value": 200
                }, {
                  "name": "四川",
                  "value": 1534
                }, {
                  "name": "新疆",
                  "value": 1837
                }, {
                  "name": "西藏",
                  "value": 100
                }, {
                  "name": "四川",
                  "value": 1534
                }, {
                  "name": "甘肃",
                  "value": 1778
                }, {
                  "name": "青海",
                  "value": 380
                }, {
                  "name": "云南",
                  "value": 5
                }, {
                  "name": "贵州",
                  "value": 801
                }, {
                  "name": "海南",
                  "value": 234
                }, {
                  "name": "广东",
                  "value": 879
                }, {
                  "name": "台湾",
                  "value": 1582
                }, {
                  "name": "广西",
                  "value": 429
                }, {
                  "name": "四川",
                  "value": 1534
                }, {
                  "name": "江西",
                  "value": 1388
                }, {
                  "name": "福建",
                  "value": 1203
                }, {
                  "name": "浙江",
                  "value": 1314
                }, {
                  "name": "重庆",
                  "value": 70
                }, {
                  "name": "陕西",
                  "value": 1959
                }, {
                  "name": "山西",
                  "value": 1777
                }, {
                  "name": "山东",
                  "value": 203
                }, {
                  "name": "江苏",
                  "value": 662
                }, {
                  "name": "河北",
                  "value": 0
                }, {
                  "name": "天津",
                  "value": 1660
                }, {
                  "name": "辽宁",
                  "value": 305
                }, {
                  "name": "吉林",
                  "value": 1650
                }, {
                  "name": "宁夏",
                  "value": 157
                }, {
                  "name": "云南",
                  "value": 5
                }, {
                  "name": "湖北",
                  "value": 2987
                }, {
                  "name": "安徽",
                  "value": 973
                }]
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>
  .Figure{
    padding: 20px 15px 60px;
    width: 100%;
    overflow-y: auto;
  }
  .Figure::-webkit-scrollbar{
    display: none;
  }
  .Figureheader{
    padding-left: 480px;
  }
  .Figureheader h1{
    font-size: 26px;
    color: #438eb9;
    margin-bottom: 10px;
    float: left;
  }
  .Figureheader span{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
  .echarts{
    height: 600px;
  }
</style>
