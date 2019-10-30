<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu /> -->
		<router-view name="menu"></router-view>

		<!-- incluindo animação no router view -->
		<!-- Nesta animação foi usada as classes de animações de https://github.com/daneden/animate.css/ -->
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view />
		</transition>
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>
// import Menu from './components/templates/Menu.vue'
export default {
	// colocado em comentário devido a inclusão da propriedade 'components:' em router.js
	// também colocado em comentário o <Menu /> acima no template
	// components: { Menu }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
