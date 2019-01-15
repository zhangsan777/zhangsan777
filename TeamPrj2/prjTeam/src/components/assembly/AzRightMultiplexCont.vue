<template>
  <div>
    <div class="market">
      <img src="../../../static/images/index_marketTit.png" alt="" class="marketTit">
      <ul>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
        <li>
          <p>共筑爱巢</p>
          <p>家具建材市场</p>
          <img src="../../../static/images/index_market1.jpg" alt="">
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightMultiplexCont"
    }
</script>

<style scoped>
  .market{
    width:100%;
    background:white;
    margin-bottom:15px;
  }
  .market .marketTit{
    width:100%;
  }
  .market ul{
    display:flex;
    flex-wrap: wrap;
  }
  .market ul li{
    width:33.3%;
    height:130px;
    box-sizing: border-box;
    border-bottom:1px solid #f2f2f2;
  }
  .market ul li:nth-child(3n+1){
    border-right:1px solid #f2f2f2;
  }
  .market ul li:nth-child(3n-1){
    border-right:1px solid #f2f2f2;
  }
  .market ul li p:first-child{
    margin:2.5px 0 0 10px;
    font-size:16px;
    font-weight: 800;
    color:#333;
  }
  .market ul li p:nth-child(2){
    margin:2.5px 0 0 12.5px;
    font-size:12px;
    color:#999;
  }
  .market ul li img{
    width:80px;
    height:80px;
    margin:2.5px 22px 0;
  }
</style>
