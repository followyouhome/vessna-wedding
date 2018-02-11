<template>
  <div class="module module-shared-folder" v-if="recourses">
    <div class="module__wrapper module-shared-folder__wrapper">
      <tabs class="module-shared-folder__tabs" v-if="authorized">
        <tab :name="logo.yandex">
          <div class="module-shared-folder__yandex-wrapper">
            <div class="module-shared-folder__yandex-macbook"></div>
            <h3 class="module-shared-folder__yandex-headline">Скачать через Яндекс</h3>
            <p class="module-shared-folder__yandex-subline">Папка Яндекс.Диска выглядит так же, как обычная папка на компьютере. Вы можете скачать напрямую с этого сервиса, либо добавить эту папку в свой профиль.</p>
            <a class="module-shared-folder__yandex-button is-download" :href="recourses" target="_blank">Скачать</a>
          </div>
        </tab>
        <!-- <tab :name="logo.google">
          <iframe src="https://drive.google.com/embeddedfolderview?id=0Bw_AFjU52L_BMjV1ME4xcm02M2c#grid" style=""></iframe>
        </tab> -->
      </tabs>
      <div class="module-shared-folder__login" v-else>
        <div class="module-shared-folder__yandex-devices"></div>
        <h3 class="module-shared-folder__yandex-headline">Фото, видео и буклеты для клиентов</h3>
        <p class="module-shared-folder__yandex-subline">К этой коллекции у нас есть много дополнительного контента для вашего профиля Instagram, группы Вконтакте или сайта.</p>
        <button class="module-shared-folder__yandex-button is-login" href="#" @click="login">Авторизоваться для просмотра</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Tabs, Tab} from 'vue-tabs-component';

  export default {
    name: 'module-shared-folder',

    props: ['collection'],

    components: {
      'tab': Tab,
      'tabs': Tabs,
    },

    data () {
      return {
        logo: {
          yandex: `<img class="logo-yandex" src="/public/images/icons/logo-yandex-disk.svg" alt="Яндекс диск">`,
          google: `<img class="logo-google" src="/public/images/icons/logo-google-drive.svg" alt="Google Drive">`,
        },
      };
    },

    computed: {
      recourses () {
        return this.collection.collection.resources;
      },

      authorized () {
        return this.$store.state.global.user._id;
      },
    },

    methods: {
      login () {
        this.$store.commit('POPUP_SET', { popup: 'login' });
      },
    },

  };
</script>

<style lang="scss">
  @font-face {
      font-family: textbook;
      src: local('textbook');
      src: url(//yastatic.net/islands/_/FejgbLhRRLM_5llHkFzT2hXkH9Y.woff2),url(//yastatic.net/islands/_/1wUguRKdVPX0Lw2dlQ1I-l4X0hI.woff),url(//yastatic.net/islands/_/_qMiA1SBxUbup2B5BieefMuSpsk.ttf)
  }

  .module-shared-folder {
    height: 400px;
    clear: both;
    overflow: hidden;
    border: 10px solid transparent;

    @media #{$phablet} {
      height: auto;
    }
  }

  .module-shared-folder__wrapper {
    height: 100%;
    opacity: 0.5;
    background: $white;

    transition: opacity linear 0.1s;

    &:hover {
      opacity: 1;
    }
  }

  .module-shared-folder__login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid $gray1;
    background: $gray2;
  }

  .module-shared-folder__yandex-wrapper {
    padding: 20px;

    > * {
      position: relative;
      z-index: 1;
    }

    @media #{$phablet} {
      text-align: center;
    }
  }

  .module-shared-folder__yandex-macbook {
    position: absolute;
    height: 100%;
    width: 40%;
    left: 5%;
    top: 0;
    background: url("/public/images/mocks/macbook-mock-with-images.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media #{$phablet} {
      position: relative;
      width: 100%;
      height: 50px;
      left: 0;
    }
  }

  .module-shared-folder__yandex-devices {
    position: absolute;
    height: 100%;
    width: 40%;
    left: 5%;
    top: 0;
    background: url("/public/images/mocks/devices-mock-with-images.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media #{$phablet} {
      position: relative;
      width: 100%;
      height: 50px;
      left: 0;
    }
  }

  .module-shared-folder__yandex-headline {
    position: relative;
    margin-left: 50%;
    margin-bottom: 30px;
    font-family: textbook, Arial, sans-serif;
    font-size: 32px;
    font-weight: normal;

    @media #{$phablet} {
      margin: 15px 0;
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .module-shared-folder__yandex-subline {
    position: relative;
    margin-left: 50%;
    margin-bottom: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 23px;

    @media #{$phablet} {
      margin: 0 0 10px;
      text-align: center;
      font-size: 1rem;
      line-height: 1.5em;
    }
  }

  .module-shared-folder__yandex-button {
    position: relative;
    margin-left: 50%;
    display: inline-block;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    color: #000;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid #c79506;
    text-shadow: 0 1px 0 rgba(255,255,255,.36);
    background: #fee133;
    background: linear-gradient(to bottom,#ffe34a 0,#ffdb03 100%);

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    vertical-align: middle;

    &.is-download {
      &:before {
        margin-bottom: 4px;
        margin-right: 10px;
        padding: 0 8px;
        background: url('https://yastatic.net/disk/_/WDNdqqrt5Os8-BjNTLLah8m4P1M.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &.is-login {
      &:before {
        margin-bottom: 4px;
        margin-right: 10px;
        padding: 0 8px;
        background: url('https://yastatic.net/disk/_/IkFYiGELx7pUzcoiS3gDXgw3rGc.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      box-sizing: border-box;
      vertical-align: middle;
    }

    &:hover {
      background: linear-gradient(to bottom,#ffe86a 0,#ffe130 100%);
      box-shadow: inset 0 -0.085em 0 0 rgba(102,52,0,.2), inset 0 0 3px 0 rgba(254,255,187,.5);
    }

    @media #{$phablet} {
      margin: 0;
    }


  }

  .tabs-component {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media #{$phablet} {
      height: auto;
    }
  }

  .tabs-component-panels {
    flex: 1;
  }

  .tabs-component-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    background: $gray2;

    @media #{$phablet} {
      height: auto;
    }
  }

  .tabs-component-tabs {
    // display: flex;
    display: none; //TODO add second tab with Google Drive
  }

  .tabs-component-tab {
    padding: 10px 20px;
    list-style: none;
    box-sizing: border-box;
    background: $white;

    &.is-active {
      background: $gray2;
    }

    > * {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    @media #{$phablet} {
      width: 50%;
    }
  }

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
    border: none;
  }

  .logo-yandex {
    height: 20px;
  }

  .logo-google {
    height: 20px;
  }
</style>
