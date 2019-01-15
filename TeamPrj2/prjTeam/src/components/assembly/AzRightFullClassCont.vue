<template>
  <div class="box">
    <nav>
      <div class="nav_left">
        <ul class="uls">
          <li   v-for="(p,index) in see" v-on:click="addClass(index)" v-bind:class="{ lis:index==current}"><a href="javascript:;">{{p.title}}</a></li>
        </ul>
      </div>
      <div class="nav_right">
        <div class="nav_box">
          <a href="javascript:;">{{see[current].cont}}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
      name: "AzRightFullClassCont",
      data() {
        return {
          current: 0,
          see: [{
            title:"产品",
            cont:"选项一"
          }, {
            title:"产品",
            cont:"选项二"
          },{
            title:"产品",
            cont:"选项三"
          }]
        }
      },
      methods:{
        addClass:function(index){
          this.current=index;
        }
      }
    }
</script>

<style scoped>
  .box{
    width:100%;
    -webkit-flex:1;
    overflow-y:auto;
    overflow-x: hidden;
    background-color: #fff;
  }
  nav{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .nav_left{
    width: 87px;
    height: 100%;
    background-color: #f4f4f4;
    float: left;
    display: -webkit-flex;
    overflow-y: auto;
  }
  .nav_left .uls{
    display: inline-block;
    width: 87px;
    height: 100%;
  }
  .nav_left .uls li{
    display: block;
    width: 87px;
    height: 46px;
    border-bottom: 1px solid #ececec;
  }
  .nav_left .uls li a{
    display: block;
    width: 87px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 12px;
    float: left;
    color: #666666;
  }
  .uls .lis{
    display: block;
    width: 70px;
    background-color: #fff;
  }
  .nav_left .uls .lis a{
    color: #ff6600;
  }
  .nav_right{
    width: 287px;
    height: 100%;
    padding: 10px;
    overflow-y: auto;
  }
  .nav_right{
    width: 287px;
    height: 100%;
    padding: 10px;
    overflow-y: auto;
  }
  .nav_box{
    width: 270px;
    height: 100%;
    /* display: none; */
  }
  .nav_box a{
    display: block;
    width: 100%;
    height: 100px;
    font-size:20px;
  }
</style>
