<template>
<div id="app-0" class="justerest-modal mdc-typography">
  <div class="closer row no-gutters">
    <div class="container -relative">
      <div class="closer__btn" onclick="
          document.querySelector('#app-0').classList.add('justerest-modal--hidden');
          document.querySelector('html').classList.add('-overflow-visible');
          document.body.classList.add('-overflow-visible');
        ">
        <icon id="close" class="closer__icon" :width="45"></icon>
      </div>
    </div>
  </div>
  <project-header></project-header>
  <navbar></navbar>
  <main class="main-section row no-gutters">
    <div class="container">
      <div class="row no-gutters">
        <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10">
          <tours></tours>
          <youtube-video></youtube-video>
          <contacts></contacts>
          <chart></chart>
        </div>
      </div>
    </div>
  </main>
  <project-footer></project-footer>
</div>
</template>

<script>
import mdcAutoInit from '@material/auto-init/dist/mdc.autoInit.min';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min';

import ProjectHeader from '%/components/layouts/Header';
import Navbar from '%/components/layouts/Navbar';
import Tours from '%/components/layouts/Tours';
import YoutubeVideo from '%/components/layouts/YoutubeVideo';
import Contacts from '%/components/layouts/Contacts';
import Chart from '%/components/layouts/Chart';
import ProjectFooter from '%/components/layouts/Footer';

export default {
  name: 'app',
  components: {
    ProjectHeader,
    Navbar,
    Tours,
    YoutubeVideo,
    Contacts,
    Chart,
    ProjectFooter,
  },
  mounted() {
    mdcAutoInit.register('MDCRipple', MDCRipple);
    mdcAutoInit(this.$el, () => {});
  },
};
</script>

<style lang="scss" src="%/styles/_application.scss"></style>
