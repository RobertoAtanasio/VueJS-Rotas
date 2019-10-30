<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }} / {{ $route.params.id }} </p>

        <!-- O $route.query recebe o objeto passado como parâmetro.ver UsuarioDetalhe.vue -->
        <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }} </p>
        <p><strong>Língua: </strong>{{ $route.query.lingua }} </p>

        <!-- aqui tratamento de proteção de rotas, como checar regras de utilização daquela rota... -->
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>

        <!-- Passando fragmento Hash -->
        <div id="rodape">
            <h3>Curso VueJs - Udemy</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave (to, from, next) {
        // forma de proteger a saída do componente
        if (this.confirmou) {
            next()
        } else {
            if (confirm('Tem certez que deseja sair sem salvar?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>
    
<style>
    #rodape {
        margin-top: 1000px;
    }
</style>