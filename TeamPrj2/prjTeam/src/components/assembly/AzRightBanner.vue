<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../static/images/index_banner1.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner2.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner3.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner4.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner5.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner6.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner7.jpg" alt=""/></div>
        <div class="swiper-slide"><img src="../../../static/images/index_banner8.jpg" alt=""/></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "AzRightBanner",
      mounted() {
        new Swiper(".swiper-container", {
          direction: 'horizontal',
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      },
    }
</script>

<style scoped>
  .banner{
    width:100%;
    height: 100%;
  }
  .swiper-container{
    width:100%;
    height: 100%;
    overflow: hidden;
    position:relative;
  }
  .swiper-wrapper{
    width:100%;
    height:100%;
    display:flex;
    flex:0;
  }
  .swiper-slide{
    width:375px;
    height: 100%;
  }
  .swiper-slide img{
    width:375px;
    height: 100%;
  }
  .swiper-pagination{
    bottom: -16px;
    left: -3px;
  }
</style>
