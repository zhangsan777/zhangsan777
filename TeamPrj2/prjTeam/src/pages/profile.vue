<template>
  <div class="cont">
    <div class="hd">
      <a class="inx" href="">
        <img src="../../static/images/logo.png" alt="">
        <h4>Azone UI</h4>
      </a>
      <p>
        <router-link to="./ask">提问</router-link>
        <router-link to="./profile">示例</router-link>
      </p>
      <p>
        <a href="">关于</a>
        <a href="">帮助</a>
      </p>
    </div>
    <div class="con">
      <div class="sonp-section sonp-middle" id="first">
        <header class="htmleaf-header">
          <div class="left">
            <h1>经典案例</h1>
            <ul>
              <li>我们拥有前沿的开发技术，我们以提供便捷为荣。我们为您提供整体形象创建与改造升级设计服务</li>
              <li>我们不断学习，成长。您的支持就是我们前进的方向。我们是专业的开发团队，将全心全意为您缔造更加出色舒适的服务</li>
              <li>
                <router-link to="./"><span>AzoneUI</span> </router-link>
                你值得拥有！</li>
            </ul>
          </div>
        </header>
      </div>

      <div class="sonp-section sonp-full sonp-parallax" id="second">
        <p>
          <a href="http://127.0.0.1:8080/#/response" target="_blank">
            - 响应式后台
          </a>
        </p>
        <p>
          <a href="http://127.0.0.1:8080/#/mobile" target="_blank">
            - 移动端
          </a>
        </p>
        <p>
          <a href="http://127.0.0.1:8080/#/record" target="_blank">
            - 大数据图表
          </a>
        </p>
        <p>
          <a href="javascript:void(0);" target="_blank">
            - 微信小程序
          </a>
        <p style="border: none"></p>
        <p style="border: none"></p>
      </div>

      <div class="sonp-section sonp-small" id="finale">
        <p>
          <a href="https://github.com/zd18189282382/azone-phone" target="_blank">GitHub</a>
          <a href="http://www.mobiletrain.org/" target="_blank">支持</a>
          <a href="" target="_blank">友情链接</a>
          <a href="https://github.com/zd18189282382/azone-phone" target="_blank">案例</a>
          <a href="http://127.0.0.1:8080/#/team" target="_blank">关注我们</a>
        </p>
        <p>Azone-UI is open source and released according to vue2.0.</p>
        <p>Copyright &copy; 2018 myron</p>
      </div>

    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import Public from '../assets/css/public.css';
  import headers from "./headers";
  export default {
    name: "profile",
    components: {Public,headers},
    mounted(){

      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = '../../static/js/sonpScroll.js';
      document.body.appendChild(s);

      const s1 = document.createElement('script');
      s1.type = 'text/javascript';
      s1.src = '../../static/js/profile.js';
      document.body.appendChild(s1);

    }
  }
</script>



<style scoped>
  @import '../assets/css/pro-htmleaf-demo.css';
  @import '../assets/css/pro-normalize.css';

  .cont{
    background-color:rgba(92,162,92,0.8);
    overflow: hidden;
    position: relative;
  }
  .hd{
    width:100%;
    padding:0 7%;
    height:60px;
    line-height: 60px;
    background: #fff;
    border-bottom:1px solid #eee;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 10;
  }
  .hd .inx{
    display: flex;
    align-items: center;
  }
  .hd img{
    width:40px;
    height:40px;
  }
  .hd h4{
    font-size:20px;
    margin-left: 20px;
    margin-right: 50px;
  }
  .hd p a{
    font-size:16px;
    color:#666666;
    padding:0 10px;
  }
  .hd p:nth-of-type(2){
    position: absolute;
    right:7%;
    top:0px;
  }
  #first p{
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 37px;
    padding: 60px;
  }

  #second{
    background-color:rgba(92,162,92,0.8);
    background-image: url("../../static/images/bj3.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  #second p{
    font-size: 40px;
    color: #FFF;
    padding-left: 24%;
    font-family: Helvetica, Arial, sans-serif;
    padding-top: 60px;
    border-bottom: 1px dashed #FFF;
    width: 550px;
    cursor: pointer;
  }

  .left{
    width:100%;
    margin:50px auto 0;
    color:#fff;
    padding-top:50px;
    padding-bottom: 70px;
    text-align: center;
  }
  .left h1{
    color:#fff;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .left li{
    line-height: 50px;
  }
  .left li span{
    font-weight: 600;
    font-size:24px;
    color:#f8dba5;
  }
  #finale{
    text-align: center;
    color:#fff;
    padding:60px 0;
    font-size:14px;
  }
  #finale p{
    line-height:30px;
  }
  #finale p a:hover{
    text-decoration: underline;
  }
</style>

