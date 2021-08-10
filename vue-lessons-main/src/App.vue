<template>
  <div id="app">

	  <!-- <b-button v-b-modal.modal-1 variant="primary">Button</b-button> -->
<!-- 
		<b-modal id="modal-1" title="BootstrapVue">
			<p class="my-4">Hello from modal!</p>
		</b-modal> -->

    <h2>Мой список задач</h2>

    <div style="text-align: right; margin-bottom: 3rem">
      <b-button v-b-modal.modal-1 variant="primary" @click="showFormFunction" v-show="!showForm">Добавить задачу</b-button>

      <form v-show="showForm" @submit.prevent="addTodo" class="form">
        <b-form-input
			v-model.trim="title" type="text" placeholder="Заголовок не менее 5 символов"
			:state="title.length>=5"
			rows="3"
			id="input-state"
		>			
		</b-form-input>
        <b-form-textarea 
			v-model.trim="description" placeholder="Описание не менее 10 символов"
			:state="description.length >= 10"
			rows="3"
			id="textarea-state"
		>
		</b-form-textarea>
        <b-button variant="success" type="submit">Добавить</b-button>
        <b-button variant="danger" @click.prevent="cancel">Отмена</b-button>
      </form>
    </div>

    <div v-show="tasks.length" class="tasks">
		<Todo v-for="(todo, idx) in tasks" :key="todo.id" :todo="todo" :idx="idx" @del="deleteTodo" />
	</div>

    <div v-show="!tasks.length" class="empty">У вас нету задач, добавьте хотя бы одну</div>
  </div>
</template>

<script>
export default {
	name: "App",

	data() {
		return {
			tasks: [],
			showForm: false,
			title: "",
			description: ""
		};
	},

	created() {
		window.addEventListener('beforeunload', this.saveTodos)
		const tasks = localStorage.getItem('todos')
		if (tasks) {
			this.tasks = JSON.parse(tasks)
		}
	},

	methods: {
		saveTodos() {
			localStorage.setItem('todos', JSON.stringify(this.tasks))
		},

		deleteTodo(idx) {
			this.tasks.splice(idx, 1)
		},

		showFormFunction() {
			this.showForm = true;
		},

		addTodo() {
			if (!this.title.length || !this.description.length) {
				return alert("Нельзя оставлять поле пустым");
			}

			const task = {
				title: this.title,
				description: this.description,
				id: Date.now(),
				isFinished: false
			};

			this.tasks.push(task);
			this.title = "";
			this.description = "";
			this.showForm = false;
		},

		cancel() {
			this.title = "";
			this.description = "";
			this.showForm = false;
		}
	},
};
</script>
