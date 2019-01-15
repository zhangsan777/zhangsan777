<template>
  <!--有内容,可取消,可确定,可关闭,可拖拽的弹出层-->
  <div class="az-dialogp drag" v-drag>
    <div class="az-titlep">信息</div>
    <span class="az-setwindp">
        <a href="javascript:;" class="az-closep"><img src="../../../../assets/img/res8.png" alt=""></a>
      </span>
    <div class="az-paddingp">
      是否退款当前商品价格！
    </div>
    <div class="az-btnp">
      <a href="javascript:;" class="az-btnConfirm">确定</a>
      <a href="javascript:;" class="az-btnCancel">取消</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzPopup"
    }
</script>

<style scoped>
  @import "../../libs/theme/popup.css";
</style>
