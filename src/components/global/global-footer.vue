<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__cell">
        <h5 class="footer__headline">О нас</h5>
        <atom-link class="footer__link" v-bind:to="item.route" v-for="item in about" :key="item.name">
          {{item.name}}
        </atom-link>
      </div>
      <div class="footer__cell">
        <h5 class="footer__headline">Бренды</h5>
        <atom-link class="footer__link" v-bind:to="item.route" v-for="item in brands" :key="item.name">
          {{item.name}}
        </atom-link>
      </div>
      <div class="footer__cell">
        <h5 class="footer__headline">Наша рассылка</h5>
        <div class="footer__subscribe">
          <p class="footer-copy">Подпишитесь, чтобы быть в курсе актуальных новостей</p>
          <atom-button popup="popup-subscribe-form" label="Подписаться" :on="`tap:${popup}`" @click="click"/>
        </div>
      </div>
    </div>
    <div>
      <p class="footer__copyright">© {{year}} Vessna</p>
    </div>
  </footer>
</template>

<script>
  import { POPUP_SET } from '@/store/mutation-types';
  import AtomButton from '@/components/atoms/atom-button/atom-button';

  export default {
    name: 'GlobalFooter',

    components: {
      AtomButton,
    },

    data () {
      return {
        year: new Date().getFullYear(),
        popup: 'popup-subscribe-form',
        about: [{
          name: 'Главная страница',
          route: {
            path: '/',
          },
        }, {
          name: 'Новости и события',
          route: {
            path: '/news',
          },
        }, {
          name: 'Условия сотрудничества',
          route: {
            path: '/partnership',
          },
        }, {
          name: 'Контакты',
          route: {
            path: '/contact',
          },
        }],
        brands: [{
          name: 'Vessna Dress',
          route: {
            path: '/wedding-dresses',
          },
        }, {
          name: 'Vessna Wedding',
          route: {
            path: '/prom-and-party-dresses',
          },
        }],
      };
    },

    methods: {
      click () {
        this.$store.commit(POPUP_SET, {
          popup: this.popup,
        });
      },
    },
  };
</script>

<style lang="scss">
  .footer {
      margin: 0;
      padding: 30px;
      width: 100%;
      box-sizing: border-box;
      background: $white;
      border-top: 1px solid $gray1;
  }

  .footer__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;

    @media #{$phablet} {
      grid-template-columns: 1fr 1fr;
    }
  }

  .footer__cell {
    &:last-child {
      grid-column: 4 / 5;

      @media #{$phablet} {
        grid-column: 1/3;
      }
    }
  }

  .footer__subscribe {
    margin: 30px 0;
    padding: 25px;
    background: $gray1;
  }

  .footer__headline {
    margin: 1rem 0;
    letter-spacing: 0;
    text-align: left;
    font: 1.4rem/1 $RistrettoProRegular;
    color: $black;
  }

  .footer__link {
    display: block;
    margin: 1rem 0;
    text-decoration: none;
    letter-spacing: 2px;
    font: 1.2rem/1 $RistrettoProLight;
    color: $black;
  }

  .footer-copy {
    font: 1.4rem/1 $RistrettoProLight;
    letter-spacing: 1px;
    color: $black;
  }

  .footer__copyright {
    margin: 1rem 0 0;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font: 1rem/1 $RistrettoProLight;
    color: $black;
  }
</style>
