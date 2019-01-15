<template>
    <div class="inputs">
      一个input标签:
      <input type="text" placeholder="我是一个框">
    </div>
</template>

<script>
    export default {
        name: "AzRightInput"
    }
</script>

<style scoped>
    .inputs{
      width: auto;
      height: auto;
      color: #212121;
      font-size: 14px;
      display: flex;
      }
    .inputs input{
      width: 100px;
      border: 1px solid #212121;
    }
</style>
