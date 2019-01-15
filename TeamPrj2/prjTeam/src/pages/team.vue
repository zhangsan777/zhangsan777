<template>
    <div class="both">
      <headers></headers>
      <div class="con">
        <div class="left">
          <ul>
            <li id="zd">
              <div class="toux"></div>
              <div>
                <p class="qust"><i></i>Anthony</p>
                <p class="answer">To borrow a sentence from Guo Moruo: both fantastic and realistic, this is the unique style of scientific workers, let's explore the infinite truth in the infinite universe!</p>
              </div>
            </li>
            <li id="bjm">
              <div class="toux"></div>
              <div>
                <p class="qust"><i></i>Sofia</p>
                <p class="answer">Stick to what you choose and believe what you insist on is the right way for you. It doesn't matter what other people think of you. What matters is that you do what you think is right.</p>
              </div>
            </li>
            <li id="me">
              <div class="toux"></div>
              <div>
                <p class="qust"><i></i>Image</p>
                <p class="answer">For the most promising navigators, the storm is always extraordinarily turbulent.Realizing dreams is more brilliant than sleeping in bed.If we do not seek absolute perfection in the world, we can achieve infinite perfection by leaving a deficiency.</p>
              </div>
            </li>
            <li id="zzy">
              <div class="toux"></div>
              <div>
                <p class="qust"><i></i>Amazon</p>
                <p class="answer">It is impossible to make one's whole life comfortable and pleasant, for one must have an attitude that can cope with adversity</p>
              </div>
            </li>
            <li id="wg">
              <div class="toux"></div>
              <div>
                <p class="qust"><i></i>Chance</p>
                <p class="answer">There are many hardships in life, so we should not be too sensitive to every slight injury. In the face of life's hardships, mental fortitude and indifference are our best weapons against evil and human accidents.</p>
              </div>
            </li>
          </ul>
          <hr/>
          <h1>Azone 社区</h1>
          <hr/>
          <div id="box">
            <div class="fa">
              <div class="faR">
                <img src="../../static/images/Anthony.jpg" alt="">
                <span>Anthony</span>
              </div>
              <div class="faL">
                <div class="pp">
                  <p>关于如何在一个页面导入多个轮播图的问题</p>
                  <a href="##">回复</a>
                </div>
                <div class="aa">
                  <p>
                    <a href="##">
                      <span class="iconfont icon-ding"></span>
                      顶</a>&nbsp;&nbsp;&nbsp;
                    <a href="##">
                      <span class="iconfont icon-cai1"></span>
                      踩</a>
                  </p>
                  <span>2019-01-03</span>
                </div>
              </div>
            </div>
            <hr/>
            <div class="fa">
              <div class="faR">
                <img src="../../static/images/Image.jpg" alt="">
                <span>Image</span>
              </div>
              <div class="faL">
                <div class="pp">
                  <p>在线等...vue引入的第三方js要刷新页面才会出效果怎么办</p>
                  <a href="##">回复</a>
                </div>
                <div class="aa">
                  <p>
                    <a href="##">
                      <span class="iconfont icon-ding"></span>
                      顶</a>&nbsp;&nbsp;&nbsp;
                    <a href="##">
                      <span class="iconfont icon-cai1"></span>
                      踩</a>
                  </p>
                  <span>2019-01-05</span>
                </div>
              </div>
            </div>
            <hr/>
            <div class="fa">
              <div class="faR">
                <img src="../../static/images/Amazon（zzy）.jpg" alt="">
                <span>Amazon</span>
              </div>
              <div class="faL">
                <div class="pp">
                  <p>在methods写的方法，不触发便不会执行</p>
                  <a href="##">回复</a>
                </div>
                <div class="aa">
                  <p>
                    <a href="##">
                      <span class="iconfont icon-ding"></span>
                      顶</a>&nbsp;&nbsp;&nbsp;
                    <a href="##">
                      <span class="iconfont icon-cai1"></span>
                      踩</a>
                  </p>
                  <span>2019-01-07</span>
                </div>
              </div>
            </div>
            <hr/>
            <div class="fa">
              <div class="faR">
                <img src="../../static/images/（wg）.jpg" alt="">
                <span>Chance</span>
              </div>
              <div class="faL">
                <div class="pp">
                  <p>第三方js如何引入的问题已解决</p>
                  <a href="##">回复</a>
                </div>
                <div class="aa">
                  <p>
                    <a href="javascript:void(0);">
                      <span class="iconfont icon-ding"></span>
                      顶</a>&nbsp;&nbsp;&nbsp;
                    <a href="javascript:void(0);">
                      <span class="iconfont icon-cai1"></span>
                      踩</a>
                  </p>
                  <span>2019-01-11</span>
                </div>
              </div>
            </div>
            <hr/>
          </div>
          <input type="text" value="" id="kk1" placeholder="昵称"/>:
          <input type="text" value="" id="kk2" placeholder="我也说一句......"/>
          <input @click="dian" type="button" value="发表" id="fb"/>
        </div>
        <div class="right">
          <div class="box">
            日志更新
            <span>2019-01-03</span>
          </div>
          <div class="txt">
            2019-1-2<br/>
            1、各司其职，着手分配任务。<br/><br/>
            2019-1-3<br/>
            1、使用了echarts引图布局有问题(最终已解决)<br/>
            2、首页响应有些许问题。<br/>
            3、即将进入vue组件拆分环节。<br/><br/>
            2019-1-4<br/>
            1、第三方js如何引入vue组件<br/>
            <router-link to="./journal">查看更多></router-link>
          </div>
          <div class="follow">
            <img src="../../static/images/follow.png" alt="">
            关注我们
            <router-link to="./">AzoneUI</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Headers from "./headers";
    import Public from '../assets/css/public.css';
    export default {
      inject:["reload"],
      name: "team",
      components: {Public,Headers},
      methods:{
        dian() {
          function z(id) {
            return document.getElementById(id);
          }

          if (z("kk2").value != "") {
            z("box").innerHTML += `<div style='width:100%;display: -webkit-flex;' class='fa'>\
                         <div style='margin:0 3%;text-align: center;' class='faR'>\
                           <img style='display: block;width:50px;height:50px;border-radius: 50%;margin:0 auto 10px;' src='../../static/images/mr2.jpg' />\
                           <span style='font-size:14px;'>` + z('kk1').value + `</span>\
                         </div>\
                         <div style='width:100%;margin-left:3%;display: -webkit-flex;flex-direction: column;justify-content: space-between;' class='faL'>\
                           <div style='width:90%;color:#666;display: -webkit-flex;justify-content: space-between;' class='pp'>\
                             <p style='width:80%;'>` + z('kk2').value + `</p>\
                             <a style='font-size:14px;color:#007aff;text-decoration: underline;' href='##'>回复</a>\
                           </div>\
                           <div style='width:90%;display:-webkit-flex;justify-content:space-between;margin-bottom: 5px;' class='aa'>\
                             <p>\
                               <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                 <span class='iconfont icon-ding'></span>\
                                 顶</a>&nbsp;&nbsp;&nbsp;\
                               <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                 <span class='iconfont icon-cai1'></span>\
                                 踩</a>\
                             </p>\
                             <span>2019-01-15</span> \
                           </div>\
                         </div>\
                       </div>\
                    <hr/>`;
            z("kk1").value = z("kk2").value = "";
          }

        }

      },
      mounted() {
        class Tooltip {
          constructor(obj) {
            let defaultObj = {
              "boxDom": null,   //大DIV盒子
              "domObj": null,   //提示框盒子
              "left": 0,
              "top": 0,
              "width": "200",
              "height": "auto",
              "bgColor": '#77b16c',    //背景色
              "fontSize": 16,    //字体大小
              "isRadius": false,   //是否圆角
              "color": "#f1f1f1",      //字体颜色
              "title": "我是默认标题..."    //默认标题
            }
            for (let key in obj) {
              obj[key] && (defaultObj[key] = obj[key]);    //逻辑短路
            }
            for (let key in defaultObj) {
              this[key] = defaultObj[key];
            }
            this.createUI();
            this.createEvent();
          }

          createUI() {
            this.boxDom.style.position = "relative";    //因为你在CSS中没有写，所以这里必须加上
            this.domObj = document.createElement('div');
            this.domObj.style.cssText = "position: absolute; display: none; padding: 8px;";
            this.domObj.style.width = this.width + 'px';
            this.domObj.style.height = this.height + 'px';
            this.domObj.style.backgroundColor = this.bgColor;
            this.domObj.style.left = this.left + 'px';
            this.domObj.style.top = this.top + 'px';
            this.domObj.style.fontSize = this.fontSize + 'px';
            this.domObj.style.color = this.color;
            if (this.isRadius == true) {
              this.domObj.style.borderRadius = '6px';
            }
            this.domObj.innerHTML = this.title;   //赋值
            this.boxDom.appendChild(this.domObj);
          }

          createEvent() {
            this.boxDom.onmouseover = function () {
              this.domObj.style.display = "block";
            }.bind(this);
            this.boxDom.onmousemove = function (event) {
              let evt = window.event || event;
//			计算数据
              this.left = evt.pageX - this.boxDom.offsetLeft + 20;
              this.top = evt.pageY - this.boxDom.offsetTop + 20;
//			改变外观:
              this.domObj.style.left = this.left + 'px';
              this.domObj.style.top = this.top + 'px';
            }.bind(this);
            this.boxDom.onmouseout = function () {
              this.domObj.style.display = "none";
            }.bind(this);
          }
        }

        window.onload = function () {
          function z(id) {
            return document.getElementById(id);
          }

          document.onkeydown = function (event) {
            if (z("kk2").value != "") {
              var ev = window.event || event;
              if (ev.keyCode == 13) {

                z("box").innerHTML += `<div style='width:100%;display: -webkit-flex;' class='fa'>\
                         <div style='margin:0 3%;text-align: center;' class='faR'>\
                           <img style='display: block;width:50px;height:50px;border-radius: 50%;margin:0 auto 10px;' src='../../static/images/mr2.jpg' />\
                           <span style='font-size:14px;'>` + z('kk1').value + `</span>\
                         </div>\
                         <div style='width:100%;margin-left:3%;display: -webkit-flex;flex-direction: column;justify-content: space-between;' class='faL'>\
                           <div style='width:90%;color:#666;display: -webkit-flex;justify-content: space-between;' class='pp'>\
                             <p style='width:80%;'>` + z('kk2').value + `</p>\
                             <a style='font-size:14px;color:#007aff;text-decoration: underline;' href='##'>回复</a>\
                           </div>\
                           <div style='width:90%;display:-webkit-flex;justify-content:space-between;margin-bottom: 5px;' class='aa'>\
                             <p>\
                               <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                 <span class='iconfont icon-ding'></span>\
                                 顶</a>&nbsp;&nbsp;&nbsp;\
                               <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                 <span class='iconfont icon-cai1'></span>\
                                 踩</a>\
                             </p>\
                             <span>2019-01-15</span> \
                           </div>\
                         </div>\
                       </div>\
                    <hr/>`;
                z("kk1").value = z("kk2").value = "";

              }
            }
          }

          new Tooltip({
            "boxDom": document.getElementById('zd'),
            "width": "300",
            "height": "auto",
            "isRadius": true,
            "title": "Date of birth：1991.4.4<br/>\
              QQ：354266323<br/>\
              email：zd354266@gmail.com<br/>\
              Native place：西安<br/>\
              Telephone：18189282382<br/>\
              work：组件库的搭建"
          })
          new Tooltip({
            "boxDom": document.getElementById('bjm'),
            "width": "300",
            "height": "auto",
            "isRadius": true,
            "title": "Date of birth：1996.2.23<br/>\
              QQ：986325051<br/>\
              email：986325051@qq.com<br/>\
              Native place：中国<br/>\
              Telephone：13739550000<br/>\
              work：移动端项目的搭建"
          })
          new Tooltip({
            "boxDom": document.getElementById('me'),
            "width": "300",
            "height": "auto",
            "isRadius": true,
            "title": "Date of birth：1996.11.16<br/>\
              QQ：961237909<br/>\
              email：961237909@qq.com<br/>\
              Native place：甘肃<br/>\
              Telephone:17361625676<br/>\
              work：官网设计与UI"
          })
          new Tooltip({
            "boxDom": document.getElementById('zzy'),
            "width": "300",
            "height": "auto",
            "isRadius": true,
            "title": "Date of birth：1996.10.29<br/>\
              QQ：1363003846 <br/>\
              email：1363003846@qq.com<br/>\
              Native place：宁夏<br/>\
              Telephone：18277777777<br/>\
              work：响应式后台管理页面"
          })
          new Tooltip({
            "boxDom": document.getElementById('wg'),
            "width": "300",
            "height": "auto",
            "isRadius": true,
            "title": "Date of birth:1997.7.9<br/>\
              QQ：1993699568<br/>\
              email：1993699568@qq.com<br/>\
              Native place：陕西<br/>\
              Telephone：15353784903<br/>\
              work：移动端项目的搭建"
          })

        }

        // this.reload()

      }
    }
