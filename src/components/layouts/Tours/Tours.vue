<template>
<div class="b-tours">
  <h2 class="mdc-typography--display1">
    КОНЦЕРТЫ
  </h2>
  <div class="mdc-card" v-for="concert in concerts">
    <div class="mdc-list-group surface">
      <ul class="mdc-list mdc-list--two-line">
        <a target="_blank" :href="concert.link" class="mdc-list-item">
          <span class="mdc-list-item__start-detail">
            {{getDay(concert.date)}}
            <span class="mdc-list-item__start-detail-month">
              {{getMonth(concert.date)}}
            </span>
          </span>
          <span class="mdc-list-item__text">{{concert.city}}
            <span class="mdc-list-item__text__secondary" v-if="concert.place">
              <icon id="place" :width="14" style="margin-bottom: -2px"></icon>
              {{concert.place}}
            </span>
          </span>
          <icon id="info" :width="24" class="mdc-list-item__end-detail hidden-xs-down"></icon>
        </a>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

export default {
  data: () => ({
    concerts: [
      { date: '15.12', city: 'РЯЗАНЬ', link: 'https://vk.com/animalzrzn', place: 'RAZ DVA BAR' },
      { date: '16.12', city: 'ТВЕРЬ', link: 'https://vk.com/animaljazz_tver', place: 'Милле' },
      { date: '23.12', city: 'ПЕНЗА', link: 'https://vk.com/animal_djazz', place: 'ККЗ Пенза' },
      { date: '27.01', place: 'СУРГУТ', link: 'https://vk.com/atmosferasurgut', city: 'АТМОСФЕРА' },
      { date: '08.02', city: 'ИЖЕВСК', link: 'https://vk.com/atmosferasurgut', place: 'Пинта Бар' },
      { date: '22.02', city: 'ВОРОНЕЖ', link: 'https://vk.com/atmosferasurgut', place: 'STATION MIR' },
      { date: '?.?', city: 'ДОБРОФЕСТ', link: 'https://vk.com/atmosferasurgut', place: '' },
      { date: '?.?', city: 'ЧАРТОВА ДЮЖИНА', link: 'https://vk.com/atmosferasurgut', place: '' },
    ],
    months,
  }),
  methods: {
    getDay(str) {
      const [day] = str.split(/\.|,/);
      return day;
    },
    getMonth(str) {
      const [, month] = str.split(/\.|,/);
      return this.months[month - 1];
    },
  },
};
</script>
