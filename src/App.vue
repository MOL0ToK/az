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

    <div class="row no-gutters">
      <div class="container">
        <div class="row no-gutters">
          <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10">
            <press-release></press-release>
            <youtube-video></youtube-video>
          </div>
        </div>
      </div>
    </div>

    <navbar></navbar>
    <main class="main-section row no-gutters">
      <div class="container">
        <div class="row no-gutters">
          <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10">
            <tours></tours>
            <!-- <youtube-video></youtube-video> -->
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
import PressRelease from '%/components/layouts/PressRelease';

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
    PressRelease,
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

@font-face {
    font-family: 'DIN 2014 Demi';
    font-weight: 600;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-Demi.eot');
    src: url('./assets/fonts/DIN2014-Demi.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-Demi.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-Demi.woff') format('woff'),
        url('./assets/fonts/DIN2014-Demi.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014 Demi';
    font-weight: 600;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-DemiItalic.eot');
    src: url('./assets/fonts/DIN2014-DemiItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-DemiItalic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-DemiItalic.woff') format('woff'),
        url('./assets/fonts/DIN2014-DemiItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: normal;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-Italic.eot');
    src: url('./assets/fonts/DIN2014-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-Italic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-Italic.woff') format('woff'),
        url('./assets/fonts/DIN2014-Italic.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: bold;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-BoldItalic.eot');
    src: url('./assets/fonts/DIN2014-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-BoldItalic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-BoldItalic.woff') format('woff'),
        url('./assets/fonts/DIN2014-BoldItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014 Extra';
    font-weight: 200;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-ExtraLightItalic.eot');
    src: url('./assets/fonts/DIN2014-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-ExtraLightItalic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-ExtraLightItalic.woff') format('woff'),
        url('./assets/fonts/DIN2014-ExtraLightItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: bold;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-Bold.eot');
    src: url('./assets/fonts/DIN2014-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-Bold.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-Bold.woff') format('woff'),
        url('./assets/fonts/DIN2014-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: 300;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-Light.eot');
    src: url('./assets/fonts/DIN2014-Light.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-Light.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-Light.woff') format('woff'),
        url('./assets/fonts/DIN2014-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: normal;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-Regular.eot');
    src: url('./assets/fonts/DIN2014-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-Regular.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-Regular.woff') format('woff'),
        url('./assets/fonts/DIN2014-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014 Extra';
    font-weight: 800;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-ExtraBold.eot');
    src: url('./assets/fonts/DIN2014-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-ExtraBold.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-ExtraBold.woff') format('woff'),
        url('./assets/fonts/DIN2014-ExtraBold.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014 Extra';
    font-weight: 200;
    font-style: normal;

    src: url('./assets/fonts/DIN2014-ExtraLight.eot');
    src: url('./assets/fonts/DIN2014-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-ExtraLight.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-ExtraLight.woff') format('woff'),
        url('./assets/fonts/DIN2014-ExtraLight.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014 Extra';
    font-weight: 800;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-ExtraBoldItalic.eot');
    src: url('./assets/fonts/DIN2014-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-ExtraBoldItalic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-ExtraBoldItalic.woff') format('woff'),
        url('./assets/fonts/DIN2014-ExtraBoldItalic.ttf') format('truetype');
}

@font-face {
    font-family: 'DIN 2014';
    font-weight: 300;
    font-style: italic;

    src: url('./assets/fonts/DIN2014-LightItalic.eot');
    src: url('./assets/fonts/DIN2014-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/DIN2014-LightItalic.woff2') format('woff2'),
        url('./assets/fonts/DIN2014-LightItalic.woff') format('woff'),
        url('./assets/fonts/DIN2014-LightItalic.ttf') format('truetype');
}

</style>
