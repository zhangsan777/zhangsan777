// highlight.js  代码高亮指令
import Vue from 'vue';
import Hljs from 'highlight.js';
//monokai-sublime.css可以改样式，比如背景透明可以是lightfair.css
import 'highlight.js/styles/a11y-dark.css';

let Highlight = {};
Highlight.install = function (Vue, options) {
  // 先有数据再绑定，调用highlightA
  Vue.directive('highlightA', {
    inserted: function(el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        const item = blocks[i];
        Hljs.highlightBlock(item);
      }
    }
  });

  // 先绑定，后面会有数据更新，调用highlightB
  Vue.directive('highlightB', {
    componentUpdated: function(el) {
      let blocks = el.querySelectorAll('pre code');
      for (let i = 0; i < blocks.length; i++) {
        const item = blocks[i];
        Hljs.highlightBlock(item);
      }
    }
  });

};

export default Highlight;
