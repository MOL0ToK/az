<template>
  <header class="header-section">
    <div class="row no-gutters">
      <!-- <div class="container"> -->
        <div class="row no-gutters">
          <div class="col-12">
            <icon class="header-section__logo d-none d-sm-block" id="az"></icon>
            <icon class="header-section__logo-mobile d-block d-sm-none" id="az"></icon>
          </div>
          <div class="col-md-3 d-none d-sm-none d-md-block">
            <span class="header-section__date">23.12</span>
            <span class="header-section__city">МОСКВА</span>
            <img src="../../../assets/adrenaline.png" alt="" class="header-section__area">
            <div onclick="window.open('https://www.concert.ru/Buy?ActionID=81307&ActionDateID=254184&Mode=WithAsyncSave')" class="header-section__button">
              купить билет
            </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <img class="header-section__men" src="../../../assets/men2.png" alt="">
          </div>
          <div class="col-md-3 d-none d-sm-none d-md-block">
            <span class="header-section__date">29.12</span>
            <span class="header-section__city">САНКТ-ПЕТЕРБУРГ</span>
            <img src="../../../assets/green-concert.png" alt="" class="header-section__area">
            <div class="header-section__button" id="radar" style="position: static;">
              купить билет
            </div>
          </div>
          <div class="col-6 offset-3">
            <img src="../../../assets/SChAST_Ya.png" alt="" class="header-section__bottom">
          </div>
          <div class="col-12 d-block d-sm-block d-md-none">
            <span class="header-section__date-mobile">23.12</span>
            <span class="header-section__city-mobile">МСК</span>
            <div onclick="window.open('https://www.concert.ru/Buy?ActionID=81307&ActionDateID=254184&Mode=WithAsyncSave')" class="header-section__button-mobile">
              купить билет
            </div>
          </div>
          <div class="col-12 d-block d-sm-block d-md-none">
            <span class="header-section__date-mobile">29.12</span>
            <span class="header-section__city-mobile" style="padding-left: 3px; padding-right: 3px;">СПБ</span>
            <div class="header-section__button-mobile align-middle" id="radar-mobile" style="position: static;">
              купить билет
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </header>
</template>
