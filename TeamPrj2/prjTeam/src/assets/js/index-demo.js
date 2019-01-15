/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
function Indexdemo() {
  $(document).ready(function () {
    $('#particles').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    $('.intro').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });
}
export {
  Indexdemo
}
