<template>
	<div class="promo promo-card">
    <div class="promo__wrapper promo-card__wrapper">
			<router-link class="promo__image-wrapper promo-card__image-wrapper" v-bind:to="item.route">
				<image-deferred v-bind:image="item.promo.image" v-if="item.promo.media == 'image'"></image-deferred>
	      <video-regular v-bind:promo="item.promo" v-if="item.promo.media == 'video'"></video-regular>
			</router-link>
      <div class="promo__content-wrapper promo-card__content-wrapper">
        <router-link class="promo-card__title" v-bind:to="item.route">
        	<h4 class="promo__text-title">
        		<span class="font-peignot" v-html="item.promo.headline"></span>
        	</h4>
        </router-link>
        <div class="promo-card__copy">
          <p class="promo__text-copy" v-html="item.promo.subline"></p>
        </div>
        <div class="promo-card__copy">
          <div class="promo__text-copy" v-html="item.promo.text"></div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import Promo from './promo';

	export default {
		name: 'PromoCard',

    extends: Promo,

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo-card {
		// max-width: 1000px;

		&:nth-child(2n) {

			.promo-card__content-wrapper {
				left: 30px;
				margin-right: 30px;
			}

			.promo-card__image-wrapper {
				float: left;
			}
		}

		&:nth-child(2n+1) {

			.promo-card__content-wrapper {
				right: 30px;
				margin-left: 30px;
			}

			.promo-card__image-wrapper {
				float: right;
			}
		}
	}

	.promo-card__wrapper {
		padding: 40px 30px;

		@media #{$tablet} {

			.promo-card__image-wrapper:nth-child(n) {
				width: 100%;
				float: none;
			}

			.promo-card__content-wrapper:nth-child(n) {
				left: 0;
				right: 0;
				margin-left: 0;
				margin-right: 0;
			}
		}
	}

	.promo-card__content-wrapper {
		display: block;
		position: relative;
		overflow: hidden;
		top: 10px;

		> *:nth-child(2):after { // Dot
			content: '\25CF';
			display: block;
			color: $dark5;
			font-size: 11px;
			line-height: 33px;
		}
	}

	.promo-card__image-wrapper {
		width: 50%;

		.image-deferred {
			width: auto;
		}
	}

	.promo-card__title {
		display: block;
		padding: 0 10%;
		vertical-align: middle;
		text-align: center;
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
	}

	.promo-card__tag {
		text-align: center;
		text-decoration: none;
	}

	.promo-card__copy {
		vertical-align: middle;
		text-align: center;
	}
</style>

<story group="Promos" name="Card">
  <promo-card
    :item="{
      promo: {
        media: 'video',
        image: {
          width: 1920,
          height: 1200,
          resource_type: 'image',
          url: 'http://vessna.wedding/images/vessna-2019-collection.jpg',
        },
        audio: {},
        video: {
          webm: {
            mimetype: 'video/webm',
            filename: 'vessna-2019-web.webm',
            size: 563288,
            etag: '\'0x8D682595FF6F5F8\'',
            container: 'vessna',
            url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.webm'
          },
          mp4: {
            mimetype: 'video/mp4',
            filename: 'vessna-2019-web.mp4',
            size: 573831,
            etag: '\'0x8D682595FADAAC3\'',
            container: 'vessna',
            url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.mp4'
          },
          ogv: {
            mimetype: 'video/ogg',
            filename: 'vessna-2019-web.ogv',
            size: 514538,
            etag: '\'0x8D682595FBDDA4F\'',
            container: 'vessna',
            url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.ogv'
          }
        },
        text: '<p>Тенденция раздельного наряда продолжает набирать обороты, так как купить шикарное платье на один раз могут себе позволить немногие.</p>\r\n<p>В то время, как раздельный наряд, состоящий из юбки и топа или корсета можно не раз обыграть в менее торжественных случаях. И именно это ценится нашими клиентами. Кружевные лифы в самом разнообразном исполнении сочетаются с длинными струящимися атласными юбками, либо с пышными юбками миди и в пол. К любому топу в этой коллекции можно предложить не менее пяти вариантов юбок различного исполнения на практически любой вкус клиента &ndash; от мини до макси, от прямых до пышных.</p>\r\n<p>Многие модели замечательно подходят не только для выпускниц, но и для их мам. И подобрать наряд в стиле &laquo;мама+дочка&raquo; - тоже замечательная возможность обратить на себя внимание.</p>',
        subline: 'Вечерняя коллекция этого года',
        headline: 'Vessna 2019'
      },
      description: '',
      route: {
        params: {
          'to': '#'
        }
      }
    }"
  />
</story>
