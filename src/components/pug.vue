<template lang="pug">
  div.card
    h1.col Pug - node template engine
      #container.col
        if youAreUsingPug
          p You are amazing
        else
          p Get on it!
        p.
          Pug is a terse and simple templating language with a
          strong focus on performance and powerful features.
</template>
<script>
export default {
  name: 'pug',
};
</script>
<style lang="scss" scoped>
$primary-color: #fff;
$card-color: #009688;

.card {
  border: 1px solid #ccc;
  background-color: $card-color;
}

.col {
  color: $primary-color;
}
</style>
