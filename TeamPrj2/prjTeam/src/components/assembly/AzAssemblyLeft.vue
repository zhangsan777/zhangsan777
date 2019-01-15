<template>
  <div class="left-cont">
    <div class="side">
        <div class="logo">
          <img src="../../../static/images/logo.png" alt="">
          <p>Azone<b>UI</b></p>
        </div>
      <div class="nav">
        <ul class="nav-navbar">
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe697;</i>
              <span>开发者指南</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(1)"><span>安装</span></a>
              <a href="#"  @click="s1(2)"><span>使用</span></a>
              <a href="#"  @click="s1(3)"><span>参与贡献</span></a>
              <a href="#" @click="s1(4)"><span>支持Azone-UI</span></a>
              <a href="#" @click="s1(5)"><span>更新日志</span></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="nav-top">
          移动端组件
        </div>
        <ul class="nav-navbar">
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe69e;</i>
              <span>基础组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(8)"><span>顶部组件</span></a>
              <a href="#" @click="s1(9)"><span>底部组件</span></a>
            </div>
          </li>
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe69c;</i>
              <span>菜单组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(6)"><span>轮播组件</span></a>
              <a href="#" @click="s1(7)"><span>分类组件</span></a>
              <a href="#"  @click="s1(10)"><span>复用组件</span></a>
            </div>
          </li>
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe694;</i>
              <span>页面级组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(11)"><span>页面级分类组件</span></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="nav-top">
          pc端组件
        </div>
        <ul class="nav-navbar">
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe69e;</i>
              <span>基础组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(13)"><span>头部组件</span></a>
              <a href="#" @click="s1(21)"><span>记录管理组件</span></a>
            </div>
          </li>
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe69c;</i>
              <span>菜单组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(14)"><span>表格组件</span></a>
              <a href="#" @click="s1(15)"><span>弹出框组件</span></a>
            </div>
          </li>
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe694;</i>
              <span>页面级组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(12)"><span>页面级切换组件</span></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="nav-top">
         大数据组件
        </div>
        <ul class="nav-navbar">
          <li  class="li-i17">
            <a href="javascript:void(0);">
              <i class="iconfont">&#xe694;</i>
              <span>基础组件</span>
              <p>></p>
            </a>
            <div class="nav-i17">
              <a href="#" @click="s1(16)"><span>柱状图</span></a>
              <a href="#" @click="s1(17)"><span>地图组件</span></a>
              <a href="#" @click="s1(18)"><span>折线图</span></a>
              <a href="#" @click="s1(19)"><span>饼状图</span></a>
              <a href="#" @click="s1(20)"><span>玫瑰状图</span></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "AzAssemblyLeft",
         methods:{
          s1(p){
            this.$emit("events1",p)
        }
        },
        mounted(){
          $(".li-i17").each(function(i){
            $(this).click(function () {
              $(" .nav-i17").eq(i).slideToggle()
            })
          })
          $(".nav-i17").each(function(i){
            $(this).click(function () {
            return false
            })
          })

        }
    }
</script>

<style scoped>
  .side::-webkit-scrollbar {display:none}
  .left-cont{
    width: 210px;
    height: 100%;
    padding: 66px 0 40px;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    border: 0;
  }
  .side{
    width: 230px;
    height: 100%;
    padding: 66px 0 40px;
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: scroll;
    border: 0;
  }
  .logo{
    width: 230px;
    position: fixed;
    background: #8eba84;
    left: 0;
    top: 0;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    z-index: 22;
  }
  .logo img{
    width: 30px ;
    height: 30px;
    display: inline-block;
    margin-right: 15px;
  }
  .logo p{
    margin: 0;
    line-height: 46px;
    font-size: 30px;
    color: white;
  }
  .logo p b{
    font-weight: 600;
  }
  .nav{
    padding: 0;
    z-index: 999;
    display: block;
    float: left;
    width: 100%;
  }
  .nav-top{
    display: block;
    font-size: 14px;
    padding-left: 7px;
    position: relative;
    color: #fff;
    line-height: 22px;
    cursor: pointer;
    background: #8eba84;
  }
  .nav-navbar{
    width: 100%;
    float: left;
  }
  .nav-navbar li{
    float: left;
    width: 100%;
    background-color: #343a40;
  }
  .nav-navbar li a{
    padding: 19px 45px;
    color: #8f9ca3;
    line-height: 20px;
    float: left;
    width: 100%;
    position: relative;
  }
  .nav-navbar li a:hover{
    background: #30313e;
    color: #cfd8dc;
  }
  .nav-i17{
    background-color: #252632;
    width: 100%;
    float: left;
    /*display: none;*/
  }
  .nav-navbar .nav-i17 a{
    display: block;
    font-size: 14px;
    padding: 7px 15px 7px 85px;
    position: relative;
    color: #8f9ca3;
    line-height: 22px;
    cursor: pointer;
  }
  .nav-navbar li a i{
    float: left;
    font-size: 16px;
    width: 20px;
    margin: 2px 5px 0 0;
  }
  .nav-navbar li a span{
    float: left;
    line-height: 22px;
    font-size: 14px;
  }
  .nav-navbar li  a p{
    float: right;
    color: #8f9ca3;
    font-size: 10px;
  }

</style>
