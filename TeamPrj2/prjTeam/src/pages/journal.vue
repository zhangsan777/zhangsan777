<template>
   <div class="both">
     <a class="exit" href=""></a>
     <div class="all">
       <section class="active">
         <article>
           <h2>更新日志</h2>
           <h1>1.0.0</h1>
           <p>参考vue2.0的源代码做出了一些设想</p>
           <h1>1.2.0</h1>
           <p>1、初步建设了组件库框架，是组件库分为三部分，pc端，移动端，小程序</p>
           <p>2、模仿一些网站来实现我们的设想的一些功能</p>
           <h1>1.4.0</h1>
           <p>1、启动移动端项目计划</p>
           <p>2、各司其职，着手分配任务</p>
           <p>3、修复用swiper如何在一个页面导入多个轮播图</p>
           <p>4、修复vuex 刷新就会不见</p>
           <p>5、修复在methods写的方法，不触发便不会执行</p>
           <p>6、修复vue引入的第三方js要刷新页面才会出效果</p>
         </article>
       </section>
       <section>
         <article>
           <h1>1.6.0</h1>
           <p>初步建设了移动端组件库搭建，并使它们分为三部分:基础组件、菜单组件、页面及组件</p>
           <h1>1.8.0</h1>
           <p>1、启动后台管理系统项目计划</p>
           <p>2、修复引入echarts地图和部分js效果有些许问题</p>
           <p>3、修复用首页响应有些许问题。</p>
           <p>4、修复页面数据分析有些模块和数据模型有些复杂</p>
           <p>5、修复vue引入的第三方js要刷新页面才会出效果</p>
         </article>
       </section>
       <section>
         <article>
           <h1>2.0.0</h1>
           <p>初步建设了后台管理系统组件库搭建，并使它们分为三部分:基础组件、菜单组件、页面及组件</p>
           <h1>2.2.0</h1>
           <p>初步建设了大数据组件库的基础组件</p>
         </article>
       </section>
       <section>
         <article>
           <h1>努力更新中......</h1>
           <p>敬请期待</p>
         </article>
       </section>
     </div>
     <button>Again</button>
   </div>
</template>

<script>
    import Public from '../assets/css/public.css';
    export default {
        name: "journal",
        components:{Public},
        mounted(){
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = '../../static/js/journal.js';
          document.body.appendChild(s);
        }
    }
</script>

<style scoped>
  .both {
    font-family: 'Asul';
    font-size: 22px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url("../../static/images/bj4.jpg") no-repeat;
    background-size: cover;
    color:#212121;
  }
  .exit{
    width:70px;
    height:50px;
    position: fixed;
    left:40px;
    top:30px;
    background: url("../../static/images/exit.png");
    background-size:100% 100%;
  }
  mark {
    background-color: #FFFF00;
    border: 1px dashed #FFFF00;
  }

  button {
    border: none;
    color: white;
    padding: 1.25em 2em;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .all {
    width: 44em;
    position: relative;
    top: 3.5em;
    margin: 0 auto;
    max-width: calc(100vw - 6em);
    color:#fff;
  }
  article h1,article h2{
    color:#fff;
  }

  section article {
    overflow: auto;
    margin: 0;
    opacity: 0;
    -webkit-transition: 1s opacity;
    transition: 1s opacity;
  }

  h1 {
    margin-top: 15px;
    font-size:30px;
    font-weight:600;
    color:#212121;
  }
  h2{
    font-size:38px;
    font-weight:600;
    color:#212121;
  }

  section {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    top: 0;
    height: 23em;
    max-height: calc(107vh - 10em);
    background-color: white;
    border: 1px solid black;
    padding: 3.5em 1.5em 1.5em 2.5em;
    overflow: auto;
    -webkit-transition: 1.5s opacity, 1.5s -webkit-transform;
    transition: 1.5s opacity, 1.5s -webkit-transform;
    transition: 1.5s transform, 1.5s opacity;
    transition: 1.5s transform, 1.5s opacity, 1.5s -webkit-transform;
    background-color: #fafafa;
  }
  section:before {
    display: block;
    font-size: 0.65em;
    min-width: 1em;
    text-align: center;
    position: absolute;
    top: 2em;
    right: 1.5em;
    background-color: rgba(80, 11, 6, 0.4);
    color: white;
    padding: 0.3em;
    line-height: 15px;
  }

  p:first-of-type {
    margin-top: 0;
  }

  section:nth-child(1) {
    z-index: 10;
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  section:nth-child(1):before {
    content: "1";
  }
  section:nth-child(1).leave {
    -webkit-transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(2) {
    z-index: 9;
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  section:nth-child(2):before {
    content: "2";
  }
  section:nth-child(2).leave {
    -webkit-transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(3) {
    z-index: 8;
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  section:nth-child(3):before {
    content: "3";
  }
  section:nth-child(3).leave {
    -webkit-transform: rotate(3deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(3deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(4) {
    z-index: 7;
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  section:nth-child(4):before {
    content: "4";
  }
  section:nth-child(4).leave {
    -webkit-transform: rotate(-3deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-3deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(5) {
    z-index: 6;
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  section:nth-child(5):before {
    content: "5";
  }
  section:nth-child(5).leave {
    -webkit-transform: rotate(2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(6) {
    z-index: 5;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  section:nth-child(6):before {
    content: "6";
  }
  section:nth-child(6).leave {
    -webkit-transform: rotate(0deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(0deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(7) {
    z-index: 4;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  section:nth-child(7):before {
    content: "7";
  }
  section:nth-child(7).leave {
    -webkit-transform: rotate(-2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(8) {
    z-index: 3;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  section:nth-child(8):before {
    content: "8";
  }
  section:nth-child(8).leave {
    -webkit-transform: rotate(-2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-2deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background:url("../../static/images/demo.jpg");
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(9) {
    z-index: 2;
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  section:nth-child(9):before {
    content: "9";
  }
  section:nth-child(9).leave {
    -webkit-transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(-4deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
  }
  section.active article {
    opacity: 1;
  }

  section:nth-child(10) {
    z-index: 1;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  section:nth-child(10):before {
    content: "10";
  }
  section:nth-child(10).leave {
    -webkit-transform: rotate(0deg) translateY(50em) scale3d(0.6, 0.6, 1);
    transform: rotate(0deg) translateY(50em) scale3d(0.6, 0.6, 1);
    opacity: 0.3;
  }
  section.active {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background-color: #fff;
    line-height: 50px;
    width: 42em;
  }
  section.active article {
    opacity: 1;
  }

</style>
