<template>
  <div class="conterheader">
    <div class="contentheader">
      <div class="chleft">
        <img src="../../assets/img/resindexlogo.png">
        <span>为你所想 为你所乐</span>
      </div>
      <div class="chright">
        <ul>
          <router-link tag="li" to="/AzIndex" >
            <span class="iconfont">&#xe695;</span>
            <p>首页</p>
          </router-link>
          <router-link tag="li" to="/AzIndex" >
            <span class="iconfont">&#xe695;</span>
            <p>基本设置</p>
          </router-link>
          <router-link tag="li" to="/AzIndex" >
            <span class="iconfont">&#xe695;</span>
            <p>订单管理</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "AzRightManageHeaderCont"
    }
</script>

<style scoped>
  .conterheader{
    height: 47px;
    width: 100%;
  }
  .contentheader{
    height:47px ;
    background: #2a3950;
    width: 100%;
  }
  .chleft{
    padding-left: 10px;
    float: left;
    width: 20%;
    height: 47px;
  }
  .chleft img{
    width: 30px;
    height: 30px;
    margin-top: 10px;
    float: left;
  }
  .chleft span{
    font-size:18px ;
    color: #fff;
    line-height: 47px;
    float: left;
  }
  .chright{
    float: right;
    width: 80%;
    background: #374760;
    height: 47px;
    color: #fff;
  }
  .chright ul{
    overflow: hidden;
  }
  .chright ul li{
    line-height: 1;
    width: 20%;
    text-align: center;
    border-left: 1px solid #27374e;
    height: 47px;
    cursor: pointer;
    padding-left: 46px;
    float: left;
  }
  .chright ul li p{
    float: left;
    line-height: 47px;
  }
  .chright ul li span{
    float: left;
    line-height: 47px;
  }
</style>
