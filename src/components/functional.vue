<template functional>
  <div>{{ props.foo }}</div>
</template>
<script>
  export default {
    name: 'functional',
    props: {
      foo: {
        required: true,
        type: String
      },
    }
  }
</script>