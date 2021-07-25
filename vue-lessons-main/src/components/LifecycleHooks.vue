<template>
    <div class="hook"> {{title}} </div>
</template>

<script>
export default {
	name: "LifecycleHooks",

	props: {
		title: String
	},

	data: () => ({
		test: "Test"
	}),

	beforeCreate() {
		// Перед тем как компонент создается
		// Ни к this, ни к HTML элементам доступа нет
		// Потому что их не существует
		console.log("BeforeCreate");
	},

	created() {
		// Компонент инициализировался
		// Все реактивные свойства доступны
		// Есть доступ к this
		console.log("Created");
	},

	beforeMount() {
		// Компонент смонтирован и НО HTML элементы НЕ нарисованы
		console.log("BeforeMount");
	},

	mounted() {
		// Компонент смонтирован и HTML элементы нарисованы
		console.log("Mounted");
	},

	beforeUpdate() {
		// Если компонент принимает props
		// И в случае, если props меняется
		// То компонент обновляется
		// Данный хук вызывается перед обновлением
		console.log("BeforeUpdate");
	},

	updated() {
		// Срабатывает после того, как компонент обновился
		console.log("Updated");
	},

	beforeDestroy() {
		// Срабатывает перед уничтожением компонента
		// Мы имеем доступ к this
		console.log("BeforeDestroy");
	},

	destroyed() {
		// Срабатывает после уничтожения компонента
		// Ни к this, ни к HTML элементам доступа нет
		console.log("destroyed");
	}
};
</script>