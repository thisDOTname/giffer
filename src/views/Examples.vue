<template>
  <div>
    <css-module></css-module>
    <pug></pug>
  </div>
</template>
<script>
/* eslint no-underscore-dangle: 0 */

import cssModule from '@/components/cssModule.vue';
import pug from '@/components/pug.vue';

export default {
  name: 'Examples',
  components: {
    cssModule,
    pug,
  },
};
</script>
