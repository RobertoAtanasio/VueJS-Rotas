<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código: </strong>{{ id }} </p>
        <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar X</router-link>

        <!-- chamando a rota a partir do nome da rota definido em router.js : editarUsuario 
            inclusive pode-se passar outros parâmetros -->
        <router-link tag="button" primario 
            :to="{ name: 'editarUsuario', params: { id: $route.params.id },
            query: { completo: true, lingua: 'pt'} }">Editar Y
        </router-link>

        <!-- passando o parâmetro recebido do props -->
        <!-- aqui abaixo os parâmetros em query equivalem aos parâmetros informados após a ? da url
        exemplo: http://localhost:8080/usuario/1/editar?completo=true&lingua=pt -->
        <!-- para o hash: '#rodape' funcionar é preciso a implementação da função scroll behavior.
        Ir para router.js, incluir a propriedade scrollBehavior() 
        0 #rodape abaixo indica que vai ser direcionado para a tag que tem o id="rodape" em UsuarioEditar.vue -->
        <router-link tag="button" primario 
            :to="{ name: 'editarUsuario', params: { id },
                query: { completo: true, lingua: 'pt'},
                hash: '#rodape' }">
            Editar Query
        </router-link>
        <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">
            Editar Z
        </router-link> -->
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter (to, from, next) {
        // Obs.: aqui não se pode fazer referências às propriedade definidas no componente
        // uma vez que o componente ainda não foi criado!!!
        // ...
        // console.log('antes da rota -> usuário detalhe - componente Usuariodetlahe.vue')
        // next( vm => {
        //     // aqui se faz referêmcia ao parâmetro id do props
        //     console.log('Id:', vm.id)
        // })
        next()
    }
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