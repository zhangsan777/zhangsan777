<template>
  <div class="boss">
    <div id="world"></div>

    <div class="body">
      <div class="box">
        <div class="left">
          <img src="../../static/images/cn3.png" alt="">
        </div>
        <div class="right">
          <h1>Azone UI</h1>
          <h3>AzoneUI一套基于Vue.js的组件库</h3>
          <p>改变从这里出发！</p>
        </div>
        <div class="down">
          <p>当前版本：
            <i>1.7.1</i>&nbsp;&nbsp;
            <router-link to="./journal" tag="span">日志更新</router-link>
          </p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>下载量：3678</p>
          <a href="../../static/download/Azone.zip" download="Azone.zip">
            <span class="iconfont icon-xiazai1"></span>
            立即下载
          </a>
          <ul>
            <router-link to="" tag="li">
              <span class="git">
                <span class="iconfont icon-github"></span>
                GITHUB
              </span>
            </router-link>
            <li>
              <a href="http://127.0.0.1:8080/#/team" target="_blank">
                <span class="iconfont icon-team_member"></span>
                开发者社区
              </a>
            </li>
            <router-link to="./profile" tag="li">
              <span class="iconfont icon-iconmingxinganli"></span>
              查看示例
            </router-link>
            <router-link to="./assembly" tag="li">
              <span class="iconfont icon-zujian-"></span>
              组件库
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <input type="text" placeholder="Search...">
      <div class="search"></div>
    </div>
  </div>
</template>

<script>
    import Iconfont from "../assets/css/iconfont.css";
    import $ from '../../static/js/jquery';
    import Public from '../assets/css/public.css';
    import THREE from "three-js"
    export default {
        name: "index",
        components:{Iconfont,Public,THREE},
        mounted(){
          $(".git").click(function(){
            window.open("https://github.com/zd18189282382/Azoneui-phone");
          })

          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js';
          document.body.appendChild(s);

          const l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = 'https://fonts.googleapis.com/css?family=Inconsolata:700';
          document.head.appendChild(l);

        }
    }


</script>

<style scoped>
  .iconfont{
    font-size:20px;
  }
  .container {
    position: fixed;
    margin: auto;
    top: 0;
    right: 15px;
    width: 300px;
    height: 100px;
  }
  .container .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 45px;
    height: 45px;
    background: #77b16c;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
  }
  .container .search:hover {
    cursor: pointer;
  }
  .container .search::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 12px;
    right: 0;
    bottom: 0;
    left: 14px;
    width: 8px;
    height: 2px;
    background: white;
    transform: rotate(45deg);
    transition: all .5s;
  }
  .container .search::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 10px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all .5s;
  }
  .container input {
    font-family: 'Inconsolata', monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: #77b16c;
    color: white;
    text-shadow: 0 0 10px #77b16c;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 #77b16c, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
  }
  .container input:hover {
    cursor: pointer;
  }
  .container input:focus {
    width: 300px;
    opacity: 1;
    cursor: text;
  }
  .container input:focus ~ .search {
    right: -250px;
    background: #f8dba5;
    z-index: 6;
  }
  .container input:focus ~ .search::before {
    top: 0;
    left: 0;
    width: 25px;
  }
  .container input:focus ~ .search::after {
    top: 0;
    left: 0;
    width: 25px;
    height: 2px;
    border: none;
    background: white;
    border-radius: 0%;
    transform: rotate(-45deg);
  }
  .container input::placeholder {
    color: white;
    opacity: 0.5;
    font-weight: bolder;
  }
  #world {
    position: absolute;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(#e4e0ba, #f7d9aa);
  }
  .boss{
    height: 100%;
  }
  .body{
    height:100%;

    /*background: #f8dba5;  !* fallback for old browsers *!*/
    /*background: -webkit-linear-gradient(to bottom, #f8dba5, #77b16c);  !* Chrome 10-25, Safari 5.1-6 *!*/
    /*background: linear-gradient(to bottom, #f8dba5, #77b16c); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/

    overflow: hidden;
    user-select: none;
  }
  .box{
    width:1000px;
    position: fixed;
    left:50%;
    top:42%;
    transform: translate(-52%,-50%);
    text-align: center;
    overflow: hidden;
  }
  .left{
    float: left;
    width:70%;
  }
  .left img{
    width:120%;
  }
  .right{
    float: left;
    color:#fff;
    margin-top:230px;
    margin-left:-40px;
    font-size:16px;
  }
  .right h1{
    font-size:48px;
    font-weight: 500;
    color:#fff;
  }
  .right h3{
    font-size:18px;
    font-weight: 500;
    color:#696969;
    margin-bottom: 20px;
  }
  .down{
    float: left;
    margin-top: -148px;
    margin-left: 13%;
    line-height: 25px;
    color:#696969;
    font-size:14px;
    display: -webkit-flex;
    align-items: center;
  }
  .down p{
    float: left;
  }
  .down p span{
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.7s;
  }
  .down p span:hover{
    color: #fff;
  }
  .down a{
    color:#696969;
    float: left;
    padding:5px 15px;
    text-decoration: none;
    border:1px solid #fff;
    margin:0 20px;
    transition: all 1s;
  }
  .down a:hover{
    border-radius: 20px;
    background: #edf2f5;
    color: #000;
  }
  .down ul{
    overflow: hidden;
    float: left;
  }
  .down li{
    float: left;
    border:1px solid #fff;
    padding:0 10px;
    font-size:12px;
    line-height:20px;
    margin:0 5px;
    cursor: pointer;
    transition: all 0.7s;
  }
  .down li:hover{
    background: #edf2f5;
    color:#212121;
  }
  .down li a{
    margin:0;
    padding:0;
    border:none;
  }
</style>
