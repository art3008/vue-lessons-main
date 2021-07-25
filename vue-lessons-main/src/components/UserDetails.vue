<template>
  <div class="user">
    <p>Доброе пожаловать {{ user.first_name }} {{ user.last_name }}</p>
    <ul v-if="test.length">
      <li
        v-for="element in test"
        :key="element.id"
        @click="setActive(element.id)"
        :class="{ active: element.isActive }"
      >
        Имя: {{ element.first_name }}, Фамилия: {{ element.last_name }}
      </li>
    </ul>
    <p v-else>Список пользователей пуст</p>
    <div class="loader-wrapper">
      <div class="loader" :style="{ width: percent + '%' }"></div>
    </div>
    <button @click="start">Start</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        first_name: 'Неизвестный',
        last_name: 'Неизвестный',
      }),
    },
  },

  data: () => ({
    percent: 0,
    intervalId: 0,
    test: [
      {
        first_name: 'John',
        last_name: 'West',
        id: '001',
        isActive: false,
      },
      {
        first_name: 'James',
        last_name: 'Cruz',
        id: '002',
        isActive: false,
      },
      {
        first_name: 'Cristiano',
        last_name: 'Ronaldo',
        id: '003',
        isActive: false,
      },
    ],
  }),

  methods: {
    start() {
      if (this.intervalId) {
        return
      }

      this.intervalId = setInterval(() => {
        this.percent += 2
        if (this.percent > 99) {
          clearInterval(this.intervalId)
        }
      }, 50)
    },

    setActive(id) {
      // const element = this.test.find((el) => el.id === id)
      // if (element) {
      //   element.isActive = true
      // }

      const activeEl = this.test.find((el) => el.isActive)
      if (activeEl && id === activeEl.id) {
        return
      }

      this.test.forEach((element) => {
        if (element.id === id) return (element.isActive = true)
        element.isActive = false
      })
    },
  },
}
</script>

<style>
.active {
  color: red;
  border: 1px solid black;
  margin: 10px 0;
}

.loader-wrapper {
  margin: 0 auto;
  width: 400px;
  height: 25px;
  border: 1px solid black;
  border-radius: 8px;
}

.loader {
  height: 100%;
  width: 0;
  background-color: red;
}
</style>
