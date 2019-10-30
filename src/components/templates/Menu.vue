<template>
<!-- como existe a / no caminho, o link 'Início' fica sempre ativo. Para exitar isso
utilizamos o parâmetro 'exact' -->
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Início</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Usuário</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>