<template>
  <div class="g-recaptcha" :data-sitekey="sitekey" data-callback="gcallback"></div>
</template>

<script>
  export default {
    name: 'CaptchaGoogle',

    data () {
      return {
        script: 'https://www.google.com/recaptcha/api.js',
        sitekey: '6Lf__kAUAAAAAAfyKZ7h_54WlKBUOrQTkvmAbhEC',
      };
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (!document.getElementById('g-recaptcha')) {
          const body = document.body;
          const script = document.createElement('script');

          script.setAttribute('id', 'g-recaptcha');
          script.setAttribute('src', this.script);

          document.head.appendChild(script);

          window.gcallback = () => {
            this.$emit('success');
          };
        }
      }
    },
  };
</script>

<style lang="scss">
  .g-recaptcha {
    margin: auto;
    width: 304px;
  }
</style>
