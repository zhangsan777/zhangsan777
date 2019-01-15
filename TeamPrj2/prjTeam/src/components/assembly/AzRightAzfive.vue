<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>更新日志</h1>
    </div>
    <div class="info-side">
      <h1>0.0.1</h1>
      <div class="info-side-cont">
        <h2>Hi! 首先感谢你使用 Azone UI。</h2>
        <p>首先你需要 <a href="https://nodejs.cn">Node.js 8+</a>  和 <a href="https://www.npmjs.com">NPM 4+</a> </p>
        <p>安装慢可以使用 yarn 搭配 taobao registry</p>
      </div>
    </div>
    <div class="info-side">
      <h1>1.0.0</h1>
      <div class="info-side-cont">
        <p>查看了 <a href="http://cn.vuejs.org">vue2.0</a>  的源代码做出了一些设想</p>
      </div>
    </div>
    <div class="info-side">
      <h1>1.2.0</h1>
      <div class="info-side-cont">
        <p>1、初步建设了组件库框架，是组件库分为三部分，pc端，移动端，小程序</p>
        <p>2、模仿一些网站来实现我们的设想的一些功能</p>
      </div>
    </div>
    <div class="info-side">
    <h1>1.4.0</h1>
    <div class="info-side-cont">
      <p>1、启动移动端项目计划</p>
      <p>2、各司其职，着手分配任务</p>
      <p>3、修复用swiper如何在一个页面导入多个轮播图</p>
      <p>4、修复vuex 刷新就会不见</p>
      <p>5、修复在methods写的方法，不触发便不会执行</p>
      <p>6、修复vue引入的第三方js要刷新页面才会出效果</p>
    </div>
    </div>
    <div class="info-side">
      <h1>1.6.0</h1>
      <div class="info-side-cont">
        <p>初步建设了移动端组件库搭建，并使它们分为三部分:基础组件、菜单组件、页面及组件</p>
      </div>
    </div>
    <div class="info-side">
      <h1>1.8.0</h1>
      <div class="info-side-cont">
        <p>1、启动后台管理系统项目计划</p>
        <p>2、修复引入echarts地图和部分js效果有些许问题</p>
        <p>3、修复用首页响应有些许问题。</p>
        <p>4、修复页面数据分析有些模块和数据模型有些复杂</p>
        <p>5、修复vue引入的第三方js要刷新页面才会出效果</p>
      </div>
    </div>
    <div class="info-side">
      <h1>2.0.0</h1>
      <div class="info-side-cont">
        <p>初步建设了后台管理系统组件库搭建，并使它们分为三部分:基础组件、菜单组件、页面及组件</p>
      </div>
    </div>
    <div class="info-side">
      <h1>2.2.0</h1>
      <div class="info-side-cont">
        <p>初步建设了大数据组件库的基础组件</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightAzfive"
    }
</script>

<style scoped>
  .right-cont{
    width: 100%;
    height: 100%;
  }
  .header-cont{
    width: 100%;
    height: 68px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .header-cont h1{
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 68px;
  }
  .info-side{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .info-side h1{
    font-size: 16px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side p a{
    color: mediumvioletred;
    font-size: 10px;
    line-height: 20px;
  }
  .info-side p a:hover{
    text-decoration: underline;
  }
  .info-side-cont{
    height: auto;
    background-color: hsla(0,0%,100%,.5);
    padding: 10px;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side-cont p{
    background-color: hsla(0,0%,100%,.9);
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
  }
</style>
