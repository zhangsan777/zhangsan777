<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>使用</h1>
    </div>
    <div class="info-side">
      <h1>使用流程</h1>
      <div class="info-side-cont">
        <h2>按需引入</h2>
        <p>Azone-ui 支持完整引入或者根据需要引入部分组件。 我们先介绍如何完整引入 Azone-ui，后介绍部分引入 Azone-ui。</p>
      </div>
    </div>
    <div class="info-side">
      <h1>完全引入</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljs">
        <az-right-input></az-right-input>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightInput from "./AzRightInput";
    export default {
        name: "AzRightAztwo",
      components: {AzRightInput},
      data(){
          return{
            "link": "" +
              "html代码:\n" +
              "    <div class=\"inputs\">\n" +
              "        <lable>一个input标签:</lable>\n" +
              "        <input type=\"text\" placeholder=\"无声的挣扎\">\n" +
              "    </div>\n" +
              "css代码:\n" +
              "    .inputs{\n" +
              "      width: auto;\n" +
              "      height: auto;\n" +
              "      color: #212121;\n" +
              "      font-size: 14px;\n" +
              "      display: flex;\n" +
              "      }\n" +
              "    .inputs input{\n" +
              "      width: 100px;\n" +
              "      border: 1px solid #212121;\n" +
              "}"
          }
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
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
  }
  .hljs{
    -ms-word-wrap: normal;
    padding: 5px;
    overflow: auto;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    color: #3a3a3a;
  }
</style>
