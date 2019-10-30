<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <!-- aqui será aplicada as rotas aninhadas de usuário -->
        <router-view />
        <!-- <p><strong>Código: </strong>{{ id }} </p> -->
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    // o parâmetro 'props' foi retirado e que devido a inclusão das rotas filhas esse parâmetro
    // não será mais passado.
    // props: ['id'],
    // aqui acima estamos recebendo via props devido a definição de props: true em router.js
    // abaixo é a forma de receber o parâmetro via get no argumentos
    // data() {
    //     return {
    //         id: this.$route.params.id       // id, nome do parâmetro definido em route.js
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         // aqui parq resolver a questão de navegação entre o mesmo componente apenas
    //         // alterando o valor do parâmetro.
    //         this.id = to.params.id
    //     }
    // },
    methods: {
        irParaInicio() {
            // passa para o path e será navegado para o componente que tem o mesmo
            // this.$router.push('/')
            this.$router.push({ path: '/'})
        }
    },
}
</script>

<style>
    
</style>