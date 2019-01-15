<template>
  <keep-alive>
  <div class="side-right">
      <component :is="tabView1" v-highlight-a></component>
    <div class="fixed-top">
      <a href="javascript:;" class="back-top"></a>
    </div>
  </div>
  </keep-alive>
</template>

<script>
    import $ from "jquery"
    import AzRightAzone1 from "./AzRightAzone";
    import AzRightAzone2 from "./AzRightAztwo";
    import AzRightAzone3 from "./AzRightAzthree";
    import AzRightAzone4 from "./AzRightAzfour";
    import AzRightAzone5 from "./AzRightAzfive";
    import AzRightAzone6 from "./AzRightSwiper";
    import AzRightAzone7 from "./AzRightClassify";
    import AzRightAzone8 from "./AzRightHeader";
    import AzRightAzone9 from "./AzRightFooter";
    import AzRightAzone10 from "./AzRightMultiplex";
    import AzRightAzone11 from "./AzRightFullClass";
    import AzRightAzone12 from  "./AzRightTab"
    import AzRightAzone13 from  "./AzRightManageHeader"
    import AzRightAzone14 from  "./AzRightStyleList"
    import AzRightAzone15 from  "./AzRightPopop"
    import AzRightAzone16 from  "./AzRightHistogram"
    import AzRightAzone17 from  "./AzRightMap"
    import AzRightAzone18 from  "./AzRightLineCharts"
    import AzRightAzone19 from  "./AzRightPieChart"
    import AzRightAzone20 from  "./AzRightRoseDigram"
    import AzRightAzone21 from  "./AzRightMember"
    export default {
        name: "AzAssemblyRight",
      props:["tabView1"],
      components: {AzRightAzone2, AzRightAzone1,AzRightAzone3,AzRightAzone4,AzRightAzone5,AzRightAzone6,
        AzRightAzone7,AzRightAzone8,AzRightAzone9,AzRightAzone10,AzRightAzone11,AzRightAzone12,AzRightAzone13,
        AzRightAzone14,AzRightAzone15,AzRightAzone16,AzRightAzone17,AzRightAzone18,AzRightAzone19,
        AzRightAzone20,AzRightAzone21
        },
      mounted(){
        $(".back-top")[0].onclick = function(){
           document.body.scrollTop = document.documentElement.scrollTop = 0;
           }
          window.onscroll=function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop>385){
                $(".back-top").css({
                  "display":"block"
                })
            }else {
              $(".back-top").css({
                "display":"none"
              })
            }
          }
      }
    }
</script>

<style scoped>
  .side-right{
    width: 100%;
    height: 100%;
    padding: 0 50px 20px;
    position: relative;
  }
  .fixed-top{
    position: fixed;
    top: 438px;
    z-index: 99;
    right: -1px;
    display: block;
  }
   .back-top{
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    border: 1px solid #bbb;
    margin: 2px 0 0;
    background: #bbb url("https://fanyi.bdstatic.com/static/translation/img/footer/scroll_up_f37cc5e.png") center center no-repeat;
  }
</style>
