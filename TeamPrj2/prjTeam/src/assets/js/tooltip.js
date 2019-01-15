//面向对象JS的提示框插件
function tip() {
  class Tooltip {
    constructor(obj) {
      let defaultObj = {
        "boxDom": null,   //大DIV盒子
        "domObj": null,   //提示框盒子
        "left": 0,
        "top": 0,
        "width": "200",
        "height": "auto",
        "bgColor": 'green',    //背景色
        "fontSize": 16,    //字体大小
        "isRadius": false,   //是否圆角
        "color": "pink",     //字体颜色
        "title": "我是默认标题..."    //默认标题
      }
      for (let key in obj) {
        obj[key] && (defaultObj[key] = obj[key]);    //逻辑短路
      }
      for (let key in defaultObj) {
        this[key] = defaultObj[key];
      }
      this.createUI();
      this.createEvent();
    }

    createUI() {
      this.boxDom.style.position = "relative";    //因为你在CSS中没有写，所以这里必须加上
      this.domObj = document.createElement('div');
      this.domObj.style.cssText = "position: absolute; display: none; padding: 8px;";
      this.domObj.style.width = this.width + 'px';
      this.domObj.style.height = this.height + 'px';
      this.domObj.style.backgroundColor = this.bgColor;
//		this.domObj.style.zIndex = 3;
      this.domObj.style.left = this.left + 'px';
      this.domObj.style.top = this.top + 'px';
      this.domObj.style.fontSize = this.fontSize + 'px';
      this.domObj.style.color = this.color;
      if (this.isRadius == true) {
        this.domObj.style.borderRadius = '6px';
      }
      this.domObj.innerHTML = this.title;   //赋值
      this.boxDom.appendChild(this.domObj);
    }

    createEvent() {
      this.boxDom.onmouseover = function () {
        this.domObj.style.display = "block";
      }.bind(this);
      this.boxDom.onmousemove = function (event) {
        let evt = window.event || event;
//			计算数据
        this.left = evt.pageX - this.boxDom.offsetLeft + 20;
        this.top = evt.pageY - this.boxDom.offsetTop + 20;
//			改变外观:
        this.domObj.style.left = this.left + 'px';
        this.domObj.style.top = this.top + 'px';
      }.bind(this);
      this.boxDom.onmouseout = function () {
        this.domObj.style.display = "none";
      }.bind(this);
    }
  }
  return Tooltip;
}

export {
  tip
}
