</script>

<style scoped>
  .fa {
    width:100%;
    display: -webkit-flex;
  }
  .fa .faR{
    margin:0 3%;
    text-align: center;
  }
  .fa .faR img{
    display: block;
    width:50px;
    height:50px;
    border-radius: 50%;
    margin:0 auto 10px;
  }
  .fa .faR span{
    font-size:14px;
  }
  .fa .faL{
    width:100%;
    margin-left:3%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .fa .faL .pp{
    width:90%;
    color:#666;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .fa .faL .pp p{
    width:80%;

  }
  .fa .faL .pp  a{
    font-size:14px;
    color:#007aff;
    text-decoration: underline;
  }
  .fa .faL .aa{
    width:90%;
    display: -webkit-flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .fa .faL .aa p a{
    font-size:14px;
    text-decoration: none;
    color:deepskyblue;
  }
  .left h1{
    color:#212121;
    font-size:26px;
    margin-top:70px;
  }
  #box{
    padding:20px;
    margin:20px 0;
    width:95%;
    min-height:200px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    background: #fff;
    /*overflow-y: auto;*/
  }
  #kk1,#kk2{
    width:200px;
    height:40px;
    border:1px solid #3fada8;
    text-indent: 10px;
  }
  #kk2{
    width:470px;
    margin-right:10px;
  }
  #fb{
    width:60px;
    height:30px;
    background: #77b16c;
    border-radius: 10px;
    color:#fff;
  }
  .both{
    background: #dddddd;
    overflow: hidden;
  }

  .con{
    width:90%;
    margin:80px auto 0;
  }
  .con .left{
    float: left;
    width:70%;
    padding-bottom: 50px;
  }
  .con .left ul li{
    width:500px;
    height:190px;
    overflow: hidden;
    margin:0 60px 10px 35px;
    cursor: pointer;
  }
  .con .left ul li .toux{
    width:60px;
    height: 60px;
    float: left;
    margin-right: 15px;
  }
  .con .left ul li:nth-of-type(even){
    float: right;
  }
  .con .left ul li:nth-of-type(1) .toux{
    background:url("../../static/images/Anthony.jpg") no-repeat;
    background-size:cover;
  }
  .con .left ul li:nth-of-type(2) .toux{
    background:url("../../static/images/Sofia（bjm）.jpg") no-repeat;
    background-size:cover;
    background-position:-40px 0;
  }
  .con .left ul li:nth-of-type(3) .toux{
    background:url("../../static/images/Image.jpg") no-repeat;
    background-size:cover;
  }
  .con .left ul li:nth-of-type(4) .toux{
    background:url("../../static/images/Amazon（zzy）.jpg") no-repeat;
    background-size:cover;
  }
  .con .left ul li:nth-of-type(5) .toux{
    background:url("../../static/images/（wg）.jpg") no-repeat;
    background-size:cover;
  }
  .con .left ul li .qust{
    width:180px;
    height:36px;
    background: #ebebeb;
    border-radius: 4px;
    font-size: 16px;
    color:#495056;
    line-height: 36px;
    text-align: center;
    float: left;
    position: relative;
    margin-bottom: 10px;
    margin-top:13px;
  }
  .con .left ul li .qust i{
    float: left;
    width:0;
    height:0;
    border:5px solid transparent;
    border-right-color:#ebebeb;
    position: absolute;
    left:-10px;
    top:13px;
  }
  .con .left ul li .answer{
    width:425px;
    float: left;
    line-height: 30px;
    font-size: 14px;
    color: #a5abb2;
  }
  .con .right{
    width:30%;
    position: fixed;
    right:35px;
    top:70px;
    font-size:14px;
  }
  .con .right div{
    width:70%;
    padding:10px 20px;
    background: #edf2f5;
    border-radius: 10px;
    margin-top:20px;
  }
  .con .right .txt{
    color:#666666;
  }
  .con .right .follow{
    text-align:center;
    color:#666666;
  }
  .con .right .follow img{
    display: block;
    width:55%;
    margin:20px auto;
  }
  .con .right .follow a{
    color: #3fada8;
    font-size: 16px;
    font-weight: 600;
  }
  .con .right .txt a{
    display: block;
    margin-top:20px;
    color: #3fada8;
    font-size: 12px;
  }
</style>
