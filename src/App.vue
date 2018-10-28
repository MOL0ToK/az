<template>
  <div id="app-0" class="justerest-modal mdc-typography">
    <div class="closer row no-gutters">
      <div class="container relative">
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
};
</script>

<style lang="scss" src="%/styles/_application.scss"></style>
<style lang="scss">

@font-face {
    font-family: 'HeliosCond';
    font-weight: bold;
    font-style: normal;

    src: url('./assets/fonts/HeliosCond-Bold.eot');
    src: local('HeliosCond Bold'), local('HeliosCond-Bold'),
        url('./assets/fonts/HeliosCond-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/HeliosCond-Bold.woff') format('woff'),
        url('./assets/fonts/HeliosCond-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'HeliosCond';
    src: url('./assets/fonts/HeliosCond-Bold-Italic.eot');
    src: local('HeliosCond Bold Italic'), local('HeliosCond-Bold-Italic'),
        url('./assets/fonts/HeliosCond-Bold-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/HeliosCond-Bold-Italic.woff') format('woff'),
        url('./assets/fonts/HeliosCond-Bold-Italic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'HeliosCond';
    src: url('./assets/fonts/HeliosCond-Italic.eot');
    src: local('HeliosCond Italic'), local('HeliosCond-Italic'),
        url('./assets/fonts/HeliosCond-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/HeliosCond-Italic.woff') format('woff'),
        url('./assets/fonts/HeliosCond-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'HeliosCond';
    src: url('./assets/fonts/HeliosCond.eot');
    src: local('HeliosCond Regular'), local('HeliosCond'),
        url('./assets/fonts/HeliosCond.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/HeliosCond.woff') format('woff'),
        url('./assets/fonts/HeliosCond.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}



</style>
