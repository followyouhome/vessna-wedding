<template>
  <div class="promo promo--text [[+tv.promo_size]]">
  	<div class="promo__wrapper promo--text__wrapper">
	    [[+content]]
  	</div>
</div>
</template>

<script>
  export default {
    name: 'promo-text',

    props: ['promo']
  }
</script>

<style lang="scss">

</style>
