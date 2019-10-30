<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }} </p>
    </div>
</template>

<script>
export default {
    props: ['id'],
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
}
</script>

<style>
</style>