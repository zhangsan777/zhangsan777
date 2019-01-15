<template>
  <div class="TradingInformation">
    <div id="histogram"></div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
    export default {
        name: "AzRightRoseDiargmCont",
        methods:{
          drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('histogram'))
            myChart.setOption({
              "tooltip": {
                "trigger": "item",
                "formatter": "{a}<br/>{b}:{c}人"
              },
              "title": {
                "text": "",
                "left": "center",
                "top": 20,
                "textStyle": {
                  "color": "#ccc"
                }
              },
              "calculable": true,
              "legend": {
                "icon": "circle",
                "x": "center",
                "y": "10%",
                "data": [
                  "新城区",
                  "碑林区",
                  "莲湖区",
                  "灞桥区",
                  "莲湖区",
                  "雁塔区",
                  "阎良区",
                  "临潼区",
                  "长安区",
                  "高陵区"

                ],
                "textStyle": {
                  "color": "#000"
                }
              },
              "series": [{
                "name": "新注册人数",
                "type": "pie",
                "radius": [
                  30,
                  75
                ],
                "avoidLabelOverlap": false,
                "startAngle": 0,
                "center": [
                  "50.1%",
                  "58%"
                ],
                "roseType": "area",
                "selectedMode": "single",
                "label": {
                  "normal": {
                    "show": true,
                    "formatter": "{c}人"
                  },
                  "emphasis": {
                    "show": true
                  }
                },
                "labelLine": {
                  "normal": {
                    "show": true,
                    "smooth": false,
                    "length": 20,
                    "length2": 10
                  },
                  "emphasis": {
                    "show": true
                  }
                },
                "data": [{
                  "value": 600,
                  "name": "新城区",
                  "itemStyle": {
                    "normal": {
                      "color": "#f845f1"
                    }
                  }
                },
                  {
                    "value": 370,
                    "name": "碑林区",
                    "itemStyle": {
                      "normal": {
                        "color": "#ad46f3"
                      }
                    }
                  },
                  {
                    "value": 100,
                    "name": "莲湖区",
                    "itemStyle": {
                      "normal": {
                        "color": "#5045f6"
                      }
                    }
                  },
                  {
                    "value": 400,
                    "name": "灞桥区",
                    "itemStyle": {
                      "normal": {
                        "color": "#4777f5"
                      }
                    }
                  },
                  {
                    "value": 530,
                    "name": "莲湖区",
                    "itemStyle": {
                      "normal": {
                        "color": "#44aff0"
                      }
                    }
                  },
                  {
                    "value": 620,
                    "name": "雁塔区",
                    "itemStyle": {
                      "normal": {
                        "color": "#45dbf7"
                      }
                    }
                  },
                  {
                    "value": 500,
                    "name": "阎良区",
                    "itemStyle": {
                      "normal": {
                        "color": "#f6d54a"
                      }
                    }
                  },
                  {
                    "value": 620,
                    "name": "临潼区",
                    "itemStyle": {
                      "normal": {
                        "color": "#f69846"
                      }
                    }
                  },
                  {
                    "value": 800,
                    "name": "长安区",
                    "itemStyle": {
                      "normal": {
                        "color": "#ff4343"
                      }
                    }
                  },
                  {
                    "value": 200,
                    "name": "高陵区",
                    "itemStyle": {
                      "normal": {
                        "color": "#ff4343"
                      }
                    }
                  }
                ]
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
