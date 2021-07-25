<template>
  <header style="margin-bottom: 1rem">
    {{ logo }}
    <button @click="showDetails">Показать подробности</button>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    logo: {
      type: String,
      required: true,
      default: 'Шапка сайта',
    },
  },

  methods: {
    showDetails() {
      this.$emit('show', true)
    },
  },
}
</script>
