<template>
    <div>
      <button>Показать окно</button>
    </div>
</template>


<script>
export default {
  name: 'Example',
  components: {

  },

  data: () => ({
    showModal: true
  }),

  methods: {
      visibleWindow() {
        this.showModal = true
      }
  }
  
  
}
</script>

<style>
  .wind_modal{
    width: 100px;
    background-color: blue;
  }



</style>