<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>安装</h1>
    </div>
    <div class="info-side">
      <h1>安装流程</h1>
      <div class="info-side-cont jiru">
        <h2>npm 安装</h2>
        <p>推荐使用 npm 的方式安装，以便更好的和打包工具（<a href="https://webpack.js.org">webpack</a>）配合使用</p>
        <pre class="hljs" >
          <code>{{link}}</code>
      </pre>
        <!--<p><a href="javascript:;" @click="jia"> +++++添加</a></p>-->
      </div>
    </div>
    <div class="info-side">
      <h1>CDN</h1>
      <p>目前可以通过<a href="https://unpkg.con/muse-ui">github</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
      <pre class="hljs">
        <code>{{link1}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>大数据图表引入</h1>
      <p>大数据图表是基于 <a href="https://echarts.baidu.com">echarts</a>所开发的快速开发自建组件库</p>
      <pre class="hljs" >
          <code>{{link2}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
  import "jquery"
    export default {
        name: "AzRightAzone",
      data(){
          return{
            "link":"npm install Azone-ui -S",
            "link1":"<link rel=\"stylesheet\" href=\"https://unpkg.com/azone-ui/dist/azone-ui.css\">\n" +
              "<script src=\"https://unpkg.com/azone-ui/dist/azone-ui.js\"></ script>",
            "link2":"npm install echarts -S"
          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
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
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side p a{
    color: mediumvioletred;
    font-size: 10px;
    line-height: 20px;
  }
  .info-side p a:hover{
    text-decoration: underline;
  }
  .hljs{
    -ms-word-wrap: normal;
    padding: 5px 5px 5px 20px;
    overflow: auto;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    color: #3a3a3a;
  }

</style>
