<template>
  <header>
    <a class="inx" href="">
      <img src="../../static/images/logo.png" alt="">
      <h4>Azone UI</h4>
    </a>
    <p>
        <a href="http://127.0.0.1:8080/#/ask" target="_blank">提问</a>
        <a href="http://127.0.0.1:8080/#/profile" target="_blank">示例</a>
    </p>
    <p>
      <a href="">关于</a>
      <a href="">帮助</a>
    </p>
  </header>
</template>

<script>
    import Public from '../assets/css/public.css';
    export default {
        name: "headers",
        components:{Public}
    }
</script>

<style scoped>
  header{
    width:100%;
    padding:0 7%;
    height:60px;
    line-height: 60px;
    background: #fff;
    border-bottom:1px solid #eee;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
  }
  header .inx{
    display: flex;
    align-items: center;
  }
  header img{
    width:40px;
    height:40px;
  }
  header h4{
    font-size:20px;
    margin-left: 20px;
    margin-right: 50px;
  }
  header p a{
    font-size:16px;
    color:#666666;
    padding:0 10px;
  }
  header p:nth-of-type(2){
    position: absolute;
    right:7%;
    top:0px;
  }
</style>
