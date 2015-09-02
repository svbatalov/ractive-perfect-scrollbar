var Ps = require('perfect-scrollbar');
var Ractive = require('ractive');

require('./app.css');

module.exports = Ractive.extend({
  template: '<div class="{{class}}">{{>content}}</div>',
  oncomplete: function () {
    var el = this.find('div');
    var opts = this.get('opts');
    Ps.initialize(el, opts);

    obs_opts = {
      childList: true,
      subtree: true,
      characterData: true,
    };

    if(typeof MutationObserver === "function") {
      obs = new MutationObserver(function () {
        Ps.update(el);
      });
      obs.observe(el, obs_opts);
    } else {
      console.warn(module.exports + ': Your browser does not support MutationObserver.')
    }

    this.observe('update', function (n, o) {
      if (n) {
        Ps.update(el);
        this.set('update', false);
      }
    });

    this.on('teardown', function () {
      obs.disconnect();
      Ps.destroy(el);
    });
  },
});
