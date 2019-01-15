<template>
    <div>
      <div class="wrapper">
        <h1>PC端案例展示</h1>
      </div>

      <div id="pxs_container" class="pxs_container">
        <div class="pxs_bg">
          <div class="pxs_bg1"></div>
          <div class="pxs_bg2"></div>
          <div class="pxs_bg3"></div>
        </div>
        <div class="pxs_loading">Loading images...</div>
        <div class="pxs_slider_wrapper">
          <ul class="pxs_slider">
            <li><img src="../../static/images/pcm.png" alt="First Image" /></li>
            <li><img src="../../static/images/pcw.jpg" alt="Second Image" /></li>
            <li><img src="../../static/images/pcd.jpg" alt="Third Image" /></li>
            <li><img src="../../static/images/pcz.jpg" alt="Forth Image" /></li>
            <li><img src="../../static/images/pcb.jpg" alt="Fifth Image" /></li>
          </ul>
          <div class="pxs_navigation">
            <span class="pxs_next"></span>
            <span class="pxs_prev"></span>
          </div>
          <ul class="pxs_thumbnails">
            <li><img src="../../static/images/pcmx.png" alt="First Image" /></li>
            <li><img src="../../static/images/pcwx.png" alt="Second Image" /></li>
            <li><img src="../../static/images/pcdx.png" alt="Third Image" /></li>
            <li><img src="../../static/images/pczx.png" alt="Forth Image" /></li>
            <li><img src="../../static/images/pcbx.png" alt="Fifth Image" /></li>          </ul>
        </div>
      </div>
      <div class="footer-banner" style="width:728px; margin:30px auto"></div>
    </div>
</template>

<script>
    import $ from '../../static/js/jquery-1.11.1.min';
    import Bus from '../assets/css/bus.css'
    import Bussty from '../assets/css/bus-style.css'
    import Public from '../assets/css/public.css';
    import busc from '../../static/js/bus-cufon-yui'
    // import busC from '../../static/js/bus-ChunkFive_400.font'
    import busj from '../../static/js/bus-jquery.easing.1.3'
    import bus from '../../static/js/bus'
    import init from '../../static/js/init'
    export default {
        name: "business",
        components:{init,bus,busc,busj,Bus,Bussty,Public},
        mounted(){

        }
    }
</script>

<style scoped>

</style>
