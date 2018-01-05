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
import axios from 'axios';
import mdcAutoInit from '@material/auto-init/dist/mdc.autoInit.min';

const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const POINT = /\.|,/;

export default {
  data: () => ({
    concerts: [],
    errors: [],
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
  async created() {
    try {
      const { data } = await axios.get('http://animaljazz.com/api/api_afisha.php');
      this.concerts = data;
    } catch (e) {
      this.errors.push(e);
    } finally {
      setTimeout(() => mdcAutoInit(this.$el, () => {}));
    }
  },
};
</script>
