<template>
  <div>
    <headers></headers>
    <div class="con">
      <div class="left">
        <div class="shouji">
          <img src="../../static/images/sj4.png" alt="">
          <video muted autoplay loop>
            <source src="../../static/yidong2.ogg" type="video/ogg" />
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
        name: "show",
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
.con{
  background: url("../../static/images/login_bg.jpg");
  width:100%;
  padding-top:100px;
  height:10000px;
}
.con::-webkit-scrollbar {
  display: none;
}
.cn{
  background: url("../../static/images/login_bg.jpg");
  position: absolute;
  top:60px;
  width:100%;
  height:1000px;
}
.con .left{
  width:50%;
  position: fixed;
  z-index: 15;
}
.con .left .shouji{
  width:50%;
  margin:0 auto;
  position: relative;
}
.con .left .shouji img{
  width: 100%;
  height: 100%;
  position: absolute;
}
video{
  padding: 5% 1%;
  width: 91%;
  display: block;
  margin: 0 auto;
}
.con .right{
  width:50%;
  color:#fff;
  height:380px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  top:30%;
  right:10%;
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
