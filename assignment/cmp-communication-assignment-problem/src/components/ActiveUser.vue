<template>
  <section>
    <header><h2 style="padding:20px;margin-left:25px;">{{ username }}</h2></header>
    <h3>{{ userage }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },

    userage: {
      type: Number,
      required: true
    }
  }
};
</script>
