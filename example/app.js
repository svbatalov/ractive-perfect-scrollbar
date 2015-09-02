Ractive.components.Scroll = ractivePerfectScrollbar;
var app = new Ractive({
  el: '#entry',
  template: '#template',
  data: {
    scrollopts: {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    },
    list: [],
  },
  onconfig: function () {
    var list = this.get('list');
    var direction = true;
    var counter = 0;

    var timer = setInterval(function () {
      var len = list.length;
      if ( (len === 0 && !direction) || len === 50) {
        direction = !direction;
      }
      if (direction) {
        list.push('line' + (counter++));
      } else {
        list.pop();
        counter--;
      }
    }, 100);
  }
});
