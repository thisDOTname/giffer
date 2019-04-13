<template>
  <div :class="$style.card">
    <h2 :class="$style.white">
      CSS Module
    </h2>
    <p :class="[$style.white, $style.italics]">
      This is bold italics
    </p>
    <p :class="[$style.white, $style.bold]">
      This is bold text
    </p>
  </div>
</template>
<script>
export default {
  name: 'css-module',
};
</script>

<style module>

.card {
  border: 1px solid #ccc;
  background-color: #2196F3;
}

.white {
  color: #fff;
}

.bold {
  font-weight: bold;
}

.italics {
  font-style: italic;
}
</style>
