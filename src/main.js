import Vue from 'vue';

import App from '@/App';
import Icon from '@/components/ui/Icon';

Vue.config.productionTip = false;

Vue.component('icon', Icon);

const { firstChild } = document.body;
const appDiv = document.createElement('div');

appDiv.setAttribute('id', 'app-0');
document.body.insertBefore(appDiv, firstChild);

new Vue({
  el: '#app-0',
  template: '<App/>',
  components: { App },
});
