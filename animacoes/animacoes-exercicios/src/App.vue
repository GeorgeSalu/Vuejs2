<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr/>

		<b-button variant="primary" class="mb-4" 
					@click="exibir = !exibir">Mostrar Mensagem</b-button>

		<transition name="fade">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

	

		<hr/>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa"></div>
		</transition>
		<hr/>

		<b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
		<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
		<transition name="fade">
			<component :is="componenteSelecionado"></component>
		</transition>

		<hr/>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
		<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
			<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'


export default {
	components: {AlertaAdvertencia, AlertaInfo},
	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuario!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		beforeEnter(el) {
			this.larguraBase = 0;
			el.style,width = `${this.larguraBase}px`
		},
		enter(el, done) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + rodada * 10;
				el.style,width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		afterEnter(el) {

		},
		enterCancelled() {

		},
		beforeLeave(el) {
			this.larguraBase = 300;
			el.style,width = `${this.larguraBase}px`
		},
		leave(el, done) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + rodada * 10;
				el.style,width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		afterLeave(el) {

		},
		leaveCancelled() {
			
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}


.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 2s;
}

.fade-enter-to {
	opacity: 1;
}

.fade-leave {
	opacity: 1;
}

.fade-leave-active {
	transition: opacity 2s;
}

.fade-leave-to {
	opacity: 0;
}

@keyframes slide-in {
	from { transform: translateY(40px) }
	to { transform: translateY(0) }
}

@keyframes slide-on {
	from { transform: translateY(0) }
	to { transform: translateY(40px) }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}
</style>
