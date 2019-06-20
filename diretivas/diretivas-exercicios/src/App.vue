<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr/>
		<p v-text="'usando diretiva v-text'"></p>
		<hr/>
		<p v-destaque:fundo="'red'">usando diretiva personalizada</p>
		<p v-destaque.atrasar="cor">usando diretiva personalizada</p>

		<p v-destaque-local:fundo="'red'">usando diretiva personalizada local</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding) {

				let atraso = 0;
				if(binding.modifiers['atrasar']) atraso = 3000

				setTimeout(() => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor =binding.value;
					} else {
						el.style.color =binding.value;
					}

				}, atraso)

			}
		}
	},
	data() {
		return {
			cor: 'blue'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
