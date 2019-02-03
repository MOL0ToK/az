import Vue from 'vue';

import App from '%/App';
import Icon from '%/components/ui/Icon';

Vue.config.productionTip = false;

Vue.component('icon', Icon);

new Vue({
  el: '#app-0',
  template: '<App/>',
  components: { App },
});
