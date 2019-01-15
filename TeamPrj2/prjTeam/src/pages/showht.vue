<template>
  <div>
    <div class="head">
      <a class="inx" href="">
        <img src="../../static/images/logo.png" alt="">
        <h4>Azone UI</h4>
      </a>
      <p>
        <a href="http://127.0.0.1:8080/#/ask" target="_blank">提问</a>
        <a href="http://127.0.0.1:8080/#/response" target="_blank">返回</a>
      </p>
      <p>
        <router-link to="./showht">查看</router-link>
        <a href="">帮助</a>
      </p>
    </div>
    <div class="con">
      <div class="left">
        <div class="shouji">
          <img src="../../static/images/ht1.png" alt="">
          <video muted autoplay loop>
            <source src="../../static/Video2.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="right">
        <p>
          hi~ 欢迎来到AzoneUI <br/>
          最新版本：<a href="javascrip::">2.0.1</a><br/>
          欢迎下载和使用！
        </p>
      </div>
      <div class="cn"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import Headers from "./headers";
  export default {
    name: "showht",
    components: {Headers},
    mounted(){
      $(function(){
        $(".cn").animate({"top":"-10000px"},100000);
      })
      document.body.onmousewheel = function () {
        return false;
      }
    }

  }
</script>

<style scoped>
  .head{
    width:100%;
    padding:0 7%;
    height:60px;
    line-height: 60px;
    background: #fff;
    border-bottom:1px solid #eee;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
  }
  .head .inx{
    display: flex;
    align-items: center;
  }
  .head img{
    width:40px;
    height:40px;
  }
  .head h4{
    font-size:20px;
    margin-left: 20px;
    margin-right: 50px;
  }
  .head p a{
    font-size:16px;
    color:#666666;
    padding:0 10px;
  }
  .head p:nth-of-type(2){
    position: absolute;
    right:7%;
    top:0px;
  }
  .con{
    background: url("../../static/images/login_bg.jpg");
    width:100%;
    padding-top:100px;
    height:700px;
  }
  .con::-webkit-scrollbar {
    display: none;
  }
  .cn{
    background: url("../../static/images/login_bg.jpg");
    position: absolute;
    top:60px;
    width:100%;
    height:10000px;
  }
  .con .left{
    width:80%;
    position: fixed;
    z-index: 15;
  }
  .con .left .shouji{
    position: relative;
  }
  .con .left .shouji img{
    width: 100%;
    height: 146%;
    position: absolute;
  }
  video{
    width: 64%;
    display: block;
    margin: 0 auto;
    padding-top: 3.4%;
  }
  .con .right{
    width:30%;
    color:#fff;
    height:380px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    position: fixed;
    top:30%;
    right:2%;
    z-index: 15;
  }
  .con .right p{
    line-height:50px;
    font-size:24px;
  }
  .con .right p a{
    color:#fff;
    text-decoration: underline;
  }
</style>
