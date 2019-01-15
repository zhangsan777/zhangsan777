<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>参与贡献</h1>
    </div>
    <div class="info-side">
      <h1>Azone UI Contributing Guide</h1>
      <div class="info-side-cont">
        <p>Hi! 首先感谢你使用 Azone UI。</p>
        <p>Azone UI 是一套 Material Design 风格开源组件库，旨在快速搭建页面。它基于 Vue 2.0 开发，并提供了自定义主题，充分满足可定制化的需求。</p>
        <p>Azone UI 的成长离不开大家的支持，如果你愿意为 Azone UI 贡献代码或提供建议，请阅读以下内容。</p>
      </div>
    </div>
    <div class="info-side">
      <h1>开发环境搭建</h1>
      <div class="info-side-cont">
        <h2>Hi! 首先感谢你使用 Azone UI。</h2>
        <p>首先你需要 Node.js 8+ 和 NPM 4+</p>
        <pre>
            git clone git@github.com:zd18189282382/azone-phone.git
            npm run dev
            # open http://localhost:3000
        </pre>
        <p>安装慢可以使用 yarn 搭配 taobao registry</p>
        <pre>
            npm i yarn -g
            yarn config set registry https://registry.npm.taobao.org
            yarn
            npm run dev

            # open http://localhost:3000
        </pre>
        <p>build:</p>
        <pre>
           npm run build
        </pre>
      </div>
    </div>
    <div class="info-side">
      <h1>代码规范</h1>
      <div class="info-side-cont ss">
        <p>建议使用commonjs规范</p>
      </div>
    </div>
  </div>
</template>

<script>
  import "jquery"
    export default {
        name: "AzRightAzthree",
      methods:{


      },
      mounted(){

      }
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
  .info-side-cont pre{
    background-color: hsla(0,0%,100%,.9);
    font-size: 10px;
    line-height: 20px;
    padding-left: 20px;
  }
</style>
