<template>
  <div class="promo promo--image promo--effect-fadein">
    <div class="promo__wrapper promo--image__wrapper">
      <a class="promo__image-wrapper promo--image__image-wrapper" href="/[[+uri]]">
        <image-deferred v-bind:image="promo.image"></image-deferred>
      </a>
      <div class="promo__content-wrapper promo--image__content-wrapper">
        <a class="promo--image__headline" href="/[[+uri]]"><h4 class="promo__text-headline">[[+tv.promo_headline]]</h4></a>
        <a class="promo--image__subheadline" href="/[[+uri]]">
          <p class="promo__text-subheadline">[[+tv.promo_subline]]</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo-image',

    props: ['promo'],
  };
</script>

<style lang="scss">
  .promo--image {
  	width: 300px;
  }

  .promo--image__wrapper {
  	transition: all 0.1s linear;												//Don't increase animation time

  	&:hover {

  		.promo--image__headline * {
  			color: $yellow;
  		}
  	}

  	&:active {
  		opacity: 0.6;
  		transform: translateY(2px);
  	}
  }

  .promo--image__content-wrapper {
  	padding: 25px 40px;

  	> *:first-child:after {														//Horizontal line
  		content: '';
  		display: block;
  		margin-top: 25px;
  		border-bottom: 1px solid $gray1;
  	}

  	> * {
  		margin-bottom: 25px;
  	}

  	> *:last-child {
  		margin-bottom: 0;
  	}

  	@media #{phablet} {
  		padding: 20px 25px;

  		> * {
  			margin-bottom: 15px;
  		}

  		> *:first-child:after {
  			margin-top: 15px;
  		}
  	}
  }

  .promo--image__headline {
  	display: block;
  }

  .promo--image__subheadline {
  	display: block;

  	&:hover * {
  		color: $dark5;
  	}

  	@media #{medium} {															//Cool tap effect for tablets and mobiles
      	margin-left: -10px;
  		padding: 10px;

  		&:before {
  		    content: '';
      		display: block;
      		position: absolute;
      		height: 100%;
      		width: 100%;
      		left: 0;
      		top: 0;
  		}
  	}
  }
</style>
