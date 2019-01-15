<template>
  <div>
    <header>
      <img src="../../../static/images/index_feilei.png" alt=""/>
      <a href="JavaScript:;" class="sousuo">新年换新每满199减60</a>
      <a href="JavaScript:;" class="reg">登录</a>
    </header>
  </div>
</template>

<script>
    export default {
        name: "AzRightHeaderCont"
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 192, 0, 0);
    line-height: 44px;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    padding: 10px;
    z-index: 99999;
  }

  header img {
    width: 22px;
    height: 35px;
    padding-top: 6px;
  }

  header .sousuo {
    display: block;
    width: 281px;
    height: 36px;
    border-radius: 16px;
    font-size: 13px;
    color: #999;
    background: rgba(255, 255, 255, 0.8);
    margin-top: 4px;
    padding-left: 30px;
    box-sizing: border-box;
    line-height: 36px;
  }

  header .reg {
    display: block;
    font-size: 14px;
    color: #fff;
    line-height: 44px;
  }
</style>
