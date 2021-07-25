<template>
  <div id="app">
    <button @click="isVisible"> Открыть окно </button>
  </div>

  <div class="modal_window" v-show="visible">
        <h2>Это модальное окно</h2>
        <p>Привет пользователь</p>
        <button @click="visible = !visible">Закрыть окно</button>
  </div>
  
</template>


<script>

// import TestPage from './components/TestPage.vue';

export default {
  name: "AppHeader",
  components: {
      // TestPage
  },

  data: () => ({
    visible: false
  }),

  methods: {
    isVisible() {
      this.visible = true

    }
  }
}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  & .modal_window{
    display: flex;
  flex-direction: column;
  background-color: #0f7650cf;
  color: white;
  margin: 0 auto;
  width: 300px;

    & h2,
    & input,
    & button {
      margin: 12px;
    }
  }
}


</style>
