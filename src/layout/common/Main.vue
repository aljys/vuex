<template>
    <div class="main">
        <el-radio-group v-model="isCollapse" @change="open">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        {{count}}
    </div>
</template>

<script>
    import First from './First'
    import Content from './Content'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        computed:{
            ...mapState(['count']),
            count(){
                return this.$store.getters.count
            }
        
        },
        methods: {
            open(label) {
                this.$store.commit('open', label)
            }
        }

    }
</script>

<style scoped>
.main {
  flex: 1;
  height: 100%;
}
</style>