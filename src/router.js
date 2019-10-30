import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'

import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)         // registrando o plugin Router

// Para o uso do mode:'history' é necessário a configuração do servidor na qual você 
// estiver usando para a aplicação. Ver configuração em 
// https://router.vuejs.org/guide/essentials/history-mode.html

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe},
            { path: ':id/editar', component: UsuarioEditar}
        ]
    }]
})

// o props: true diz que o parâmetro será passado via props