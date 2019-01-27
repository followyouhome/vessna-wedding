<template>
  <footer class="footer row" itemscope="" itemtype="https://schema.org/ClothingStore">
    <div class="footer__column footer__column-phones col-lg-2 col-md-4 col-md-6 col-xs-12 col-lg-offset-2">
      <ul class="footer__column-phones__list">
        <li class="footer__column-phones__list__item"><a class="footer__text-phone icon-velcom" href="tel:+375291560600" itemprop="telephone">+ 375 29 156 06 00</a>
        </li>
        <li class="footer__column-phones__list__item"><a class="footer__text-phone icon-mts" href="tel:+375298567700" itemprop="telephone">+ 375 29 856 77 00</a>
        </li>
        <li class="footer__column-phones__list__item" style="display: block;"><a class="footer__text-phone icon-envelope-o" style="font-size: 15px;" href="mailto:contact@vessna.wedding" itemprop="email"> contact@vessna.wedding</a>
        </li>
      </ul>
    </div>
    <div class="footer__column footer__column-address col-lg-2 col-md-4 col-md-6 col-xs-12 col-lg-offset-1">
      <div class="footer__column-address__content">
        <div class="footer__text-address">
          <p itemprop="name">ЧПУП "ВесснаВС"</p>
          <p itemprop="address" itemscope="" itemtype="https://schema.org/PostalAddress">
            <span itemprop="addressLocality">Беларусь, Брест</span>,
            <br>
            <span itemprop="streetAddress">ул. Васнецова 50</span>,
            <span>офис №2</span>,
            <span itemprop="postalCode">224017</span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer__column footer__column-social col-lg-2 col-md-4 col-md-6 col-xs-12 col-lg-offset-1">
      <div class="footer__column-social__content">
        <ul class="footer__text-social">
            <li class="footer__text-social__item">
              <a class="footer__text-social__item__icon icon-vimeo" target="_blank" href="//vimeo.com/vessna" itemprop="sameAs"></a>
            </li>
            <li class="footer__text-social__item">
              <a class="footer__text-social__item__icon icon-envelope-o" href="mailto:contact@vessna.wedding" itemprop="email"></a>
            </li>
        </ul>
      </div>
    </div>
    <!--<script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://mc.yandex.ru/metrika/watch.js"></script><script type="application/ld+json">
      {
        "@context" : "http://schema.org",
        "@type" : "ClothingStore",
        "name" : "Свадебный салон VESSNA",
        "description": "Монобрендовый салон VESSNA, расположенный в самом центре Минска. Чтобы купить свадебное платье в Минске у нас приветствуется предварительная запись.",
        "email" : "contact@vessna-minsk.by",
        "url" : "http:&#x2F;&#x2F;vessna-minsk.by",
        "openingHours": "Tu,Sa 11:00−19:00",
        "logo": "http:&#x2F;&#x2F;vessna-minsk.by&#x2F;assets&#x2F;images&#x2F;sitewide&#x2F;favicon-192x192.png",
        "telephone": "+375298567700",
        "paymentAccepted": "cash, credit card",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.919928",
          "longitude": "27.582690"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Минск",
          "addressRegion": "BY",
          "postalCode":"220100",
          "streetAddress": "ул. Кульман 3"
        },
        "sameAs" : [
          "//vk.com/vessnaws",
          "//facebook.com/vessnaws",
          "//plus.google.com/+Vessna-minskBy/posts",
          "//vimeo.com/vessna"
        ]
      }
    </script>-->
  </footer>
</template>

<script>
  export default {
    name: 'GlobalFooter',
  };
</script>

<style lang="scss">
  .footer {
      height: 200px;
      margin: 0;
      width: 100%;
      bottom: 0;
      overflow: hidden;
      box-sizing: border-box;
      background: #4f5458;
      text-align: center;
      font-size: 0
  }

  @media screen and (max-width:1023px) {
      .footer {
          padding: 20px 0
      }
  }

  @media screen and (max-width:767px) {
      .footer {
          position: relative;
          padding: 20px 0;
          height: auto
      }
  }

  .patternlab .footer {
      position: static
  }

  .footer__column {
      display: inline-block;
      position: relative;
      top: 40px;
      width: 33.33333333%;
      vertical-align: top
  }

  @media screen and (max-width:1023px) {
      .footer__column {
          width: 100%;
          top: 0
      }
  }

  .footer__column-address__content {
      position: relative;
      top: 20px
  }

  @media screen and (max-width:1023px) {
      .footer__column-address__content {
          top: 0
      }
  }

  .footer__column-phones__list__item {
      margin: 0 10px;
      list-style: none
  }

  @media screen and (max-width:1023px) {
      .footer__column-phones__list__item {
          display: inline-block
      }
  }

  .footer__text-phone {
      display: inline-block;
      font: 23px/2em Lato, Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      white-space: nowrap;
      -webkit-transition: -webkit-transform .05s ease-in-out;
      transition: -webkit-transform .05s ease-in-out;
      transition: transform .05s ease-in-out;
      transition: transform .05s ease-in-out, -webkit-transform .05s ease-in-out
  }

  .footer__text-phone,
  .footer__text-phone:focus,
  .footer__text-phone:hover {
      text-decoration: none;
      color: #fff
  }

  .footer__text-phone:active {
      -webkit-transform: translateY(2px);
      transform: translateY(2px)
  }

  @media screen and (max-width:767px) {
      .footer__text-phone {
          font-size: 14px;
          line-height: 2em
      }
  }

  .footer__text-address {
      font: 15px/1.2em Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      color: #fff
  }

  .footer__text-social {
      margin: 0;
      font-size: 0
  }

  .footer__text-social__item {
      display: inline-block;
      margin: 10px
  }

  .footer__text-social__item__icon {
      display: inline-block;
      font-size: 14px;
      text-decoration: none;
      color: #a2a2a2;
      -webkit-transition: color .05s ease-in-out, -webkit-transform .05s ease-in-out;
      transition: color .05s ease-in-out, -webkit-transform .05s ease-in-out;
      transition: transform .05s ease-in-out, color .05s ease-in-out;
      transition: transform .05s ease-in-out, color .05s ease-in-out, -webkit-transform .05s ease-in-out
  }

  .footer__text-social__item__icon:focus,
  .footer__text-social__item__icon:hover {
      text-decoration: none;
      color: #fff
  }

  .footer__text-social__item__icon:active {
      -webkit-transform: translateY(2px);
      transform: translateY(2px)
  }
</style>
