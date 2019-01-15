<template>
  <div>
    <footer>
      <ul>
        <li>
          <img src="../../../static/images/index_footershouye.png" alt="">
          <p>首页</p>
        </li>
        <li>
          <img src="../../../static/images/index_footerss.png" alt="">
          <p>分类</p>
        </li>
        <li>
          <img src="../../../static/images/index_footerbq.png" alt="">
          <p>必抢清单</p>
        </li>
        <li>
          <img src="../../../static/images/index_footercart.png" alt="">
          <p>购物车</p>
        </li>
        <li>
          <img src="../../../static/images/index_footermy.png" alt="">
          <p>我的易购</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "AzRightFooterCont"
    }
</script>

<style scoped>
  footer{
    width:100%;
    height:49px;
    border-top: 1px solid #EEE;
    background:white;
    position:absolute;
    top:0;
  }
  footer ul{
    display:flex;
    width:100%;
    justify-content: space-around;
  }
  footer ul li{
    width:20%;
    position:relative;
  }
  footer ul li img{
    width:25px;
    height:25px;
    box-sizing: border-box;
    padding-top:6px;
    margin:0 auto;
  }
  footer ul li:first-child img{
    width:37px;
    height:37px;
    position:absolute;
    top: -13px;
    left: 19px;
  }
  footer ul li:first-child p{
    position:relative;
    bottom:-30px;
    color:#fa0;
  }
  footer ul li p{
    font-size:12px;
    color:#333;
    text-align: center;
  }
</style>
