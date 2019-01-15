<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>菜单插件</h1>
    </div>
    <div class="info-side">
      <h1>表格组件</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs" >
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-right-style-list-cont></az-right-style-list-cont>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightStyleListCont from "./AzRightStyleListCont";
    export default {
        name: "AzRightStyleList",
      components: {AzRightStyleListCont},
      data(){
        return{
          "link":"<template>\n" +
            "<div class=\"management\">\n" +
            "  <div class=\"select\">\n" +
            "    <label>每页显示条数</label>\n" +
            "    <select>\n" +
            "      <option value=\"10\">10</option>\n" +
            "      <option value=\"20\">25</option>\n" +
            "      <option value=\"30\">50</option>\n" +
            "      <option value=\"40\">100</option>\n" +
            "    </select>\n" +
            "  </div>\n" +
            "  <table>\n" +
            "    <thead>\n" +
            "    <tr>\n" +
            "      <th>ID</th>\n" +
            "      <th>排序</th>\n" +
            "      <th>栏目名称</th>\n" +
            "      <th>等级</th>\n" +
            "      <th>说明</th>\n" +
            "      <th>添加时间</th>\n" +
            "      <th>状态</th>\n" +
            "      <th>操作</th>\n" +
            "    </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "    <tr>\n" +
            "      <td>1</td>\n" +
            "      <td>1</td>\n" +
            "      <td>产品管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城产品管理,包含产品列表,品牌列表,添加产品,添加品牌,分类管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>2</td>\n" +
            "      <td>2</td>\n" +
            "      <td>图片管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城广告图片管理商城广告图片管理商城广告图片管理商城广告图片管理\t</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>3</td>\n" +
            "      <td>3</td>\n" +
            "      <td>交易管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城订单,交易信息,金额管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>4</td>\n" +
            "      <td>4</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>支付管理</td>\n" +
            "      <td>商城订单,交易信息,金额管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>5</td>\n" +
            "      <td>5</td>\n" +
            "      <td>会员管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城订单,交易信息,金额管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>6</td>\n" +
            "      <td>6</td>\n" +
            "      <td>店铺管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城订单,交易信息,金额管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <td>7</td>\n" +
            "      <td>7</td>\n" +
            "      <td>消息管理</td>\n" +
            "      <td>一级</td>\n" +
            "      <td>商城订单,交易信息,金额管理</td>\n" +
            "      <td>2016-7-23</td>\n" +
            "      <td><span class=\"already\">已启用</span></td>\n" +
            "      <td>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-success\" title=\"启用\"  @click=\"openMask\"><img src=\"../../assets/img/dui.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-info\" title=\"编辑\"  @click=\"openMask\"><img src=\"../../assets/img/resbian.png\"></a>\n" +
            "        <a href=\"javascript:;\" class=\"btn btn-xs btn-warning\" title=\"删除\"  @click=\"openMask\"><img src=\"../../assets/img/resshan.png\"></a>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "    </tbody>\n" +
            "  </table>\n" +
            "  <div class=\"NumberOfPages\">\n" +
            "    <div class=numberpages>\n" +
            "      <div>第 1 到 7 条记录，共 7 条</div>\n" +
            "    </div>\n" +
            "    <div class=\"numberpages\">\n" +
            "      <div class=\"pageright\">\n" +
            "        <ul>\n" +
            "          <li><a href=\"javascript:;\" class=\"prev\">上一页</a></li>\n" +
            "          <li><a href=\"javascript:;\" class=\"active\">1</a></li>\n" +
            "          <li><a href=\"javascript:;\" class=\"next\">下一页</a></li>\n" +
            "        </ul>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "</template>\n" +
            "\n" +
            "<script>\n" +
            "  export default {\n" +
            "    name: \"AzRightStyleListCont\",\n" +
            "    data(){\n" +
            "      return{\n" +
            "        sendVal: false,\n" +
            "      }\n" +
            "    },\n" +
            "    methods:{\n" +
            "      openMask(index){\n" +
            "        this.sendVal = true;\n" +
            "      },\n" +
            "      clickCancel(){\n" +
            "\n" +
            "      },\n" +
            "      clickDanger(){\n" +
            "\n" +
            "      },\n" +
            "      clickConfirm(){\n" +
            "\n" +
            "      },\n" +
            "      closeMask(){\n" +
            "        this.showMask = false;\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            "  }\n" +
            "  </ script>\n"

        }
        }
    }
</script>

<style scoped>
  .right-cont{
    width: 100%;
    height: 100%;
  }
  .header-cont{
    width: 100%;
    height: 68px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .header-cont h1{
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 68px;
  }
  .info-side{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .info-side h1{
    font-size: 25px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side-cont{
    height: auto;
    background-color: hsla(0,0%,100%,.5);
    padding: 10px;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
  }
  .hljs{
    -ms-word-wrap: normal;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    height:300px;
    overflow-x: hidden;
    overflow-y: scroll;
    color: #3a3a3a;
  }
  .hljsl{
    width: 100%;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
    min-height: 200px;
    _height:200px;
  }
</style>
