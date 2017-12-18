<template>
<section class="concerts">
  <h2 class="mdc-typography--display1">
    КОНЦЕРТЫ
  </h2>
  <div v-for="concert in concerts" class="concert mdc-card">
    <div class="concert__container mdc-list-group mdc-ripple-surface" data-mdc-auto-init="MDCRipple">
      <ul class="mdc-list mdc-list--two-line">
        <a target="_blank" :href="concert.link" class="concert__item mdc-list-item">
          <span class="concert__date mdc-list-item__start-detail">
            {{getDay(concert.date)}}
            <span class="concert__month">
              {{getMonth(concert.date)}}
            </span>
          </span>
          <span class="mdc-list-item__text">
            {{concert.city}}
            <span class="mdc-list-item__secondary-text" v-if="concert.place">
              <icon id="place" :width="14" style="margin-bottom: -2px"></icon>
              {{concert.place}}
            </span>
          </span>
          <icon id="info" :width="24" class="mdc-list-item__end-detail hidden-xs-down"></icon>
        </a>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const POINT = /\.|,/;

const CONCERTS = [
  { date: '27.01.18', city: 'СУРГУТ', link: 'https://vk.com/atmosferasurgut', place: 'Атмосфера' },
  { date: '03.02.18', city: 'ТВЕРЬ', link: 'https://vk.com/animaljazz_tver', place: 'Милле' },
  { date: '08.02.18', city: 'ИЖЕВСК', link: 'https://vk.com/animal_izh', place: 'Пинта Бар' },
  { date: '15.02.18', city: 'ЧАРТОВА ДЮЖИНА', link: 'https://vk.com/wall-28866484_2111187', place: '' },
  { date: '16.02.18', city: 'КРАСНОДАР', link: 'https://vk.com/animalz_krd', place: 'Sgt. Pepper\'s Bar' },
  { date: '17.02.18', city: 'РОСТОВ-НА-ДОНУ', link: 'https://vk.com/animalz_rnd', place: 'Бухарест' },
  { date: '22.02.18', city: 'ВОРОНЕЖ', link: 'https://vk.com/animalzvrn18', place: 'Station Mir' },
  { date: '25.02.18', city: 'ХАРЬКОВ', link: 'https://vk.com/animal_jazz_kharkiv', place: 'Корова' },
  { date: '26.02.18', city: 'КИЕВ', link: 'https://vk.com/animal_jazz_kyiv', place: 'Atlas' },
  { date: '27-29.07.18', city: 'ДОБРОФЕСТ', link: 'https://vk.com/dobrofest', place: '' },
];

export default {
  data: () => ({
    concerts: CONCERTS
      .map(concert => {
        concert.date = concert.date
          .split(POINT)
          .map(date => date.padStart(2, '0'))
          .join('.');
        return concert;
      })
      .sort((a, b) => dateToNumber(a.date) - dateToNumber(b.date)),
  }),
  methods: {
    getDay(str) {
      const [day] = str.split(POINT);
      return day;
    },
    getMonth(str) {
      const [, month] = str.split(POINT);
      return MONTHS[parseInt(month) - 1];
    },
  },
};

function dateToNumber(dateStr) {
  return parseInt(dateStr.split(POINT).reverse().join(''));
}
</script>
