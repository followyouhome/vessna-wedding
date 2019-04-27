<template>
  <div
    class="g-recaptcha"
    :data-sitekey="sitekey"
    data-callback="gcallback"
  />
</template>

<script>
  const CAPTCHA_TIMEOUT = 5000;

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
          const script = document.createElement('script');
          const timeout = setTimeout(() => {
            this.$emit('failure');
          }, CAPTCHA_TIMEOUT);

          this.$emit('init');

          script.setAttribute('id', 'g-recaptcha');
          script.setAttribute('src', this.script);

          document.head.appendChild(script);

          window.gcallback = () => {
            clearTimeout(timeout);
            this.$emit('success');
          };
        }
      }
    },
  };
</script>

<style lang="scss">
  .g-recaptcha {
    position: relative;
    margin: auto;
    width: 304px;

    & > div > div {
      position: relative;
      height: 100%;
      width: 100%;
    }

    & iframe {
      margin: auto;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
    }
  }
</style>

<story group="Atoms" name="Captcha Google">
  <captcha-google/>
</story>
