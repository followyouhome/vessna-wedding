<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col cols="6" sm="6" md="3">
          <h5 class="footer__headline">О нас</h5>
          <router-link class="footer__link" v-bind:to="item.route" v-for="item in about" :key="item.name">
            {{item.name}}
          </router-link>
        </b-col>
        <b-col cols="6" sm="6" md="3">
          <h5 class="footer__headline">Бренды</h5>
          <router-link class="footer__link" v-bind:to="item.route" v-for="item in brands" :key="item.name">
            {{item.name}}
          </router-link>
        </b-col>
        <b-col cols="12" sm="12" md="5" lg="4" offset-md="1" offset-lg="2">
          <h5 class="footer__headline">Наша рассылка</h5>
          <div class="footer__subscribe">
            <p class="footer-copy">Подпишитесь, чтобы быть в курсе актуальных новостей</p>
            <simple-button text="Подписаться" popup="popup-subscribe-form"/>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="footer__copyright">© 2019 Vessna</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
  export default {
    name: 'GlobalFooter',

    data () {
      return {
        about: [{
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
            path: '/news',
          },
        }, {
          name: 'Vessna Wedding',
          route: {
            path: '/contact',
          },
        }],
      };
    },
  };
</script>

<style lang="scss">
  .footer {
      margin: 0;
      padding: 30px;
      width: 100%;
      background: $white;
      border-top: 1px solid $gray1;
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
