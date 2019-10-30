import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import Menu from './components/templates/Menu.vue'
import MenuAlt from './components/templates/MenuAlt.vue'

import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)         // registrando o plugin Router

// Para o uso do mode:'history' é necessário a configuração do servidor na qual você 
// estiver usando para a aplicação. Ver configuração em 
// https://router.vuejs.org/guide/essentials/history-mode.html

// Ver comentário em App.vue sobre o uso da propriedade 'components'... <router-view name="menu">
// e <router-view name="menuInferior">

// o return { x: 0, y: 1000 }  abaixo é um teste para ir até a posição definida no style margin-top: 1000px;
// em UsuarioEditar.vue para o id='rodape'

// com a definição da const abaixo, o export default foi colocado no final do script após o objeto new criado

// export default new Router({
const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // Esta função tem o papel de rolar a página para a posição onde está definido o objeto
        // no qual se deseja rolar... isso é muito útil em telas 'longas' a fim de posicionar para
        // o objeto desejado.
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            // assim vai rolar a tela até o seletor que tenha o # (hash) definido
            return { selector: to.hash }
        }
        return { x: 0, y: 0}
        // return { x: 0, y: 1000 }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        } 
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        // lembrar que a interceptação aqui dentro da rota é com beforeEnter !!!
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    // console.log('antes da rota -> usuário detalhe - router.js')
                    next()
                }},
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
    // acima no redirect, significa que se você direcionar para a url .../redirecionar, o sistema
    // irá enviar para a rota /usuario.
    // No caso do *, ou seja, qualquer outra rota não tratada pelo 'router' o sistema irá direcionar
    // para o início definido.
})

// o props: true acima diz que o parâmetro será passado via props

//--- interceptar as rotas de forma global. Aqui você incluir seus tratamentos necessários

router.beforeEach((to, from, next) => {
    // console.log('antes das rotas - global - router.js')
    // aqui abaixo o sistema só vai permitir navegar para /usuario
    // if (to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
    next()  // permitir a navegação para a rota interceptada
    // next(false)     // aborta a navegação e não direciona para o destino
})

export default router