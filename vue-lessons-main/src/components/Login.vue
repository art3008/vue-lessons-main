<template>
  <div class="login">
    <form @submit.prevent="loginUser" v-show="!isLoading" class="form">
      <h3>Логин</h3>
      <input v-model="phone" type="text" placeholder="Номер телефона" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <p v-show="errorMessage">{{ errorMessage }}</p>
      <button>Войти</button>
    </form>
    <p v-show="isLoading">Идет загрузка</p>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      phone: '',
      password: '',
      isLoading: false,
      errorMessage: '',
    }
  },

  methods: {
    async loginUser() {
      try {
        this.errorMessage = ''
        this.isLoading = true
        const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            phone: this.phone,
            password: this.password,
          }),
          headers: {
            'Content-type': 'Application/json',
          },
        })

        const data = await response.json()

        if (response.ok) {
          return this.$emit('success', data.user)
        }

        throw new Error(data.message)
      } catch (error) {
        this.errorMessage = error
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 8px;
}

.form input {
  margin-bottom: 1rem;
}
</style>
