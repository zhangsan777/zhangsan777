<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>支持Azone-UI</h1>
    </div>
    <div class="info-side">
      <h1>支持Azone-UI</h1>
      <div class="info-side-cont">
        <p>Azone-UI是一个在MIT授权下的开源项目。它现在允许并且永远允许免费使用。 然而, 维护核心框架和所有补充包所花费的工作量是相当繁重的。随着项目规模的增长，也需要有相应的资金支持才能持续项目的维护与开发。</p>
        <p>你可以通过下列的方法来赞助 Azone-UI 的开发。</p>
      </div>
    </div>
    <div class="info-side">
      <h1>一次性赞助</h1>
      <div class="info-side-cont">
        <div class="side-weixin">
          <a href="#">微信支付</a>
          <img src="../../../static/images/erweima.png" alt="#">
        </div>
        <div>
          <a href="#">支付宝</a>
        </div>
      </div>
    </div>
    <div class="info-side">
      <h1>周期性赞助</h1>
      <div class="info-side-cont">
        <p>周期性赞助可以获得额外的回报，比如你的名字 会出现在 Azone-UI 的 GitHub 仓库和现在我们的官网中。</p>
        <p> 给我们发邮件联系赞助事宜: zd354266@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightAzfour"
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
    position: relative;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side-cont img{
    width: 150px;
    height: 150px;
    position: absolute;
    top: -50px;
    left: 100px;
    display: none;
  }
  .info-side-cont p,.header-cont p{
    background-color: hsla(0,0%,100%,.9);
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side-cont a{
    background-color: hsla(0,0%,100%,.9);
    display: block;
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
    color: palevioletred;
  }
  .info-side-cont a:hover{
    text-decoration: underline;
  }
  .info-side-cont .side-weixin:hover img{
    display: block;
  }

</style>
