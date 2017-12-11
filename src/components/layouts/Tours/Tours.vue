<template>
<div class="b-tours">
  <h2 class="mdc-typography--display1">
    КОНЦЕРТЫ
  </h2>
  <div class="mdc-card" v-for="concert in concerts">
    <div class="mdc-list-group -surface">
      <ul class="mdc-list mdc-list--two-line">
        <a target="_blank" :href="concert.link" class="mdc-list-item">
          <span class="mdc-list-item__start-detail">
            {{getDay(concert.date)}}
            <span class="mdc-list-item__start-detail-month">
              {{getMonth(concert.date)}}
            </span>
          </span>
          <span class="mdc-list-item__text">
            {{concert.city}}
            <span class="mdc-list-item__text__secondary" v-if="concert.place">
              <icon id="place" :width="14" style="margin-bottom: -2px"></icon>
              {{concert.place}}
            </span>
          </span>
          <icon id="info" :width="24" class="mdc-list-item__end-detail -hidden-xs-down"></icon>
        </a>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const POINT = /\.|,/;

const CONCERTS = [
  { date: '15.12.17', city: 'РЯЗАНЬ', link: 'https://vk.com/animalzrzn', place: 'RAZ DVA BAR' },
  { date: '16.12.17', city: 'ТВЕРЬ', link: 'https://vk.com/animaljazz_tver', place: 'Милле' },
  { date: '23.12.17', city: 'ПЕНЗА', link: 'https://vk.com/animal_djazz', place: 'ККЗ Пенза' },
  { date: '27.01.18', city: 'АТМОСФЕРА', link: 'https://vk.com/atmosferasurgut', place: 'СУРГУТ' },
  { date: '08.02.18', city: 'ИЖЕВСК', link: 'https://vk.com/animal_izh', place: 'Пинта Бар' },
  { date: '15.02.18', city: 'ЧАРТОВА ДЮЖИНА', link: 'https://vk.com/wall-28866484_2111187', place: '' },
  { date: '22.02.18', city: 'ВОРОНЕЖ', link: 'https://vk.com/animalzvrn18', place: 'STATION MIR' },
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
