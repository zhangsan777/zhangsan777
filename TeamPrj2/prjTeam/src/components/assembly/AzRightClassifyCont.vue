<template>
  <div class="classify">
    <ul>
      <li>
        <img src="../../../static/images/index_classify1.png" alt="">
        <p>手机</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify2.png" alt="">
        <p>苏宁超市</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify3.png" alt="">
        <p>生活家电</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify4.png" alt="">
        <p>苏宁拼购</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify5.gif" alt="">
        <p>母婴玩具</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify6.png" alt="">
        <p>大聚惠</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify7.png" alt="">
        <p>赚钱</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify8.png" alt="">
        <p>领云钻</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify9.png" alt="">
        <p>苏宁家电</p>
      </li>
      <li>
        <img src="../../../static/images/index_classify10.png" alt="">
        <p>分类</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "AzRightClassifyCont"
    }
</script>

<style scoped>
  .classify{
    width:100%;
    background:white;
    margin-bottom:.15rem;
  }
  .classify ul{
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .classify ul li{
    width:75px;
    height:70px;
    text-align: center;
  }
  .classify ul li img{
    width:41px;
    height:41px;
    margin:12px 17px 0 17px;
  }
  .classify ul li p{
    font-size:12px;
    line-height:22px;
  }
</style>
