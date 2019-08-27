<template>
    <div class="layout">
        <Aside />
        <Main />
    </div>
</template>

<script>
import Aside from './common/Aside'
import Main from './common/Main'
export default {
    components:{
        Aside,Main
    }
}
</script>

<style scoped>
.layout{
    width: 100%;
    height: 100%;
}
</style>