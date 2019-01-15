<template>
  <div class="one">
    <div class="settingbox">
      <!--点击设置msg的值  如果msg等于0，第一个a添加cur类名，如果msg等于1，第二个a添加cur类名，以此类推。
         添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
      <div class="tab-tit">
        <a href="javascript:;" @click="msg=0" :class="{'cur':msg===0}">基本设置</a>
        <a href="javascript:;" @click="msg=1" :class="{'cur':msg===1}">消息通知</a>
        <a href="javascript:;" @click="msg=2" :class="{'cur':msg===2}">底部菜单</a>
        <a href="javascript:;" @click="msg=3" :class="{'cur':msg===3}">其他设置</a>
      </div>
      <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
          如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
      <div class="tab-con">
        <div v-show="msg===0">
          <form>
            <label><span>*</span> 网站名称</label><input type="text" placeholder="控制在25个字、50个字节以内"/><br/>
            <label><span>*</span> 网站icon图标</label><input type="text" placeholder="选择上传图标 ..."/><input class="currentfile" type="file" accept="image/jpeg,image/x-png,image/gif" /><label class="myfile">choose file</label><br/>
            <label><span>*</span> 关键词</label><input type="text" placeholder="5个左右,8汉字以内,用英文,隔开"/><br/>
            <div class="btn">
              <a href="javascript:;" class="save btns">保存</a>
              <a href="javascript:;" class="cancel btns">取消</a>
            </div>
          </form>
        </div>
        <div v-show="msg===1">
          <span>暂时没有消息哦,有消息会通过短信提示您的~</span>
        </div>
        <div v-show="msg===2">
          <span>顶部菜单课自行设置~</span>
        </div>
        <div v-show="msg===3" class="threediv">
          <label class="verticalalign"><span>*</span> 屏蔽词</label><textarea></textarea>
          <div class="btn">
            <a href="javascript:;" class="save btns">保存</a>
            <a href="javascript:;" class="cancel btns">取消</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzRightTabCont",
      data() {
        return {
          msg: 0
        }
      }
    }
</script>

<style scoped>
  .one{
    padding: 20px 15px 60px;
    width: 80%;
    overflow-y: auto;
  }
  .one::-webkit-scrollbar{
    display: none;
  }
  .settingbox{
    width:100%;
    background: #fff;
  }
  .tab-tit{
    font-size: 0;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  .tab-tit a{
    display: inline-block;
    padding: 8px 12px;
    line-height:1;
    font-size: 14px;
    text-align: center;
    text-decoration:none;
    background-color: rgb(249, 249, 249);
    color: rgb(153, 153, 153);
    margin-right: -1px;
    z-index: 11;
    border-radius: 0px !important;
    border: 1px solid rgb(221, 221, 221);
    border-bottom: none;
  }
  .tab-tit .cur{
    color: rgb(87, 99, 115);
    background-color: rgb(255, 255, 255);
    z-index: 12;
    line-height: 16px;
    margin-top: -1px;
    border-color: rgb(76, 143, 189) rgb(197, 208, 220) transparent;
    border-top: 2px solid rgb(76, 143, 189);
  }
  .tab-con div{
    padding: 16px 12px;
  }
  form label span{
    color: red;
    margin-top: 10px;
    vertical-align: middle;
  }
  label{
    width: 100px;
    display: inline-block;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .currentfile{
    opacity: 0;
    position: absolute;
    z-index: 999;
    margin-left: 20px;
  }
  .myfile{
    background:rgb(209, 91, 71) ;
    color: #fff;
    border-radius: 4px;
    padding:5px;
    text-align: center;
    margin-left: 20px;
  }
  input{
    width: 39%;
    padding: 5px 4px;
    margin-bottom: 20px;
    border:1px solid rgb(213, 213, 213);
    outline:none;
  }
  input:focus{
    border: 1px solid rgb(245, 153, 66);
  }
  textarea{
    width: 400px;
    height: 250px;
    resize:none;
    border:1px solid rgb(213, 213, 213);
    outline: none;
    margin-bottom: 15px;
  }
  textarea:focus{
    border: 1px solid rgb(245, 153, 66);
  }
  .verticalalign{
    vertical-align: top;
  }
  .btn{
    width: 80%;
    color: #fff;
    margin-left: 200px;
  }
  .btns{
    display: inline-block;
    font-family: "Microsoft YaHei";
    cursor: pointer;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px !important;
    background-image: none !important;
    box-shadow: none !important;
    padding: 3px 10px;
    border-width: 5px;
    border-style: solid;
    border-image: initial;
    transition: all 0.15s ease 0s;
    border-radius: 3px;
    color: #fff;
  }
  .save{
    background-color: rgb(66, 139, 202);
    border-color: rgb(66, 139, 202);
  }
  .save:hover{
    background-color: rgb(27, 106, 170);
    border-color: rgb(66, 139, 202);
  }
  .cancel{
    background-color: rgb(171, 186, 195);
    border-color: rgb(171, 186, 195);
  }
  .cancel:hover{
    background-color: rgb(139, 154, 163);
    border-color: rgb(171, 186, 195);
  }
  .verticalalign span{
    color: red;
    vertical-align: middle;
  }
  .threediv textarea{
    width:750px ;
    height: 200px;
  }
</style>
