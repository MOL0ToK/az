<template>
<transition name="fade-out-in" mode="out-in">
  <div id="app-0" v-if="!isClosed" class="mdc-typography">
    <project-header></project-header>
    <navbar></navbar>
    <main class="l-main">
      <div class="row no-gutters">
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
      </div>
    </main>
    <project-footer></project-footer>
  </div>
</transition>
</template>

<script>
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
  data: () => ({
    isClosed: false,
  }),
  methods: {
    destroy() {
      this.isClosed = true;
    },
  },
};
</script>

<style lang="scss" src="%/styles/_application.scss"></style>
